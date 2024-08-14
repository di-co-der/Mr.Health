import SugarProfileIcon from "../assets/svgs/SugarProfileIcon.svg";
import LiverProfileIcon from "../assets/svgs/LiverProfileIcon.svg";
import LipidProfileIcon from "../assets/svgs/LipidProfileIcon.svg";
import ThyroidProfileIcon from "../assets/svgs/ThyroidProfileIcon.svg";
import PregnancyTestIcon from "../assets/svgs/PregnancyTestIcon.svg";
import BloodTestsIcon from "../assets/svgs/BloodTestsIcon.svg";
import HIVAIDSTestIcon from "../assets/svgs/HIVAIDSTestIcon.svg";
import CancerDetectionIcon from "../assets/svgs/CancerDetectionIcon.svg";

export const labTests = {
  concerns: [
    {
      name: "Sugar Profile",
      icon: SugarProfileIcon,
      mrp: 2000,
      price: 1500,
      discount: 25,
      tests: [
        { name: "Fasting Blood Sugar", price: 300 },
        { name: "Post Prandial Blood Sugar", price: 300 },
        { name: "HbA1c", price: 500 },
        { name: "Insulin", price: 400 },
        { name: "Glucose Tolerance Test", price: 500 },
      ],
    },
    {
      name: "Liver Profile",
      icon: LiverProfileIcon,
      mrp: 2500,
      price: 2000,
      discount: 20,
      tests: [
        { name: "Total Bilirubin", price: 300 },
        { name: "Direct Bilirubin", price: 300 },
        { name: "Indirect Bilirubin", price: 300 },
        { name: "SGOT (AST)", price: 300 },
        { name: "SGPT (ALT)", price: 300 },
        { name: "Alkaline Phosphatase", price: 300 },
        { name: "GGT", price: 300 },
      ],
    },
    {
      name: "Lipid Profile",
      icon: LipidProfileIcon,
      mrp: 2599,
      price: 1199,
      discount: 54,
      tests: [
        { name: "Total Cholesterol", price: 300 },
        { name: "HDL Cholesterol", price: 300 },
        { name: "LDL Cholesterol", price: 300 },
        { name: "Triglycerides", price: 300 },
        { name: "VLDL Cholesterol", price: 300 },
        { name: "Cholesterol/HDL Ratio", price: 300 },
        { name: "Apolipoprotein A", price: 500 },
        { name: "Apolipoprotein B", price: 500 },
        { name: "Lipoprotein(a)", price: 500 },
        { name: "Lipoprotein Lipase", price: 500 },
        { name: "Atherogenic Index", price: 500 },
      ],
    },
    {
      name: "Thyroid Profile",
      icon: ThyroidProfileIcon,
      mrp: 2200,
      price: 1600,
      discount: 27,
      tests: [
        { name: "TSH", price: 300 },
        { name: "Free T3", price: 300 },
        { name: "Free T4", price: 300 },
        { name: "Total T3", price: 300 },
        { name: "Total T4", price: 300 },
        { name: "Thyroid Peroxidase Antibodies", price: 500 },
        { name: "Thyroglobulin Antibodies", price: 500 },
      ],
    },
    {
      name: "Pregnancy Test",
      icon: PregnancyTestIcon,
      mrp: 2200,
      price: 1600,
      discount: 27,
      tests: [
        { name: "Beta HCG", price: 500 },
        { name: "Urine Pregnancy Test", price: 300 },
      ],
    },
    {
      name: "Blood Tests",
      icon: BloodTestsIcon,
      mrp: 2200,
      price: 1600,
      discount: 27,
      tests: [
        { name: "Complete Blood Count (CBC)", price: 500 },
        { name: "Hemoglobin", price: 300 },
        { name: "Hematocrit", price: 300 },
        { name: "White Blood Cell Count", price: 300 },
        { name: "Platelet Count", price: 300 },
        { name: "Red Blood Cell Count", price: 300 },
        { name: "Mean Corpuscular Volume", price: 300 },
        { name: "Mean Corpuscular Hemoglobin", price: 300 },
        { name: "Mean Corpuscular Hemoglobin Concentration", price: 300 },
        { name: "Red Cell Distribution Width", price: 300 },
      ],
    },
    {
      name: "HIV/AIDS Test",
      icon: HIVAIDSTestIcon,
      mrp: 2200,
      price: 1600,
      discount: 27,
      tests: [
        { name: "HIV 1 & 2 Antibodies", price: 500 },
        { name: "HIV Viral Load", price: 700 },
        { name: "CD4 Count", price: 800 },
      ],
    },
    {
      name: "Cancer Detection",
      icon: CancerDetectionIcon,
      mrp: 2200,
      price: 1600,
      discount: 27,
      tests: [
        { name: "Tumor Marker Test", price: 600 },
        { name: "CEA (Carcinoembryonic Antigen)", price: 500 },
        { name: "PSA (Prostate-Specific Antigen)", price: 500 },
        { name: "CA-125 (Ovarian Cancer Marker)", price: 500 },
        { name: "CA 15-3 (Breast Cancer Marker)", price: 500 },
        { name: "AFP (Alpha-Fetoprotein)", price: 500 },
      ],
    },
  ],
  packages: [
    {
      name: "Comprehensive Full Body Checkup",
      originalPrice: 4500,
      discountedPrice: 3499,
      discount: 22,
      testsIncluded: "60",
      image:
        "https://images.rawpixel.com/image_1100/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkyLWp1LW5pbmctODItY2hlbWlzdHJ5XzIuanBn.jpg",
    },
    {
      name: "Basic Women's Health Checkup",
      originalPrice: 1400,
      discountedPrice: 1099,
      discount: 21,
      testsIncluded: "16",
      image:
        "https://images.rawpixel.com/image_1100/czNmcy1wcml2YXRlL3Jhd3BpeGVzX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkyLWp1LW5pbmctODItY2hlbWlzdHJ5XzIuanBn.jpg",
    },
    {
      name: "Basic Full Body Checkup",
      originalPrice: 1900,
      discountedPrice: 1599,
      discount: 20,
      testsIncluded: "56",
      image:
        "https://images.rawpixel.com/image_1100/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkyLWp1LW5pbmctODItY2hlbWlzdHJ5XzIuanBn.jpg",
    },
    {
      name: "Vitamin Deficiency Health Checkup",
      originalPrice: 1200,
      discountedPrice: 899,
      discount: 25,
      testsIncluded: "5",
      image:
        "https://images.rawpixel.com/image_1100/czNmcy1wcml2YXRlL3Jhd3BpeGVzX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkyLWp1LW5pbmctODItY2hlbWlzdHJ5XzIuanBn.jpg",
    },
    {
      name: "Vitamin Deficiency Health Checkup",
      originalPrice: 1200,
      discountedPrice: 899,
      discount: 25,
      testsIncluded: "5",
      image:
        "https://images.rawpixel.com/image_1100/czNmcy1wcml2YXRlL3Jhd3BpeGVzX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkyLWp1LW5pbmctODItY2hlbWlzdHJ5XzIuanBn.jpg",
    },
  ],
};
