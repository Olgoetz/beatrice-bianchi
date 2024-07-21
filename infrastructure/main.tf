terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 1.0"
    }

    github = {
      source  = "integrations/github"
      version = "~> 6.0"
    }
  }
}

resource "github_branch" "staging" {
  repository = github_repository.this.name
  branch     = "staging"
}

resource "github_branch_default" "default" {
  repository = github_repository.this.name
  branch     = github_branch.staging.branch
}

resource "github_branch" "production" {
  repository = github_repository.this.name
  branch     = "production"
}


resource "github_repository" "this" {
  name        = "beatrice-bianchi"
  description = "Website based on Next.js"
  auto_init   = true
  visibility  = "public"

}

resource "vercel_project" "this" {
  name                       = "beatrice-bianchi"
  framework                  = "nextjs"
  serverless_function_region = "fra1"

  git_repository = {
    type              = "github"
    repo              = github_repository.this.full_name
    production_branch = "production"
  }

  vercel_authentication = {
    deployment_type = "none"
  }

}

# resource "vercel_project_domain" "prod" {
#   project_id           = vercel_project.this.id
#   domain               = "beatrice-bianchi.de"
#   redirect             = vercel_project_domain.prod2.domain
#   redirect_status_code = 308
# }

# resource "vercel_project_domain" "prod2" {
#   project_id = vercel_project.this.id
#   domain     = "www.beatrice-bianchi.de"
# }


# resource "vercel_project_environment_variable" "resend" {
#   project_id = vercel_project.this.id
#   key        = "RESEND_API_KEY"
#   value      = var.RESEND_API_KEY
#   target     = ["development", "preview", "production"]
# }
