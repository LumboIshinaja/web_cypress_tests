import Ajv from "ajv";

const ajv = new Ajv();

export function validateSchema(responseBody, schema) {
    const validate = ajv.compile(schema);
    const valid = validate(responseBody);

    if (!valid) {
        console.error("🚨 Schema validation failed! ❌");
        console.error("❌ Validation Errors:", JSON.stringify(validate.errors, null, 2));
        console.error("📜 Response Body:", JSON.stringify(responseBody, null, 2));
    
        throw new Error(`Schema validation failed!\nErrors: ${JSON.stringify(validate.errors, null, 2)}`);
    }
}    
