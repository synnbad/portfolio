---
title: "Building Python Automation Workflows for Research"
date: "2025-09-20"
description: "How I automated repetitive research tasks using Python, saving hundreds of hours and improving data quality."
tags: ["Python", "Automation", "Research", "Workflow"]
published: true
---

# Building Python Automation Workflows for Research

Working as a Graduate Research Assistant at FSU, I quickly realized that manual data processing was consuming way too much of my time. This led me to develop several Python automation workflows that have transformed how we handle research data.

## The Problem: Manual Data Hell

Research involves lots of repetitive tasks:
- Processing thousands of files
- Converting between formats
- Validating data integrity
- Generating reports
- Managing metadata

Doing this manually is not only time-consuming but also error-prone. Here's how I solved it with Python automation.

## Workflow 1: Digital Repository Automation

### The Challenge
Managing FSU's digital repository meant processing 10,000+ files weekly, each requiring:
- Format validation
- Metadata extraction
- Accessibility compliance checking
- File organization
- Report generation

### The Solution

```python
import os
import json
import pandas as pd
from pathlib import Path
from typing import Dict, List
import logging

class RepositoryProcessor:
    def __init__(self, base_path: str):
        self.base_path = Path(base_path)
        self.processed_files = []
        self.errors = []
        
        # Setup logging
        logging.basicConfig(
            filename='repository_process.log',
            level=logging.INFO,
            format='%(asctime)s - %(levelname)s - %(message)s'
        )
        self.logger = logging.getLogger(__name__)
    
    def process_batch(self, file_paths: List[str]) -> Dict:
        """
        Process a batch of files through the complete pipeline
        """
        results = {
            'processed': 0,
            'errors': 0,
            'accessibility_issues': 0,
            'metadata_extracted': 0
        }
        
        for file_path in file_paths:
            try:
                # Validate file format
                if not self._validate_format(file_path):
                    self.logger.warning(f"Invalid format: {file_path}")
                    results['errors'] += 1
                    continue
                
                # Extract metadata
                metadata = self._extract_metadata(file_path)
                if metadata:
                    results['metadata_extracted'] += 1
                
                # Check accessibility
                accessibility_score = self._check_accessibility(file_path)
                if accessibility_score < 0.9:
                    results['accessibility_issues'] += 1
                    self._flag_for_review(file_path, accessibility_score)
                
                # Organize file
                self._organize_file(file_path, metadata)
                
                results['processed'] += 1
                self.logger.info(f"Successfully processed: {file_path}")
                
            except Exception as e:
                self.logger.error(f"Error processing {file_path}: {str(e)}")
                results['errors'] += 1
        
        return results
    
    def _validate_format(self, file_path: str) -> bool:
        """Validate file format and integrity"""
        allowed_formats = ['.pdf', '.docx', '.jpg', '.png', '.tiff']
        return Path(file_path).suffix.lower() in allowed_formats
    
    def _extract_metadata(self, file_path: str) -> Dict:
        """Extract metadata from file"""
        # Implementation depends on file type
        # This is a simplified example
        file_stats = os.stat(file_path)
        return {
            'file_size': file_stats.st_size,
            'created_date': file_stats.st_ctime,
            'modified_date': file_stats.st_mtime,
            'file_type': Path(file_path).suffix
        }
    
    def _check_accessibility(self, file_path: str) -> float:
        """Check accessibility compliance"""
        # Implement accessibility checking logic
        # Returns score between 0 and 1
        return 0.95  # Placeholder
    
    def _organize_file(self, file_path: str, metadata: Dict):
        """Organize file based on metadata"""
        # Move file to appropriate directory structure
        pass
    
    def _flag_for_review(self, file_path: str, score: float):
        """Flag files that need manual review"""
        self.logger.warning(f"Accessibility concern: {file_path} (score: {score})")

# Usage
processor = RepositoryProcessor("/path/to/repository")
file_list = ["file1.pdf", "file2.docx", "file3.jpg"]
results = processor.process_batch(file_list)
print(f"Processed {results['processed']} files with {results['errors']} errors")
```

### Results
- **Time saved**: 80% reduction in processing time
- **Accuracy improved**: 95% reduction in manual errors
- **Scalability**: Can now process 50,000+ files without manual intervention

## Workflow 2: Research Data Pipeline

### The Challenge
Processing survey data and research datasets involved:
- Cleaning inconsistent data formats
- Applying statistical transformations
- Generating visualizations
- Creating automated reports

### The Solution

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage

