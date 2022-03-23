// Dynamic import

// Module from dynamic string, instead of only literal string previously
const moduleName = './mocks/module.mjs';
const module = await import(moduleName);
module.sayHi();


// Conditional import
const useFeature = true;
let featureModule;
if (useFeature) {
  featureModule = await import('./mocks/feature_module.mjs');
  featureModule.default.feature();
}

// Fallback import
let safeModule;
try {
  safeModule = await import('module_not_found'); 
} catch { 
  safeModule = await import('./mocks/fallback_module.mjs'); 
}
safeModule.sayHi();

