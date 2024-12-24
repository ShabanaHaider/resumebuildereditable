// declare const html2pdf: any;

// const form = document.getElementById("resumeform") as HTMLFormElement;
// const resumeGenerate = document.getElementById("resumeGenerate") as HTMLElement;
// const resumePhoto = document.getElementById("resumePhoto") as HTMLImageElement;
// const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
// const resumeEmail = document.getElementById("resumeEmail") as HTMLParagraphElement;
// const resumePhone = document.getElementById("resumePhone") as HTMLParagraphElement;
// const resumeEducation = document.getElementById("resumeEducation") as HTMLParagraphElement;
// const resumeworkExperience = document.getElementById("resumeExperience") as HTMLParagraphElement;
// const resumeSkills1 = document.getElementById("resumeSkill1") as HTMLParagraphElement;
// const resumeSkills2 = document.getElementById("resumeSkill2") as HTMLParagraphElement;
// const resumeSkills3 = document.getElementById("resumeSkill3") as HTMLParagraphElement;
// const editButton = document.getElementById("editButton") as HTMLButtonElement;

// form.addEventListener("submit", async (event: Event) => {
//     event.preventDefault();

//     const name2 = (document.getElementById("name") as HTMLInputElement).value;
//     const email1 = (document.getElementById("email") as HTMLInputElement).value;
//     const phone1 = (document.getElementById("phone") as HTMLInputElement).value;
//     const education1 = (document.getElementById("education") as HTMLInputElement).value;
//     const institution1 = (document.getElementById("institution") as HTMLInputElement).value;
//     const yeareducation = (document.getElementById("year") as HTMLInputElement).value;
//     const experience1 = (document.getElementById("experience") as HTMLInputElement).value;
//     const company1 = (document.getElementById("company") as HTMLInputElement).value;
//     const yearexperience = (document.getElementById("years") as HTMLInputElement).value;
//     const skilla = (document.getElementById("skill1") as HTMLInputElement).value;
//     const skillb = (document.getElementById("skill2") as HTMLInputElement).value;
//     const skillc = (document.getElementById("skill3") as HTMLInputElement).value;
//     const photoInsert = (document.getElementById("photo") as HTMLInputElement);

//     const photofile = photoInsert.files ? photoInsert.files[0] : null;
//     let photoBase64 = '';

//     if (photofile) {
//         photoBase64 = await fileToBase64(photofile);
//         localStorage.setItem("resumePhoto", photoBase64);
//         resumePhoto.src = photoBase64;
//     }

//     document.querySelector(".container")?.classList.add("hidden");
//     resumeGenerate.classList.remove("hidden");

//     resumeName.textContent = name2;
//     resumeEmail.textContent = `Email: ${email1}`;
//     resumePhone.textContent = `Phone: ${phone1}`;
//     resumeEducation.textContent = `Education: ${education1} Institution: ${institution1}, Year Completed: ${yeareducation}`;
//     resumeworkExperience.textContent = `Work Experience: ${experience1} Company: ${company1} Years: ${yearexperience}`;
//     resumeSkills1.textContent = `Skill 1: ${skilla}`;
//     resumeSkills2.textContent = `Skill 2: ${skillb}`;
//     resumeSkills3.textContent = `Skill 3: ${skillc}`;
// });

// editButton.addEventListener("click", () => {
//     updateFormFromResume();
//     document.querySelector(".container")?.classList.remove("hidden");
//     resumeGenerate.classList.add("hidden");
// });

// function updateFormFromResume() {
//     // Parse and update each field carefully
//     const educationText = resumeEducation.textContent || '';
//     const [education1, institution1, yeareducation] = educationText.split(',').map(item => item.trim());
    
//     const experienceText = resumeworkExperience.textContent || '';
//     const [experience1, company1, yearexperience] = experienceText.split(',').map(item => item.trim());

//     (document.getElementById("name") as HTMLInputElement).value = resumeName.textContent || '';
//     (document.getElementById("email") as HTMLInputElement).value = resumeEmail.textContent?.replace('Email: ', '') || '';
//     (document.getElementById("phone") as HTMLInputElement).value = resumePhone.textContent?.replace('Phone: ', '') || '';
//     (document.getElementById("education") as HTMLInputElement).value = education1 || '';
//     (document.getElementById("institution") as HTMLInputElement).value = institution1 || '';
//     (document.getElementById("year") as HTMLInputElement).value = yeareducation || '';
//     (document.getElementById("experience") as HTMLInputElement).value = experience1 || '';
//     (document.getElementById("company") as HTMLInputElement).value = company1 || '';
//     (document.getElementById("years") as HTMLInputElement).value = yearexperience || '';
//     (document.getElementById("skill1") as HTMLInputElement).value = resumeSkills1.textContent?.replace('Skill 1:', '').trim() || '';
//     (document.getElementById("skill2") as HTMLInputElement).value = resumeSkills2.textContent?.replace('Skill 2:', '').trim() || '';
//     (document.getElementById("skill3") as HTMLInputElement).value = resumeSkills3.textContent?.replace('Skill 3:', '').trim() || '';
// }

