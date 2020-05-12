"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const seasons_entity_1 = require("../seasons/seasons.entity");
let Episode = class Episode {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Episode.prototype, "Episode_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Episode.prototype, "Name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Episode.prototype, "Number", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Episode.prototype, "Link", void 0);
__decorate([
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], Episode.prototype, "Deleted", void 0);
__decorate([
    typeorm_1.ManyToOne(type => seasons_entity_1.Season, season => season.episodes),
    __metadata("design:type", seasons_entity_1.Season)
], Episode.prototype, "season", void 0);
Episode = __decorate([
    typeorm_1.Entity()
], Episode);
exports.Episode = Episode;
//# sourceMappingURL=episode.entity.js.map