# build number (with base) action

This action takes two values as input and adds them together.

## Inputs

## `base`

**Required** The base build number. 

## `run_id`

**Required** The `GITHUB_RUN_NUMBER` which should be provided 
as `${GITHUB_RUN_NUMBER}`

## Outputs

## `build-number`

The inputs added together

## environment variable `BUILD_NUMBER`

The inputs added together

## Example usage

```yml
uses: mlilback/build-number@v1
with:
  base: 100
  run_id: ${GITHUB_RUN_NUMBER}
```
