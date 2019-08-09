"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An abstract class forming the base for defining new label types
 */
class LabelType {
    /**
     * string denoting how a label is to be named.
     * [class] will be replaced with the label class name
     * [id] will be replaced with a unique id for the label
     */
    get name_format() {
        return "[class]_[id]";
    }
    /**
     * hotspot information for the label
     * @param label label whose hotspot is to be shown
     */
    hotspot(label) {
        return '';
    }
}
exports.LabelType = LabelType;
//# sourceMappingURL=LabelType.js.map