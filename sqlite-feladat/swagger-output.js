{
    "swagger": "2.0",
    "info": {
      "title": "Users API",
      "version": "1.0.0",
      "description": "Users API"
    },
    "host": "localhost:3000",
    "basePath": "/api/users",
    "schemes": [
      "http"
    ],
    "paths": {
      "/": {
        "get": {
          "description": "",
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/api/users": {
        "get": {
          "description": "",
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        },
        "post": {
          "description": "",
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "firstName": {
                    "example": "any"
                  },
                  "lastName": {
                    "example": "any"
                  },
                  "email": {
                    "example": "any"
                  },
                  "address": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "201": {
              "description": "Created"
            },
            "500": {
              "description": "Internal Server Error"
            }
          }
        }
      },
      "/api/users/{id}": {
        "get": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "404": {
              "description": "Not Found"
            },
            "500": {
              "description": "Internal Server Error"
            }
          }
        },
        "put": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            },
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "firstName": {
                    "example": "any"
                  },
                  "lastName": {
                    "example": "any"
                  },
                  "email": {
                    "example": "any"
                  },
                  "address": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "404": {
              "description": "Not Found"
            },
            "500": {
              "description": "Internal Server Error"
            }
          }
        },
        "delete": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "204": {
              "description": "No Content"
            },
            "404": {
              "description": "Not Found"
            },
            "500": {
              "description": "Internal Server Error"
            }
          }
        }
      }
    }
  }