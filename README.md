# Unexpected Arithmetic Behavior with Undefined, Null, and NaN in JavaScript

This example demonstrates how JavaScript's loose typing can lead to unexpected results when performing arithmetic operations with `undefined`, `null`, and `NaN` values.

## Bug

The `foo` function adds two numbers. However, the behavior is not consistent when undefined, null, or NaN are passed as arguments.  `undefined` results in `NaN`, `null` is treated as 0, and `NaN` propagates.

## Solution

The solution involves explicit checks for these values and handling them accordingly (e.g., using default values or throwing errors) to ensure predictable results.