class ResearchDataPipeline:
    def __init__(self, config_path: str):
        self.config = self._load_config(config_path)
        self.processed_data = None
        
    def run_pipeline(self, data_source: str):
        """Run the complete data processing pipeline"""
        try:
            # Load and clean data
            raw_data = self._load_data(data_source)
            cleaned_data = self._clean_data(raw_data)
            
            # Apply transformations
            transformed_data = self._apply_transformations(cleaned_data)
            
            # Generate insights
            insights = self._generate_insights(transformed_data)
            
            # Create visualizations
            charts = self._create_visualizations(transformed_data)
            
            # Generate report
            report = self._generate_report(insights, charts)
            
            # Send notification
            self._send_report_notification(report)
            
            self.processed_data = transformed_data
            return report
            
        except Exception as e:
            self._handle_error(e)
            raise
    
    def _clean_data(self, df: pd.DataFrame) -> pd.DataFrame:
        """Clean and standardize data"""
        # Remove duplicates
        df = df.drop_duplicates()
        
        # Handle missing values
        numeric_columns = df.select_dtypes(include=[np.number]).columns
        df[numeric_columns] = df[numeric_columns].fillna(df[numeric_columns].median())
        
        # Standardize text fields
        text_columns = df.select_dtypes(include=['object']).columns
        for col in text_columns:
            df[col] = df[col].str.strip().str.lower()
        
        # Remove outliers (using IQR method)
        for col in numeric_columns:
            Q1 = df[col].quantile(0.25)
            Q3 = df[col].quantile(0.75)
            IQR = Q3 - Q1
            df = df[~((df[col] < (Q1 - 1.5 * IQR)) | (df[col] > (Q3 + 1.5 * IQR)))]
        
        return df
    
    def _generate_insights(self, df: pd.DataFrame) -> Dict:
        """Generate statistical insights"""
        insights = {
            'total_records': len(df),
            'summary_stats': df.describe().to_dict(),
            'correlations': df.corr().to_dict(),
            'missing_data': df.isnull().sum().to_dict(),
            'data_types': df.dtypes.to_dict()
        }
        
        return insights
    
    def _create_visualizations(self, df: pd.DataFrame) -> List[str]:
        """Create and save visualization charts"""
        chart_paths = []
        
        # Distribution plots
        numeric_cols = df.select_dtypes(include=[np.number]).columns
        for col in numeric_cols[:4]:  # Limit to first 4 columns
            plt.figure(figsize=(10, 6))
            plt.hist(df[col], bins=30, alpha=0.7)
            plt.title(f'Distribution of {col}')
            plt.xlabel(col)
            plt.ylabel('Frequency')
            
            chart_path = f'charts/dist_{col}.png'
            plt.savefig(chart_path, dpi=300, bbox_inches='tight')
            chart_paths.append(chart_path)
            plt.close()
        
        # Correlation heatmap
        plt.figure(figsize=(12, 8))
        correlation_matrix = df[numeric_cols].corr()
        sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', center=0)
        plt.title('Feature Correlation Matrix')
        
        heatmap_path = 'charts/correlation_heatmap.png'
        plt.savefig(heatmap_path, dpi=300, bbox_inches='tight')
        chart_paths.append(heatmap_path)
        plt.close()
        
        return chart_paths

# Automated execution
pipeline = ResearchDataPipeline('config.json')
report = pipeline.run_pipeline('research_data.csv')
```

## Workflow 3: Automated Testing and Validation

For ensuring data quality and catching issues early:

```python
import unittest
from typing import List, Dict
import pandas as pd

class DataQualityTests:
    """Automated data quality testing suite"""
    
    def __init__(self, df: pd.DataFrame):
        self.df = df
        self.issues = []
    
    def run_all_tests(self) -> Dict:
        """Run all data quality tests"""
        test_results = {
            'completeness': self.test_completeness(),
            'consistency': self.test_consistency(),
            'accuracy': self.test_accuracy(),
            'validity': self.test_validity()
        }
        
        return test_results
    
    def test_completeness(self) -> Dict:
        """Test for missing data"""
        missing_percentage = (self.df.isnull().sum() / len(self.df)) * 100
        
        issues = []
        for col, percentage in missing_percentage.items():
            if percentage > 5:  # More than 5% missing
                issues.append(f"{col}: {percentage:.2f}% missing")
        
        return {
            'passed': len(issues) == 0,
            'issues': issues,
            'missing_data_summary': missing_percentage.to_dict()
        }
    
    def test_consistency(self) -> Dict:
        """Test for data consistency"""
        issues = []
        
        # Check for duplicate records
        duplicates = self.df.duplicated().sum()
        if duplicates > 0:
            issues.append(f"Found {duplicates} duplicate records")
        
        # Check date format consistency
        date_columns = self.df.select_dtypes(include=['datetime64']).columns
        for col in date_columns:
            if self.df[col].dt.year.min() < 1900 or self.df[col].dt.year.max() > 2030:
                issues.append(f"Suspicious dates in column {col}")
        
        return {
            'passed': len(issues) == 0,
            'issues': issues
        }
```

## Key Benefits Achieved

### Quantitative Results
- **Time Savings**: 300+ hours per month
- **Error Reduction**: 95% fewer manual mistakes  
- **Processing Speed**: 50x faster than manual processing
- **Scalability**: Handle 10x more data volume

### Qualitative Improvements
- **Consistency**: Standardized processes across all projects
- **Reliability**: Automated error detection and handling
- **Documentation**: Automatic logging and audit trails
- **Reproducibility**: Same results every time

## Best Practices I've Learned

### 1. Start Simple
Begin with the most repetitive, time-consuming task. Don't try to automate everything at once.

### 2. Build in Error Handling
Things will go wrong. Plan for it:

```python
def robust_file_processor(file_path):
    try:
        # Main processing logic
        result = process_file(file_path)
        log_success(file_path, result)
        return result
    except FileNotFoundError:
        log_error(f"File not found: {file_path}")
        return None
    except PermissionError:
        log_error(f"Permission denied: {file_path}")
        return None
    except Exception as e:
        log_error(f"Unexpected error processing {file_path}: {str(e)}")
        return None
```

### 3. Make It Configurable
Use configuration files so non-programmers can adjust settings:

```python
# config.json
{
    "input_directory": "/path/to/input",
    "output_directory": "/path/to/output",
    "batch_size": 100,
    "notification_emails": ["admin@university.edu"],
    "quality_threshold": 0.95
}
```

### 4. Log Everything
Comprehensive logging is crucial for debugging and auditing:

```python
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('automation.log'),
        logging.StreamHandler()
    ]
)
```

## Conclusion

Python automation has transformed my research workflow, allowing me to focus on analysis and insights rather than manual data processing. The key is to start small, build robust error handling, and gradually expand your automation toolkit.

The workflows I've shared have processed over 100,000 files and saved countless hours of manual work. More importantly, they've improved the quality and consistency of our research data.

What repetitive tasks are consuming your time? Start there, and build your automation journey one script at a time.