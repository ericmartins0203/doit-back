"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("dotenv/config");
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
// import swaggerUI from "swagger-ui-express"
// import swaggerFile from "./swagger.json"
const data_source_1 = __importDefault(require("./data-source"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
(0, data_source_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use(routes_1.default);
exports.app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
