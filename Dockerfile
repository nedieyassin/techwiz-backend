# Start with a base image that includes the Go toolchain
FROM golang:latest AS builder

# Set the working directory inside the container
WORKDIR /pb

# Copy the Go module files and download dependencies -
COPY go.mod go.sum ./

RUN go mod download

# Copy the rest of the application source code
COPY . .

# Build the Go application
RUN CGO_ENABLED=0 GOOS=linux go build -o pocketbase

# Start a new stage from a smaller base image
FROM alpine:latest

# Set the working directory inside the container
WORKDIR /app

RUN apk add --no-cache \
    ca-certificates

# Copy the built executable from the previous stage
COPY --from=builder /pb/pocketbase /app/pocketbase

# Expose any necessary ports
EXPOSE 8080

# Command to run the executable
CMD ["/app/pocketbase", "serve", "--http=0.0.0.0:8080"]