let Ajv = require("ajv")
let bind = require("auto-bind")

class validator_user {
    constructor() {
        bind(this)
    }
    register_user(req, res) {
        let register_user_schema = {
            properties: {
                username: { type: "string", },
                password: { type: "string" },
                name: { type: "string" }
            },
            required: ["username", "password", "name"]
        }
        let result = this.Validate(req, res, register_user_schema)
        return result;
    }
    delete_user(req, res) {
        let delete_user_schema = {
            properties: {
                id: { type: "string" }
            },
            required: ["id"]
        }

        let result = this.Validate(req, res, delete_user_schema)
        return result
    }
    update_user(req, res) {
        let update_user_schema = {
            properties: {
                id: { type: "string" },
                username: { type: "string", },
                password: { type: "string" },
                name: { type: "string" }
            },
            required: ["id"]
        }

        let result = this.Validate(req, res, update_user_schema)
        return result
    }
    getall_user(req, res) {
        let getall_user_schema = {
            "properties": {
                "name": { type: "string" }
            }
            //,"required":["name"]
        }
        let result = this.Validate(req, res, getall_user_schema)

        return result
    }
    Validate(req, res, schema) {
        try {
            let ajv = new Ajv()
            let validate = ajv.compile(schema)
            let valid = validate(req.body)
            if (!valid) {
                res.send(validate.errors)
                return false
            }
            return req.body
        }
        catch (err) {
            console.log("err:", err)
        }

    }
}

module.exports = validator_user