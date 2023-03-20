"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSchema = exports.userSchema = void 0;
const yup = __importStar(require("yup"));
exports.userSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    cpf: yup.string().matches(/([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/, "CPF inválido ").required("CPF obrigatório"),
    alias: yup.string(),
    gender: yup.string(),
    phone: yup.string(),
    address: yup.string(),
    comments: yup.string(),
    profilePicture: yup.string()
});
exports.updateSchema = yup.object().shape({
    name: yup.string(),
    cpf: yup.string(),
    alias: yup.string(),
    gender: yup.string(),
    phone: yup.string(),
    address: yup.string(),
    comments: yup.string(),
    profilePicture: yup.string()
});
