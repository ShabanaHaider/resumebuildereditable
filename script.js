// declare const html2pdf: any;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var form = document.getElementById("resumeform");
var resumeGenerate = document.getElementById("resumeGenerate");
var resumePhoto = document.getElementById("resumePhoto");
var resumeName = document.getElementById("resumeName");
var resumeEmail = document.getElementById("resumeEmail");
var resumePhone = document.getElementById("resumePhone");
var resumeEducation = document.getElementById("resumeEducation");
var resumeExperience = document.getElementById("resumeExperience"); // Corrected variable name
var resumeSkills1 = document.getElementById("resumeSkill1");
var resumeSkills2 = document.getElementById("resumeSkill2");
var resumeSkills3 = document.getElementById("resumeSkill3");
var editButton = document.getElementById("editButton");
form.addEventListener("submit", function (event) { return __awaiter(_this, void 0, void 0, function () {
    var name2, email1, phone1, education1, institution1, yeareducation, experience1, company1, yearexperience, skilla, skillb, skillc, photoInsert, photofile, photoBase64;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                event.preventDefault();
                name2 = document.getElementById("name").value;
                email1 = document.getElementById("email").value;
                phone1 = document.getElementById("phone").value;
                education1 = document.getElementById("education").value;
                institution1 = document.getElementById("institution").value;
                yeareducation = document.getElementById("year").value;
                experience1 = document.getElementById("experience").value;
                company1 = document.getElementById("company").value;
                yearexperience = document.getElementById("years").value;
                skilla = document.getElementById("skill1").value;
                skillb = document.getElementById("skill2").value;
                skillc = document.getElementById("skill3").value;
                photoInsert = document.getElementById("photo");
                photofile = photoInsert.files ? photoInsert.files[0] : null;
                photoBase64 = '';
                if (!photofile) return [3 /*break*/, 2];
                return [4 /*yield*/, fileToBase64(photofile)];
            case 1:
                photoBase64 = _b.sent();
                localStorage.setItem("resumePhoto", photoBase64);
                resumePhoto.src = photoBase64;
                _b.label = 2;
            case 2:
                (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
                resumeGenerate.classList.remove("hidden");
                resumeName.textContent = name2;
                resumeEmail.textContent = "Email: ".concat(email1);
                resumePhone.textContent = "Phone: ".concat(phone1);
                resumeEducation.textContent = "Education: ".concat(education1, ", Institution: ").concat(institution1, ", Year Completed: ").concat(yeareducation); // Clearer formatting
                resumeExperience.textContent = "Work Experience: ".concat(experience1, ", Company: ").concat(company1, ", Years: ").concat(yearexperience); // Clearer formatting
                resumeSkills1.textContent = "Skill 1: ".concat(skilla);
                resumeSkills2.textContent = "Skill 2: ".concat(skillb);
                resumeSkills3.textContent = "Skill 3: ".concat(skillc);
                return [2 /*return*/];
        }
    });
}); });
editButton.addEventListener("click", function () {
    var _a;
    updateFormFromResume();
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    resumeGenerate.classList.add("hidden");
});
function updateFormFromResume() {
    var _a, _b, _c, _d, _e;
    // Parse and update each field carefully
    var educationText = resumeEducation.textContent || '';
    var _f = educationText.split(',').map(function (item) { return item.trim(); }), education1 = _f[0], institution1 = _f[1], yeareducation = _f[2];
    var experienceText = resumeExperience.textContent || ''; // Corrected variable name
    var _g = experienceText.split(',').map(function (item) { return item.trim(); }), experience1 = _g[0], company1 = _g[1], yearexperience = _g[2];
    document.getElementById("name").value = resumeName.textContent || '';
    document.getElementById("email").value = ((_a = resumeEmail.textContent) === null || _a === void 0 ? void 0 : _a.replace('Email: ', '')) || '';
    document.getElementById("phone").value = ((_b = resumePhone.textContent) === null || _b === void 0 ? void 0 : _b.replace('Phone: ', '')) || '';
    document.getElementById("education").value = education1 || '';
    document.getElementById("institution").value = institution1 || '';
    document.getElementById("year").value = yeareducation || '';
    document.getElementById("experience").value = experience1 || '';
    document.getElementById("company").value = company1 || '';
    document.getElementById("years").value = yearexperience || '';
    document.getElementById("skill1").value = ((_c = resumeSkills1.textContent) === null || _c === void 0 ? void 0 : _c.replace('Skill 1:', '').trim()) || '';
    document.getElementById("skill2").value = ((_d = resumeSkills2.textContent) === null || _d === void 0 ? void 0 : _d.replace('Skill 2:', '').trim()) || '';
    document.getElementById("skill3").value = ((_e = resumeSkills3.textContent) === null || _e === void 0 ? void 0 : _e.replace('Skill 3:', '').trim()) || '';
}
function fileToBase64(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onloadend = function () { return resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
