# Define models for a restaurant application using SQLAlchemy
# Start with imports
import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, Date, Numeric
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

# Create an instance of the declarative_base
Base = declarative_base()

# Create a class for the restaurant table
class Restaurant(Base):
    __tablename__ = 'restaurant'

    # Define columns for the restaurant table
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)
    # Address
    address = Column(String(250), nullable=False)
    # Phone number
    phone = Column(String(15), nullable=False)
    