// function fileToBase64(file: File): Promise<string> {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onloadend = () => resolve(reader.result as string);
//         reader.onerror = reject;
//         reader.readAsDataURL(file);
//     });
// }



import "core-js/stable";
import "regenerator-runtime/runtime"; // For async/await support in older environments



declare const html2pdf: any;

const form = document.getElementById("resumeform") as HTMLFormElement;
const resumeGenerate = document.getElementById("resumeGenerate") as HTMLElement;
const resumePhoto = document.getElementById("resumePhoto") as HTMLImageElement;
const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
const resumeEmail = document.getElementById("resumeEmail") as HTMLParagraphElement;
const resumePhone = document.getElementById("resumePhone") as HTMLParagraphElement;
const resumeEducation = document.getElementById("resumeEducation") as HTMLParagraphElement;
const resumeExperience = document.getElementById("resumeExperience") as HTMLParagraphElement;  // Corrected variable name
const resumeSkills1 = document.getElementById("resumeSkill1") as HTMLParagraphElement;
const resumeSkills2 = document.getElementById("resumeSkill2") as HTMLParagraphElement;
const resumeSkills3 = document.getElementById("resumeSkill3") as HTMLParagraphElement;
const editButton = document.getElementById("editButton") as HTMLButtonElement;

form.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    const name2 = (document.getElementById("name") as HTMLInputElement).value;
    const email1 = (document.getElementById("email") as HTMLInputElement).value;
    const phone1 = (document.getElementById("phone") as HTMLInputElement).value;
    const education1 = (document.getElementById("education") as HTMLInputElement).value;
    const institution1 = (document.getElementById("institution") as HTMLInputElement).value;
    const yeareducation = (document.getElementById("year") as HTMLInputElement).value;
    const experience1 = (document.getElementById("experience") as HTMLInputElement).value;
    const company1 = (document.getElementById("company") as HTMLInputElement).value;
    const yearexperience = (document.getElementById("years") as HTMLInputElement).value;
    const skilla = (document.getElementById("skill1") as HTMLInputElement).value;
    const skillb = (document.getElementById("skill2") as HTMLInputElement).value;
    const skillc = (document.getElementById("skill3") as HTMLInputElement).value;
    const photoInsert = (document.getElementById("photo") as HTMLInputElement);

    const photofile = photoInsert.files ? photoInsert.files[0] : null;
    let photoBase64 = '';

    if (photofile) {
        photoBase64 = await fileToBase64(photofile);
        localStorage.setItem("resumePhoto", photoBase64);
        resumePhoto.src = photoBase64;
    }

    document.querySelector(".container")?.classList.add("hidden");
    resumeGenerate.classList.remove("hidden");

    resumeName.textContent = name2;
    resumeEmail.textContent = `Email: ${email1}`;
    resumePhone.textContent = `Phone: ${phone1}`;
    resumeEducation.textContent = `Education: ${education1}, Institution: ${institution1}, Year Completed: ${yeareducation}`;  // Clearer formatting
    resumeExperience.textContent = `Work Experience: ${experience1}, Company: ${company1}, Years: ${yearexperience}`;  // Clearer formatting
    resumeSkills1.textContent = `Skill 1: ${skilla}`;
    resumeSkills2.textContent = `Skill 2: ${skillb}`;
    resumeSkills3.textContent = `Skill 3: ${skillc}`;
});

editButton.addEventListener("click", () => {
    updateFormFromResume();
    document.querySelector(".container")?.classList.remove("hidden");
    resumeGenerate.classList.add("hidden");
});

function updateFormFromResume() {
    // Parse and update each field carefully
    const educationText = resumeEducation.textContent || '';
    const [education1, institution1, yeareducation] = educationText.split(',').map(item => item.trim());
    
    const experienceText = resumeExperience.textContent || '';  // Corrected variable name
    const [experience1, company1, yearexperience] = experienceText.split(',').map(item => item.trim());

    (document.getElementById("name") as HTMLInputElement).value = resumeName.textContent || '';
    (document.getElementById("email") as HTMLInputElement).value = resumeEmail.textContent?.replace('Email: ', '') || '';
    (document.getElementById("phone") as HTMLInputElement).value = resumePhone.textContent?.replace('Phone: ', '') || '';
    (document.getElementById("education") as HTMLInputElement).value = education1 || '';
    (document.getElementById("institution") as HTMLInputElement).value = institution1 || '';
    (document.getElementById("year") as HTMLInputElement).value = yeareducation || '';
    (document.getElementById("experience") as HTMLInputElement).value = experience1 || '';
    (document.getElementById("company") as HTMLInputElement).value = company1 || '';
    (document.getElementById("years") as HTMLInputElement).value = yearexperience || '';
    (document.getElementById("skill1") as HTMLInputElement).value = resumeSkills1.textContent?.replace('Skill 1:', '').trim() || '';
    (document.getElementById("skill2") as HTMLInputElement).value = resumeSkills2.textContent?.replace('Skill 2:', '').trim() || '';
    (document.getElementById("skill3") as HTMLInputElement).value = resumeSkills3.textContent?.replace('Skill 3:', '').trim() || '';
}

function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}





   