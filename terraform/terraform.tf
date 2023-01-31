terraform {
  required_version = ">= 1.3.6"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.48.0"
    }
  }
  backend "s3" {
    bucket  = "terraform-sample-tfstate"
    region  = "ap-northeast-1"
    profile = "afterschool-terraform"
    key     = "terraform.tfstate"
    encrypt = true
  }
}

provider "aws" {
  region                   = "ap-northeast-1"
  shared_credentials_files = ["~/.aws/credentials"]
  profile                  = "afterschool-terraform"
}
