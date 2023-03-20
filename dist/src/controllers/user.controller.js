"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTTP_STATUS_enum_1 = __importDefault(require("../enums/HTTP_STATUS.enum"));
const user_service_1 = __importDefault(require("../services/user.service"));
const userService = new user_service_1.default();
class UserController {
    static create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = request;
            try {
                const user = yield userService.create(body);
                response.status(HTTP_STATUS_enum_1.default.CREATED).json(user);
            }
            catch (e) {
                if (e instanceof Error) {
                    response.status(HTTP_STATUS_enum_1.default.BAD_REQUEST).json(e.message);
                }
                response.status(HTTP_STATUS_enum_1.default.INTERNAL_SERVER_ERROR).json('e');
            }
        });
    }
    static get(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                const user = yield userService.get(id);
                response.status(HTTP_STATUS_enum_1.default.OK).json(user);
            }
            catch (e) {
                if (e instanceof Error) {
                    response.status(HTTP_STATUS_enum_1.default.BAD_REQUEST).json(e.message);
                }
                response.status(HTTP_STATUS_enum_1.default.INTERNAL_SERVER_ERROR).json(e);
            }
        });
    }
    static list(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield userService.list();
                response.status(HTTP_STATUS_enum_1.default.OK).json(users);
            }
            catch (e) {
                if (e instanceof Error) {
                    response.status(HTTP_STATUS_enum_1.default.BAD_REQUEST).json(e.message);
                }
                response.status(HTTP_STATUS_enum_1.default.INTERNAL_SERVER_ERROR).json(e);
            }
        });
    }
    static update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { body } = request;
            try {
                const users = yield userService.update(id, body);
                response.status(HTTP_STATUS_enum_1.default.OK).json(users);
            }
            catch (e) {
                if (e instanceof Error) {
                    response.status(HTTP_STATUS_enum_1.default.BAD_REQUEST).json(e.message);
                }
                response.status(HTTP_STATUS_enum_1.default.INTERNAL_SERVER_ERROR).json(e);
            }
        });
    }
    static delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                yield userService.delete(id);
                response.status(HTTP_STATUS_enum_1.default.NO_CONTENT).json();
            }
            catch (e) {
                if (e instanceof Error) {
                    response.status(HTTP_STATUS_enum_1.default.BAD_REQUEST).json(e.message);
                }
                response.status(HTTP_STATUS_enum_1.default.INTERNAL_SERVER_ERROR).json(e);
            }
        });
    }
}
exports.default = UserController;
