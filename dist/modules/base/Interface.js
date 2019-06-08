"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Interface {
    get key() {
        return 'app-' + this.name.toLowerCase().replace(/[^a-b]+/, '-');
    }
}
exports.Interface = Interface;
//# sourceMappingURL=Interface.js.map