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
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const User_1 = require("../entities/User");
class UserService {
    constructor() {
        this.userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    }
    isCPFInDatabase(cpf) {
        return __awaiter(this, void 0, void 0, function* () {
            const userFound = yield this.userRepository.findOne({ where: { cpf } });
            return !!userFound;
        });
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const alreadyExist = yield this.isCPFInDatabase(body.cpf);
            if (alreadyExist) {
                throw new Error("CPF já existe");
            }
            return this.userRepository.save(body);
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({ where: { id } });
            if (user) {
                return user;
            }
            throw new Error("Id não encontrado");
        });
    }
    list() {
        return this.userRepository.find();
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({ where: { id } });
            if (!user) {
                throw new Error("Id não encontrado");
            }
            if (body.cpf) {
                if (yield this.isCPFInDatabase(body.cpf)) {
                    throw new Error("CPF já existe");
                }
            }
            return this.userRepository.save(Object.assign(Object.assign({}, user), body));
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.delete({ id });
        });
    }
}
exports.default = UserService;
