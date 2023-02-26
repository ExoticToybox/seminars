terraform {
  required_version = ">= 1.3.6"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.48.0"
    }
  }
  backend "s3" {
    bucket  = "seminars-terraform-tfstate"
    region  = "ap-northeast-1"
    profile = "seminars-terraform"
    key     = "YOURNAME.tfstate"
    encrypt = true
  }
}

provider "aws" {
  region                   = "ap-northeast-1"
  shared_credentials_files = ["~/.aws/credentials"]
  profile                  = "seminars-terraform"
}
