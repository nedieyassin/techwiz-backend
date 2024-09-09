# Start with a base image that includes the Go toolchain
FROM golang:latest AS backend-builder

# Set the working directory inside the container
WORKDIR /pb

# Copy the Go module files and download dependencies -
COPY go.mod go.sum ./

RUN go mod download

# Copy the rest of the application source code
COPY . .

# Build the Go application
RUN CGO_ENABLED=0 GOOS=linux go build -o pocketbase


# Use an official Node runtime as the base image
FROM node:alpine as frontend-builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY frontend/ .

# Build the React app
RUN npm run build


# Start a new stage from a smaller base image
FROM alpine:latest

# Set the working directory inside the container
WORKDIR /app

RUN apk add --no-cache \
    ca-certificates

# Copy the built executable from the previous stage
COPY --from=backend-builder /pb/pocketbase /app/pocketbase
COPY --from=frontend-builder /app/dist /app/pb_public

# Expose any necessary ports
EXPOSE 8080

# Command to run the executable
CMD ["/app/pocketbase", "serve", "--http=0.0.0.0:8080"]