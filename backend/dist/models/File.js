var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
let File = class File {
    id;
    createdAt = new Date();
    filename = null;
    filepath = null;
};
__decorate([
    PrimaryKey(),
    __metadata("design:type", String)
], File.prototype, "id", void 0);
__decorate([
    Property({ type: Date }),
    __metadata("design:type", Object)
], File.prototype, "createdAt", void 0);
__decorate([
    Property({ nullable: true, unique: true }) // Add `unique: true`
    ,
    __metadata("design:type", Object)
], File.prototype, "filename", void 0);
__decorate([
    Property({ nullable: true }),
    __metadata("design:type", Object)
], File.prototype, "filepath", void 0);
File = __decorate([
    Entity()
], File);
export { File };
