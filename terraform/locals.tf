locals {
  project_name         = "seminars-YOURNAME"
  project_name_for_uri = replace(local.project_name, "-", "_")
  datasource_name      = "datasource_${local.project_name_for_uri}"

  dynamodb = {
    table_name = local.project_name
  }

  appsync = {
    name            = "appsync-${local.project_name}"
    datasource_name = local.datasource_name
    resolvers = {
      retrieve_user = {
        field       = "retrieveUser"
        type        = "Query"
        data_source = local.datasource_name
      }
      retrieve_all_users = {
        field       = "retrieveAllUsers"
        type        = "Query"
        data_source = local.datasource_name
      }
      create_user = {
        field       = "createUser"
        type        = "Mutation"
        data_source = local.datasource_name
      }
    }
  }
}
