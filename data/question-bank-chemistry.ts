import { ChapterQuestionBank, Question } from '@/lib/types';

// Unit 1: Solutions - Question Bank
const unit1Questions: Question[] = [
  // 1.1 Types of Solutions
  { id: 'chem1-1m-1', text: 'Define a solution. What is meant by a homogeneous mixture?', category: '1-mark', topicId: '1-1-types-of-solutions' },
  { id: 'chem1-1m-2', text: 'What is a solvent? What is a solute?', category: '1-mark', topicId: '1-1-types-of-solutions' },
  { id: 'chem1-1m-3', text: 'What are binary solutions? Give one example.', category: '1-mark', topicId: '1-1-types-of-solutions' },
  { id: 'chem1-1m-4', text: 'Give one example each of: (a) gaseous solution, (b) liquid solution, (c) solid solution.', category: '1-mark', topicId: '1-1-types-of-solutions' },
  { id: 'chem1-1m-5', text: 'Give an example of a solid solution in which the solute is a gas.', category: '1-mark', topicId: '1-1-types-of-solutions' },
  { id: 'chem1-1m-6', text: 'Name the type of solution formed when a gas is dissolved in a liquid. Give one example.', category: '1-mark', topicId: '1-1-types-of-solutions' },
  { id: 'chem1-2m-1', text: 'Define the term solution. How many types of solutions are formed? Write briefly about each type with an example.', category: '2-mark', topicId: '1-1-types-of-solutions' },
  { id: 'chem1-2m-2', text: 'Complete the following table with examples for each type of solution: (a) Gas in Gas, (b) Liquid in Gas, (c) Solid in Gas, (d) Gas in Liquid, (e) Liquid in Liquid, (f) Solid in Liquid, (g) Gas in Solid, (h) Liquid in Solid, (i) Solid in Solid.', category: '2-mark', topicId: '1-1-types-of-solutions' },

  // 1.2 Expressing Concentration of Solutions
  { id: 'chem1-1m-7', text: 'Define mass percentage (w/w) of a component in a solution. Write its formula.', category: '1-mark', topicId: '1-2-concentration' },
  { id: 'chem1-1m-8', text: 'Define volume percentage (V/V). Give one industrial example where this unit is used.', category: '1-mark', topicId: '1-2-concentration' },
  { id: 'chem1-1m-9', text: 'What is mass by volume percentage (w/V)? In which fields is it commonly used?', category: '1-mark', topicId: '1-2-concentration' },
  { id: 'chem1-1m-10', text: 'Define parts per million (ppm). Write its formula.', category: '1-mark', topicId: '1-2-concentration' },
  { id: 'chem1-1m-11', text: 'Define mole fraction. What is the sum of mole fractions of all components in a solution?', category: '1-mark', topicId: '1-2-concentration' },
  { id: 'chem1-1m-12', text: 'Define molarity (M). Write its formula. What are its units?', category: '1-mark', topicId: '1-2-concentration' },
  { id: 'chem1-1m-13', text: 'Define molality (m). Write its formula. What are its units?', category: '1-mark', topicId: '1-2-concentration' },
  { id: 'chem1-1m-14', text: 'Which concentration terms are independent of temperature and which depend on temperature? Give reason.', category: '1-mark', topicId: '1-2-concentration' },
  { id: 'chem1-2m-3', text: 'Distinguish between molarity and molality. Why is molality preferred over molarity for expressing concentration in problems involving temperature changes?', category: '2-mark', topicId: '1-2-concentration' },
  { id: 'chem1-2m-4', text: 'Calculate the mole fraction of ethylene glycol (C₂H₆O₂) in a solution containing 20% of C₂H₆O₂ by mass.', category: 'numerical', topicId: '1-2-concentration' },
  { id: 'chem1-2m-5', text: 'Calculate the molarity of a solution containing 5 g of NaOH in 450 mL solution.', category: 'numerical', topicId: '1-2-concentration' },
  { id: 'chem1-2m-6', text: 'Calculate molality of 2.5 g of ethanoic acid (CH₃COOH) in 75 g of benzene.', category: 'numerical', topicId: '1-2-concentration' },
  { id: 'chem1-2m-7', text: 'What is the difference between ppm (mass/mass) and ppm (volume/volume)? Give one practical application of ppm as a unit of concentration.', category: '2-mark', topicId: '1-2-concentration' },
  { id: 'chem1-num-1', text: 'Calculate the mass percentage of benzene (C₆H₆) and carbon tetrachloride (CCl₄) if 22 g of benzene is dissolved in 122 g of carbon tetrachloride.', category: 'numerical', topicId: '1-2-concentration' },
  { id: 'chem1-num-2', text: 'Calculate the mole fraction of benzene in solution containing 30% by mass in carbon tetrachloride.', category: 'numerical', topicId: '1-2-concentration' },
  { id: 'chem1-num-3', text: 'Calculate the molarity of: (a) 30 g of Co(NO₃)₂·6H₂O in 4.3 L of solution, (b) 30 mL of 0.5 M H₂SO₄ diluted to 500 mL.', category: 'numerical', topicId: '1-2-concentration' },
  { id: 'chem1-num-4', text: 'Calculate the mass of urea (NH₂CONH₂) required in making 2.5 kg of 0.25 molal aqueous solution.', category: 'numerical', topicId: '1-2-concentration' },
  { id: 'chem1-num-5', text: 'Calculate (a) molality, (b) molarity, and (c) mole fraction of KI if the density of 20% (mass/mass) aqueous KI is 1.202 g mL⁻¹.', category: 'numerical', topicId: '1-2-concentration' },

  // 1.3 Solubility
  { id: 'chem1-1m-15', text: 'Define solubility of a substance.', category: '1-mark', topicId: '1-3-solubility' },
  { id: 'chem1-1m-16', text: "State the 'like dissolves like' principle with one example.", category: '1-mark', topicId: '1-3-solubility' },
  { id: 'chem1-1m-17', text: 'What is a saturated solution? What is an unsaturated solution?', category: '1-mark', topicId: '1-3-solubility' },
  { id: 'chem1-1m-18', text: 'What is dynamic equilibrium in the context of a saturated solution?', category: '1-mark', topicId: '1-3-solubility' },

  // 1.3.1 Solubility of a Solid in a Liquid
  { id: 'chem1-1m-19', text: 'Why do polar solutes dissolve in polar solvents and non-polar solutes in non-polar solvents?', category: '1-mark', topicId: '1-3-1-solubility-solid-liquid' },
  { id: 'chem1-1m-20', text: 'What is dissolution? What is crystallisation?', category: '1-mark', topicId: '1-3-1-solubility-solid-liquid' },
  { id: 'chem1-1m-21', text: 'How does temperature affect the solubility of a solid in a liquid when the dissolution process is (a) endothermic, (b) exothermic?', category: '1-mark', topicId: '1-3-1-solubility-solid-liquid' },
  { id: 'chem1-1m-22', text: 'Does pressure affect the solubility of solids in liquids? Give reason.', category: '1-mark', topicId: '1-3-1-solubility-solid-liquid' },
  { id: 'chem1-2m-8', text: "Explain the effect of temperature on solubility of a solid in a liquid using Le Chatelier's Principle.", category: '2-mark', topicId: '1-3-1-solubility-solid-liquid' },
  { id: 'chem1-2m-9', text: 'Explain what happens when a solid solute is added to a solvent. When is equilibrium established? Write the equilibrium expression.', category: '2-mark', topicId: '1-3-1-solubility-solid-liquid' },

  // 1.3.2 Solubility of a Gas in a Liquid
  { id: 'chem1-1m-23', text: "State Henry's law. Write its mathematical expression.", category: '1-mark', topicId: '1-3-2-solubility-gas-liquid' },
  { id: 'chem1-1m-24', text: "What is the Henry's law constant KH? What does a higher KH value indicate about the solubility of a gas?", category: '1-mark', topicId: '1-3-2-solubility-gas-liquid' },
  { id: 'chem1-1m-25', text: "How does temperature affect the solubility of gases in liquids? Explain with Le Chatelier's principle.", category: '1-mark', topicId: '1-3-2-solubility-gas-liquid' },
  { id: 'chem1-1m-26', text: 'Why are aquatic species more comfortable in cold water than warm water?', category: '1-mark', topicId: '1-3-2-solubility-gas-liquid' },
  { id: 'chem1-1m-27', text: 'Why are soft drink bottles sealed under high pressure?', category: '1-mark', topicId: '1-3-2-solubility-gas-liquid' },
  { id: 'chem1-1m-28', text: "What is 'bends'? How does it occur in scuba divers?", category: '1-mark', topicId: '1-3-2-solubility-gas-liquid' },
  { id: 'chem1-1m-29', text: 'What is anoxia? Why does it occur at high altitudes?', category: '1-mark', topicId: '1-3-2-solubility-gas-liquid' },
  { id: 'chem1-2m-10', text: "State Henry's law. Explain its significance with two practical applications.", category: '2-mark', topicId: '1-3-2-solubility-gas-liquid' },
  { id: 'chem1-2m-11', text: "Explain how an increase in pressure increases the solubility of a gas in a liquid using Henry's law.", category: '2-mark', topicId: '1-3-2-solubility-gas-liquid' },
  { id: 'chem1-num-6', text: 'If N₂ gas is bubbled through water at 293 K, how many millimoles of N₂ gas would dissolve in 1 litre of water? Assume N₂ exerts partial pressure of 0.987 bar. KH for N₂ at 293 K is 76.48 kbar.', category: 'numerical', topicId: '1-3-2-solubility-gas-liquid' },
  { id: 'chem1-num-7', text: "H₂S, a toxic gas with rotten egg smell, is used for qualitative analysis. If the solubility of H₂S in water at STP is 0.195 m, calculate Henry's law constant.", category: 'numerical', topicId: '1-3-2-solubility-gas-liquid' },
  { id: 'chem1-num-8', text: "Henry's law constant for CO₂ in water is 1.67 × 10⁸ Pa at 298 K. Calculate the quantity of CO₂ in 500 mL of soda water when packed under 2.5 atm CO₂ pressure at 298 K.", category: 'numerical', topicId: '1-3-2-solubility-gas-liquid' },

  // 1.4.1 Vapour Pressure of Liquid-Liquid Solutions
  { id: 'chem1-1m-30', text: "State Raoult's law for a solution of volatile liquids. Write the mathematical expression.", category: '1-mark', topicId: '1-4-1-liquid-liquid-solutions' },
  { id: 'chem1-1m-31', text: 'Write the expression for total vapour pressure of a binary solution of two volatile components.', category: '1-mark', topicId: '1-4-1-liquid-liquid-solutions' },
  { id: 'chem1-1m-32', text: "Using Dalton's law, write the expression for mole fraction of a component in the vapour phase.", category: '1-mark', topicId: '1-4-1-liquid-liquid-solutions' },
  { id: 'chem1-1m-33', text: 'At equilibrium, which component is enriched in the vapour phase — the more volatile or less volatile component?', category: '1-mark', topicId: '1-4-1-liquid-liquid-solutions' },
  { id: 'chem1-2m-12', text: "State Raoult's law for volatile liquid solutions. Derive the expression for total vapour pressure: p_total = p₁° + (p₂° - p₁°)x₂.", category: '2-mark', topicId: '1-4-1-liquid-liquid-solutions' },
  { id: 'chem1-num-9', text: 'Vapour pressure of CHCl₃ and CH₂Cl₂ at 298 K are 200 mm Hg and 415 mm Hg respectively. (i) Calculate vapour pressure of solution prepared by mixing 25.5 g of CHCl₃ and 40 g of CH₂Cl₂. (ii) Calculate mole fractions in vapour phase.', category: 'numerical', topicId: '1-4-1-liquid-liquid-solutions' },

  // 1.4.2 Raoult's Law as a Special Case of Henry's Law
  { id: 'chem1-1m-34', text: "How is Raoult's law a special case of Henry's law?", category: '1-mark', topicId: '1-4-2-raoults-henrys-law' },
  { id: 'chem1-1m-35', text: "What is the difference between KH in Henry's law and p° in Raoult's law?", category: '1-mark', topicId: '1-4-2-raoults-henrys-law' },
  { id: 'chem1-2m-13', text: "Compare Raoult's law and Henry's law. Show that Raoult's law becomes a special case of Henry's law when KH = p₁°.", category: '2-mark', topicId: '1-4-2-raoults-henrys-law' },

  // 1.4.3 Vapour Pressure of Solutions of Solids in Liquids
  { id: 'chem1-1m-36', text: 'What happens to the vapour pressure of a solvent when a non-volatile solute is added to it?', category: '1-mark', topicId: '1-4-3-solid-in-liquid-vp' },
  { id: 'chem1-1m-37', text: "State Raoult's law in its general form.", category: '1-mark', topicId: '1-4-3-solid-in-liquid-vp' },
  { id: 'chem1-1m-38', text: 'Write the expression for vapour pressure of a solvent containing a non-volatile solute.', category: '1-mark', topicId: '1-4-3-solid-in-liquid-vp' },
  { id: 'chem1-2m-14', text: 'Why does the vapour pressure of a solution decrease when a non-volatile solute is added to a solvent? Explain at the molecular level.', category: '2-mark', topicId: '1-4-3-solid-in-liquid-vp' },
  { id: 'chem1-2m-15', text: "State Raoult's law for solutions of solids in liquids. Show that the decrease in vapour pressure depends only on the number of solute particles and not on their nature.", category: '2-mark', topicId: '1-4-3-solid-in-liquid-vp' },
  { id: 'chem1-num-10', text: 'The vapour pressure of pure liquids A and B are 450 and 700 mm Hg respectively at 350 K. Find the composition of the liquid mixture if total vapour pressure is 600 mm Hg. Also find the composition of the vapour phase.', category: 'numerical', topicId: '1-4-3-solid-in-liquid-vp' },

  // 1.5.1 Ideal Solutions
  { id: 'chem1-1m-39', text: 'Define an ideal solution. State two properties an ideal solution must have.', category: '1-mark', topicId: '1-5-1-ideal-solutions' },
  { id: 'chem1-1m-40', text: 'Write the conditions ΔmixH = 0 and ΔmixV = 0 for an ideal solution. What do they mean?', category: '1-mark', topicId: '1-5-1-ideal-solutions' },
  { id: 'chem1-1m-41', text: 'Give two examples of nearly ideal solutions.', category: '1-mark', topicId: '1-5-1-ideal-solutions' },
  { id: 'chem1-2m-16', text: 'What are ideal solutions? Explain the molecular level basis for ideal behaviour in a binary mixture A and B.', category: '2-mark', topicId: '1-5-1-ideal-solutions' },
  { id: 'chem1-2m-17', text: 'State and explain the conditions for an ideal solution. Why is a perfectly ideal solution rare?', category: '2-mark', topicId: '1-5-1-ideal-solutions' },

  // 1.5.2 Non-ideal Solutions
  { id: 'chem1-1m-42', text: "What is a non-ideal solution? When does it show positive deviation from Raoult's law?", category: '1-mark', topicId: '1-5-2-nonideal-solutions' },
  { id: 'chem1-1m-43', text: "When does a solution show negative deviation from Raoult's law?", category: '1-mark', topicId: '1-5-2-nonideal-solutions' },
  { id: 'chem1-1m-44', text: "Give one example of a solution showing positive deviation from Raoult's law.", category: '1-mark', topicId: '1-5-2-nonideal-solutions' },
  { id: 'chem1-1m-45', text: "Give one example of a solution showing negative deviation from Raoult's law.", category: '1-mark', topicId: '1-5-2-nonideal-solutions' },
  { id: 'chem1-1m-46', text: 'What is an azeotrope?', category: '1-mark', topicId: '1-5-2-nonideal-solutions' },
  { id: 'chem1-1m-47', text: 'What is a minimum boiling azeotrope? Give one example.', category: '1-mark', topicId: '1-5-2-nonideal-solutions' },
  { id: 'chem1-1m-48', text: 'What is a maximum boiling azeotrope? Give one example.', category: '1-mark', topicId: '1-5-2-nonideal-solutions' },
  { id: 'chem1-2m-18', text: "Explain why a mixture of ethanol and acetone shows positive deviation from Raoult's law. What is the effect on ΔmixH?", category: '2-mark', topicId: '1-5-2-nonideal-solutions' },
  { id: 'chem1-2m-19', text: "Explain why a mixture of chloroform and acetone shows negative deviation from Raoult's law. Draw the hydrogen bonding interaction between them.", category: '2-mark', topicId: '1-5-2-nonideal-solutions' },
  { id: 'chem1-2m-20', text: "Distinguish between positive and negative deviations from Raoult's law in terms of: (a) intermolecular interactions, (b) vapour pressure, (c) ΔmixH, (d) ΔmixV.", category: '2-mark', topicId: '1-5-2-nonideal-solutions' },
  { id: 'chem1-2m-21', text: 'What are azeotropes? Why is it not possible to separate the components of an azeotrope by fractional distillation? Give one example each of minimum and maximum boiling azeotropes.', category: '2-mark', topicId: '1-5-2-nonideal-solutions' },

  // 1.6 Colligative Properties
  { id: 'chem1-1m-49', text: 'Define colligative properties. Name four colligative properties.', category: '1-mark', topicId: '1-6-colligative-properties' },
  { id: 'chem1-1m-50', text: 'Why do colligative properties depend on the number of solute particles and not on their nature?', category: '1-mark', topicId: '1-6-colligative-properties' },

  // 1.6.1 Relative Lowering of Vapour Pressure
  { id: 'chem1-1m-51', text: 'Define relative lowering of vapour pressure. Write its expression.', category: '1-mark', topicId: '1-6-1-relative-lowering-vp' },
  { id: 'chem1-1m-52', text: 'State that relative lowering of vapour pressure equals the mole fraction of the solute. Write the mathematical expression.', category: '1-mark', topicId: '1-6-1-relative-lowering-vp' },
  { id: 'chem1-2m-22', text: 'Derive the expression for relative lowering of vapour pressure: (p₁° - p₁)/p₁° = x₂. How can this be used to determine the molar mass of a solute?', category: '2-mark', topicId: '1-6-1-relative-lowering-vp' },
  { id: 'chem1-num-11', text: 'The vapour pressure of pure benzene at a certain temperature is 0.850 bar. A non-volatile, non-electrolyte solid weighing 0.5 g is added to 39.0 g of benzene (M = 78 g mol⁻¹). Vapour pressure of solution is 0.845 bar. Find the molar mass of the solid.', category: 'numerical', topicId: '1-6-1-relative-lowering-vp' },

  // 1.6.2 Elevation of Boiling Point
  { id: 'chem1-1m-53', text: 'Define elevation of boiling point (ΔTb). Write the expression relating ΔTb to molality.', category: '1-mark', topicId: '1-6-2-elevation-boiling-point' },
  { id: 'chem1-1m-54', text: 'What is the molal elevation constant (Kb)? What are its units?', category: '1-mark', topicId: '1-6-2-elevation-boiling-point' },
  { id: 'chem1-1m-55', text: 'Write the formula to calculate molar mass of a solute using elevation of boiling point.', category: '1-mark', topicId: '1-6-2-elevation-boiling-point' },
  { id: 'chem1-1m-56', text: 'What is the boiling point elevation for 1 mol of sucrose dissolved in 1000 g of water? (Kb = 0.52 K kg mol⁻¹)', category: '1-mark', topicId: '1-6-2-elevation-boiling-point' },
  { id: 'chem1-2m-23', text: 'Derive the expression for elevation of boiling point and obtain the formula for molar mass of solute: M₂ = (1000 × w₂ × Kb) / (ΔTb × w₁).', category: '2-mark', topicId: '1-6-2-elevation-boiling-point' },
  { id: 'chem1-2m-24', text: 'Explain why the boiling point of a solution is always higher than that of the pure solvent.', category: '2-mark', topicId: '1-6-2-elevation-boiling-point' },
  { id: 'chem1-num-12', text: '18 g of glucose (C₆H₁₂O₆) is dissolved in 1 kg of water. At what temperature will water boil at 1.013 bar? Kb for water is 0.52 K kg mol⁻¹.', category: 'numerical', topicId: '1-6-2-elevation-boiling-point' },
  { id: 'chem1-num-13', text: 'The boiling point of benzene is 353.23 K. When 1.80 g of a non-volatile solute was dissolved in 90 g of benzene, boiling point is raised to 354.11 K. Calculate the molar mass of the solute. Kb = 2.53 K kg mol⁻¹.', category: 'numerical', topicId: '1-6-2-elevation-boiling-point' },

  // 1.6.3 Depression of Freezing Point
  { id: 'chem1-1m-57', text: 'Define depression of freezing point (ΔTf). Write the expression relating ΔTf to molality.', category: '1-mark', topicId: '1-6-3-depression-freezing-point' },
  { id: 'chem1-1m-58', text: 'What is the molal depression constant (Kf) or cryoscopic constant? What are its units?', category: '1-mark', topicId: '1-6-3-depression-freezing-point' },
  { id: 'chem1-1m-59', text: 'Write the formula to determine molar mass using depression of freezing point.', category: '1-mark', topicId: '1-6-3-depression-freezing-point' },
  { id: 'chem1-1m-60', text: 'Give the values of Kf and Kb for water.', category: '1-mark', topicId: '1-6-3-depression-freezing-point' },
  { id: 'chem1-2m-25', text: 'Explain why the freezing point of a solution is lower than that of the pure solvent. Derive the expression for depression of freezing point.', category: '2-mark', topicId: '1-6-3-depression-freezing-point' },
  { id: 'chem1-2m-26', text: 'Derive the formula M₂ = (Kf × w₂ × 1000) / (ΔTf × w₁) for finding molar mass of the solute using depression in freezing point.', category: '2-mark', topicId: '1-6-3-depression-freezing-point' },
  { id: 'chem1-num-14', text: '45 g of ethylene glycol (C₂H₆O₂) is mixed with 600 g of water. Calculate: (a) the freezing point depression, (b) the freezing point of the solution. Kf = 1.86 K kg mol⁻¹.', category: 'numerical', topicId: '1-6-3-depression-freezing-point' },
  { id: 'chem1-num-15', text: '1.00 g of a non-electrolyte solute dissolved in 50 g of benzene lowered the freezing point by 0.40 K. Kf for benzene is 5.12 K kg mol⁻¹. Find the molar mass of the solute.', category: 'numerical', topicId: '1-6-3-depression-freezing-point' },
  { id: 'chem1-num-16', text: 'Vapour pressure of pure water at 298 K is 23.8 mm Hg. 50 g of urea (NH₂CONH₂) is dissolved in 850 g of water. Calculate the vapour pressure of water and its relative lowering.', category: 'numerical', topicId: '1-6-3-depression-freezing-point' },
  { id: 'chem1-num-17', text: 'Boiling point of water at 750 mm Hg is 99.63°C. How much sucrose is to be added to 500 g of water such that it boils at 100°C?', category: 'numerical', topicId: '1-6-3-depression-freezing-point' },
  { id: 'chem1-num-18', text: 'Calculate the mass of ascorbic acid (Vitamin C, C₆H₈O₆) to be dissolved in 75 g of acetic acid to lower its melting point by 1.5°C. Kf = 3.9 K kg mol⁻¹.', category: 'numerical', topicId: '1-6-3-depression-freezing-point' },

  // 1.6.4 Osmosis and Osmotic Pressure
  { id: 'chem1-1m-61', text: 'What is osmosis? Define a semipermeable membrane.', category: '1-mark', topicId: '1-6-4-osmosis-osmotic-pressure' },
  { id: 'chem1-1m-62', text: 'Define osmotic pressure. Write its formula for dilute solutions.', category: '1-mark', topicId: '1-6-4-osmosis-osmotic-pressure' },
  { id: 'chem1-1m-63', text: 'In which direction do solvent molecules always flow during osmosis?', category: '1-mark', topicId: '1-6-4-osmosis-osmotic-pressure' },
  { id: 'chem1-1m-64', text: 'What are isotonic solutions? Give one example.', category: '1-mark', topicId: '1-6-4-osmosis-osmotic-pressure' },
  { id: 'chem1-1m-65', text: 'What are hypertonic and hypotonic solutions?', category: '1-mark', topicId: '1-6-4-osmosis-osmotic-pressure' },
  { id: 'chem1-1m-66', text: 'Why is osmotic pressure preferred over other colligative properties for determining molar mass of biomolecules?', category: '1-mark', topicId: '1-6-4-osmosis-osmotic-pressure' },
  { id: 'chem1-2m-27', text: 'Define osmotic pressure. Derive the expression: ΠV = n₂RT and hence M₂ = w₂RT / ΠV.', category: '2-mark', topicId: '1-6-4-osmosis-osmotic-pressure' },
  { id: 'chem1-2m-28', text: 'Explain the following observations based on osmosis: (a) raw mangoes shrivel in brine, (b) wilted flowers revive in fresh water, (c) blood cells swell in hypotonic solution.', category: '2-mark', topicId: '1-6-4-osmosis-osmotic-pressure' },
  { id: 'chem1-2m-29', text: 'Why is the osmotic pressure method particularly advantageous over other colligative property methods for determining molar masses of polymers and proteins?', category: '2-mark', topicId: '1-6-4-osmosis-osmotic-pressure' },
  { id: 'chem1-num-19', text: '200 cm³ of an aqueous solution of a protein contains 1.26 g of protein. The osmotic pressure at 300 K is 2.57 × 10⁻³ bar. Calculate the molar mass of the protein. (R = 0.083 L bar mol⁻¹ K⁻¹)', category: 'numerical', topicId: '1-6-4-osmosis-osmotic-pressure' },
  { id: 'chem1-num-20', text: 'Calculate the osmotic pressure in pascals exerted by a solution prepared by dissolving 1.0 g of polymer of molar mass 185,000 in 450 mL of water at 37°C.', category: 'numerical', topicId: '1-6-4-osmosis-osmotic-pressure' },

  // 1.6.5 Reverse Osmosis
  { id: 'chem1-1m-67', text: 'What is reverse osmosis?', category: '1-mark', topicId: '1-6-5-reverse-osmosis' },
  { id: 'chem1-1m-68', text: 'For what purpose is reverse osmosis used commercially?', category: '1-mark', topicId: '1-6-5-reverse-osmosis' },
  { id: 'chem1-1m-69', text: 'What is the membrane used in reverse osmosis and what makes it selective?', category: '1-mark', topicId: '1-6-5-reverse-osmosis' },
  { id: 'chem1-2m-30', text: 'Explain the process of reverse osmosis. How is it used in desalination of sea water?', category: '2-mark', topicId: '1-6-5-reverse-osmosis' },

  // 1.7 Abnormal Molar Masses
  { id: 'chem1-1m-70', text: 'What is abnormal molar mass? When is it observed?', category: '1-mark', topicId: '1-7-abnormal-molar-masses' },
  { id: 'chem1-1m-71', text: "Define van't Hoff factor i. Write its expression in terms of molar mass.", category: '1-mark', topicId: '1-7-abnormal-molar-masses' },
  { id: 'chem1-1m-72', text: 'What is the value of i for KCl in aqueous solution? For ethanoic acid in benzene?', category: '1-mark', topicId: '1-7-abnormal-molar-masses' },
  { id: 'chem1-1m-73', text: 'When is i > 1 and when is i < 1? Give examples.', category: '1-mark', topicId: '1-7-abnormal-molar-masses' },
  { id: 'chem1-1m-74', text: "Write the modified expression for depression of freezing point and elevation of boiling point including van't Hoff factor.", category: '1-mark', topicId: '1-7-abnormal-molar-masses' },
  { id: 'chem1-2m-31', text: 'Explain why the experimentally determined molar mass of KCl in water is lower than its actual molar mass.', category: '2-mark', topicId: '1-7-abnormal-molar-masses' },
  { id: 'chem1-2m-32', text: 'Explain dimerisation of acetic acid in benzene. Why does this lead to an abnormal (higher) molar mass?', category: '2-mark', topicId: '1-7-abnormal-molar-masses' },
  { id: 'chem1-2m-33', text: "Define van't Hoff factor i. Write three equivalent expressions for i. State its value for (a) associated solutes, (b) dissociated solutes.", category: '2-mark', topicId: '1-7-abnormal-molar-masses' },
  { id: 'chem1-2m-34', text: "Write the modified colligative property equations using van't Hoff factor i for: (a) relative lowering of vapour pressure, (b) elevation of boiling point, (c) depression of freezing point, (d) osmotic pressure.", category: '2-mark', topicId: '1-7-abnormal-molar-masses' },
  { id: 'chem1-num-21', text: '2 g of benzoic acid (C₆H₅COOH) dissolved in 25 g of benzene shows depression in freezing point equal to 1.62 K. Kf = 4.9 K kg mol⁻¹. What is the percentage association if it forms a dimer?', category: 'numerical', topicId: '1-7-abnormal-molar-masses' },
  { id: 'chem1-num-22', text: "0.6 mL of acetic acid (density 1.06 g mL⁻¹) is dissolved in 1 litre of water. Depression in freezing point = 0.0205°C. Calculate van't Hoff factor and dissociation constant of acid.", category: 'numerical', topicId: '1-7-abnormal-molar-masses' },
  { id: 'chem1-3m-1', text: "(a) What is van't Hoff factor? (b) How does it account for association and dissociation? (c) For K₂SO₄ in dilute aqueous solution, what is the expected value of i assuming complete dissociation?", category: '3-mark', topicId: '1-7-abnormal-molar-masses' },
  { id: 'chem1-3m-2', text: "(a) Define abnormal molar mass. (b) Explain with suitable examples when experimentally determined molar mass is (i) less than (ii) greater than the true molar mass. (c) How does van't Hoff factor correct the colligative property equations?", category: '3-mark', topicId: '1-7-abnormal-molar-masses' },

  // NCERT Exercise Questions
  { id: 'chem1-ncert-1', text: 'Define the term solution. How many types of solutions are formed? Write briefly about each type with an example.', category: '2-mark', topicId: '1-1-types-of-solutions' },
  { id: 'chem1-ncert-2', text: 'Give an example of a solid solution in which the solute is a gas.', category: '1-mark', topicId: '1-1-types-of-solutions' },
  { id: 'chem1-ncert-3', text: 'Define: (i) Mole fraction, (ii) Molality, (iii) Molarity, (iv) Mass percentage.', category: '2-mark', topicId: '1-2-concentration' },
  { id: 'chem1-ncert-4', text: 'Concentrated nitric acid is 68% by mass in aqueous solution. What should be the molarity if density = 1.504 g mL⁻¹?', category: 'numerical', topicId: '1-2-concentration' },
  { id: 'chem1-ncert-5', text: 'A solution of glucose is labelled 10% w/w. Find molality and mole fraction of each component. If density = 1.2 g mL⁻¹, find molarity.', category: 'numerical', topicId: '1-2-concentration' },
  { id: 'chem1-ncert-6', text: 'A solution is obtained by mixing 300 g of 25% solution and 400 g of 40% solution by mass. Calculate mass percentage of resulting solution.', category: 'numerical', topicId: '1-2-concentration' },
  { id: 'chem1-ncert-7', text: 'A sample of drinking water is contaminated with CHCl₃ at 15 ppm (by mass). (i) Express this in percent by mass. (ii) Determine molality of chloroform.', category: 'numerical', topicId: '1-2-concentration' },
  { id: 'chem1-ncert-8', text: "State Henry's law and mention some important applications.", category: '2-mark', topicId: '1-3-2-solubility-gas-liquid' },
  { id: 'chem1-ncert-9', text: "What is meant by positive and negative deviations from Raoult's law? How is the sign of ΔmixH related to these deviations?", category: '2-mark', topicId: '1-5-2-nonideal-solutions' },
  { id: 'chem1-ncert-10', text: 'An aqueous solution of 2% non-volatile solute exerts pressure of 1.004 bar at the normal boiling point of the solvent. What is the molar mass of the solute?', category: 'numerical', topicId: '1-6-1-relative-lowering-vp' },
  { id: 'chem1-ncert-11', text: 'Vapour pressure of water is 12.3 kPa at 300 K. Calculate vapour pressure of 1 molal solution of a non-volatile solute.', category: 'numerical', topicId: '1-4-3-solid-in-liquid-vp' },
  { id: 'chem1-ncert-12', text: 'A 5% solution (by mass) of cane sugar has freezing point 271 K. Calculate freezing point of 5% glucose in water. (FP of pure water = 273.15 K)', category: 'numerical', topicId: '1-6-3-depression-freezing-point' },
  { id: 'chem1-ncert-13', text: 'At 300 K, 36 g of glucose in 1 litre solution has osmotic pressure 4.98 bar. If osmotic pressure is 1.52 bar at same temperature, what is its concentration?', category: 'numerical', topicId: '1-6-4-osmosis-osmotic-pressure' },
  { id: 'chem1-ncert-14', text: 'Calculate depression in freezing point of water when 10 g of CH₃CH₂CHClCOOH is added to 250 g of water. Ka = 1.4 × 10⁻³, Kf = 1.86 K kg mol⁻¹.', category: 'numerical', topicId: '1-7-abnormal-molar-masses' },
  { id: 'chem1-ncert-15', text: "19.5 g of CH₂FCOOH dissolved in 500 g of water. Depression in freezing point is 1.00°C. Calculate van't Hoff factor and dissociation constant.", category: 'numerical', topicId: '1-7-abnormal-molar-masses' },
  { id: 'chem1-ncert-16', text: 'Determine the amount of CaCl₂ (i = 2.47) dissolved in 2.5 litre of water such that osmotic pressure is 0.75 atm at 27°C.', category: 'numerical', topicId: '1-7-abnormal-molar-masses' },

  // Board Pattern Questions - 1 Mark
  { id: 'chem1-bp-1m-1', text: "State Henry's law.", category: '1-mark', topicId: '1-3-2-solubility-gas-liquid' },
  { id: 'chem1-bp-1m-2', text: 'Define osmotic pressure.', category: '1-mark', topicId: '1-6-4-osmosis-osmotic-pressure' },
  { id: 'chem1-bp-1m-3', text: "What is van't Hoff factor?", category: '1-mark', topicId: '1-7-abnormal-molar-masses' },
  { id: 'chem1-bp-1m-4', text: 'Define molality.', category: '1-mark', topicId: '1-2-concentration' },
  { id: 'chem1-bp-1m-5', text: 'What are colligative properties? Name two.', category: '1-mark', topicId: '1-6-colligative-properties' },
  { id: 'chem1-bp-1m-6', text: 'What is a semipermeable membrane?', category: '1-mark', topicId: '1-6-4-osmosis-osmotic-pressure' },
  { id: 'chem1-bp-1m-7', text: 'Define relative lowering of vapour pressure.', category: '1-mark', topicId: '1-6-1-relative-lowering-vp' },
  { id: 'chem1-bp-1m-8', text: 'What is an azeotrope?', category: '1-mark', topicId: '1-5-2-nonideal-solutions' },
  { id: 'chem1-bp-1m-9', text: 'Define elevation of boiling point.', category: '1-mark', topicId: '1-6-2-elevation-boiling-point' },
  { id: 'chem1-bp-1m-10', text: "When does van't Hoff factor i equal less than 1?", category: '1-mark', topicId: '1-7-abnormal-molar-masses' },

  // Board Pattern Questions - 2 Mark
  { id: 'chem1-bp-2m-1', text: 'Explain why molality is preferred over molarity for expressing concentration of solutions.', category: '2-mark', topicId: '1-2-concentration' },
  { id: 'chem1-bp-2m-2', text: "State Henry's law. Give two applications in industry/biology.", category: '2-mark', topicId: '1-3-2-solubility-gas-liquid' },
  { id: 'chem1-bp-2m-3', text: 'Distinguish between ideal and non-ideal solutions.', category: '2-mark', topicId: '1-5-ideal-nonideal' },
  { id: 'chem1-bp-2m-4', text: 'What is osmosis? Distinguish between isotonic, hypertonic, and hypotonic solutions.', category: '2-mark', topicId: '1-6-4-osmosis-osmotic-pressure' },
  { id: 'chem1-bp-2m-5', text: 'Why does the addition of a non-volatile solute: (a) lower the vapour pressure, (b) elevate the boiling point, (c) depress the freezing point?', category: '2-mark', topicId: '1-6-colligative-properties' },
  { id: 'chem1-bp-2m-6', text: 'What is an abnormal molar mass? When is it higher and when is it lower than the actual value? Give one example of each.', category: '2-mark', topicId: '1-7-abnormal-molar-masses' },
  { id: 'chem1-bp-2m-7', text: 'Calculate the molality and mole fraction of KI in 20% (mass/mass) KI solution with density 1.202 g mL⁻¹.', category: 'numerical', topicId: '1-2-concentration' },
  { id: 'chem1-bp-2m-8', text: 'Explain reverse osmosis. State one industrial application.', category: '2-mark', topicId: '1-6-5-reverse-osmosis' },

  // Board Pattern Questions - 3 Mark
  { id: 'chem1-bp-3m-1', text: "(a) State Raoult's law for a solution of two volatile liquids. (b) Derive the expression for total vapour pressure. (c) How does the vapour phase composition differ from liquid phase composition?", category: '3-mark', topicId: '1-4-1-liquid-liquid-solutions' },
  { id: 'chem1-bp-3m-2', text: '(a) What are colligative properties? (b) Explain the relation between osmotic pressure and concentration. (c) A solution of 5.85 g NaCl in 1 litre water at 27°C. If NaCl is completely dissociated (i = 2), calculate osmotic pressure. (R = 0.082 L atm mol⁻¹ K⁻¹)', category: '3-mark', topicId: '1-6-4-osmosis-osmotic-pressure' },
  { id: 'chem1-bp-3m-3', text: "(a) State Henry's law. (b) Explain the effect of temperature and pressure on solubility of a gas in a liquid. (c) Why does the solubility of oxygen decrease with rise in temperature? What is its ecological consequence?", category: '3-mark', topicId: '1-3-2-solubility-gas-liquid' },
  { id: 'chem1-bp-3m-4', text: "(a) Define van't Hoff factor. (b) Write modified colligative equations using i. (c) 2.56 g of sulfur dissolved in 100 g of CS₂ lowers the freezing point by 0.383 K. Kf = 3.83 K kg mol⁻¹. Find atomicity of sulfur in this solution.", category: '3-mark', topicId: '1-7-abnormal-molar-masses' },

  // Board Pattern Questions - 5 Mark
  { id: 'chem1-bp-5m-1', text: "(a) Define and distinguish between molarity and molality. (b) Explain why molality is temperature-independent. (c) A solution contains 5% by mass glucose in water. Calculate: (i) mole fraction of glucose and water, (ii) molality of glucose, (iii) if density = 1.02 g mL⁻¹, molarity of glucose. (d) Why are mass %, ppm, mole fraction, and molality temperature-independent?", category: '5-mark', topicId: '1-2-concentration' },
  { id: 'chem1-bp-5m-2', text: "(a) State Raoult's law and Henry's law. Show that Raoult's law is a special case of Henry's law. (b) What are ideal and non-ideal solutions? Give two examples of each. (c) Explain the concept of azeotropes. Why cannot their components be separated by fractional distillation? (d) Explain with molecular reason why ethanol–water shows positive deviation from Raoult's law.", category: '5-mark', topicId: '1-5-2-nonideal-solutions' },
  { id: 'chem1-bp-5m-3', text: '(a) Define colligative properties. List all four with their expressions. (b) Explain how each is used to determine molar mass of solute. (c) A 0.5 g sample of a polymer is dissolved in 100 g of water and shows a depression of 0.004 K. Kf = 1.86 K kg mol⁻¹. Calculate molar mass. (d) Why is osmotic pressure method preferred for polymers over other colligative property methods?', category: '5-mark', topicId: '1-6-colligative-properties' },

  // Assertion-Reason Questions
  { id: 'chem1-ar-1', text: "Assertion: Molality is preferred over molarity in experiments involving temperature changes.\nReason: Molality is independent of temperature while molarity depends on temperature.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '1-2-concentration' },
  { id: 'chem1-ar-2', text: "Assertion: The solubility of gases in liquids decreases with increase in temperature.\nReason: Dissolution of gas in liquid is an exothermic process.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '1-3-2-solubility-gas-liquid' },
  { id: 'chem1-ar-3', text: "Assertion: An ideal solution obeys Raoult's law over the entire range of concentration.\nReason: In ideal solutions, solute-solute, solvent-solvent and solute-solvent interactions are identical.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '1-5-1-ideal-solutions' },
  { id: 'chem1-ar-4', text: "Assertion: Ethanol-water mixture shows positive deviation from Raoult's law.\nReason: The hydrogen bonding between ethanol and water is stronger than between ethanol-ethanol and water-water.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '1-5-2-nonideal-solutions' },
  { id: 'chem1-ar-5', text: "Assertion: The boiling point of a solution is higher than that of the pure solvent.\nReason: The vapour pressure of a solution containing non-volatile solute is lower than that of the pure solvent.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '1-6-2-elevation-boiling-point' },
  { id: 'chem1-ar-6', text: "Assertion: Osmotic pressure method is preferred for determining molar mass of polymers.\nReason: Osmotic pressure is measured at room temperature and even a small concentration produces significant osmotic pressure.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '1-6-4-osmosis-osmotic-pressure' },

  // Case Study Questions
  { id: 'chem1-case-1', text: "Case Study: A student prepared solutions of glucose and sodium chloride of equal molality in water. She measured the freezing point depression and found that NaCl solution showed almost double the depression compared to glucose solution.\n\nBased on this:\n(a) Why does NaCl show higher freezing point depression than glucose?\n(b) What is the van't Hoff factor for NaCl assuming complete dissociation?\n(c) Write the modified expression for freezing point depression.\n(d) If Kf for water is 1.86 K kg mol⁻¹ and molality is 0.1 m, calculate ΔTf for both solutions.\n(e) What would happen if we used CaCl₂ instead of NaCl?", category: 'case-study', topicId: '1-7-abnormal-molar-masses' },
  { id: 'chem1-case-2', text: "Case Study: In a soft drink manufacturing plant, CO₂ gas is dissolved in water under high pressure (about 3-4 atm) to make carbonated beverages. When the bottle is opened, the pressure drops and gas escapes with effervescence.\n\nBased on this:\n(a) Which law governs the dissolution of CO₂ in water?\n(b) Write the mathematical expression for this law.\n(c) Why is the drink bottled under high pressure?\n(d) Why does the drink go 'flat' when left open?\n(e) How does temperature affect the fizziness of the drink?", category: 'case-study', topicId: '1-3-2-solubility-gas-liquid' },
  { id: 'chem1-case-3', text: "Case Study: Reverse osmosis (RO) water purifiers are commonly used in households. In this process, water is forced through a semipermeable membrane under pressure greater than the osmotic pressure of the solution.\n\nBased on this:\n(a) What is osmosis and osmotic pressure?\n(b) Why is the process called 'reverse' osmosis?\n(c) What pressure is required to purify seawater with osmotic pressure of 30 atm?\n(d) What type of impurities can RO remove?\n(e) Why is RO preferred over distillation for desalination?", category: 'case-study', topicId: '1-6-5-reverse-osmosis' },

  // HOTS Questions
  { id: 'chem1-hots-1', text: "Why is the van't Hoff factor for acetic acid in benzene less than 1 but greater than 0.5? What does this indicate about the association process?", category: 'hots', topicId: '1-7-abnormal-molar-masses' },
  { id: 'chem1-hots-2', text: 'Explain why azeotropes behave as if they were pure substances during distillation even though they are mixtures.', category: 'hots', topicId: '1-5-2-nonideal-solutions' },
  { id: 'chem1-hots-3', text: 'A solution of chloroform and acetone shows negative deviation from Raoults law while ethanol and water shows positive deviation. Both involve hydrogen bonding. Explain this apparent contradiction.', category: 'hots', topicId: '1-5-2-nonideal-solutions' },
  { id: 'chem1-hots-4', text: 'Why is antifreeze added to car radiators in cold countries and why is the same substance also effective in summer?', category: 'hots', topicId: '1-6-colligative-properties' },
  { id: 'chem1-hots-5', text: 'If you were to determine the molar mass of hemoglobin (M ≈ 65,000), which colligative property would you use and why? Calculate the expected freezing point depression for a 1% solution.', category: 'hots', topicId: '1-6-4-osmosis-osmotic-pressure' },
];

// Unit 2: Electrochemistry - Question Bank
const unit2Questions: Question[] = [
  // 2.1 Electrochemical Cells
  { id: 'chem2-1m-1', text: 'Define an electrochemical cell.', category: '1-mark', topicId: '2-1-electrochemical-cells' },
  { id: 'chem2-1m-2', text: 'What is a galvanic (voltaic) cell? Give one example.', category: '1-mark', topicId: '2-1-electrochemical-cells' },
  { id: 'chem2-1m-3', text: 'What is an electrolytic cell?', category: '1-mark', topicId: '2-1-electrochemical-cells' },
  { id: 'chem2-1m-4', text: 'State the key difference between a galvanic cell and an electrolytic cell.', category: '1-mark', topicId: '2-1-electrochemical-cells' },
  { id: 'chem2-1m-5', text: 'Name the cell used to convert chemical energy into electrical energy.', category: '1-mark', topicId: '2-1-electrochemical-cells' },
  { id: 'chem2-1m-6', text: 'What happens in the Daniell cell when an external potential equal to 1.1 V is applied opposing the cell potential?', category: '1-mark', topicId: '2-1-electrochemical-cells' },
  { id: 'chem2-1m-7', text: 'What is the standard cell potential of the Daniell cell? State the condition for this value.', category: '1-mark', topicId: '2-1-electrochemical-cells' },
  { id: 'chem2-2m-1', text: 'Differentiate between a galvanic cell and an electrolytic cell on the basis of: (i) energy conversion, (ii) spontaneity of reaction.', category: '2-mark', topicId: '2-1-electrochemical-cells' },
  { id: 'chem2-2m-2', text: 'Describe what happens in the Daniell cell as the external opposing potential is gradually increased from 0 to beyond 1.1 V.', category: '2-mark', topicId: '2-1-electrochemical-cells' },
  { id: 'chem2-2m-3', text: 'Write the cell reaction that takes place in a Daniell cell. Identify the anode and cathode.', category: '2-mark', topicId: '2-1-electrochemical-cells' },
  { id: 'chem2-3m-1', text: 'With the help of a labelled diagram, explain the construction and working of a Daniell cell. Write the half-cell reactions and net cell reaction.', category: '3-mark', topicId: '2-1-electrochemical-cells' },
  { id: 'chem2-3m-2', text: 'Explain the role of the salt bridge in an electrochemical cell. What happens if the salt bridge is removed?', category: '3-mark', topicId: '2-1-electrochemical-cells' },

  // 2.2 Galvanic Cells
  { id: 'chem2-1m-8', text: 'Define electrode potential.', category: '1-mark', topicId: '2-2-galvanic-cells' },
  { id: 'chem2-1m-9', text: 'Define standard electrode potential.', category: '1-mark', topicId: '2-2-galvanic-cells' },
  { id: 'chem2-1m-10', text: 'What is the IUPAC convention for naming standard electrode potentials?', category: '1-mark', topicId: '2-2-galvanic-cells' },
  { id: 'chem2-1m-11', text: 'What are half-cells (redox couples)? Give one example.', category: '1-mark', topicId: '2-2-galvanic-cells' },
  { id: 'chem2-1m-12', text: 'In which half-cell does oxidation take place in a galvanic cell? What is its sign of potential?', category: '1-mark', topicId: '2-2-galvanic-cells' },
  { id: 'chem2-1m-13', text: 'In which half-cell does reduction take place in a galvanic cell? What is its sign of potential?', category: '1-mark', topicId: '2-2-galvanic-cells' },
  { id: 'chem2-1m-14', text: 'Write the cell notation for the cell: Cu(s) + 2Ag⁺(aq) → Cu²⁺(aq) + 2Ag(s).', category: '1-mark', topicId: '2-2-galvanic-cells' },
  { id: 'chem2-1m-15', text: 'Write the formula for cell emf in terms of electrode potentials.', category: '1-mark', topicId: '2-2-galvanic-cells' },
  { id: 'chem2-1m-16', text: 'What are inert electrodes? Give one example. Why are they used?', category: '1-mark', topicId: '2-2-galvanic-cells' },
  { id: 'chem2-2m-4', text: 'For the cell reaction Cu(s) + 2Ag⁺(aq) → Cu²⁺(aq) + 2Ag(s), write: (i) the half-cell reactions at anode and cathode, (ii) the cell notation.', category: '2-mark', topicId: '2-2-galvanic-cells' },
  { id: 'chem2-2m-5', text: 'Explain the concept of electrode potential using the electrode-electrolyte interface.', category: '2-mark', topicId: '2-2-galvanic-cells' },
  { id: 'chem2-2m-6', text: 'What is the significance of positive and negative standard electrode potentials?', category: '2-mark', topicId: '2-2-galvanic-cells' },
  { id: 'chem2-2m-7', text: 'Explain why fluorine gas is the strongest oxidising agent and lithium metal is the strongest reducing agent, using standard electrode potential data.', category: '2-mark', topicId: '2-2-galvanic-cells' },
  { id: 'chem2-2m-8', text: 'State two applications of standard electrode potential values.', category: '2-mark', topicId: '2-2-galvanic-cells' },
  { id: 'chem2-3m-3', text: 'Explain the following with reference to standard electrode potentials: (i) Why does Cu not dissolve in HCl? (ii) Why does Zn dissolve in HCl? (iii) Why is Cu dissolved in HNO₃?', category: '3-mark', topicId: '2-2-galvanic-cells' },
  { id: 'chem2-3m-4', text: 'Arrange the following metals in increasing order of reducing power: Mg, Cu, Zn, Fe, Al. Justify your answer using standard electrode potential values.', category: '3-mark', topicId: '2-2-galvanic-cells' },

  // 2.2.1 Measurement of Electrode Potential
  { id: 'chem2-1m-17', text: 'What is the Standard Hydrogen Electrode (SHE)? Write its representation.', category: '1-mark', topicId: '2-2-1-measurement-electrode-potential' },
  { id: 'chem2-1m-18', text: 'What value of potential is assigned to the Standard Hydrogen Electrode (SHE)?', category: '1-mark', topicId: '2-2-1-measurement-electrode-potential' },
  { id: 'chem2-1m-19', text: 'What are the standard conditions maintained in the Standard Hydrogen Electrode?', category: '1-mark', topicId: '2-2-1-measurement-electrode-potential' },
  { id: 'chem2-1m-20', text: 'Write the half-cell reaction occurring at the SHE.', category: '1-mark', topicId: '2-2-1-measurement-electrode-potential' },
  { id: 'chem2-1m-21', text: 'What is the measured emf of the cell: Pt(s)|H₂(g,1bar)|H⁺(aq,1M)||Cu²⁺(aq,1M)|Cu? What does this represent?', category: '1-mark', topicId: '2-2-1-measurement-electrode-potential' },
  { id: 'chem2-2m-9', text: 'Explain how the standard electrode potential of a Mg²⁺/Mg system would be determined experimentally.', category: '2-mark', topicId: '2-2-1-measurement-electrode-potential' },
  { id: 'chem2-2m-10', text: 'What is the measured emf of the cell: Pt(s)|H₂(g,1bar)|H⁺(aq,1M)||Zn²⁺(aq,1M)|Zn? What does the negative value indicate?', category: '2-mark', topicId: '2-2-1-measurement-electrode-potential' },
  { id: 'chem2-2m-11', text: 'Why can the potential of an individual half-cell not be measured? How is this problem resolved?', category: '2-mark', topicId: '2-2-1-measurement-electrode-potential' },

  // 2.3 Nernst Equation
  { id: 'chem2-1m-22', text: 'State the Nernst equation for a general electrode reaction: Mⁿ⁺(aq) + ne⁻ → M(s).', category: '1-mark', topicId: '2-3-nernst-equation' },
  { id: 'chem2-1m-23', text: 'Write the general Nernst equation for a cell reaction: aA + bB ⇌ cC + dD.', category: '1-mark', topicId: '2-3-nernst-equation' },
  { id: 'chem2-1m-24', text: 'What does Q represent in the Nernst equation?', category: '1-mark', topicId: '2-3-nernst-equation' },
  { id: 'chem2-1m-25', text: 'Write the Nernst equation for the Daniell cell at 298 K (using log base 10).', category: '1-mark', topicId: '2-3-nernst-equation' },
  { id: 'chem2-1m-26', text: 'What is the value of 2.303RT/F at 298 K?', category: '1-mark', topicId: '2-3-nernst-equation' },
  { id: 'chem2-1m-27', text: 'How does E(cell) change if [Cu²⁺] increases in the Daniell cell?', category: '1-mark', topicId: '2-3-nernst-equation' },
  { id: 'chem2-2m-12', text: 'Write the Nernst equation for the cell: Ni(s)|Ni²⁺(aq)||Ag⁺(aq)|Ag. Write the cell reaction and the Nernst expression.', category: '2-mark', topicId: '2-3-nernst-equation' },
  { id: 'chem2-num-1', text: 'For the cell: Mg(s)|Mg²⁺(0.130M)||Ag⁺(0.0001M)|Ag, E°cell = 3.17 V. Calculate E(cell).', category: 'numerical', topicId: '2-3-nernst-equation' },
  { id: 'chem2-2m-13', text: 'What are the values of R and F used in the Nernst equation? Write their SI units.', category: '2-mark', topicId: '2-3-nernst-equation' },
  { id: 'chem2-num-2', text: 'Calculate the emf of the cell in which the reaction is: Ni(s) + 2Ag⁺(0.002M) → Ni²⁺(0.160M) + 2Ag(s). E°cell = 1.05 V.', category: 'numerical', topicId: '2-3-nernst-equation' },
  { id: 'chem2-3m-5', text: 'Derive the Nernst equation for the Daniell cell. Show clearly the electrode potential expressions for cathode and anode and the final cell potential expression.', category: '3-mark', topicId: '2-3-nernst-equation' },
  { id: 'chem2-num-3', text: 'Calculate the potential of hydrogen electrode in contact with a solution whose pH is 10.', category: 'numerical', topicId: '2-3-nernst-equation' },
  { id: 'chem2-num-4', text: 'Write the Nernst equation and calculate emf at 298 K for the cell: Sn(s)|Sn²⁺(0.050M)||H⁺(0.020M)|H₂(g)(1 bar)|Pt(s).', category: 'numerical', topicId: '2-3-nernst-equation' },
  { id: 'chem2-5m-1', text: 'State the Nernst equation. Using it, derive expressions for: (i) electrode potential of a half-cell Mⁿ⁺/M, (ii) the cell emf for Daniell cell, (iii) the relationship between E°cell and equilibrium constant. Also calculate Kc for Daniell cell at 298 K.', category: '5-mark', topicId: '2-3-nernst-equation' },

  // 2.3.1 Equilibrium Constant from Nernst Equation
  { id: 'chem2-1m-28', text: 'Write the relationship between E°cell and equilibrium constant Kc (Nernst equation at equilibrium).', category: '1-mark', topicId: '2-3-1-equilibrium-constant' },
  { id: 'chem2-1m-29', text: 'What does E(cell) = 0 indicate about the state of the cell?', category: '1-mark', topicId: '2-3-1-equilibrium-constant' },
  { id: 'chem2-num-5', text: 'Calculate the equilibrium constant Kc for Daniell cell at 298 K given E°cell = 1.1 V.', category: 'numerical', topicId: '2-3-1-equilibrium-constant' },
  { id: 'chem2-num-6', text: 'Calculate the equilibrium constant Kc for the reaction: Cu(s) + 2Ag⁺(aq) → Cu²⁺(aq) + 2Ag(s); E°cell = 0.46 V.', category: 'numerical', topicId: '2-3-1-equilibrium-constant' },
  { id: 'chem2-num-7', text: 'For the cell: 2Fe³⁺(aq) + 2I⁻(aq) → 2Fe²⁺(aq) + I₂(s); E°cell = 0.236 V. Calculate the standard Gibbs energy and equilibrium constant at 298 K.', category: 'numerical', topicId: '2-3-1-equilibrium-constant' },

  // 2.3.2 Electrochemical Cell and Gibbs Energy
  { id: 'chem2-1m-30', text: 'Write the relationship between standard Gibbs energy (ΔrG°) and standard cell potential (E°cell).', category: '1-mark', topicId: '2-3-2-gibbs-energy' },
  { id: 'chem2-1m-31', text: 'Is E(cell) an intensive or extensive property? Is ΔrG intensive or extensive? Explain.', category: '1-mark', topicId: '2-3-2-gibbs-energy' },
  { id: 'chem2-1m-32', text: 'If the cell reaction is written twice (with coefficients doubled), how do E(cell) and ΔrG change?', category: '1-mark', topicId: '2-3-2-gibbs-energy' },
  { id: 'chem2-num-8', text: 'Calculate the standard Gibbs energy for: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s); E°cell = 1.1 V.', category: 'numerical', topicId: '2-3-2-gibbs-energy' },
  { id: 'chem2-2m-14', text: 'For the Zn-Cu cell, write ΔrG for: (i) Zn + Cu²⁺ → Zn²⁺ + Cu, (ii) 2Zn + 2Cu²⁺ → 2Zn²⁺ + 2Cu. Explain why they differ.', category: '2-mark', topicId: '2-3-2-gibbs-energy' },
  { id: 'chem2-num-9', text: 'Determine ΔrG° and E° for the button cell reaction: Zn(s) + Ag₂O(s) + H₂O(l) → Zn²⁺(aq) + 2Ag(s) + 2OH⁻(aq).', category: 'numerical', topicId: '2-3-2-gibbs-energy' },

  // 2.4 Conductance of Electrolytic Solutions
  { id: 'chem2-1m-33', text: 'Define resistance. Write its SI unit.', category: '1-mark', topicId: '2-4-conductance' },
  { id: 'chem2-1m-34', text: 'Define resistivity (specific resistance). Write its SI unit.', category: '1-mark', topicId: '2-4-conductance' },
  { id: 'chem2-1m-35', text: 'Write the formula relating resistance, resistivity, length and cross-section area.', category: '1-mark', topicId: '2-4-conductance' },
  { id: 'chem2-1m-36', text: 'Define conductance G. Write its SI unit.', category: '1-mark', topicId: '2-4-conductance' },
  { id: 'chem2-1m-37', text: 'Define conductivity (specific conductance). Write its SI unit.', category: '1-mark', topicId: '2-4-conductance' },
  { id: 'chem2-1m-38', text: 'Write the relation between conductivity and conductance.', category: '1-mark', topicId: '2-4-conductance' },
  { id: 'chem2-1m-39', text: 'What is the relationship: 1 S cm⁻¹ = ? S m⁻¹?', category: '1-mark', topicId: '2-4-conductance' },
  { id: 'chem2-1m-40', text: 'Differentiate between electronic conductance and ionic (electrolytic) conductance.', category: '1-mark', topicId: '2-4-conductance' },
  { id: 'chem2-1m-41', text: 'List any two factors on which electronic conductance depends.', category: '1-mark', topicId: '2-4-conductance' },
  { id: 'chem2-1m-42', text: 'List any two factors on which ionic conductance depends.', category: '1-mark', topicId: '2-4-conductance' },
  { id: 'chem2-1m-43', text: 'Why do we use alternating current (AC) instead of direct current (DC) to measure resistance of ionic solutions?', category: '1-mark', topicId: '2-4-conductance' },
  { id: 'chem2-2m-15', text: 'Define conductivity and molar conductivity. Write the relationship between them.', category: '2-mark', topicId: '2-4-conductance' },
  { id: 'chem2-2m-16', text: 'Distinguish between resistivity and conductivity. How is conductance related to both?', category: '2-mark', topicId: '2-4-conductance' },
  { id: 'chem2-2m-17', text: 'Explain why metals, semiconductors and insulators differ in conductivity. Give one example of each.', category: '2-mark', topicId: '2-4-conductance' },
  { id: 'chem2-2m-18', text: 'What are superconductors? Give one example. At what temperature range did metals first show superconductivity?', category: '2-mark', topicId: '2-4-conductance' },

  // 2.4.1 Measurement of Conductivity
  { id: 'chem2-1m-44', text: 'What is a conductivity cell? Why are platinum black-coated electrodes used?', category: '1-mark', topicId: '2-4-1-measurement-conductivity' },
  { id: 'chem2-1m-45', text: 'Define cell constant (G*). Write its formula and SI unit.', category: '1-mark', topicId: '2-4-1-measurement-conductivity' },
  { id: 'chem2-1m-46', text: 'Write the formula used to calculate conductivity from cell constant and resistance.', category: '1-mark', topicId: '2-4-1-measurement-conductivity' },
  { id: 'chem2-1m-47', text: 'Why is KCl solution used for determining the cell constant?', category: '1-mark', topicId: '2-4-1-measurement-conductivity' },
  { id: 'chem2-1m-48', text: 'Write the equation used in a Wheatstone bridge setup to find unknown resistance R₂.', category: '1-mark', topicId: '2-4-1-measurement-conductivity' },
  { id: 'chem2-2m-19', text: 'Describe the measurement of conductivity of ionic solutions. Why are two difficulties encountered when DC is used? How are they resolved?', category: '2-mark', topicId: '2-4-1-measurement-conductivity' },
  { id: 'chem2-num-10', text: 'Resistance of a conductivity cell filled with 0.1 mol L⁻¹ KCl is 100 Ω (κ = 1.29 S/m). Find cell constant. If same cell filled with 0.02 mol L⁻¹ KCl shows 520 Ω, find κ and Λm.', category: 'numerical', topicId: '2-4-1-measurement-conductivity' },
  { id: 'chem2-num-11', text: 'The electrical resistance of a column of 0.05 mol L⁻¹ NaOH solution of diameter 1 cm and length 50 cm is 5.55 × 10³ Ω. Calculate its resistivity, conductivity and molar conductivity.', category: 'numerical', topicId: '2-4-1-measurement-conductivity' },

  // 2.4.2 Variation of Conductivity and Molar Conductivity
  { id: 'chem2-1m-49', text: 'How does conductivity change with dilution? Give reason.', category: '1-mark', topicId: '2-4-2-variation-conductivity' },
  { id: 'chem2-1m-50', text: 'How does molar conductivity change with dilution? Give reason.', category: '1-mark', topicId: '2-4-2-variation-conductivity' },
  { id: 'chem2-1m-51', text: 'Define molar conductivity (Λm). Write its formula.', category: '1-mark', topicId: '2-4-2-variation-conductivity' },
  { id: 'chem2-1m-52', text: 'Define limiting molar conductivity (Λ°m). What symbol represents it?', category: '1-mark', topicId: '2-4-2-variation-conductivity' },
  { id: 'chem2-1m-53', text: 'Write the Debye-Hückel-Onsager equation for strong electrolytes.', category: '1-mark', topicId: '2-4-2-variation-conductivity' },
  { id: 'chem2-1m-54', text: 'For weak electrolytes, why does Λm increase steeply at very low concentrations?', category: '1-mark', topicId: '2-4-2-variation-conductivity' },
  { id: 'chem2-1m-55', text: 'Why can Λ°m for weak electrolytes not be obtained by extrapolation of Λm vs √c graph?', category: '1-mark', topicId: '2-4-2-variation-conductivity' },
  { id: 'chem2-2m-20', text: "State Kohlrausch's law of independent migration of ions. Write its mathematical expression.", category: '2-mark', topicId: '2-4-2-variation-conductivity' },
  { id: 'chem2-2m-21', text: "Write the Kohlrausch law expression for: (i) NaCl, (ii) CaCl₂, (iii) MgSO₄.", category: '2-mark', topicId: '2-4-2-variation-conductivity' },
  { id: 'chem2-num-12', text: 'Calculate Λ°m for CaCl₂ and MgSO₄ from the given limiting molar conductivities: Ca²⁺ = 119.0, Cl⁻ = 76.3, Mg²⁺ = 106.0, SO₄²⁻ = 160.0 S cm² mol⁻¹.', category: 'numerical', topicId: '2-4-2-variation-conductivity' },
  { id: 'chem2-num-13', text: 'Calculate Λ°m for acetic acid (HAc) given: Λ°m(NaCl) = 126.4, Λ°m(HCl) = 425.9, Λ°m(NaAc) = 91.0 S cm² mol⁻¹.', category: 'numerical', topicId: '2-4-2-variation-conductivity' },
  { id: 'chem2-num-14', text: 'The conductivity of 0.001028 mol L⁻¹ acetic acid is 4.95 × 10⁻⁵ S cm⁻¹. Calculate its degree of dissociation if Λ°m = 390.5 S cm² mol⁻¹. Also find Ka.', category: 'numerical', topicId: '2-4-2-variation-conductivity' },
  { id: 'chem2-num-15', text: 'The molar conductivity of 0.025 mol L⁻¹ methanoic acid is 46.1 S cm² mol⁻¹. Calculate its degree of dissociation and dissociation constant. [λ°(H⁺) = 349.6, λ°(HCOO⁻) = 54.6 S cm² mol⁻¹]', category: 'numerical', topicId: '2-4-2-variation-conductivity' },
  { id: 'chem2-3m-6', text: 'Discuss the variation of molar conductivity with concentration for: (i) strong electrolytes, (ii) weak electrolytes. Draw a comparative sketch of Λm vs √c.', category: '3-mark', topicId: '2-4-2-variation-conductivity' },
  { id: 'chem2-3m-7', text: "State Kohlrausch's law. Explain two important applications: (i) calculating Λ°m for weak electrolytes, (ii) finding degree of dissociation and dissociation constant.", category: '3-mark', topicId: '2-4-2-variation-conductivity' },
  { id: 'chem2-3m-8', text: 'The molar conductivity of KCl at various concentrations (298 K) is: 0.000198 M → 148.61; 0.000309 M → 148.29; 0.000521 M → 147.81; 0.000989 M → 147.09 S cm² mol⁻¹. Plot Λm vs √c. Find Λ°m and slope constant A.', category: '3-mark', topicId: '2-4-2-variation-conductivity' },

  // 2.5 Electrolytic Cells and Electrolysis
  { id: 'chem2-1m-56', text: 'What is an electrolytic cell? How does it differ from a galvanic cell?', category: '1-mark', topicId: '2-5-electrolysis' },
  { id: 'chem2-1m-57', text: "State Faraday's First Law of Electrolysis.", category: '1-mark', topicId: '2-5-electrolysis' },
  { id: 'chem2-1m-58', text: "State Faraday's Second Law of Electrolysis.", category: '1-mark', topicId: '2-5-electrolysis' },
  { id: 'chem2-1m-59', text: 'What is one Faraday? Express its value in coulombs.', category: '1-mark', topicId: '2-5-electrolysis' },
  { id: 'chem2-1m-60', text: 'How much charge (in Faradays) is required to deposit 1 mole of Cu from CuSO₄ solution?', category: '1-mark', topicId: '2-5-electrolysis' },
  { id: 'chem2-1m-61', text: 'How much charge is required to produce 1 mole of Al from Al³⁺?', category: '1-mark', topicId: '2-5-electrolysis' },
  { id: 'chem2-1m-62', text: 'Write the formula for calculating the quantity of electricity Q from current I and time t.', category: '1-mark', topicId: '2-5-electrolysis' },
  { id: 'chem2-1m-63', text: 'What is overpotential? Why is it significant in electrolysis?', category: '1-mark', topicId: '2-5-electrolysis' },
  { id: 'chem2-2m-22', text: 'Describe the electrolysis of molten NaCl. Write electrode reactions and name the products.', category: '2-mark', topicId: '2-5-electrolysis' },
  { id: 'chem2-2m-23', text: 'Describe the electrolysis of aqueous NaCl. Write all possible electrode reactions and explain which reaction is preferred at each electrode.', category: '2-mark', topicId: '2-5-electrolysis' },
  { id: 'chem2-num-16', text: 'A solution of CuSO₄ is electrolysed for 10 minutes with a current of 1.5 A. Calculate the mass of copper deposited at the cathode.', category: 'numerical', topicId: '2-5-electrolysis' },
  { id: 'chem2-num-17', text: 'How much charge (in coulombs) is required to reduce: (i) 1 mol of Al³⁺ to Al, (ii) 1 mol of Cu²⁺ to Cu, (iii) 1 mol of MnO₄⁻ to Mn²⁺?', category: 'numerical', topicId: '2-5-electrolysis' },
  { id: 'chem2-num-18', text: 'How much electricity in terms of Faraday is required to produce: (i) 20 g of Ca from molten CaCl₂, (ii) 40 g of Al from molten Al₂O₃?', category: 'numerical', topicId: '2-5-electrolysis' },
  { id: 'chem2-num-19', text: 'A solution of Ni(NO₃)₂ is electrolysed between platinum electrodes using 5 A for 20 min. What mass of Ni is deposited?', category: 'numerical', topicId: '2-5-electrolysis' },
  { id: 'chem2-num-20', text: 'If a current of 0.5 A flows through a metallic wire for 2 hours, how many electrons flow through the wire?', category: 'numerical', topicId: '2-5-electrolysis' },
  { id: 'chem2-3m-9', text: "State Faraday's laws of electrolysis. Calculate the mass of copper deposited when 2 F of electricity is passed through CuSO₄ solution.", category: '3-mark', topicId: '2-5-electrolysis' },
  { id: 'chem2-3m-10', text: 'Three electrolytic cells A (ZnSO₄), B (AgNO₃), C (CuSO₄) are connected in series. 1.5 A was passed until 1.45 g of Ag deposited at B. Find: (i) time of flow, (ii) mass of Cu deposited, (iii) mass of Zn deposited.', category: '3-mark', topicId: '2-5-electrolysis' },

  // 2.5.1 Products of Electrolysis
  { id: 'chem2-1m-64', text: 'What factors determine the products of electrolysis?', category: '1-mark', topicId: '2-5-1-products-electrolysis' },
  { id: 'chem2-1m-65', text: 'What happens at the cathode during electrolysis of aqueous NaCl? Write the preferred reaction with reason.', category: '1-mark', topicId: '2-5-1-products-electrolysis' },
  { id: 'chem2-1m-66', text: 'What happens at the anode during electrolysis of aqueous NaCl? Why is Cl⁻ preferentially oxidised despite higher E°?', category: '1-mark', topicId: '2-5-1-products-electrolysis' },
  { id: 'chem2-1m-67', text: 'During electrolysis of dilute H₂SO₄, what is produced at the anode?', category: '1-mark', topicId: '2-5-1-products-electrolysis' },
  { id: 'chem2-1m-68', text: 'During electrolysis of concentrated H₂SO₄, what is produced at the anode?', category: '1-mark', topicId: '2-5-1-products-electrolysis' },
  { id: 'chem2-2m-24', text: 'Predict the products of electrolysis of: (i) AgNO₃ with Ag electrodes, (ii) AgNO₃ with Pt electrodes.', category: '2-mark', topicId: '2-5-1-products-electrolysis' },
  { id: 'chem2-2m-25', text: 'Predict the products of electrolysis of: (i) dilute H₂SO₄ with Pt electrodes, (ii) aqueous CuCl₂ with Pt electrodes.', category: '2-mark', topicId: '2-5-1-products-electrolysis' },
  { id: 'chem2-2m-26', text: 'Explain how impure copper is refined by electrolysis. Write electrode reactions.', category: '2-mark', topicId: '2-5-1-products-electrolysis' },

  // 2.6 Batteries
  { id: 'chem2-1m-69', text: 'What is a primary battery? Give one example.', category: '1-mark', topicId: '2-6-batteries' },
  { id: 'chem2-1m-70', text: 'What is a secondary battery? Give one example.', category: '1-mark', topicId: '2-6-batteries' },

  // 2.6.1 Primary Batteries
  { id: 'chem2-1m-71', text: 'Name the electrolyte used in a dry cell (Leclanche cell).', category: '1-mark', topicId: '2-6-1-primary-batteries' },
  { id: 'chem2-1m-72', text: 'What is the approximate cell potential of a dry cell?', category: '1-mark', topicId: '2-6-1-primary-batteries' },
  { id: 'chem2-1m-73', text: 'What complex does ammonia form with Zn²⁺ in a dry cell?', category: '1-mark', topicId: '2-6-1-primary-batteries' },
  { id: 'chem2-1m-74', text: 'Name the cell suitable for low current devices like watches and hearing aids.', category: '1-mark', topicId: '2-6-1-primary-batteries' },
  { id: 'chem2-1m-75', text: 'What is the cell potential of a mercury cell? Why does it remain constant?', category: '1-mark', topicId: '2-6-1-primary-batteries' },
  { id: 'chem2-2m-27', text: 'Describe the construction of a dry cell (Leclanche cell). Write electrode reactions at anode and cathode.', category: '2-mark', topicId: '2-6-1-primary-batteries' },
  { id: 'chem2-2m-28', text: 'Describe the construction and working of a mercury cell. Write electrode reactions and overall cell reaction.', category: '2-mark', topicId: '2-6-1-primary-batteries' },
  { id: 'chem2-2m-29', text: 'Why does the potential of a mercury cell remain constant throughout its life, whereas the dry cell potential decreases on use?', category: '2-mark', topicId: '2-6-1-primary-batteries' },

  // 2.6.2 Secondary Batteries
  { id: 'chem2-1m-76', text: 'Name the electrolyte used in a lead storage battery.', category: '1-mark', topicId: '2-6-2-secondary-batteries' },
  { id: 'chem2-1m-77', text: 'What are the anode and cathode materials in a lead storage battery?', category: '1-mark', topicId: '2-6-2-secondary-batteries' },
  { id: 'chem2-1m-78', text: 'What is the overall cell reaction during discharge of a lead storage battery?', category: '1-mark', topicId: '2-6-2-secondary-batteries' },
  { id: 'chem2-1m-79', text: 'What happens during recharging of a lead storage battery?', category: '1-mark', topicId: '2-6-2-secondary-batteries' },
  { id: 'chem2-1m-80', text: 'Name one advantage of the nickel-cadmium cell over the lead storage battery.', category: '1-mark', topicId: '2-6-2-secondary-batteries' },
  { id: 'chem2-2m-30', text: 'Write the electrode reactions for the lead storage battery during: (i) discharge, (ii) recharging.', category: '2-mark', topicId: '2-6-2-secondary-batteries' },
  { id: 'chem2-2m-31', text: 'Compare primary and secondary batteries in terms of: (i) rechargeability, (ii) examples, (iii) electrode reaction reversibility.', category: '2-mark', topicId: '2-6-2-secondary-batteries' },
  { id: 'chem2-3m-11', text: 'Describe the construction and working of a lead storage battery. Write all electrode reactions during discharge and charging. What is its cell potential?', category: '3-mark', topicId: '2-6-2-secondary-batteries' },
  { id: 'chem2-3m-12', text: 'Write the chemistry of recharging the lead storage battery. Highlight all materials involved.', category: '3-mark', topicId: '2-6-2-secondary-batteries' },

  // 2.7 Fuel Cells
  { id: 'chem2-1m-81', text: 'What is a fuel cell? How does it differ from an ordinary galvanic cell?', category: '1-mark', topicId: '2-7-fuel-cells' },
  { id: 'chem2-1m-82', text: 'What is the efficiency of fuel cells compared to thermal plants?', category: '1-mark', topicId: '2-7-fuel-cells' },
  { id: 'chem2-1m-83', text: 'Name the electrolyte used in the H₂–O₂ fuel cell.', category: '1-mark', topicId: '2-7-fuel-cells' },
  { id: 'chem2-1m-84', text: 'Write the overall reaction in the hydrogen-oxygen fuel cell.', category: '1-mark', topicId: '2-7-fuel-cells' },
  { id: 'chem2-1m-85', text: 'Suggest two materials other than hydrogen that can be used as fuels in fuel cells.', category: '1-mark', topicId: '2-7-fuel-cells' },
  { id: 'chem2-1m-86', text: 'Why are fuel cells considered superior to thermal power plants?', category: '1-mark', topicId: '2-7-fuel-cells' },
  { id: 'chem2-2m-32', text: 'Describe the construction and working of a hydrogen-oxygen fuel cell. Write the electrode reactions.', category: '2-mark', topicId: '2-7-fuel-cells' },
  { id: 'chem2-2m-33', text: 'Explain two advantages of fuel cells over batteries and thermal plants.', category: '2-mark', topicId: '2-7-fuel-cells' },
  { id: 'chem2-2m-34', text: 'In which historical programme was the H₂–O₂ fuel cell used? What additional benefit did it provide?', category: '2-mark', topicId: '2-7-fuel-cells' },
  { id: 'chem2-3m-13', text: 'What are fuel cells? Describe the construction and working of a hydrogen-oxygen fuel cell with electrode reactions. State its advantages over thermal power generation.', category: '3-mark', topicId: '2-7-fuel-cells' },

  // 2.8 Corrosion
  { id: 'chem2-1m-87', text: 'Define corrosion. Give two examples.', category: '1-mark', topicId: '2-8-corrosion' },
  { id: 'chem2-1m-88', text: 'What is rusting of iron? Write the chemical formula of rust.', category: '1-mark', topicId: '2-8-corrosion' },
  { id: 'chem2-1m-89', text: 'Write the anodic reaction during rusting of iron.', category: '1-mark', topicId: '2-8-corrosion' },
  { id: 'chem2-1m-90', text: 'Write the cathodic reaction during rusting of iron.', category: '1-mark', topicId: '2-8-corrosion' },
  { id: 'chem2-1m-91', text: 'What is the overall reaction during rusting of iron? Calculate E°cell.', category: '1-mark', topicId: '2-8-corrosion' },
  { id: 'chem2-1m-92', text: 'What role does H⁺ play in the corrosion process? Where does it come from?', category: '1-mark', topicId: '2-8-corrosion' },
  { id: 'chem2-1m-93', text: 'Name one electrochemical method for prevention of corrosion.', category: '1-mark', topicId: '2-8-corrosion' },
  { id: 'chem2-1m-94', text: 'What is cathodic protection (sacrificial electrode)? Give one example of a metal used for this.', category: '1-mark', topicId: '2-8-corrosion' },
  { id: 'chem2-2m-35', text: 'Explain how rusting of iron is envisaged as setting up of an electrochemical cell.', category: '2-mark', topicId: '2-8-corrosion' },
  { id: 'chem2-2m-36', text: 'Write the sequence of reactions leading to the formation of rust (Fe₂O₃·xH₂O) from iron.', category: '2-mark', topicId: '2-8-corrosion' },
  { id: 'chem2-2m-37', text: 'Explain three methods of prevention of corrosion.', category: '2-mark', topicId: '2-8-corrosion' },
  { id: 'chem2-2m-38', text: 'Why does corrosion occur at particular spots on iron objects? Explain in terms of anode and cathode formation.', category: '2-mark', topicId: '2-8-corrosion' },
  { id: 'chem2-3m-14', text: 'Explain corrosion of iron as an electrochemical process. Write all the electrode reactions, calculate E°cell, and describe how rust is formed.', category: '3-mark', topicId: '2-8-corrosion' },
  { id: 'chem2-3m-15', text: 'Describe at least three methods to prevent corrosion of metals. Include at least one electrochemical method.', category: '3-mark', topicId: '2-8-corrosion' },

  // HOTS Questions
  { id: 'chem2-hots-1', text: 'If E°cell for a cell is negative, what does it imply about the spontaneity of the reaction? How would ΔrG° be affected?', category: 'hots', topicId: '2-3-2-gibbs-energy' },
  { id: 'chem2-hots-2', text: 'A student measures the emf of a galvanic cell and finds it to be zero. Explain two possible reasons for this.', category: 'hots', topicId: '2-3-1-equilibrium-constant' },
  { id: 'chem2-hots-3', text: 'Using standard electrode potential data, arrange Al, Cu, Fe, Mg, Zn in decreasing order of their tendency to be oxidised. Which metal would you NOT use to store copper sulphate solution?', category: 'hots', topicId: '2-2-galvanic-cells' },
  { id: 'chem2-hots-4', text: 'Explain why conductivity decreases but molar conductivity increases on dilution for both strong and weak electrolytes.', category: 'hots', topicId: '2-4-2-variation-conductivity' },
  { id: 'chem2-hots-5', text: 'A zinc vessel is used to store dilute H₂SO₄. What will happen over time? Explain electrochemically. If instead the vessel is copper, what will happen?', category: 'hots', topicId: '2-8-corrosion' },

  // Case-Based Questions
  { id: 'chem2-case-1', text: 'Case Study: The Daniell cell is a classic galvanic cell. When the switch is closed, Zn dissolves at the anode and Cu is deposited at the cathode. As the reaction proceeds, the concentration of Zn²⁺ increases and Cu²⁺ decreases. The voltage gradually drops.\n\n(i) Why does the voltage drop as the cell operates?\n(ii) Write the Nernst equation for this cell.\n(iii) At what condition does E(cell) = 0? What is this condition called?\n(iv) Calculate Kc for the Daniell cell at 298 K.', category: 'case-study', topicId: '2-3-nernst-equation' },
  { id: 'chem2-case-2', text: "Case Study: Conductivity measurements of electrolyte solutions have wide applications. The conductivity of a solution depends on the number of ions present, their charges, and their mobilities. Kohlrausch found that each ion contributes independently to conductance at infinite dilution.\n\n(i) State Kohlrausch's law of independent migration of ions.\n(ii) Why can Λ°m for acetic acid not be obtained by extrapolation?\n(iii) If Λm for 0.001 M acetic acid is 48.15 S cm² mol⁻¹ and Λ°m = 390.5 S cm² mol⁻¹, find degree of dissociation.\n(iv) Suggest a way to determine Λ°m for water.", category: 'case-study', topicId: '2-4-2-variation-conductivity' },

  // Assertion-Reason Questions
  { id: 'chem2-ar-1', text: "Assertion: The standard electrode potential of SHE is taken as zero.\nReason: The absolute value of electrode potential cannot be determined.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '2-2-1-measurement-electrode-potential' },
  { id: 'chem2-ar-2', text: "Assertion: E°cell is an intensive property.\nReason: E°cell does not depend on the amount of species involved in the reaction.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '2-3-2-gibbs-energy' },
  { id: 'chem2-ar-3', text: "Assertion: Molar conductivity increases with dilution.\nReason: Total volume of solution containing one mole of electrolyte increases on dilution.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '2-4-2-variation-conductivity' },
  { id: 'chem2-ar-4', text: "Assertion: During electrolysis of aqueous NaCl, Cl₂ is liberated at anode instead of O₂.\nReason: The oxidation potential of Cl⁻ is higher than that of OH⁻.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '2-5-1-products-electrolysis' },
  { id: 'chem2-ar-5', text: "Assertion: Rusting of iron is an electrochemical process.\nReason: The rust formed is hydrated ferric oxide.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '2-8-corrosion' },
];

// Unit 3: Chemical Kinetics - Question Bank
const unit3Questions: Question[] = [
  // 3.1 Rate of a Chemical Reaction
  { id: 'chem3-1m-1', text: 'Define the rate of a chemical reaction.', category: '1-mark', topicId: '3-1-rate-of-reaction' },
  { id: 'chem3-1m-2', text: 'What are the units of the rate of a reaction when concentration is in mol L⁻¹ and time in seconds?', category: '1-mark', topicId: '3-1-rate-of-reaction' },
  { id: 'chem3-1m-3', text: 'Define average rate of a reaction. Write its mathematical expression for a reaction R → P.', category: '1-mark', topicId: '3-1-rate-of-reaction' },
  { id: 'chem3-1m-4', text: 'Define instantaneous rate of a reaction. How is it related to average rate?', category: '1-mark', topicId: '3-1-rate-of-reaction' },
  { id: 'chem3-1m-5', text: 'For the reaction 2HI(g) → H₂(g) + I₂(g), write the expression for the rate of reaction.', category: '1-mark', topicId: '3-1-rate-of-reaction' },
  { id: 'chem3-1m-6', text: 'For the reaction 5Br⁻(aq) + BrO₃⁻(aq) + 6H⁺(aq) → 3Br₂(aq) + 3H₂O(l), write the rate expression.', category: '1-mark', topicId: '3-1-rate-of-reaction' },
  { id: 'chem3-1m-7', text: 'Why is the rate of disappearance of reactant multiplied by −1?', category: '1-mark', topicId: '3-1-rate-of-reaction' },
  { id: 'chem3-1m-8', text: 'How can the instantaneous rate of a reaction be determined graphically?', category: '1-mark', topicId: '3-1-rate-of-reaction' },
  { id: 'chem3-1m-9', text: 'Give one example each of: (a) a very fast reaction, (b) a very slow reaction, (c) a moderately slow reaction.', category: '1-mark', topicId: '3-1-rate-of-reaction' },
  { id: 'chem3-2m-1', text: 'From the concentrations of C₄H₉Cl at different times given below, calculate the average rate during 0–50s and 700–800s intervals. Comment on the trend. [C₄H₉Cl]: 0.100 (t=0), 0.0905 (t=50s), 0.0210 (t=700s), 0.017 (t=800s) mol L⁻¹', category: 'numerical', topicId: '3-1-rate-of-reaction' },
  { id: 'chem3-2m-2', text: 'The decomposition of N₂O₅ in CCl₄ at 318K: 2N₂O₅(g) → 4NO₂(g) + O₂(g). Concentration decreases from 2.33 mol L⁻¹ to 2.08 mol L⁻¹ in 184 minutes. Calculate average rate and rate of production of NO₂.', category: 'numerical', topicId: '3-1-rate-of-reaction' },
  { id: 'chem3-2m-3', text: 'For the reaction R → P, the concentration of reactant changes from 0.03M to 0.02M in 25 minutes. Calculate average rate in min⁻¹ and s⁻¹.', category: 'numerical', topicId: '3-1-rate-of-reaction' },
  { id: 'chem3-2m-4', text: 'In a reaction 2A → Products, concentration of A decreases from 0.5 mol L⁻¹ to 0.4 mol L⁻¹ in 10 minutes. Calculate the rate during this interval.', category: 'numerical', topicId: '3-1-rate-of-reaction' },
  { id: 'chem3-3m-1', text: 'Distinguish between average rate and instantaneous rate of a reaction. How is instantaneous rate expressed mathematically? How is it determined graphically?', category: '3-mark', topicId: '3-1-rate-of-reaction' },
  { id: 'chem3-3m-2', text: 'For the reaction: Hg(l) + Cl₂(g) → HgCl₂(s), write the rate expression. For 2HI(g) → H₂(g) + I₂(g), explain why stoichiometric coefficients are used as divisors.', category: '3-mark', topicId: '3-1-rate-of-reaction' },

  // 3.2 Factors Influencing Rate of a Reaction
  { id: 'chem3-1m-10', text: 'List any four factors that affect the rate of a chemical reaction.', category: '1-mark', topicId: '3-2-factors-influencing-rate' },
  { id: 'chem3-1m-11', text: 'What is rate law (rate expression)? Can it be predicted from the balanced equation?', category: '1-mark', topicId: '3-2-factors-influencing-rate' },

  // 3.2.1 Dependence of Rate on Concentration
  { id: 'chem3-1m-12', text: 'How does rate of a reaction change with passage of time? Give reason.', category: '1-mark', topicId: '3-2-1-concentration-dependence' },
  { id: 'chem3-1m-13', text: 'For the reaction 2NO(g) + O₂(g) → 2NO₂(g), rate = k[NO]²[O₂]. If [NO] is doubled keeping O₂ constant, by what factor does rate change?', category: '1-mark', topicId: '3-2-1-concentration-dependence' },
  { id: 'chem3-1m-14', text: 'Write the differential rate equation for: Rate = k[A]ˣ[B]ʸ.', category: '1-mark', topicId: '3-2-1-concentration-dependence' },
  { id: 'chem3-2m-5', text: 'Using data for the reaction 2NO + O₂ → 2NO₂, show that rate ∝ [NO]²[O₂]. Write the rate law.', category: '2-mark', topicId: '3-2-1-concentration-dependence' },
  { id: 'chem3-2m-6', text: 'For CHCl₃ + Cl₂ → CCl₄ + HCl, the experimental rate law is Rate = k[CHCl₃][Cl₂]^(1/2). What does this tell us about predicting rate law from balanced equations?', category: '2-mark', topicId: '3-2-1-concentration-dependence' },

  // 3.2.2 Rate Expression and Rate Constant
  { id: 'chem3-1m-15', text: 'Define rate constant k. What are its units for a zero order reaction?', category: '1-mark', topicId: '3-2-2-rate-expression-constant' },
  { id: 'chem3-1m-16', text: 'What are the units of k for a first order reaction?', category: '1-mark', topicId: '3-2-2-rate-expression-constant' },
  { id: 'chem3-1m-17', text: 'What are the units of k for a second order reaction?', category: '1-mark', topicId: '3-2-2-rate-expression-constant' },
  { id: 'chem3-1m-18', text: 'Write the general formula for units of k in terms of order n.', category: '1-mark', topicId: '3-2-2-rate-expression-constant' },
  { id: 'chem3-1m-19', text: 'Identify the order of reaction from: (i) k = 2.3 × 10⁻⁵ L mol⁻¹ s⁻¹, (ii) k = 3 × 10⁻⁴ s⁻¹.', category: '1-mark', topicId: '3-2-2-rate-expression-constant' },
  { id: 'chem3-2m-7', text: 'For 2A + B → A₂B, rate = k[A][B]² with k = 2.0 × 10⁻⁶ mol⁻² L² s⁻¹. Calculate initial rate when [A] = 0.1 mol L⁻¹, [B] = 0.2 mol L⁻¹. Also calculate rate when [A] is reduced to 0.06 mol L⁻¹.', category: 'numerical', topicId: '3-2-2-rate-expression-constant' },
  { id: 'chem3-2m-8', text: 'From rate expressions, determine order and units of rate constants: (i) 3NO(g)→N₂O, Rate=k[NO]², (ii) H₂O₂+3I⁻+2H⁺→2H₂O+I₃⁻, Rate=k[H₂O₂][I⁻].', category: '2-mark', topicId: '3-2-2-rate-expression-constant' },

  // 3.2.3 Order of a Reaction
  { id: 'chem3-1m-20', text: 'Define order of a reaction.', category: '1-mark', topicId: '3-2-3-order-of-reaction' },
  { id: 'chem3-1m-21', text: 'What are the possible values of order of a reaction?', category: '1-mark', topicId: '3-2-3-order-of-reaction' },
  { id: 'chem3-1m-22', text: 'What does a zero order reaction mean physically?', category: '1-mark', topicId: '3-2-3-order-of-reaction' },
  { id: 'chem3-1m-23', text: 'Calculate the overall order: (a) Rate = k[A]^(1/2)[B]^(3/2), (b) Rate = k[A]^(3/2)[B]⁻¹.', category: '1-mark', topicId: '3-2-3-order-of-reaction' },
  { id: 'chem3-1m-24', text: 'For a reaction A + B → Product; rate law is r = k[A]^(1/2)[B]². What is the order of the reaction?', category: '1-mark', topicId: '3-2-3-order-of-reaction' },
  { id: 'chem3-1m-25', text: 'The conversion of X to Y follows second order kinetics. If [X] is tripled, how does rate change?', category: '1-mark', topicId: '3-2-3-order-of-reaction' },
  { id: 'chem3-1m-26', text: 'A reaction is second order with respect to a reactant. How is rate affected if concentration is (i) doubled, (ii) reduced to half?', category: '1-mark', topicId: '3-2-3-order-of-reaction' },
  { id: 'chem3-2m-9', text: 'Mention the factors that affect the rate of a chemical reaction.', category: '2-mark', topicId: '3-2-3-order-of-reaction' },
  { id: 'chem3-2m-10', text: 'In a reaction between A and B, initial rates were measured: [A]=0.20, [B]=0.30 → r₀=5.07×10⁻⁵; [A]=0.20, [B]=0.10 → r₀=5.07×10⁻⁵; [A]=0.40, [B]=0.05 → r₀=1.43×10⁻⁴. Find order w.r.t. A and B.', category: 'numerical', topicId: '3-2-3-order-of-reaction' },
  { id: 'chem3-2m-11', text: 'For 2A + B → C + D kinetics: Expt I: [A]=0.1, [B]=0.1, rate=6.0×10⁻³; Expt II: [A]=0.3, [B]=0.2, rate=7.2×10⁻²; Expt III: [A]=0.3, [B]=0.4, rate=2.88×10⁻¹. Determine rate law and rate constant.', category: 'numerical', topicId: '3-2-3-order-of-reaction' },

  // 3.2.4 Molecularity of a Reaction
  { id: 'chem3-1m-27', text: 'Define molecularity of a reaction.', category: '1-mark', topicId: '3-2-4-molecularity' },
  { id: 'chem3-1m-28', text: 'What is a unimolecular reaction? Give one example.', category: '1-mark', topicId: '3-2-4-molecularity' },
  { id: 'chem3-1m-29', text: 'What is a bimolecular reaction? Give one example.', category: '1-mark', topicId: '3-2-4-molecularity' },
  { id: 'chem3-1m-30', text: 'What is a termolecular (trimolecular) reaction? Give one example.', category: '1-mark', topicId: '3-2-4-molecularity' },
  { id: 'chem3-1m-31', text: 'Why are reactions with molecularity greater than three rare?', category: '1-mark', topicId: '3-2-4-molecularity' },
  { id: 'chem3-1m-32', text: 'What is a rate determining step? Give an analogy to explain it.', category: '1-mark', topicId: '3-2-4-molecularity' },
  { id: 'chem3-1m-33', text: 'What is an intermediate in a reaction? Give one example.', category: '1-mark', topicId: '3-2-4-molecularity' },
  { id: 'chem3-1m-34', text: 'Can molecularity of a reaction be zero or fractional? Justify.', category: '1-mark', topicId: '3-2-4-molecularity' },
  { id: 'chem3-2m-12', text: 'State three key differences between order and molecularity of a reaction.', category: '2-mark', topicId: '3-2-4-molecularity' },
  { id: 'chem3-2m-13', text: 'The decomposition of H₂O₂ is catalysed by I⁻. Rate = k[H₂O₂][I⁻]. The reaction occurs in two steps. Identify the rate determining step, intermediate, and explain why the overall order is 2.', category: '2-mark', topicId: '3-2-4-molecularity' },

  // 3.3 Integrated Rate Equations
  { id: 'chem3-1m-35', text: 'Why do we integrate the differential rate equation?', category: '1-mark', topicId: '3-3-integrated-rate-equations' },
  { id: 'chem3-1m-36', text: 'What is the advantage of the integrated rate equation over the differential rate equation?', category: '1-mark', topicId: '3-3-integrated-rate-equations' },

  // 3.3.1 Zero Order Reactions
  { id: 'chem3-1m-37', text: 'Write the differential rate equation for a zero order reaction R → P.', category: '1-mark', topicId: '3-3-1-zero-order' },
  { id: 'chem3-1m-38', text: 'Write the integrated rate equation for a zero order reaction.', category: '1-mark', topicId: '3-3-1-zero-order' },
  { id: 'chem3-1m-39', text: 'Write the expression for rate constant k of a zero order reaction.', category: '1-mark', topicId: '3-3-1-zero-order' },
  { id: 'chem3-1m-40', text: 'What graph is plotted for a zero order reaction to get a straight line? What is its slope and intercept?', category: '1-mark', topicId: '3-3-1-zero-order' },
  { id: 'chem3-1m-41', text: 'Give two examples of zero order reactions.', category: '1-mark', topicId: '3-3-1-zero-order' },
  { id: 'chem3-1m-42', text: 'Why is the decomposition of NH₃ on Pt surface a zero order reaction at high pressure?', category: '1-mark', topicId: '3-3-1-zero-order' },
  { id: 'chem3-1m-43', text: 'What are the units of rate constant for a zero order reaction?', category: '1-mark', topicId: '3-3-1-zero-order' },
  { id: 'chem3-2m-14', text: 'Derive the integrated rate equation for a zero order reaction R → P. Show graphical representation.', category: '2-mark', topicId: '3-3-1-zero-order' },
  { id: 'chem3-2m-15', text: 'The decomposition of NH₃ on platinum surface is zero order. What are the rates of production of N₂ and H₂ if k = 2.5 × 10⁻⁴ mol L⁻¹s⁻¹?', category: 'numerical', topicId: '3-3-1-zero-order' },

  // 3.3.2 First Order Reactions
  { id: 'chem3-1m-44', text: 'Write the differential rate equation for a first order reaction.', category: '1-mark', topicId: '3-3-2-first-order' },
  { id: 'chem3-1m-45', text: 'Write the integrated rate equation for a first order reaction (two forms: ln and log).', category: '1-mark', topicId: '3-3-2-first-order' },
  { id: 'chem3-1m-46', text: 'Write the exponential form of the first order integrated rate equation: [R] = ?', category: '1-mark', topicId: '3-3-2-first-order' },
  { id: 'chem3-1m-47', text: 'What graph is plotted for a first order reaction to get a straight line? What is its slope?', category: '1-mark', topicId: '3-3-2-first-order' },
  { id: 'chem3-1m-48', text: 'Give two examples of first order reactions.', category: '1-mark', topicId: '3-3-2-first-order' },
  { id: 'chem3-1m-49', text: 'Is radioactive decay first order or zero order? Give the rate expression.', category: '1-mark', topicId: '3-3-2-first-order' },
  { id: 'chem3-1m-50', text: 'What are the units of k for a first order reaction?', category: '1-mark', topicId: '3-3-2-first-order' },
  { id: 'chem3-1m-51', text: 'What is a pseudo first order reaction? Give one example with explanation.', category: '1-mark', topicId: '3-3-2-first-order' },
  { id: 'chem3-1m-52', text: 'Why is the hydrolysis of ethyl acetate called pseudo first order? Write the rate expression.', category: '1-mark', topicId: '3-3-2-first-order' },
  { id: 'chem3-2m-16', text: 'Derive the integrated rate equation for a first order reaction R → P. Show how to obtain k from the graph of ln[R] vs t.', category: '2-mark', topicId: '3-3-2-first-order' },
  { id: 'chem3-num-1', text: 'The initial concentration of N₂O₅ was 1.24×10⁻² mol L⁻¹ at 318K. After 60 min it became 0.20×10⁻² mol L⁻¹. Calculate k.', category: 'numerical', topicId: '3-3-2-first-order' },
  { id: 'chem3-num-2', text: 'A first order reaction has rate constant 1.15 × 10⁻³ s⁻¹. How long will 5 g of reactant take to reduce to 3 g?', category: 'numerical', topicId: '3-3-2-first-order' },
  { id: 'chem3-num-3', text: 'Time required to decompose SO₂Cl₂ to half of its initial amount is 60 minutes. If decomposition is first order, calculate rate constant.', category: 'numerical', topicId: '3-3-2-first-order' },
  { id: 'chem3-3m-3', text: 'Derive the integrated rate equation for a first order gas phase reaction A(g) → B(g) + C(g) in terms of initial pressure pᵢ and total pressure pₜ.', category: '3-mark', topicId: '3-3-2-first-order' },
  { id: 'chem3-3m-4', text: 'A reaction is first order in A and second order in B. (i) Write differential rate equation, (ii) How is rate affected on increasing [B] three times? (iii) How is rate affected when both [A] and [B] are doubled?', category: '3-mark', topicId: '3-3-2-first-order' },
  { id: 'chem3-num-4', text: 'The rate constant for a first order reaction is 60 s⁻¹. How much time will it take to reduce initial concentration to 1/16th of its value?', category: 'numerical', topicId: '3-3-2-first-order' },

  // 3.3.3 Half-Life of a Reaction
  { id: 'chem3-1m-53', text: 'Define half-life (t₁/₂) of a reaction.', category: '1-mark', topicId: '3-3-3-half-life' },
  { id: 'chem3-1m-54', text: 'Derive the expression for half-life of a zero order reaction.', category: '1-mark', topicId: '3-3-3-half-life' },
  { id: 'chem3-1m-55', text: 'Derive the expression for half-life of a first order reaction.', category: '1-mark', topicId: '3-3-3-half-life' },
  { id: 'chem3-1m-56', text: 'For a first order reaction, does t₁/₂ depend on initial concentration? What about zero order?', category: '1-mark', topicId: '3-3-3-half-life' },
  { id: 'chem3-1m-57', text: 'A first order reaction has k = 5.5 × 10⁻¹⁴ s⁻¹. Find t₁/₂.', category: '1-mark', topicId: '3-3-3-half-life' },
  { id: 'chem3-1m-58', text: 'Calculate t₁/₂ for first order reactions with rate constants: (i) 200 s⁻¹, (ii) 2 min⁻¹, (iii) 4 years⁻¹.', category: '1-mark', topicId: '3-3-3-half-life' },
  { id: 'chem3-2m-17', text: 'Show that in a first order reaction, time required for 99.9% completion is 10 times the half-life.', category: '2-mark', topicId: '3-3-3-half-life' },
  { id: 'chem3-num-5', text: 'The half-life for radioactive decay of ¹⁴C is 5730 years. An archaeological artifact had only 80% of the ¹⁴C of a living tree. Estimate age of sample.', category: 'numerical', topicId: '3-3-3-half-life' },
  { id: 'chem3-num-6', text: 'A first order reaction takes 40 min for 30% decomposition. Calculate t₁/₂.', category: 'numerical', topicId: '3-3-3-half-life' },
  { id: 'chem3-num-7', text: 'For a first order reaction, show that time for 99% completion is twice the time for 90% completion.', category: 'numerical', topicId: '3-3-3-half-life' },
  { id: 'chem3-num-8', text: 'Consider reaction A → Products with k = 2.0 × 10⁻²s⁻¹. Calculate [A] remaining after 100 s if initial [A] = 1.0 mol L⁻¹.', category: 'numerical', topicId: '3-3-3-half-life' },
  { id: 'chem3-num-9', text: 'Sucrose decomposes in acid with t₁/₂ = 3.00 h (first order). What fraction remains after 8 hours?', category: 'numerical', topicId: '3-3-3-half-life' },
  { id: 'chem3-num-10', text: 'During nuclear explosion, ⁹⁰Sr has t₁/₂ = 28.1 years. If 1μg was absorbed by a baby, how much remains after 10 and 60 years?', category: 'numerical', topicId: '3-3-3-half-life' },
  { id: 'chem3-5m-1', text: 'Write integrated rate equations for zero and first order reactions. Compare: (i) differential rate law, (ii) integrated rate law, (iii) straight line graph, (iv) half-life expression, (v) units of k for each.', category: '5-mark', topicId: '3-3-3-half-life' },

  // 3.4 Temperature Dependence of Rate
  { id: 'chem3-1m-59', text: 'By what factor does the rate constant approximately change for every 10°C rise in temperature?', category: '1-mark', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-1m-60', text: 'Write the Arrhenius equation. Identify each term.', category: '1-mark', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-1m-61', text: 'What is the Arrhenius factor (frequency factor) A?', category: '1-mark', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-1m-62', text: 'Define activation energy Eₐ.', category: '1-mark', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-1m-63', text: 'What is an activated complex? Where does it appear on the potential energy profile?', category: '1-mark', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-1m-64', text: 'What does the term e^(–Eₐ/RT) represent in the Arrhenius equation?', category: '1-mark', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-1m-65', text: 'Write the logarithmic form of the Arrhenius equation.', category: '1-mark', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-1m-66', text: 'What graph is plotted to obtain a straight line from Arrhenius equation? What are its slope and intercept?', category: '1-mark', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-1m-67', text: 'What will be the effect of temperature on rate constant?', category: '1-mark', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-1m-68', text: 'How does increasing temperature affect the Maxwell-Boltzmann distribution curve?', category: '1-mark', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-1m-69', text: 'Write the two-temperature form of Arrhenius equation (relating k₁, k₂ at T₁, T₂).', category: '1-mark', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-num-11', text: 'The rate of a chemical reaction doubles for an increase of 10K from 298K. Calculate Eₐ.', category: 'numerical', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-num-12', text: 'The activation energy for 2HI(g) → H₂ + I₂(g) is 209.5 kJ mol⁻¹ at 581K. Calculate fraction of molecules having energy ≥ Eₐ.', category: 'numerical', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-num-13', text: 'Rate constants of a reaction at 500K and 700K are 0.02 s⁻¹ and 0.07 s⁻¹ respectively. Calculate Eₐ and A.', category: 'numerical', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-num-14', text: 'First order k for C₂H₅I(g) → C₂H₄(g) + HI(g) at 600K is 1.60×10⁻⁵ s⁻¹; Eₐ = 209 kJ mol⁻¹. Calculate k at 700K.', category: 'numerical', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-num-15', text: 'Rate constant for decomposition of hydrocarbons is 2.418×10⁻⁵ s⁻¹ at 546K. Eₐ = 179.9 kJ/mol. Find pre-exponential factor.', category: 'numerical', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-num-16', text: 'The decomposition of hydrocarbon: k = (4.5×10¹¹ s⁻¹) e^(–28000K/T). Calculate Eₐ.', category: 'numerical', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-num-17', text: 'Rate quadruples when T changes from 293K to 313K. Calculate Eₐ assuming it is constant.', category: 'numerical', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-3m-5', text: 'Explain the physical significance of the Arrhenius equation k = Ae^(–Eₐ/RT). How does a catalyst affect the Arrhenius equation? Illustrate with a potential energy diagram.', category: '3-mark', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-5m-2', text: 'State and explain the Arrhenius equation. (i) Derive the two-temperature form, (ii) explain activation energy using potential energy diagram, (iii) explain how temperature affects Maxwell-Boltzmann distribution, (iv) show how Eₐ and A are calculated from ln k vs 1/T graph.', category: '5-mark', topicId: '3-4-temperature-dependence' },

  // 3.4.1 Effect of Catalyst
  { id: 'chem3-1m-70', text: 'Define a catalyst. Give one example.', category: '1-mark', topicId: '3-4-1-effect-of-catalyst' },
  { id: 'chem3-1m-71', text: 'What is an inhibitor? How does it differ from a catalyst?', category: '1-mark', topicId: '3-4-1-effect-of-catalyst' },
  { id: 'chem3-1m-72', text: 'How does a catalyst increase the rate of a reaction? (Intermediate complex theory)', category: '1-mark', topicId: '3-4-1-effect-of-catalyst' },
  { id: 'chem3-1m-73', text: 'Does a catalyst alter the Gibbs energy (ΔG) of a reaction?', category: '1-mark', topicId: '3-4-1-effect-of-catalyst' },
  { id: 'chem3-1m-74', text: 'Does a catalyst change the equilibrium constant of a reaction? Explain.', category: '1-mark', topicId: '3-4-1-effect-of-catalyst' },
  { id: 'chem3-1m-75', text: 'Does a catalyst catalyse non-spontaneous reactions?', category: '1-mark', topicId: '3-4-1-effect-of-catalyst' },
  { id: 'chem3-1m-76', text: 'State the effect of a catalyst on activation energy using the potential energy diagram.', category: '1-mark', topicId: '3-4-1-effect-of-catalyst' },
  { id: 'chem3-2m-18', text: 'Explain the action of a catalyst using intermediate complex theory. Give one example.', category: '2-mark', topicId: '3-4-1-effect-of-catalyst' },
  { id: 'chem3-2m-19', text: 'Explain with the help of an energy diagram how a catalyst provides an alternate path with lower activation energy.', category: '2-mark', topicId: '3-4-1-effect-of-catalyst' },
  { id: 'chem3-2m-20', text: 'A catalyst helps in attaining equilibrium faster but does not change the equilibrium state. Explain.', category: '2-mark', topicId: '3-4-1-effect-of-catalyst' },

  // 3.5 Collision Theory
  { id: 'chem3-1m-77', text: 'State the basic postulate of collision theory.', category: '1-mark', topicId: '3-5-collision-theory' },
  { id: 'chem3-1m-78', text: 'Define collision frequency (Z). What are its units?', category: '1-mark', topicId: '3-5-collision-theory' },
  { id: 'chem3-1m-79', text: 'Write the rate expression according to collision theory for A + B → Products.', category: '1-mark', topicId: '3-5-collision-theory' },
  { id: 'chem3-1m-80', text: 'What are effective collisions? State two conditions for a collision to be effective.', category: '1-mark', topicId: '3-5-collision-theory' },
  { id: 'chem3-1m-81', text: 'What is the steric factor (P)? Why is it introduced in collision theory?', category: '1-mark', topicId: '3-5-collision-theory' },
  { id: 'chem3-1m-82', text: 'Write the modified Arrhenius equation incorporating the steric factor P.', category: '1-mark', topicId: '3-5-collision-theory' },
  { id: 'chem3-1m-83', text: 'What is threshold energy? How does it relate to activation energy?', category: '1-mark', topicId: '3-5-collision-theory' },
  { id: 'chem3-1m-84', text: 'What is the orientation factor in collision theory? Explain with an example.', category: '1-mark', topicId: '3-5-collision-theory' },
  { id: 'chem3-1m-85', text: 'State one limitation of collision theory.', category: '1-mark', topicId: '3-5-collision-theory' },
  { id: 'chem3-2m-21', text: 'Explain why all collisions between reactant molecules do not result in product formation.', category: '2-mark', topicId: '3-5-collision-theory' },
  { id: 'chem3-2m-22', text: 'Using the example of CH₃Br + OH⁻ → CH₃OH + Br⁻, explain the role of proper orientation of molecules in effective collisions.', category: '2-mark', topicId: '3-5-collision-theory' },
  { id: 'chem3-2m-23', text: 'How is collision theory related to the Arrhenius equation? Identify what A corresponds to in collision theory.', category: '2-mark', topicId: '3-5-collision-theory' },
  { id: 'chem3-3m-6', text: 'Describe collision theory of chemical reactions. What are its main postulates? What are its limitations?', category: '3-mark', topicId: '3-5-collision-theory' },
  { id: 'chem3-3m-7', text: 'Explain the concept of effective collisions. How do (i) activation energy and (ii) proper orientation of molecules together determine the rate of a chemical reaction?', category: '3-mark', topicId: '3-5-collision-theory' },

  // HOTS Questions
  { id: 'chem3-hots-1', text: 'A catalyst lowers activation energy by 10 kJ mol⁻¹ at 300K. By what factor does the rate increase? (R = 8.314 J mol⁻¹K⁻¹)', category: 'hots', topicId: '3-4-1-effect-of-catalyst' },
  { id: 'chem3-hots-2', text: 'For a reaction, rate = k[A]²[B]. If [A] is doubled and [B] is halved, what happens to the rate?', category: 'hots', topicId: '3-2-3-order-of-reaction' },
  { id: 'chem3-hots-3', text: 'Two reactions have the same Eₐ but different A values. Which one has higher rate constant at the same temperature? Justify.', category: 'hots', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-hots-4', text: 'Why does the decomposition of NH₃ on Pt remain zero order at high pressure but changes order at low pressure?', category: 'hots', topicId: '3-3-1-zero-order' },
  { id: 'chem3-hots-5', text: 'The half-life of a radioactive isotope is 1000 years. After how many years will only 12.5% of the original amount remain?', category: 'hots', topicId: '3-3-3-half-life' },
  { id: 'chem3-hots-6', text: 'For a second order reaction, if initial concentration is doubled, how does t₁/₂ change? Derive the expression for t₁/₂ for a second order reaction.', category: 'hots', topicId: '3-3-3-half-life' },

  // Case-Based Questions
  { id: 'chem3-case-1', text: 'Case Study: The Arrhenius equation k = Ae^(–Eₐ/RT) relates rate constant to temperature. Activation energy is the minimum energy needed for molecules to react. A catalyst provides an alternate pathway with lower Eₐ.\n\n(i) Name the factor that accounts for proper orientation in collision theory. Write its equation.\n(ii) Draw a labelled potential energy diagram showing the effect of a catalyst.\n(iii) What happens to the distribution curve when temperature is increased by 10K?\n(iv) If k doubles for every 10K rise, calculate Eₐ starting from T = 300K.', category: 'case-study', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-case-2', text: 'Case Study: In integrated rate laws, zero order reactions give linear [R] vs t plots, while first order reactions give linear ln[R] vs t plots. Half-life of zero order depends on initial concentration, while first order half-life is constant.\n\n(i) A reaction has t₁/₂ = 20 min at [R]₀ = 0.4 mol L⁻¹ and t₁/₂ = 40 min at [R]₀ = 0.8 mol L⁻¹. What is the order?\n(ii) Write the integrated rate law and half-life for zero order reactions.\n(iii) What is a pseudo first order reaction? Give one example.\n(iv) Calculate k from the data: t = 0, [A] = 1.0 mol L⁻¹; t = 100 s, [A] = 0.5 mol L⁻¹ for a first order reaction.', category: 'case-study', topicId: '3-3-3-half-life' },

  // Assertion-Reason Questions
  { id: 'chem3-ar-1', text: "Assertion: Order of a reaction can be zero, fractional or integer.\nReason: Order is determined experimentally.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '3-2-3-order-of-reaction' },
  { id: 'chem3-ar-2', text: "Assertion: The half-life of a first order reaction is independent of initial concentration.\nReason: For first order reactions, t₁/₂ = 0.693/k.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '3-3-3-half-life' },
  { id: 'chem3-ar-3', text: "Assertion: Rate constant increases with increase in temperature.\nReason: With increase in temperature, more molecules acquire activation energy.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '3-4-temperature-dependence' },
  { id: 'chem3-ar-4', text: "Assertion: A catalyst does not change the equilibrium constant.\nReason: A catalyst speeds up both forward and reverse reactions equally.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '3-4-1-effect-of-catalyst' },
  { id: 'chem3-ar-5', text: "Assertion: Molecularity cannot be zero or fractional.\nReason: Molecularity represents the number of reacting species in an elementary reaction.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '3-2-4-molecularity' },
];

// Unit 4: The d- and f-Block Elements - Question Bank
const unit4Questions: Question[] = [
  // 4.1 Position in the Periodic Table
  { id: 'chem4-1m-1', text: 'Where is the d-block located in the periodic table?', category: '1-mark', topicId: '4-1-position-periodic-table' },
  { id: 'chem4-1m-2', text: 'Where is the f-block located in the periodic table? Why is it placed separately?', category: '1-mark', topicId: '4-1-position-periodic-table' },
  { id: 'chem4-1m-3', text: 'Name the four series of transition metals.', category: '1-mark', topicId: '4-1-position-periodic-table' },
  { id: 'chem4-1m-4', text: 'What are the two series of inner transition metals called?', category: '1-mark', topicId: '4-1-position-periodic-table' },
  { id: 'chem4-1m-5', text: 'Define transition metals according to IUPAC.', category: '1-mark', topicId: '4-1-position-periodic-table' },
  { id: 'chem4-1m-6', text: 'Why are Zn, Cd and Hg not regarded as transition metals?', category: '1-mark', topicId: '4-1-position-periodic-table' },
  { id: 'chem4-1m-7', text: 'Name the groups that constitute the d-block in the periodic table.', category: '1-mark', topicId: '4-1-position-periodic-table' },
  { id: 'chem4-2m-1', text: 'On what ground can you say that Sc (Z=21) is a transition element but Zn (Z=30) is not?', category: '2-mark', topicId: '4-1-position-periodic-table' },
  { id: 'chem4-2m-2', text: 'Silver atom has completely filled d orbitals (4d¹⁰) in its ground state. How can you say that it is a transition element?', category: '2-mark', topicId: '4-1-position-periodic-table' },
  { id: 'chem4-2m-3', text: 'Distinguish between d-block elements and inner transition elements. Give the groups and blocks they occupy in the periodic table.', category: '2-mark', topicId: '4-1-position-periodic-table' },

  // 4.2 Electronic Configurations of the d-Block Elements
  { id: 'chem4-1m-8', text: 'Write the general electronic configuration of outer orbitals of transition elements.', category: '1-mark', topicId: '4-2-electronic-config-d-block' },
  { id: 'chem4-1m-9', text: 'Why does Cr have the configuration 3d⁵4s¹ instead of 3d⁴4s²?', category: '1-mark', topicId: '4-2-electronic-config-d-block' },
  { id: 'chem4-1m-10', text: 'Why does Cu have the configuration 3d¹⁰4s¹ instead of 3d⁹4s²?', category: '1-mark', topicId: '4-2-electronic-config-d-block' },
  { id: 'chem4-1m-11', text: 'Write the electronic configuration of: (i) Cr³⁺, (ii) Cu⁺, (iii) Co²⁺, (iv) Mn²⁺.', category: '1-mark', topicId: '4-2-electronic-config-d-block' },
  { id: 'chem4-1m-12', text: 'Write the electronic configuration of: (i) Pm³⁺, (ii) Ce⁴⁺, (iii) Lu²⁺, (iv) Th⁴⁺.', category: '1-mark', topicId: '4-2-electronic-config-d-block' },
  { id: 'chem4-1m-13', text: 'In what way is the electronic configuration of transition elements different from that of non-transition elements?', category: '1-mark', topicId: '4-2-electronic-config-d-block' },
  { id: 'chem4-1m-14', text: 'What is the electronic configuration of Pd? How is it an exception?', category: '1-mark', topicId: '4-2-electronic-config-d-block' },
  { id: 'chem4-2m-4', text: 'Why do the electronic configurations of Cr and Cu deviate from the expected pattern? Explain the role of half-filled and fully-filled d subshells.', category: '2-mark', topicId: '4-2-electronic-config-d-block' },
  { id: 'chem4-2m-5', text: 'Write the electronic configurations of the elements with atomic numbers 61, 91, 101 and 109.', category: '2-mark', topicId: '4-2-electronic-config-d-block' },
  { id: 'chem4-2m-6', text: 'Write down the number of 3d electrons in each of: Ti²⁺, V²⁺, Cr³⁺, Mn²⁺, Fe²⁺, Fe³⁺, Co²⁺, Ni²⁺, Cu²⁺.', category: '2-mark', topicId: '4-2-electronic-config-d-block' },

  // 4.3 General Properties of Transition Elements
  { id: 'chem4-2m-7', text: 'What are the characteristics of transition elements that make them different from non-transition elements?', category: '2-mark', topicId: '4-3-general-properties' },
  { id: 'chem4-2m-8', text: 'Which d-block elements may not be regarded as transition elements and why?', category: '2-mark', topicId: '4-3-general-properties' },

  // 4.3.1 Physical Properties
  { id: 'chem4-1m-15', text: 'List any four typical metallic properties exhibited by transition elements.', category: '1-mark', topicId: '4-3-1-physical-properties' },
  { id: 'chem4-1m-16', text: 'Why do transition metals have high melting and boiling points?', category: '1-mark', topicId: '4-3-1-physical-properties' },
  { id: 'chem4-1m-17', text: 'Why do transition metals have high enthalpies of atomisation?', category: '1-mark', topicId: '4-3-1-physical-properties' },
  { id: 'chem4-1m-18', text: 'In the 3d series, at what configuration does the melting point reach a maximum? Name the anomalous elements.', category: '1-mark', topicId: '4-3-1-physical-properties' },
  { id: 'chem4-1m-19', text: 'Why does density increase from Ti to Cu in the 3d series?', category: '1-mark', topicId: '4-3-1-physical-properties' },
  { id: 'chem4-1m-20', text: 'How does enthalpy of atomisation vary across 3d, 4d and 5d series?', category: '1-mark', topicId: '4-3-1-physical-properties' },
  { id: 'chem4-2m-9', text: 'In the series Sc (Z=21) to Zn (Z=30), the enthalpy of atomisation of zinc is the lowest (126 kJ mol⁻¹). Why?', category: '2-mark', topicId: '4-3-1-physical-properties' },
  { id: 'chem4-3m-1', text: 'Compare the general characteristics of the first series of transition metals with those of the second and third series metals, with emphasis on: (i) electronic configurations, (ii) oxidation states, (iii) ionisation enthalpies, (iv) atomic sizes.', category: '3-mark', topicId: '4-3-1-physical-properties' },
  { id: 'chem4-2m-10', text: 'Comment on the statement that elements of the first transition series possess many properties different from those of heavier transition elements.', category: '2-mark', topicId: '4-3-1-physical-properties' },

  // 4.3.2 Variation in Atomic and Ionic Sizes
  { id: 'chem4-1m-21', text: 'How do ionic radii vary across a series of transition elements with increasing atomic number? Give reason.', category: '1-mark', topicId: '4-3-2-atomic-ionic-sizes' },
  { id: 'chem4-1m-22', text: 'Define lanthanoid contraction. What causes it?', category: '1-mark', topicId: '4-3-2-atomic-ionic-sizes' },
  { id: 'chem4-1m-23', text: 'What is the net result of lanthanoid contraction on the atomic radii of 4d and 5d series?', category: '1-mark', topicId: '4-3-2-atomic-ionic-sizes' },
  { id: 'chem4-1m-24', text: 'Give one pair of elements with nearly identical radii due to lanthanoid contraction.', category: '1-mark', topicId: '4-3-2-atomic-ionic-sizes' },
  { id: 'chem4-2m-11', text: 'What is lanthanoid contraction? What are its consequences?', category: '2-mark', topicId: '4-3-2-atomic-ionic-sizes' },
  { id: 'chem4-2m-12', text: 'Why do Zr and Hf have almost identical radii and properties? How does this create difficulty in their separation?', category: '2-mark', topicId: '4-3-2-atomic-ionic-sizes' },

  // 4.3.3 Ionisation Enthalpies
  { id: 'chem4-1m-25', text: 'How does ionisation enthalpy vary along the 3d series? Compare the trend with non-transition elements.', category: '1-mark', topicId: '4-3-3-ionisation-enthalpies' },
  { id: 'chem4-1m-26', text: 'Why do the successive ionisation enthalpies of transition elements not increase as steeply as those of non-transition elements?', category: '1-mark', topicId: '4-3-3-ionisation-enthalpies' },
  { id: 'chem4-1m-27', text: 'What is exchange energy? What role does it play in ionisation enthalpy?', category: '1-mark', topicId: '4-3-3-ionisation-enthalpies' },
  { id: 'chem4-1m-28', text: 'Why is the third ionisation enthalpy of Mn higher than that of Fe?', category: '1-mark', topicId: '4-3-3-ionisation-enthalpies' },
  { id: 'chem4-1m-29', text: 'Why is the second ionisation enthalpy unusually high for Cr and Cu?', category: '1-mark', topicId: '4-3-3-ionisation-enthalpies' },
  { id: 'chem4-1m-30', text: 'Why does the third ionisation enthalpy of Zn show a high value?', category: '1-mark', topicId: '4-3-3-ionisation-enthalpies' },
  { id: 'chem4-2m-13', text: 'How would you account for the irregular variation of ionisation enthalpies (first and second) in the first series of the transition elements?', category: '2-mark', topicId: '4-3-3-ionisation-enthalpies' },
  { id: 'chem4-2m-14', text: 'Explain why the +3 state of Mn is of little chemical importance.', category: '2-mark', topicId: '4-3-3-ionisation-enthalpies' },
  { id: 'chem4-2m-15', text: 'Why do Mn²⁺ and Zn²⁺ show unusually high third ionisation enthalpies?', category: '2-mark', topicId: '4-3-3-ionisation-enthalpies' },

  // 4.3.4 Oxidation States
  { id: 'chem4-1m-31', text: 'Which 3d transition element exhibits the greatest number of oxidation states? State the range.', category: '1-mark', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-1m-32', text: 'Why does Mn show so many oxidation states?', category: '1-mark', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-1m-33', text: 'Which transition element does NOT exhibit variable oxidation states?', category: '1-mark', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-1m-34', text: 'What is the only oxidation state of zinc? Why?', category: '1-mark', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-1m-35', text: 'Why do oxidation states of d-block elements differ by unity while those of non-transition elements differ by two?', category: '1-mark', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-1m-36', text: 'What is the oxidation state of Ni and Fe in Ni(CO)₄ and Fe(CO)₅ respectively?', category: '1-mark', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-1m-37', text: 'Name the oxometal anions of the first series of transition metals in which metal exhibits oxidation state equal to its group number.', category: '1-mark', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-1m-38', text: 'What may be the stable oxidation states for transition elements with d-configurations: 3d³, 3d⁵, 3d⁸, 3d⁴?', category: '1-mark', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-2m-16', text: 'How does variability of oxidation states of transition metals differ from that of non-transition metals? Give examples.', category: '2-mark', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-2m-17', text: 'Explain how +2 state becomes more and more stable in the first half of the first row transition elements with increasing atomic number.', category: '2-mark', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-2m-18', text: 'To what extent do electronic configurations decide the stability of oxidation states in the first series of transition elements? Illustrate with examples.', category: '2-mark', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-2m-19', text: 'How would you account for the increasing oxidising power in the series VO₂⁺ < Cr₂O₇²⁻ < MnO₄⁻?', category: '2-mark', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-3m-2', text: 'Compare the stability of +2 oxidation state for the elements of the first transition series.', category: '3-mark', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-2m-20', text: 'Why are Mn²⁺ compounds more stable than Fe²⁺ towards oxidation to their +3 state?', category: '2-mark', topicId: '4-3-4-oxidation-states' },

  // 4.3.5 Trends in M²⁺/M Standard Electrode Potentials
  { id: 'chem4-1m-39', text: 'Why does copper have a positive E° value (+0.34 V) for M²⁺/M?', category: '1-mark', topicId: '4-3-5-electrode-potentials-m2m' },
  { id: 'chem4-1m-40', text: "Why can't copper liberate H₂ from dilute acids?", category: '1-mark', topicId: '4-3-5-electrode-potentials-m2m' },
  { id: 'chem4-1m-41', text: 'Why are E° (M²⁺/M) values for Mn, Ni and Zn more negative than expected from the trend?', category: '1-mark', topicId: '4-3-5-electrode-potentials-m2m' },
  { id: 'chem4-1m-42', text: 'Why is Cr²⁺ a reducing agent and Mn³⁺ an oxidising agent when both have d⁴ configuration?', category: '1-mark', topicId: '4-3-5-electrode-potentials-m2m' },
  { id: 'chem4-2m-21', text: 'For the first row transition metals the E° values for M²⁺/M are: V=–1.18, Cr=–0.91, Mn=–1.18, Fe=–0.44, Co=–0.28, Ni=–0.25, Cu=+0.34 V. Explain the irregularity.', category: '2-mark', topicId: '4-3-5-electrode-potentials-m2m' },
  { id: 'chem4-2m-22', text: 'Which is a stronger reducing agent — Cr²⁺ or Fe²⁺? Why?', category: '2-mark', topicId: '4-3-5-electrode-potentials-m2m' },

  // 4.3.6 Trends in M³⁺/M²⁺ Standard Electrode Potentials
  { id: 'chem4-1m-43', text: 'Which two ions of the 3d series are strongest oxidising agents in aqueous solution?', category: '1-mark', topicId: '4-3-6-electrode-potentials-m3m2' },
  { id: 'chem4-1m-44', text: 'Which ions of the 3d series are strong reducing agents and can liberate H₂ from dilute acid?', category: '1-mark', topicId: '4-3-6-electrode-potentials-m3m2' },
  { id: 'chem4-1m-45', text: 'Why is the E° (M³⁺/M²⁺) value for Sc the lowest in the series?', category: '1-mark', topicId: '4-3-6-electrode-potentials-m3m2' },
  { id: 'chem4-1m-46', text: 'Why is the E° (M³⁺/M²⁺) value for Zn the highest?', category: '1-mark', topicId: '4-3-6-electrode-potentials-m3m2' },
  { id: 'chem4-2m-23', text: 'Why is the E° value for Mn³⁺/Mn²⁺ couple much more positive than that for Cr³⁺/Cr²⁺ or Fe³⁺/Fe²⁺?', category: '2-mark', topicId: '4-3-6-electrode-potentials-m3m2' },
  { id: 'chem4-2m-24', text: 'For M²⁺/M and M³⁺/M²⁺ systems, use E° data to comment on: (i) stability of Fe³⁺ in acid solution compared to Cr³⁺ or Mn³⁺, (ii) ease with which iron can be oxidised compared to chromium or manganese.', category: '2-mark', topicId: '4-3-6-electrode-potentials-m3m2' },

  // 4.3.7 Trends in Stability of Higher Oxidation States
  { id: 'chem4-1m-47', text: 'Why is fluorine particularly effective in stabilising the highest oxidation state of transition metals?', category: '1-mark', topicId: '4-3-7-stability-higher-ox-states' },
  { id: 'chem4-1m-48', text: 'Why is oxygen better than fluorine in stabilising the highest oxidation state of transition metals?', category: '1-mark', topicId: '4-3-7-stability-higher-ox-states' },
  { id: 'chem4-1m-49', text: 'Why is the highest oxidation state of a metal exhibited in its oxide or fluoride only?', category: '1-mark', topicId: '4-3-7-stability-higher-ox-states' },
  { id: 'chem4-1m-50', text: 'Why is CuI more stable in solid state but CuII more stable in aqueous solution?', category: '1-mark', topicId: '4-3-7-stability-higher-ox-states' },
  { id: 'chem4-1m-51', text: 'Give the reaction for disproportionation of Cu⁺ in aqueous solution.', category: '1-mark', topicId: '4-3-7-stability-higher-ox-states' },
  { id: 'chem4-1m-52', text: 'What is meant by disproportionation of an oxidation state? Give one example.', category: '1-mark', topicId: '4-3-7-stability-higher-ox-states' },
  { id: 'chem4-2m-25', text: 'What is disproportionation? Give two examples of disproportionation reactions in aqueous solution.', category: '2-mark', topicId: '4-3-7-stability-higher-ox-states' },
  { id: 'chem4-2m-26', text: 'Which metal in the first series of transition metals exhibits +1 oxidation state most frequently and why?', category: '2-mark', topicId: '4-3-7-stability-higher-ox-states' },
  { id: 'chem4-3m-3', text: 'Give examples and suggest reasons for: (i) lowest oxide of transition metal is basic, highest is acidic/amphoteric; (ii) highest oxidation state in oxides and fluorides; (iii) highest oxidation state in oxoanions.', category: '3-mark', topicId: '4-3-7-stability-higher-ox-states' },

  // 4.3.8 Chemical Reactivity and E° Values
  { id: 'chem4-1m-53', text: 'Which metals of the first transition series are passive to dilute non-oxidising acids at room temperature?', category: '1-mark', topicId: '4-3-8-chemical-reactivity' },
  { id: 'chem4-1m-54', text: 'Which metal of the first transition series is an exception in terms of reactivity towards dilute H⁺? Name it.', category: '1-mark', topicId: '4-3-8-chemical-reactivity' },
  { id: 'chem4-3m-4', text: 'How would you account for: (i) Cr²⁺ is strongly reducing while Mn³⁺ is strongly oxidising (both d⁴), (ii) Co(II) stable in water but oxidised in presence of complexing agents, (iii) d¹ configuration is very unstable in ions?', category: '3-mark', topicId: '4-3-8-chemical-reactivity' },

  // 4.3.9 Magnetic Properties
  { id: 'chem4-1m-55', text: 'Define diamagnetism and paramagnetism.', category: '1-mark', topicId: '4-3-9-magnetic-properties' },
  { id: 'chem4-1m-56', text: 'What is ferromagnetism? How is it related to paramagnetism?', category: '1-mark', topicId: '4-3-9-magnetic-properties' },
  { id: 'chem4-1m-57', text: "Write the 'spin-only' formula for calculating magnetic moment. What are its units?", category: '1-mark', topicId: '4-3-9-magnetic-properties' },
  { id: 'chem4-1m-58', text: 'A single unpaired electron has a magnetic moment of __ BM.', category: '1-mark', topicId: '4-3-9-magnetic-properties' },
  { id: 'chem4-num-1', text: 'Calculate magnetic moment of a divalent ion in aqueous solution if its atomic number is 25.', category: 'numerical', topicId: '4-3-9-magnetic-properties' },
  { id: 'chem4-num-2', text: 'Calculate the spin-only magnetic moment of M²⁺(aq) ion where Z = 27.', category: 'numerical', topicId: '4-3-9-magnetic-properties' },
  { id: 'chem4-num-3', text: 'Calculate the number of unpaired electrons in gaseous ions: Mn³⁺, Cr³⁺, V³⁺ and Ti³⁺. Which is the most stable in aqueous solution?', category: 'numerical', topicId: '4-3-9-magnetic-properties' },
  { id: 'chem4-2m-27', text: 'Why do transition metals and many of their compounds show paramagnetic behaviour?', category: '2-mark', topicId: '4-3-9-magnetic-properties' },
  { id: 'chem4-2m-28', text: 'What can be inferred from the magnetic moment values: K₄[Mn(CN)₆] = 2.2 BM, [Fe(H₂O)₆]²⁺ = 5.3 BM, K₂[MnCl₄] = 5.9 BM?', category: '2-mark', topicId: '4-3-9-magnetic-properties' },

  // 4.3.10 Formation of Coloured Ions
  { id: 'chem4-1m-59', text: 'Why do transition metal ions form coloured compounds?', category: '1-mark', topicId: '4-3-10-coloured-ions' },
  { id: 'chem4-1m-60', text: 'What determines the frequency of light absorbed by a transition metal ion in solution?', category: '1-mark', topicId: '4-3-10-coloured-ions' },
  { id: 'chem4-1m-61', text: 'Why are Sc³⁺ and Zn²⁺ colourless while Ti³⁺ is purple?', category: '1-mark', topicId: '4-3-10-coloured-ions' },
  { id: 'chem4-1m-62', text: 'Give the colour of: (i) Ti³⁺, (ii) V²⁺, (iii) Mn²⁺, (iv) Fe³⁺, (v) Cu²⁺ in aqueous solution.', category: '1-mark', topicId: '4-3-10-coloured-ions' },
  { id: 'chem4-2m-29', text: 'Predict which of the following will be coloured in aqueous solution and give reason: Ti³⁺, V³⁺, Cu⁺, Sc³⁺, Mn²⁺, Fe³⁺, Co²⁺.', category: '2-mark', topicId: '4-3-10-coloured-ions' },
  { id: 'chem4-2m-30', text: 'Why do transition metals generally form coloured compounds?', category: '2-mark', topicId: '4-3-10-coloured-ions' },

  // 4.3.11 Formation of Complex Compounds
  { id: 'chem4-1m-63', text: 'Define complex compounds. Give two examples.', category: '1-mark', topicId: '4-3-11-complex-compounds' },
  { id: 'chem4-1m-64', text: 'Why do transition metals form a large number of complex compounds?', category: '1-mark', topicId: '4-3-11-complex-compounds' },
  { id: 'chem4-2m-31', text: 'Give three reasons why transition metals form complex compounds readily.', category: '2-mark', topicId: '4-3-11-complex-compounds' },

  // 4.3.12 Catalytic Properties
  { id: 'chem4-1m-65', text: 'Why are transition metals and their compounds good catalysts?', category: '1-mark', topicId: '4-3-12-catalytic-properties' },
  { id: 'chem4-1m-66', text: "Name the transition metal compound used as catalyst in: (i) Contact Process, (ii) Haber's Process, (iii) Catalytic Hydrogenation.", category: '1-mark', topicId: '4-3-12-catalytic-properties' },
  { id: 'chem4-2m-32', text: 'How does Fe³⁺ catalyse the reaction between iodide and persulphate ions? Write the steps.', category: '2-mark', topicId: '4-3-12-catalytic-properties' },

  // 4.3.13 Formation of Interstitial Compounds
  { id: 'chem4-1m-67', text: 'Define interstitial compounds. Give two examples.', category: '1-mark', topicId: '4-3-13-interstitial-compounds' },
  { id: 'chem4-1m-68', text: 'What small atoms form interstitial compounds with transition metals?', category: '1-mark', topicId: '4-3-13-interstitial-compounds' },
  { id: 'chem4-1m-69', text: 'State four characteristics of interstitial compounds.', category: '1-mark', topicId: '4-3-13-interstitial-compounds' },
  { id: 'chem4-2m-33', text: 'Why are interstitial compounds well known for transition metals?', category: '2-mark', topicId: '4-3-13-interstitial-compounds' },

  // 4.3.14 Alloy Formation
  { id: 'chem4-1m-70', text: 'Define an alloy. What is a homogeneous solid solution?', category: '1-mark', topicId: '4-3-14-alloy-formation' },
  { id: 'chem4-1m-71', text: 'Why do transition metals readily form alloys with each other?', category: '1-mark', topicId: '4-3-14-alloy-formation' },
  { id: 'chem4-1m-72', text: 'Name the metals used to produce stainless steel. What is the composition of brass and bronze?', category: '1-mark', topicId: '4-3-14-alloy-formation' },
  { id: 'chem4-2m-34', text: 'What are alloys? Name an important alloy which contains some lanthanoid metals and mention its uses.', category: '2-mark', topicId: '4-3-14-alloy-formation' },

  // 4.4 Important Compounds - K₂Cr₂O₇
  { id: 'chem4-1m-73', text: 'What is the ore used for the preparation of potassium dichromate?', category: '1-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-1m-74', text: 'Write the reaction for the fusion of chromite ore with sodium carbonate in air.', category: '1-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-1m-75', text: 'How is sodium chromate converted to sodium dichromate? Write the equation.', category: '1-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-1m-76', text: 'How is potassium dichromate obtained from sodium dichromate?', category: '1-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-1m-77', text: 'What is the oxidation state of Cr in CrO₄²⁻ and Cr₂O₇²⁻?', category: '1-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-1m-78', text: 'Write the interconversion reactions between chromate and dichromate in acidic and alkaline medium.', category: '1-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-1m-79', text: 'Describe the structure of the chromate ion. What is its geometry?', category: '1-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-1m-80', text: 'Describe the structure of the dichromate ion. What is the Cr–O–Cr bond angle?', category: '1-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-1m-81', text: 'Write the half-reaction and E° for the reduction of Cr₂O₇²⁻ in acidic solution.', category: '1-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-1m-82', text: 'State two industrial uses of potassium dichromate.', category: '1-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-2m-35', text: 'Describe the preparation of potassium dichromate from iron chromite ore. What is the effect of increasing pH on a solution of potassium dichromate?', category: '2-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-2m-36', text: 'Describe the oxidising action of potassium dichromate and write the ionic equations for its reaction with: (i) iodide, (ii) iron(II) solution, (iii) H₂S.', category: '2-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-2m-37', text: 'Indicate the steps in the preparation of K₂Cr₂O₇ from chromite ore.', category: '2-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-3m-5', text: 'Starting from chromite ore (FeCr₂O₄), explain the complete preparation of potassium dichromate step by step. Write all relevant equations. Describe its oxidising properties with two examples.', category: '3-mark', topicId: '4-4-important-compounds' },

  // 4.4 Important Compounds - KMnO₄
  { id: 'chem4-1m-83', text: 'Write the reaction for the preparation of KMnO₄ in the laboratory by fusion of MnO₂.', category: '1-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-1m-84', text: 'Write the disproportionation reaction of manganate in acidic medium.', category: '1-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-1m-85', text: 'How is KMnO₄ commercially prepared from MnO₂? Give the two steps.', category: '1-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-1m-86', text: 'What is the colour of KMnO₄ crystals? What is its solubility in water at 293K?', category: '1-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-1m-87', text: 'Write the reaction for thermal decomposition of KMnO₄.', category: '1-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-1m-88', text: 'What is the shape of MnO₄⁻ ion? What type of bonding is present?', category: '1-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-1m-89', text: 'Why is the green manganate paramagnetic but permanganate diamagnetic?', category: '1-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-1m-90', text: 'Write the half-reaction for reduction of MnO₄⁻ to Mn²⁺ in acidic medium with E° value.', category: '1-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-1m-91', text: 'Write the half-reaction for reduction of MnO₄⁻ to MnO₂ in neutral medium with E° value.', category: '1-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-2m-38', text: 'Describe the preparation of potassium permanganate. How does acidified permanganate react with (i) iron(II) ions, (ii) SO₂, (iii) oxalic acid? Write ionic equations.', category: '2-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-2m-39', text: 'Write the full ionic equations for oxidation reactions of KMnO₄ in acid solution with: (i) KI, (ii) FeSO₄, (iii) oxalic acid (at 333K), (iv) H₂S.', category: '2-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-2m-40', text: 'Write the full ionic equations for reactions of KMnO₄ in neutral or faintly alkaline medium with: (i) KI, (ii) Na₂S₂O₃.', category: '2-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-2m-41', text: 'Indicate the steps in the preparation of KMnO₄ from pyrolusite ore.', category: '2-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-2m-42', text: 'Write the laboratory preparation of KMnO₄ from Mn²⁺ salt using peroxodisulphate.', category: '2-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-3m-6', text: 'Describe the complete preparation of potassium permanganate from pyrolusite ore (MnO₂). Write all equations. Describe its oxidising properties in acidic, neutral and alkaline media with examples.', category: '3-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-2m-43', text: 'Why is permanganate titration not carried out in presence of HCl? What acid is used instead?', category: '2-mark', topicId: '4-4-important-compounds' },

  // 4.5 The Lanthanoids
  { id: 'chem4-1m-92', text: 'How many elements constitute the lanthanoid series? Name the first and last elements.', category: '1-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-1m-93', text: 'Why is lanthanum usually included in discussions of the lanthanoids?', category: '1-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-1m-94', text: 'What is the general symbol used for lanthanoids?', category: '1-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-1m-95', text: 'Write the general electronic configuration of lanthanoid atoms (outer orbitals).', category: '1-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-1m-96', text: 'What is the electronic configuration of all tripositive lanthanoid ions (Ln³⁺)?', category: '1-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-1m-97', text: 'Define lanthanoid contraction. What causes it?', category: '1-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-1m-98', text: 'What is the most stable (principal) oxidation state of lanthanoids?', category: '1-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-1m-99', text: 'Which lanthanoid is well known to exhibit +4 oxidation state?', category: '1-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-1m-100', text: 'Why does Ce⁴⁺ revert to Ce³⁺ easily? What is the E° for Ce⁴⁺/Ce³⁺?', category: '1-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-1m-101', text: 'Why does Eu²⁺ form readily? Why is it a strong reducing agent?', category: '1-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-1m-102', text: 'Name the members of the lanthanoid series which exhibit +4 oxidation states and those which exhibit +2 oxidation states.', category: '1-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-1m-103', text: 'What are the physical properties of lanthanoid metals?', category: '1-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-1m-104', text: 'Why do many trivalent lanthanoid ions show colour?', category: '1-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-1m-105', text: 'Why do La³⁺ and Lu³⁺ not show colour?', category: '1-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-1m-106', text: 'What are the E° values for Ln³⁺/Ln couples? Which lanthanoid is an exception?', category: '1-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-2m-44', text: 'What is lanthanoid contraction? What are the consequences of lanthanoid contraction?', category: '2-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-2m-45', text: 'Name the lanthanoid members exhibiting +4 and +2 oxidation states. Correlate with their electronic configurations.', category: '2-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-2m-46', text: 'Describe the general chemical reactions of lanthanoids with: (i) O₂, (ii) halogens, (iii) H₂O, (iv) dilute acids, (v) N₂, (vi) C.', category: '2-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-2m-47', text: 'What are the different oxidation states exhibited by the lanthanoids?', category: '2-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-num-4', text: "Use Hund's rule to derive the electronic configuration of Ce³⁺ ion and calculate its magnetic moment on the spin-only formula.", category: 'numerical', topicId: '4-5-lanthanoids' },
  { id: 'chem4-3m-7', text: 'What are inner transition elements? Decide which of the following atomic numbers are inner transition elements: 29, 59, 74, 95, 102, 104.', category: '3-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-2m-48', text: 'What is mischmetall? What is its composition? Describe two of its uses.', category: '2-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-3m-8', text: 'Describe the general characteristics of lanthanoids: (i) physical state, (ii) melting points, (iii) magnetic properties, (iv) ionisation enthalpies.', category: '3-mark', topicId: '4-5-lanthanoids' },

  // 4.6 The Actinoids
  { id: 'chem4-1m-107', text: 'How many elements constitute the actinoid series? Which element marks the beginning and which the end?', category: '1-mark', topicId: '4-6-actinoids' },
  { id: 'chem4-1m-108', text: 'Write the general electronic configuration of actinoid atoms.', category: '1-mark', topicId: '4-6-actinoids' },
  { id: 'chem4-1m-109', text: 'Why are the electronic configurations of actinoids irregular?', category: '1-mark', topicId: '4-6-actinoids' },
  { id: 'chem4-1m-110', text: 'How does actinoid contraction compare with lanthanoid contraction?', category: '1-mark', topicId: '4-6-actinoids' },
  { id: 'chem4-1m-111', text: 'What is the most common oxidation state of actinoids?', category: '1-mark', topicId: '4-6-actinoids' },
  { id: 'chem4-1m-112', text: 'Why does the chemistry of actinoids show a wider range of oxidation states than lanthanoids?', category: '1-mark', topicId: '4-6-actinoids' },
  { id: 'chem4-1m-113', text: 'Which is the last element in the series of actinoids? Write its electronic configuration and comment on its possible oxidation state.', category: '1-mark', topicId: '4-6-actinoids' },
  { id: 'chem4-1m-114', text: 'Why are 5f electrons involved in bonding to a greater extent than 4f electrons?', category: '1-mark', topicId: '4-6-actinoids' },
  { id: 'chem4-1m-115', text: 'Why is the study of later actinoids difficult?', category: '1-mark', topicId: '4-6-actinoids' },
  { id: 'chem4-2m-49', text: 'Why is actinoid contraction greater than lanthanoid contraction?', category: '2-mark', topicId: '4-6-actinoids' },
  { id: 'chem4-2m-50', text: 'The chemistry of the actinoid elements is not as smooth as that of the lanthanoids. Justify with examples from their oxidation states.', category: '2-mark', topicId: '4-6-actinoids' },
  { id: 'chem4-2m-51', text: 'Why are the ionisation enthalpies of early actinoids lower than those of early lanthanoids?', category: '2-mark', topicId: '4-6-actinoids' },
  { id: 'chem4-3m-9', text: 'Compare the chemistry of actinoids with that of lanthanoids with reference to: (i) electronic configuration, (ii) atomic and ionic sizes, (iii) oxidation states, (iv) chemical reactivity.', category: '3-mark', topicId: '4-6-actinoids' },
  { id: 'chem4-5m-1', text: 'Write a detailed comparative account of lanthanoids and actinoids with respect to: (i) position in periodic table and f-orbitals involved, (ii) electronic configurations, (iii) atomic and ionic sizes and contraction, (iv) oxidation states, (v) chemical behaviour and magnetic properties.', category: '5-mark', topicId: '4-6-actinoids' },

  // 4.7 Applications
  { id: 'chem4-1m-116', text: 'Name the catalyst used in the manufacture of sulphuric acid (Contact Process).', category: '1-mark', topicId: '4-7-applications' },
  { id: 'chem4-1m-117', text: "Name the catalyst used in Haber's Process. Name the catalyst used in Ziegler-Natta polymerisation.", category: '1-mark', topicId: '4-7-applications' },
  { id: 'chem4-1m-118', text: 'What is the role of AgBr in the photographic industry?', category: '1-mark', topicId: '4-7-applications' },
  { id: 'chem4-1m-119', text: 'Name the transition metal used in the Wacker process and state what it catalyses.', category: '1-mark', topicId: '4-7-applications' },
  { id: 'chem4-1m-120', text: 'Name any two compounds of transition metals used in the battery industry.', category: '1-mark', topicId: '4-7-applications' },
  { id: 'chem4-1m-121', text: 'What is the use of MnO₂? What is the use of TiO?', category: '1-mark', topicId: '4-7-applications' },
  { id: 'chem4-2m-52', text: 'List any five important applications of d- and f-block elements and their compounds in industry and technology.', category: '2-mark', topicId: '4-7-applications' },

  // HOTS Questions
  { id: 'chem4-hots-1', text: 'Though Zn is placed in the d-block, it is not considered a transition metal. But scandium is. Explain this apparent contradiction using IUPAC definition.', category: 'hots', topicId: '4-1-position-periodic-table' },
  { id: 'chem4-hots-2', text: 'Cu shows +1 and +2 states. In aqueous solution, Cu⁺ is unstable and disproportionates. Explain why Cu²⁺ is more stable than Cu⁺ in aqueous solution despite its higher charge. Explain why Cu⁺ ion is not stable in aqueous solutions.', category: 'hots', topicId: '4-3-7-stability-higher-ox-states' },
  { id: 'chem4-hots-3', text: 'Explain why the melting points of transition metals are high, reach a maximum near the middle of each series, and then decrease. Why are Mn and Tc anomalous?', category: 'hots', topicId: '4-3-1-physical-properties' },
  { id: 'chem4-hots-4', text: 'In the series of transition metals, the oxidation states differ by unity whereas in non-transition elements they differ by two. Explain why with reference to d-orbital electrons.', category: 'hots', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-hots-5', text: 'Why does MnO₄⁻ act as an oxidising agent in acidic, neutral, and alkaline media but give different products in each? Explain with E° values.', category: 'hots', topicId: '4-4-important-compounds' },
  { id: 'chem4-hots-6', text: 'Explain giving reasons: (i) Transition metals and their compounds show paramagnetic behaviour, (ii) enthalpies of atomisation of transition metals are high, (iii) transition metals generally form coloured compounds, (iv) transition metals and their compounds act as good catalysts.', category: 'hots', topicId: '4-3-general-properties' },

  // Case-Based Questions
  { id: 'chem4-case-1', text: 'Case Study: Potassium permanganate is one of the most powerful oxidising agents. It acts differently in acidic, neutral and alkaline media. The half-reactions for its reduction are: MnO₄⁻ + e⁻ → MnO₄²⁻ (E°=+0.56V); MnO₄⁻ + 4H⁺ + 3e⁻ → MnO₂ + 2H₂O (E°=+1.69V); MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O (E°=+1.52V).\n\n(i) In which medium is KMnO₄ the strongest oxidant? What colour change occurs?\n(ii) Write the full ionic equation for reaction of KMnO₄ with FeSO₄ in acidic medium.\n(iii) Write the full ionic equation for reaction with oxalic acid in acidic medium.\n(iv) Why is permanganate titration unsatisfactory in presence of HCl?', category: 'case-study', topicId: '4-4-important-compounds' },
  { id: 'chem4-case-2', text: 'Case Study: The lanthanoids form a closely related series of 14 elements. They undergo lanthanoid contraction — a gradual decrease in atomic and ionic radii from La to Lu. This has far-reaching consequences in the chemistry of the 3rd transition series. The principal oxidation state is +3, though +2 and +4 are also known for some members.\n\n(i) Define lanthanoid contraction and state its cause.\n(ii) Give two consequences of lanthanoid contraction.\n(iii) Why does Ce⁴⁺ act as an oxidant while Eu²⁺ acts as a reductant?\n(iv) Why do La³⁺ and Lu³⁺ show no colour while intermediate lanthanoid ions are coloured?', category: 'case-study', topicId: '4-5-lanthanoids' },

  // Assertion-Reason Questions
  { id: 'chem4-ar-1', text: "Assertion: Zn, Cd and Hg are not transition elements.\nReason: Their atoms and common ions have completely filled d-orbitals.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '4-1-position-periodic-table' },
  { id: 'chem4-ar-2', text: "Assertion: Transition metals have high enthalpies of atomisation.\nReason: Transition metals have large number of unpaired electrons and participate in metallic bonding.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '4-3-1-physical-properties' },
  { id: 'chem4-ar-3', text: "Assertion: Mn shows maximum oxidation states among 3d series elements.\nReason: Mn has maximum number of unpaired d electrons.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-ar-4', text: "Assertion: Cu cannot liberate H₂ from dilute acids.\nReason: Cu has positive standard electrode potential for M²⁺/M.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '4-3-5-electrode-potentials-m2m' },
  { id: 'chem4-ar-5', text: "Assertion: Lanthanoid contraction results in similar properties for 4d and 5d series elements.\nReason: Lanthanoid contraction is caused by poor shielding of 4f electrons.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true", category: 'assertion-reason', topicId: '4-5-lanthanoids' },

  // NCERT Exercise Questions
  { id: 'chem4-ncert-1', text: 'Write electronic configurations of: Cr³⁺, Pm³⁺, Cu⁺, Ce⁴⁺, Co²⁺, Lu²⁺, Mn²⁺, Th⁴⁺.', category: '2-mark', topicId: '4-2-electronic-config-d-block' },
  { id: 'chem4-ncert-2', text: 'Why are Mn²⁺ compounds more stable than Fe²⁺ towards oxidation to +3 state?', category: '2-mark', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-ncert-3', text: 'Explain how +2 state becomes more stable in first half of first row transition series.', category: '2-mark', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-ncert-4', text: 'To what extent do electronic configurations decide stability of oxidation states? Illustrate.', category: '2-mark', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-ncert-5', text: 'Stable oxidation states for d-configs 3d³, 3d⁵, 3d⁸, 3d⁴?', category: '2-mark', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-ncert-6', text: 'Name oxometal anions where metal oxidation state = group number.', category: '1-mark', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-ncert-7', text: 'Lanthanoid contraction — definition and consequences?', category: '2-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-ncert-8', text: 'Characteristics of transition elements; which d-block elements are not transition metals?', category: '2-mark', topicId: '4-3-general-properties' },
  { id: 'chem4-ncert-9', text: 'How is electronic configuration of transition elements different from non-transition?', category: '2-mark', topicId: '4-2-electronic-config-d-block' },
  { id: 'chem4-ncert-10', text: 'Different oxidation states of lanthanoids?', category: '2-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-ncert-11', text: 'Explain: (i) paramagnetic behaviour, (ii) high enthalpies of atomisation, (iii) coloured compounds, (iv) catalytic properties of transition metals.', category: '3-mark', topicId: '4-3-general-properties' },
  { id: 'chem4-ncert-12', text: 'What are interstitial compounds? Why are they well known for transition metals?', category: '2-mark', topicId: '4-3-13-interstitial-compounds' },
  { id: 'chem4-ncert-13', text: 'Variability of oxidation states — transition vs non-transition metals.', category: '2-mark', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-ncert-14', text: 'Preparation of K₂Cr₂O₇ from chromite ore; effect of increasing pH.', category: '2-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-ncert-15', text: 'Oxidising action of K₂Cr₂O₇ with ionic equations for I⁻, Fe²⁺, H₂S.', category: '2-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-ncert-16', text: 'Preparation of KMnO₄; reactions with Fe²⁺, SO₂, oxalic acid.', category: '2-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-ncert-17', text: 'Use E° data to comment on stability of Fe³⁺ vs Cr³⁺/Mn³⁺ and ease of oxidation.', category: '2-mark', topicId: '4-3-6-electrode-potentials-m3m2' },
  { id: 'chem4-ncert-18', text: 'Predict which ions will be coloured in aqueous solution: Ti³⁺, V³⁺, Cu⁺, Sc³⁺, Mn²⁺, Fe³⁺, Co²⁺.', category: '2-mark', topicId: '4-3-10-coloured-ions' },
  { id: 'chem4-ncert-19', text: 'Compare stability of +2 oxidation state for first transition series.', category: '3-mark', topicId: '4-3-4-oxidation-states' },
  { id: 'chem4-ncert-20', text: 'Compare actinoids with lanthanoids: electronic configuration, atomic/ionic sizes, oxidation states, chemical reactivity.', category: '3-mark', topicId: '4-6-actinoids' },
  { id: 'chem4-ncert-21', text: 'Account for: Cr²⁺ reducing/Mn³⁺ oxidising (d⁴); Co(II) stable in water but oxidised with ligands; d¹ configuration unstable in ions.', category: '3-mark', topicId: '4-3-8-chemical-reactivity' },
  { id: 'chem4-ncert-22', text: 'Disproportionation — meaning and two examples in aqueous solution.', category: '2-mark', topicId: '4-3-7-stability-higher-ox-states' },
  { id: 'chem4-ncert-23', text: 'Which metal in first transition series shows +1 most frequently and why?', category: '2-mark', topicId: '4-3-7-stability-higher-ox-states' },
  { id: 'chem4-ncert-24', text: 'Number of unpaired electrons in Mn³⁺, Cr³⁺, V³⁺, Ti³⁺; most stable in aqueous solution?', category: '2-mark', topicId: '4-3-9-magnetic-properties' },
  { id: 'chem4-ncert-25', text: 'Examples and reasons: lowest oxide basic, highest acidic/amphoteric; highest state in oxides and fluorides; highest state in oxoanions.', category: '3-mark', topicId: '4-3-7-stability-higher-ox-states' },
  { id: 'chem4-ncert-26', text: 'Steps in preparation of K₂Cr₂O₇ from chromite ore; KMnO₄ from pyrolusite ore.', category: '3-mark', topicId: '4-4-important-compounds' },
  { id: 'chem4-ncert-27', text: 'Alloys — definition; important lanthanoid alloy and its uses.', category: '2-mark', topicId: '4-3-14-alloy-formation' },
  { id: 'chem4-ncert-28', text: 'Inner transition elements — which atomic numbers (29, 59, 74, 95, 102, 104) are inner transition?', category: '2-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-ncert-29', text: 'Chemistry of actinoids not smooth — justify with oxidation states.', category: '2-mark', topicId: '4-6-actinoids' },
  { id: 'chem4-ncert-30', text: 'Last actinoid — electronic configuration and possible oxidation state.', category: '2-mark', topicId: '4-6-actinoids' },
  { id: 'chem4-ncert-31', text: "Ce³⁺ — electronic configuration by Hund's rule; calculate magnetic moment.", category: '2-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-ncert-32', text: 'Lanthanoids showing +4 and +2 states; correlate with electronic configurations.', category: '2-mark', topicId: '4-5-lanthanoids' },
  { id: 'chem4-ncert-33', text: 'Compare actinoids with lanthanoids: electronic config, oxidation states, chemical reactivity.', category: '3-mark', topicId: '4-6-actinoids' },
  { id: 'chem4-ncert-34', text: 'Electronic configurations of elements with Z = 61, 91, 101, 109.', category: '2-mark', topicId: '4-2-electronic-config-d-block' },
  { id: 'chem4-ncert-35', text: 'Compare first series transition metals with second and third series — electronic configs, oxidation states, ionisation enthalpies, atomic sizes.', category: '3-mark', topicId: '4-3-1-physical-properties' },
  { id: 'chem4-ncert-36', text: 'Number of 3d electrons in Ti²⁺, V²⁺, Cr³⁺, Mn²⁺, Fe²⁺, Fe³⁺, Co²⁺, Ni²⁺, Cu²⁺ and distribution in octahedral field.', category: '3-mark', topicId: '4-2-electronic-config-d-block' },
  { id: 'chem4-ncert-37', text: 'Comment on properties of first transition series elements different from heavier transition elements.', category: '2-mark', topicId: '4-3-1-physical-properties' },
  { id: 'chem4-ncert-38', text: 'Infer from magnetic moments: K₄[Mn(CN)₆]=2.2 BM, [Fe(H₂O)₆]²⁺=5.3 BM, K₂[MnCl₄]=5.9 BM.', category: '2-mark', topicId: '4-3-9-magnetic-properties' },
];

// Unit 5: Coordination Compounds - Question Bank
const unit5Questions: Question[] = [
  // 5.1 Werner's Theory of Coordination Compounds
  { id: 'chem5-1m-1', text: 'Who proposed the first systematic theory of coordination compounds? When was the theory propounded?', category: '1-mark', topicId: '5-1-werners-theory' },
  { id: 'chem5-1m-2', text: 'What are the two types of valences proposed by Werner for metal ions in coordination compounds?', category: '1-mark', topicId: '5-1-werners-theory' },
  { id: 'chem5-1m-3', text: 'What is the primary valence of a metal? Give one example.', category: '1-mark', topicId: '5-1-werners-theory' },
  { id: 'chem5-1m-4', text: 'What is secondary valence according to Werner? What is it equal to in modern terminology?', category: '1-mark', topicId: '5-1-werners-theory' },
  { id: 'chem5-1m-5', text: 'Are primary valences ionisable or non-ionisable?', category: '1-mark', topicId: '5-1-werners-theory' },
  { id: 'chem5-1m-6', text: "In Werner's theory, which valences are satisfied by neutral molecules or negative ions?", category: '1-mark', topicId: '5-1-werners-theory' },
  { id: 'chem5-1m-7', text: 'How many moles of AgCl are precipitated when 1 mol of CoCl₃.6NH₃ is treated with excess AgNO₃?', category: '1-mark', topicId: '5-1-werners-theory' },
  { id: 'chem5-1m-8', text: 'What are counter ions in a coordination compound?', category: '1-mark', topicId: '5-1-werners-theory' },
  { id: 'chem5-1m-9', text: 'Name the geometrical shapes most commonly adopted by coordination compounds of transition metals according to Werner.', category: '1-mark', topicId: '5-1-werners-theory' },
  { id: 'chem5-1m-10', text: 'Alfred Werner was awarded the Nobel Prize in Chemistry in which year?', category: '1-mark', topicId: '5-1-werners-theory' },
  { id: 'chem5-2m-1', text: "State the main postulates of Werner's theory of coordination compounds.", category: '2-mark', topicId: '5-1-werners-theory' },
  { id: 'chem5-2m-2', text: 'Explain the difference between primary valence and secondary valence with one example each.', category: '2-mark', topicId: '5-1-werners-theory' },
  { id: 'chem5-2m-3', text: "On the basis of Werner's theory, explain the following observations for cobalt(III) chloride-ammonia complexes: (i) 1 mol CoCl₃.6NH₃ gives 3 mol AgCl (ii) 1 mol CoCl₃.5NH₃ gives 2 mol AgCl", category: '2-mark', topicId: '5-1-werners-theory' },
  { id: 'chem5-2m-4', text: 'What is meant by coordination entities? Identify the coordination entity and counter ion in K₄[Fe(CN)₆].', category: '2-mark', topicId: '5-1-werners-theory' },
  { id: 'chem5-2m-5', text: 'Distinguish between a double salt and a complex compound. Give one example of each.', category: '2-mark', topicId: '5-1-werners-theory' },
  { id: 'chem5-2m-6', text: 'Two compounds have the formula CoCl₃.4NH₃ but different properties. What type of compounds are these? How did Werner explain this?', category: '2-mark', topicId: '5-1-werners-theory' },
  { id: 'chem5-3m-1', text: "Werner in 1898 propounded his theory of coordination compounds. State all four main postulates of his theory and explain the significance of secondary valence.", category: '3-mark', topicId: '5-1-werners-theory' },
  { id: 'chem5-3m-2', text: "The following data was obtained for cobalt(III) chloride-ammonia complexes. Complete the table and explain using Werner's theory: CoCl₃.6NH₃ (Yellow) → 3 mol AgCl | CoCl₃.5NH₃ (Purple) → 2 mol AgCl | CoCl₃.4NH₃ (Green/Violet) → 1 mol AgCl", category: '3-mark', topicId: '5-1-werners-theory' },

  // 5.2 Definitions of Important Terms
  { id: 'chem5-1m-11', text: 'Define coordination entity. Give one example.', category: '1-mark', topicId: '5-2-definitions' },
  { id: 'chem5-1m-12', text: 'What is a central atom/ion in a coordination compound? Give an example.', category: '1-mark', topicId: '5-2-definitions' },
  { id: 'chem5-1m-13', text: 'Define a ligand. What charge or nature can a ligand have?', category: '1-mark', topicId: '5-2-definitions' },
  { id: 'chem5-1m-14', text: 'What is an unidentate ligand? Give two examples.', category: '1-mark', topicId: '5-2-definitions' },
  { id: 'chem5-1m-15', text: 'What is a didentate ligand? Give two examples.', category: '1-mark', topicId: '5-2-definitions' },
  { id: 'chem5-1m-16', text: 'Define polydentate ligand. Give one example.', category: '1-mark', topicId: '5-2-definitions' },
  { id: 'chem5-1m-17', text: 'What is denticity of a ligand?', category: '1-mark', topicId: '5-2-definitions' },
  { id: 'chem5-1m-18', text: 'Define chelate ligand. Give one example.', category: '1-mark', topicId: '5-2-definitions' },
  { id: 'chem5-1m-19', text: 'What is an ambidentate ligand? Give two examples.', category: '1-mark', topicId: '5-2-definitions' },
  { id: 'chem5-1m-20', text: 'Define coordination number of a metal ion in a complex.', category: '1-mark', topicId: '5-2-definitions' },
  { id: 'chem5-1m-21', text: 'What is the coordination sphere of a complex? How is it represented?', category: '1-mark', topicId: '5-2-definitions' },
  { id: 'chem5-1m-22', text: 'What is a coordination polyhedron? Name the three most common types.', category: '1-mark', topicId: '5-2-definitions' },
  { id: 'chem5-1m-23', text: 'Define oxidation number of the central atom in a complex.', category: '1-mark', topicId: '5-2-definitions' },
  { id: 'chem5-1m-24', text: 'Distinguish between homoleptic and heteroleptic complexes. Give one example of each.', category: '1-mark', topicId: '5-2-definitions' },
  { id: 'chem5-1m-25', text: 'What is EDTA⁴⁻? How many donor atoms does it possess?', category: '1-mark', topicId: '5-2-definitions' },
  { id: 'chem5-2m-7', text: 'Identify the central atom, ligands, and coordination number in each of the following: (i) [NiCl₂(H₂O)₄] (ii) [CoCl(NH₃)₅]²⁺ (iii) [Fe(CN)₆]³⁻', category: '2-mark', topicId: '5-2-definitions' },
  { id: 'chem5-2m-8', text: 'Why are chelate complexes more stable than similar complexes containing unidentate ligands? Explain with an example.', category: '2-mark', topicId: '5-2-definitions' },
  { id: 'chem5-2m-9', text: 'Explain ambidentate ligands with the help of NO₂⁻ and SCN⁻ ions. Show how they can bond differently to a metal.', category: '2-mark', topicId: '5-2-definitions' },
  { id: 'chem5-2m-10', text: 'Find the coordination number of Fe and Co in [Fe(C₂O₄)₃]³⁻ and [Co(en)₃]³⁺ respectively. Explain why C₂O₄²⁻ and en give CN = 6.', category: '2-mark', topicId: '5-2-definitions' },
  { id: 'chem5-2m-11', text: 'State whether the following complexes are homoleptic or heteroleptic and give reasons: (i) [Co(NH₃)₆]³⁺ (ii) [Co(NH₃)₄Cl₂]⁺ (iii) [Ni(CO)₄]', category: '2-mark', topicId: '5-2-definitions' },
  { id: 'chem5-2m-12', text: 'Calculate the oxidation number of the central metal ion in the following: (i) [Cu(CN)₄]³⁻ (ii) [Fe(CN)₆]⁴⁻ (iii) [Co(H₂O)(CN)(en)₂]²⁺', category: '2-mark', topicId: '5-2-definitions' },
  { id: 'chem5-3m-3', text: 'Define the following terms with suitable examples: (i) Coordination entity (ii) Central atom/ion (iii) Ligand (iv) Coordination number (v) Coordination sphere (vi) Coordination polyhedron', category: '3-mark', topicId: '5-2-definitions' },
  { id: 'chem5-3m-4', text: 'Explain with two examples each: (i) Unidentate ligand (ii) Didentate ligand (iii) Ambidentate ligand. Why is EDTA⁴⁻ called a hexadentate ligand?', category: '3-mark', topicId: '5-2-definitions' },

  // 5.3.1 Formulas of Mononuclear Coordination Entities
  { id: 'chem5-1m-26', text: 'In writing the formula of a coordination compound, which atom/ion is listed first?', category: '1-mark', topicId: '5-3-1-formulas' },
  { id: 'chem5-1m-27', text: 'How are ligands ordered in the formula of a coordination entity?', category: '1-mark', topicId: '5-3-1-formulas' },
  { id: 'chem5-1m-28', text: 'In the formula of a charged coordination entity written alone (without counter ion), where is the charge indicated?', category: '1-mark', topicId: '5-3-1-formulas' },
  { id: 'chem5-2m-13', text: 'Write the formulas for the following coordination compounds: (a) tetraamminediaquacobalt(III) chloride (b) potassium tetracyanidonickelate(II) (c) tris(ethane-1,2-diamine)chromium(III) chloride', category: '2-mark', topicId: '5-3-1-formulas' },
  { id: 'chem5-2m-14', text: 'Write the formulas for the following coordination compounds: (a) tetraammineaquachloridocobalt(III) chloride (b) potassium tetrahydroxidozincate(II) (c) tetracarbonylnickel(0) (d) dichloridobis(ethane-1,2-diamine)cobalt(III)', category: '2-mark', topicId: '5-3-1-formulas' },
  { id: 'chem5-2m-15', text: 'Using IUPAC norms, write the formulas for: (i) Tetrahydroxidozincate(II) (ii) Potassium tetrachloridopalladate(II) (iii) Diamminedichloridoplatinum(II) (iv) Hexaamminecobalt(III) sulphate (v) Pentaamminenitrito-N-cobalt(III)', category: '2-mark', topicId: '5-3-1-formulas' },

  // 5.3.2 Naming of Mononuclear Coordination Compounds
  { id: 'chem5-1m-29', text: 'In naming a coordination compound, are cation or anion named first?', category: '1-mark', topicId: '5-3-2-naming' },
  { id: 'chem5-1m-30', text: 'How are anionic ligands named? Give an example.', category: '1-mark', topicId: '5-3-2-naming' },
  { id: 'chem5-1m-31', text: 'What are the special names given to H₂O, NH₃, CO and NO as ligands?', category: '1-mark', topicId: '5-3-2-naming' },
  { id: 'chem5-1m-32', text: 'What suffix is added to the metal name when the complex ion is an anionic complex?', category: '1-mark', topicId: '5-3-2-naming' },
  { id: 'chem5-1m-33', text: 'When are the prefixes bis, tris, tetrakis used instead of di, tri, tetra?', category: '1-mark', topicId: '5-3-2-naming' },
  { id: 'chem5-2m-16', text: 'Write the IUPAC names of the following coordination compounds: (i) [Co(NH₃)₆]Cl₃ (ii) [Co(NH₃)₅Cl]Cl₂ (iii) K₃[Fe(CN)₆] (iv) K₃[Fe(C₂O₄)₃] (v) K₂[PdCl₄] (vi) [Pt(NH₃)₂Cl(NH₂CH₃)]Cl', category: '2-mark', topicId: '5-3-2-naming' },
  { id: 'chem5-2m-17', text: 'Write the IUPAC names of the following: (a) [Pt(NH₃)₂Cl(NO₂)] (b) [CoCl₂(en)₂]Cl (c) [Co(NH₃)₅(CO₃)]Cl (d) Hg[Co(SCN)₄]', category: '2-mark', topicId: '5-3-2-naming' },
  { id: 'chem5-2m-18', text: 'Name the compound [Ag(NH₃)₂][Ag(CN)₂]. Notice that both species contain Ag – explain why their names differ.', category: '2-mark', topicId: '5-3-2-naming' },
  { id: 'chem5-2m-19', text: 'Give the IUPAC names of [Cr(NH₃)₃(H₂O)₃]Cl₃ and [Co(H₂NCH₂CH₂NH₂)₃]₂(SO₄)₃ with explanation.', category: '2-mark', topicId: '5-3-2-naming' },
  { id: 'chem5-3m-5', text: 'Using IUPAC norms write the systematic names of: (i) [Co(NH₃)₆]Cl₃ (ii) [Pt(NH₃)₂Cl(NH₂CH₃)]Cl (iii) [Ti(H₂O)₆]³⁺ (iv) [Co(NH₃)₄Cl(NO₂)]Cl (v) [Mn(H₂O)₆]²⁺ (vi) [NiCl₄]²⁻ (vii) [Ni(NH₃)₆]Cl₂ (viii) [Co(en)₃]³⁺ (ix) [Ni(CO)₄]', category: '3-mark', topicId: '5-3-2-naming' },

  // 5.4 Isomerism in Coordination Compounds
  { id: 'chem5-1m-34', text: 'Define isomers. What are the two principal types of isomerism in coordination compounds?', category: '1-mark', topicId: '5-4-isomerism' },
  { id: 'chem5-1m-35', text: 'What is stereoisomerism? Give its two subtypes.', category: '1-mark', topicId: '5-4-isomerism' },
  { id: 'chem5-1m-36', text: 'What is structural isomerism? Name its four subtypes.', category: '1-mark', topicId: '5-4-isomerism' },
  { id: 'chem5-1m-37', text: 'Do stereoisomers have the same or different chemical bonds?', category: '1-mark', topicId: '5-4-isomerism' },
  { id: 'chem5-2m-20', text: 'Distinguish between stereoisomerism and structural isomerism in coordination compounds with one example each.', category: '2-mark', topicId: '5-4-isomerism' },
  { id: 'chem5-2m-21', text: 'List all types of isomerism possible for coordination compounds and give one example of each type.', category: '2-mark', topicId: '5-4-isomerism' },

  // 5.4.1 Geometric Isomerism
  { id: 'chem5-1m-38', text: 'What type of complexes show geometric isomerism?', category: '1-mark', topicId: '5-4-1-geometric-isomerism' },
  { id: 'chem5-1m-39', text: 'In a square planar complex of formula [MX₂L₂], what are the two geometric isomers called?', category: '1-mark', topicId: '5-4-1-geometric-isomerism' },
  { id: 'chem5-1m-40', text: 'Why is geometric isomerism not possible in tetrahedral complexes?', category: '1-mark', topicId: '5-4-1-geometric-isomerism' },
  { id: 'chem5-1m-41', text: 'Name the two types of geometric isomers in octahedral [Ma₃b₃] complexes.', category: '1-mark', topicId: '5-4-1-geometric-isomerism' },
  { id: 'chem5-2m-22', text: 'Draw the cis and trans isomers of: (i) [Pt(NH₃)₂Cl₂] (ii) [Co(NH₃)₄Cl₂]⁺', category: '2-mark', topicId: '5-4-1-geometric-isomerism' },
  { id: 'chem5-2m-23', text: 'Draw the fac and mer isomers of [Co(NH₃)₃(NO₂)₃]. How do the positions of identical ligands differ in each?', category: '2-mark', topicId: '5-4-1-geometric-isomerism' },
  { id: 'chem5-2m-24', text: 'Why is geometrical isomerism not possible in tetrahedral complexes having two different types of unidentate ligands? Explain.', category: '2-mark', topicId: '5-4-1-geometric-isomerism' },
  { id: 'chem5-2m-25', text: 'How many geometrical isomers are possible in the following coordination entities? (i) [Cr(C₂O₄)₃]³⁻ (ii) [Co(NH₃)₃Cl₃]', category: '2-mark', topicId: '5-4-1-geometric-isomerism' },
  { id: 'chem5-2m-26', text: 'Draw structures of geometrical isomers of [Fe(NH₃)₂(CN)₄]⁻.', category: '2-mark', topicId: '5-4-1-geometric-isomerism' },
  { id: 'chem5-3m-6', text: 'Explain geometric isomerism in square planar and octahedral complexes. Draw structures for: (a) cis and trans isomers of [CoCl₂(en)₂]⁺ (octahedral) (b) fac and mer isomers of [Co(NH₃)₃(NO₂)₃]', category: '3-mark', topicId: '5-4-1-geometric-isomerism' },
  { id: 'chem5-3m-7', text: 'Write all the geometrical isomers of [Pt(NH₃)(Br)(Cl)(py)] and state how many of these will exhibit optical isomers.', category: '3-mark', topicId: '5-4-1-geometric-isomerism' },

  // 5.4.2 Optical Isomerism
  { id: 'chem5-1m-42', text: 'Define optical isomers. What are they also called?', category: '1-mark', topicId: '5-4-2-optical-isomerism' },
  { id: 'chem5-1m-43', text: 'What are enantiomers? What does chiral mean?', category: '1-mark', topicId: '5-4-2-optical-isomerism' },
  { id: 'chem5-1m-44', text: 'What are dextro (d) and laevo (l) forms of optical isomers?', category: '1-mark', topicId: '5-4-2-optical-isomerism' },
  { id: 'chem5-1m-45', text: 'In which type of complexes is optical isomerism most commonly found?', category: '1-mark', topicId: '5-4-2-optical-isomerism' },
  { id: 'chem5-2m-27', text: 'Out of cis-[CrCl₂(ox)₂]³⁻ and trans-[CrCl₂(ox)₂]³⁻, which is chiral (optically active)? Justify your answer.', category: '2-mark', topicId: '5-4-2-optical-isomerism' },
  { id: 'chem5-2m-28', text: 'In the coordination entity [PtCl₂(en)₂]²⁺, only the cis-isomer shows optical activity. Explain why.', category: '2-mark', topicId: '5-4-2-optical-isomerism' },
  { id: 'chem5-2m-29', text: 'Draw the optical isomers (d and l) of [Co(en)₃]³⁺.', category: '2-mark', topicId: '5-4-2-optical-isomerism' },
  { id: 'chem5-3m-8', text: 'Draw all the isomers (geometrical and optical) of: (i) [CoCl₂(en)₂]⁺ (ii) [Co(NH₃)Cl(en)₂]²⁺ (iii) [Co(NH₃)₂Cl₂(en)]⁺', category: '3-mark', topicId: '5-4-2-optical-isomerism' },
  { id: 'chem5-3m-9', text: 'Draw structures of optical isomers of: (i) [Cr(C₂O₄)₃]³⁻ (ii) [PtCl₂(en)₂]²⁺ (iii) [Cr(NH₃)₂Cl₂(en)]⁺', category: '3-mark', topicId: '5-4-2-optical-isomerism' },

  // 5.4.3 Linkage Isomerism
  { id: 'chem5-1m-46', text: 'What type of ligand causes linkage isomerism? Give one example of such a ligand.', category: '1-mark', topicId: '5-4-3-linkage-isomerism' },
  { id: 'chem5-1m-47', text: 'In [Co(NH₃)₅(NO₂)]Cl₂, what are the red and yellow forms? How do they differ?', category: '1-mark', topicId: '5-4-3-linkage-isomerism' },
  { id: 'chem5-2m-30', text: 'Explain linkage isomerism using the thiocyanate ligand NCS⁻. Show how it gives two different complexes.', category: '2-mark', topicId: '5-4-3-linkage-isomerism' },
  { id: 'chem5-2m-31', text: 'Indicate the type of isomerism exhibited by [Co(NH₃)₅(NO₂)](NO₃)₂. Draw the possible structures.', category: '2-mark', topicId: '5-4-3-linkage-isomerism' },

  // 5.4.4 Coordination Isomerism
  { id: 'chem5-1m-48', text: 'What is coordination isomerism? In which type of compounds does it arise?', category: '1-mark', topicId: '5-4-4-coordination-isomerism' },
  { id: 'chem5-1m-49', text: 'Give an example of coordination isomers.', category: '1-mark', topicId: '5-4-4-coordination-isomerism' },
  { id: 'chem5-2m-32', text: 'Explain coordination isomerism with the example of [Co(NH₃)₆][Cr(CN)₆] and its isomer.', category: '2-mark', topicId: '5-4-4-coordination-isomerism' },

  // 5.4.5 Ionisation Isomerism
  { id: 'chem5-1m-50', text: 'What is ionisation isomerism? Give one example.', category: '1-mark', topicId: '5-4-5-ionisation-isomerism' },
  { id: 'chem5-1m-51', text: 'How are ionisation isomers experimentally distinguished?', category: '1-mark', topicId: '5-4-5-ionisation-isomerism' },
  { id: 'chem5-2m-33', text: 'Give evidence that [Co(NH₃)₅Cl]SO₄ and [Co(NH₃)₅(SO₄)]Cl are ionisation isomers. Write the reactions with AgNO₃ and BaCl₂.', category: '2-mark', topicId: '5-4-5-ionisation-isomerism' },
  { id: 'chem5-2m-34', text: 'Indicate the types of isomerism in [Co(NH₃)₅(NO₂)](NO₃)₂ and draw structures.', category: '2-mark', topicId: '5-4-5-ionisation-isomerism' },

  // 5.4.6 Solvate Isomerism
  { id: 'chem5-1m-52', text: 'What is solvate (hydrate) isomerism? Give one example.', category: '1-mark', topicId: '5-4-6-solvate-isomerism' },
  { id: 'chem5-1m-53', text: 'How do [Cr(H₂O)₆]Cl₃ (violet) and [Cr(H₂O)₅Cl]Cl₂.H₂O (grey-green) differ?', category: '1-mark', topicId: '5-4-6-solvate-isomerism' },

  // 5.5 Bonding in Coordination Compounds
  { id: 'chem5-1m-54', text: 'Name the four theories put forward to explain bonding in coordination compounds.', category: '1-mark', topicId: '5-5-bonding' },
  { id: 'chem5-1m-55', text: 'Which two theories are studied at the +2 level (elementary treatment)?', category: '1-mark', topicId: '5-5-bonding' },

  // 5.5.1 Valence Bond Theory (VBT)
  { id: 'chem5-1m-56', text: 'What hybridisation is associated with a tetrahedral coordination number 4?', category: '1-mark', topicId: '5-5-1-vbt' },
  { id: 'chem5-1m-57', text: 'What hybridisation gives a square planar geometry?', category: '1-mark', topicId: '5-5-1-vbt' },
  { id: 'chem5-1m-58', text: 'What hybridisation is involved in an octahedral coordination entity (inner orbital)?', category: '1-mark', topicId: '5-5-1-vbt' },
  { id: 'chem5-1m-59', text: 'What is the difference between an inner orbital complex and an outer orbital complex?', category: '1-mark', topicId: '5-5-1-vbt' },
  { id: 'chem5-1m-60', text: 'What is a spin-paired (low spin) complex? Give one example.', category: '1-mark', topicId: '5-5-1-vbt' },
  { id: 'chem5-1m-61', text: 'What is a high spin (outer orbital) complex? Give one example.', category: '1-mark', topicId: '5-5-1-vbt' },
  { id: 'chem5-2m-35', text: 'Using valence bond theory, explain the bonding in [Co(NH₃)₆]³⁺. Give the hybridisation and magnetic nature. Why is it called an inner orbital complex?', category: '2-mark', topicId: '5-5-1-vbt' },
  { id: 'chem5-2m-36', text: 'Explain the bonding, geometry, and magnetic behaviour of [NiCl₄]²⁻ using VBT. Why is it paramagnetic?', category: '2-mark', topicId: '5-5-1-vbt' },
  { id: 'chem5-2m-37', text: 'Explain with orbital diagram why [Ni(CN)₄]²⁻ is diamagnetic and square planar while [NiCl₄]²⁻ is paramagnetic and tetrahedral.', category: '2-mark', topicId: '5-5-1-vbt' },
  { id: 'chem5-2m-38', text: 'Using valence bond theory, explain: (i) [Co(NH₃)₆]³⁺ is an inner orbital complex (ii) [Ni(NH₃)₆]²⁺ is an outer orbital complex', category: '2-mark', topicId: '5-5-1-vbt' },
  { id: 'chem5-2m-39', text: 'The spin only magnetic moment of [MnBr₄]²⁻ is 5.9 BM. Predict the geometry of the complex ion.', category: '2-mark', topicId: '5-5-1-vbt' },
  { id: 'chem5-2m-40', text: 'Discuss the nature of bonding in the following coordination entities on the basis of valence bond theory: (i) [Fe(CN)₆]⁴⁻ (ii) [FeF₆]³⁻ (iii) [Co(C₂O₄)₃]³⁻ (iv) [CoF₆]³⁻', category: '2-mark', topicId: '5-5-1-vbt' },
  { id: 'chem5-3m-10', text: '[NiCl₄]²⁻ is paramagnetic while [Ni(CO)₄] is diamagnetic though both are tetrahedral. Why? Explain using VBT with orbital diagrams.', category: '3-mark', topicId: '5-5-1-vbt' },
  { id: 'chem5-3m-11', text: 'Explain on the basis of valence bond theory that [Ni(CN)₄]²⁻ ion with square planar structure is diamagnetic and the [NiCl₄]²⁻ ion with tetrahedral geometry is paramagnetic. Draw orbital diagrams.', category: '3-mark', topicId: '5-5-1-vbt' },

  // 5.5.2 Magnetic Properties of Coordination Compounds
  { id: 'chem5-1m-62', text: 'How is the magnetic moment of coordination compounds measured experimentally?', category: '1-mark', topicId: '5-5-2-magnetic-properties' },
  { id: 'chem5-1m-63', text: 'Which property of a coordination compound can be deduced from its magnetic moment value?', category: '1-mark', topicId: '5-5-2-magnetic-properties' },
  { id: 'chem5-1m-64', text: 'How many unpaired electrons does [Mn(CN)₆]³⁻ have? How about [MnCl₆]³⁻?', category: '1-mark', topicId: '5-5-2-magnetic-properties' },
  { id: 'chem5-2m-41', text: '[Fe(CN)₆]³⁻ is weakly paramagnetic whereas [FeF₆]³⁻ is strongly paramagnetic. Explain.', category: '2-mark', topicId: '5-5-2-magnetic-properties' },
  { id: 'chem5-2m-42', text: '[Fe(H₂O)₆]³⁺ is strongly paramagnetic whereas [Fe(CN)₆]³⁻ is weakly paramagnetic. Explain using VBT.', category: '2-mark', topicId: '5-5-2-magnetic-properties' },
  { id: 'chem5-2m-43', text: '[CoF₆]³⁻ is paramagnetic (4 unpaired electrons) while [Co(C₂O₄)₃]³⁻ is diamagnetic. How does VBT explain this?', category: '2-mark', topicId: '5-5-2-magnetic-properties' },
  { id: 'chem5-2m-44', text: 'Predict the number of unpaired electrons in the square planar [Pt(CN)₄]²⁻ ion.', category: '2-mark', topicId: '5-5-2-magnetic-properties' },
  { id: 'chem5-2m-45', text: 'Amongst the following ions, which one has the highest magnetic moment value? (i) [Cr(H₂O)₆]³⁺ (ii) [Fe(H₂O)₆]²⁺ (iii) [Zn(H₂O)₆]²⁺', category: '2-mark', topicId: '5-5-2-magnetic-properties' },

  // 5.5.3 Limitations of Valence Bond Theory
  { id: 'chem5-2m-46', text: 'State any four limitations of valence bond theory in explaining the properties of coordination compounds.', category: '2-mark', topicId: '5-5-3-vbt-limitations' },
  { id: 'chem5-2m-47', text: 'Why was crystal field theory (CFT) developed? What are the main shortcomings of VBT that CFT addresses?', category: '2-mark', topicId: '5-5-3-vbt-limitations' },

  // 5.5.4 Crystal Field Theory (CFT)
  { id: 'chem5-1m-65', text: 'What is the basic assumption of crystal field theory about metal-ligand bonds?', category: '1-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-1m-66', text: 'What are ligands treated as in CFT?', category: '1-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-1m-67', text: 'What is the degeneracy of d orbitals in a free gaseous metal ion?', category: '1-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-1m-68', text: 'How many d orbitals lie in the eg set and how many in the t2g set in an octahedral complex?', category: '1-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-1m-69', text: 'By how much (in terms of Δo) do the eg and t2g orbitals differ in energy in an octahedral complex?', category: '1-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-1m-70', text: 'Define crystal field splitting energy (Δo). On what two factors does it depend?', category: '1-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-1m-71', text: 'What is the spectrochemical series? Is it experimentally or theoretically determined?', category: '1-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-1m-72', text: 'Which ligands are called strong field ligands? Give three examples.', category: '1-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-1m-73', text: 'Which ligands are called weak field ligands? Give three examples.', category: '1-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-1m-74', text: 'What is the condition (in terms of Δo and P) for a high spin complex to form?', category: '1-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-1m-75', text: 'What is the condition for a low spin complex to form?', category: '1-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-1m-76', text: 'For d⁴–d⁷ complexes, are strong field or weak field cases more stable? Why?', category: '1-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-1m-77', text: 'What is the relationship between Δt and Δo for the same metal, ligands and distances?', category: '1-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-2m-48', text: 'Explain crystal field splitting in an octahedral coordination entity. How are the d orbitals split into t2g and eg sets? Give an energy diagram.', category: '2-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-2m-49', text: 'Explain crystal field splitting in a tetrahedral coordination entity. How does it differ from octahedral splitting? Why are low spin tetrahedral complexes rare?', category: '2-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-2m-50', text: 'Write the spectrochemical series. Distinguish between a strong field ligand and a weak field ligand. How do they affect the spin state of a complex?', category: '2-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-2m-51', text: 'What is crystal field splitting energy? How does the magnitude of Δo decide the actual configuration of d orbitals in a coordination entity?', category: '2-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-2m-52', text: 'The hexaquo manganese(II) ion contains five unpaired electrons while the hexacyanoion contains only one unpaired electron. Explain using Crystal Field Theory.', category: '2-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-2m-53', text: '[Cr(NH₃)₆]³⁺ is paramagnetic while [Ni(CN)₄]²⁻ is diamagnetic. Explain using CFT/VBT.', category: '2-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-2m-54', text: 'Amongst the following, identify the most stable complex and justify using CFT: (i) [Fe(H₂O)₆]³⁺ (ii) [Fe(NH₃)₆]³⁺ (iii) [Fe(C₂O₄)₃]³⁻ (iv) [FeCl₆]³⁻', category: '2-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-3m-12', text: 'Draw figure to show the splitting of d orbitals in an octahedral crystal field. Label the orbitals and the energy gap (Δo). State which d orbitals are raised and which are lowered.', category: '3-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-3m-13', text: 'Give the oxidation state, d orbital occupation and coordination number of the central metal ion in the following complexes: (i) K₃[Co(C₂O₄)₃] (ii) cis-[CrCl₂(en)₂]Cl (iii) (NH₄)₂[CoF₄] (iv) [Mn(H₂O)₆]SO₄', category: '3-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-3m-14', text: 'Write down the IUPAC name, oxidation state, electronic configuration, coordination number, stereochemistry and magnetic moment of: (i) K[Cr(H₂O)₂(C₂O₄)₂].3H₂O (ii) [Co(NH₃)₅Cl]Cl₂ (iii) [CrCl₃(py)₃] (iv) Cs[FeCl₄] (v) K₄[Mn(CN)₆]', category: '3-mark', topicId: '5-5-4-cft' },

  // 5.5.5 Colour in Coordination Compounds
  { id: 'chem5-1m-78', text: 'What causes the colour of coordination compounds?', category: '1-mark', topicId: '5-5-5-colour' },
  { id: 'chem5-1m-79', text: 'The colour of a coordination compound is complementary to the colour absorbed. Explain.', category: '1-mark', topicId: '5-5-5-colour' },
  { id: 'chem5-1m-80', text: '[Ti(H₂O)₆]³⁺ absorbs blue-green light (498 nm). What colour does the complex appear?', category: '1-mark', topicId: '5-5-5-colour' },
  { id: 'chem5-1m-81', text: 'What is a d-d transition? Why does it cause colour?', category: '1-mark', topicId: '5-5-5-colour' },
  { id: 'chem5-1m-82', text: 'Anhydrous CuSO₄ is white but CuSO₄.5H₂O is blue. Explain why.', category: '1-mark', topicId: '5-5-5-colour' },
  { id: 'chem5-1m-83', text: 'Why does [Co(CN)₆]³⁻ appear pale yellow despite CN⁻ being a strong field ligand?', category: '1-mark', topicId: '5-5-5-colour' },
  { id: 'chem5-2m-55', text: 'Explain the violet colour of the complex [Ti(H₂O)₆]³⁺ on the basis of crystal field theory. Describe the electronic transition involved.', category: '2-mark', topicId: '5-5-5-colour' },
  { id: 'chem5-2m-56', text: 'A solution of [Ni(H₂O)₆]²⁺ is green but a solution of [Ni(CN)₄]²⁻ is colourless. Explain using CFT.', category: '2-mark', topicId: '5-5-5-colour' },
  { id: 'chem5-2m-57', text: '[Fe(CN)₆]⁴⁻ and [Fe(H₂O)₆]²⁺ are of different colours in dilute solutions. Why?', category: '2-mark', topicId: '5-5-5-colour' },
  { id: 'chem5-2m-58', text: 'Aqueous copper sulphate solution (blue) gives: (i) a green precipitate with aqueous KF and (ii) a bright green solution with aqueous KCl. Explain these experimental results.', category: '2-mark', topicId: '5-5-5-colour' },
  { id: 'chem5-2m-59', text: 'Explain how the progressive addition of en ligand to [Ni(H₂O)₆]²⁺ changes its colour from green to blue-purple to violet.', category: '2-mark', topicId: '5-5-5-colour' },
  { id: 'chem5-3m-15', text: 'What will be the correct order for the wavelengths of absorption in the visible region for the following? Justify using the spectrochemical series: [Ni(NO₂)₆]⁴⁻, [Ni(NH₃)₆]²⁺, [Ni(H₂O)₆]²⁺', category: '3-mark', topicId: '5-5-5-colour' },

  // 5.5.6 Limitations of Crystal Field Theory
  { id: 'chem5-2m-60', text: 'State any two limitations of Crystal Field Theory.', category: '2-mark', topicId: '5-5-6-cft-limitations' },
  { id: 'chem5-2m-61', text: 'CFT assumes ligands as point charges. Why does this assumption create problems, especially for anionic ligands?', category: '2-mark', topicId: '5-5-6-cft-limitations' },

  // 5.6 Bonding in Metal Carbonyls
  { id: 'chem5-1m-84', text: 'What are homoleptic carbonyls? Give the geometry of Ni(CO)₄ and Cr(CO)₆.', category: '1-mark', topicId: '5-6-metal-carbonyls' },
  { id: 'chem5-1m-85', text: 'What is synergic bonding in metal carbonyls?', category: '1-mark', topicId: '5-6-metal-carbonyls' },
  { id: 'chem5-1m-86', text: 'What type of bond (sigma or pi) is formed from CO lone pair to metal? What type from metal filled d orbital to CO?', category: '1-mark', topicId: '5-6-metal-carbonyls' },
  { id: 'chem5-1m-87', text: 'What is the geometry of Fe(CO)₅?', category: '1-mark', topicId: '5-6-metal-carbonyls' },
  { id: 'chem5-2m-62', text: 'Discuss the nature of bonding in metal carbonyls. How does synergic bonding provide stability?', category: '2-mark', topicId: '5-6-metal-carbonyls' },
  { id: 'chem5-2m-63', text: 'Explain the metal-carbon bond in metal carbonyls in terms of both σ and π characters.', category: '2-mark', topicId: '5-6-metal-carbonyls' },
  { id: 'chem5-2m-64', text: 'Name and give the structures of any four homoleptic metal carbonyls discussed in the chapter.', category: '2-mark', topicId: '5-6-metal-carbonyls' },
  { id: 'chem5-3m-16', text: 'FeSO₄ solution mixed with (NH₄)₂SO₄ solution in 1:1 molar ratio gives the test of Fe²⁺ ion but CuSO₄ solution mixed with aqueous ammonia in 1:4 molar ratio does not give the test of Cu²⁺ ion. Explain why.', category: '3-mark', topicId: '5-6-metal-carbonyls' },

  // 5.7 Importance and Applications of Coordination Compounds
  { id: 'chem5-1m-88', text: 'Name the coordination compound of magnesium responsible for photosynthesis.', category: '1-mark', topicId: '5-7-applications' },
  { id: 'chem5-1m-89', text: 'Haemoglobin is a coordination compound of which metal?', category: '1-mark', topicId: '5-7-applications' },
  { id: 'chem5-1m-90', text: 'Vitamin B₁₂ (cyanocobalamine) is a coordination compound of which metal?', category: '1-mark', topicId: '5-7-applications' },
  { id: 'chem5-1m-91', text: 'What coordination entity is formed in the cyanide process of gold extraction?', category: '1-mark', topicId: '5-7-applications' },
  { id: 'chem5-1m-92', text: 'Name the Wilkinson catalyst and state its use.', category: '1-mark', topicId: '5-7-applications' },
  { id: 'chem5-1m-93', text: 'What complex ion is formed when AgBr dissolves in hypo (Na₂S₂O₃) solution in photography?', category: '1-mark', topicId: '5-7-applications' },
  { id: 'chem5-1m-94', text: 'Name the complex salt used in the treatment of lead poisoning.', category: '1-mark', topicId: '5-7-applications' },
  { id: 'chem5-1m-95', text: 'Which platinum coordination compounds are used as anti-tumour agents? Give one example.', category: '1-mark', topicId: '5-7-applications' },
  { id: 'chem5-2m-65', text: 'What is chelate therapy? Give two examples of its application in medicine.', category: '2-mark', topicId: '5-7-applications' },
  { id: 'chem5-2m-66', text: 'Describe the role of coordination compounds in biological systems. Give at least two examples with the metal involved.', category: '2-mark', topicId: '5-7-applications' },
  { id: 'chem5-2m-67', text: 'Explain the role of coordination compounds in the extraction of metals. Give an example for both gold and nickel.', category: '2-mark', topicId: '5-7-applications' },
  { id: 'chem5-2m-68', text: 'What is the coordination entity formed when excess of aqueous KCN is added to an aqueous solution of copper sulphate? Why is no precipitate of copper sulphide obtained when H₂S(g) is passed through this solution?', category: '2-mark', topicId: '5-7-applications' },
  { id: 'chem5-2m-69', text: 'Explain how EDTA is used in analytical chemistry for estimating hardness of water.', category: '2-mark', topicId: '5-7-applications' },
  { id: 'chem5-3m-17', text: 'Discuss briefly, giving an example in each case, the role of coordination compounds in: (i) biological systems (ii) medicinal chemistry (iii) analytical chemistry (iv) extraction/metallurgy of metals.', category: '3-mark', topicId: '5-7-applications' },
  { id: 'chem5-3m-18', text: 'How is the purification of impure nickel carried out using coordination chemistry? Write the equations involved.', category: '3-mark', topicId: '5-7-applications' },

  // MCQ Questions
  { id: 'chem5-mcq-1', text: 'How many ions are produced from the complex Co(NH₃)₆Cl₂ in solution?\n(i) 6\n(ii) 4\n(iii) 3\n(iv) 2', category: '1-mark', topicId: '5-2-definitions' },
  { id: 'chem5-mcq-2', text: 'Amongst the following ions, which one has the highest magnetic moment value?\n(i) [Cr(H₂O)₆]³⁺\n(ii) [Fe(H₂O)₆]²⁺\n(iii) [Zn(H₂O)₆]²⁺', category: '1-mark', topicId: '5-5-2-magnetic-properties' },
  { id: 'chem5-mcq-3', text: 'Amongst the following, the most stable complex is:\n(i) [Fe(H₂O)₆]³⁺\n(ii) [Fe(NH₃)₆]³⁺\n(iii) [Fe(C₂O₄)₃]³⁻\n(iv) [FeCl₆]³⁻', category: '1-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-mcq-4', text: 'What will be the correct order for the wavelengths of absorption in the visible region for [Ni(NO₂)₆]⁴⁻, [Ni(NH₃)₆]²⁺, [Ni(H₂O)₆]²⁺?\n(A) [Ni(NO₂)₆]⁴⁻ < [Ni(NH₃)₆]²⁺ < [Ni(H₂O)₆]²⁺\n(B) [Ni(H₂O)₆]²⁺ < [Ni(NH₃)₆]²⁺ < [Ni(NO₂)₆]⁴⁻\n(C) [Ni(NH₃)₆]²⁺ < [Ni(H₂O)₆]²⁺ < [Ni(NO₂)₆]⁴⁻\n(D) [Ni(NO₂)₆]⁴⁻ < [Ni(H₂O)₆]²⁺ < [Ni(NH₃)₆]²⁺', category: '1-mark', topicId: '5-5-5-colour' },
  { id: 'chem5-mcq-5', text: 'The coordination number of Ni in [Ni(C₂O₄)₃]⁴⁻ is:\n(A) 3\n(B) 4\n(C) 6\n(D) 8', category: '1-mark', topicId: '5-2-definitions' },
  { id: 'chem5-mcq-6', text: 'The hybridisation of the central atom in [Ni(CO)₄] is:\n(A) sp³\n(B) dsp²\n(C) sp³d²\n(D) d²sp³', category: '1-mark', topicId: '5-5-1-vbt' },
  { id: 'chem5-mcq-7', text: 'Which of the following is an ambidentate ligand?\n(A) en\n(B) EDTA⁴⁻\n(C) SCN⁻\n(D) C₂O₄²⁻', category: '1-mark', topicId: '5-2-definitions' },

  // HOTS / 5 Mark Questions
  { id: 'chem5-5m-1', text: 'Specify the oxidation numbers of the metals in the following coordination entities and write their electronic configurations: (i) [Co(H₂O)(CN)(en)₂]²⁺ (ii) [CoBr₂(en)₂]⁺ (iii) [PtCl₄]²⁻ (iv) K₃[Fe(CN)₆] (v) [Cr(NH₃)₃Cl₃]', category: '5-mark', topicId: '5-5-4-cft' },
  { id: 'chem5-5m-2', text: 'For the complex K[Cr(H₂O)₂(C₂O₄)₂].3H₂O, write: (i) IUPAC name (ii) oxidation state of Cr (iii) electronic configuration of Cr in the complex (iv) coordination number (v) stereochemistry and (vi) magnetic moment.', category: '5-mark', topicId: '5-5-4-cft' },

  // Case-Based Questions
  { id: 'chem5-case-1', text: 'Case Study: Coordination compounds are central to biological processes. Haemoglobin carries oxygen in blood; chlorophyll harnesses sunlight; Vitamin B₁₂ supports nerve function.\n\n(a) Name the metal, type of ligand coordination, and function of haemoglobin.\n(b) Name the metal and its role in chlorophyll.\n(c) Explain why cis-platin is used in cancer treatment. Name its systematic IUPAC name.\n(d) Why does a coordination compound of a metal ion show colour while the free metal ion is colourless?\n(e) Name any one chelating ligand used in chelate therapy and state what metal it removes from the body.', category: 'case-study', topicId: '5-7-applications' },
  { id: 'chem5-case-2', text: 'Case Study: A researcher studies two cobalt complexes: Complex A: [Co(NH₃)₆]³⁺ and Complex B: [CoF₆]³⁻. Using VBT and CFT, answer the following:\n\n(a) What is the hybridisation and geometry of Complex A?\n(b) Is Complex A paramagnetic or diamagnetic? Justify with an orbital diagram.\n(c) What is the hybridisation and magnetic nature of Complex B?\n(d) NH₃ is a strong field ligand while F⁻ is a weak field ligand. How does this affect the electron pairing in each complex?\n(e) Which complex will absorb light of longer wavelength, A or B? Justify.', category: 'case-study', topicId: '5-5-4-cft' },
  { id: 'chem5-case-3', text: 'Write all the geometrical isomers of [Pt(NH₃)(Br)(Cl)(py)] and comment on which isomers will exhibit optical activity. Also explain the concept of chirality in coordination chemistry.', category: 'case-study', topicId: '5-4-1-geometric-isomerism' },
  { id: 'chem5-case-4', text: 'Explain the crystal field theory for octahedral complexes in detail. Include: (i) splitting of d orbitals (ii) t2g and eg sets with energy values (iii) high-spin vs low-spin for d⁴ configuration (iv) role of spectrochemical series (v) explanation of colour with [Ti(H₂O)₆]³⁺ as example.', category: 'case-study', topicId: '5-5-4-cft' },
];

// Unit 6: Haloalkanes and Haloarenes - Question Bank
const unit6Questions: Question[] = [
  // 6.1.1 On the Basis of Number of Halogen Atoms
  { id: 'chem6-1m-1', text: 'Define monohalogen compound. Give one example of a monohaloalkane and one of a monohaloarene.', category: '1-mark', topicId: '6-1-1-number-halogen-atoms' },
  { id: 'chem6-1m-2', text: 'What is a dihaloalkane? Distinguish between gem-dihalide and vic-dihalide with examples.', category: '1-mark', topicId: '6-1-1-number-halogen-atoms' },
  { id: 'chem6-1m-3', text: 'Give the general formula for the homologous series of haloalkanes.', category: '1-mark', topicId: '6-1-1-number-halogen-atoms' },
  { id: 'chem6-1m-4', text: 'What are polyhalogen compounds? Give one example of a trihaloalkane.', category: '1-mark', topicId: '6-1-1-number-halogen-atoms' },
  { id: 'chem6-2m-1', text: 'Classify the following as mono, di, or polyhalogen compounds and name them: CH₂Cl₂, CHCl₃, CCl₄, C₂H₅Cl.', category: '2-mark', topicId: '6-1-1-number-halogen-atoms' },
  { id: 'chem6-2m-2', text: 'What are gem-dihalides and vic-dihalides? Give one example of each and write their IUPAC names.', category: '2-mark', topicId: '6-1-1-number-halogen-atoms' },

  // 6.1.2 Compounds Containing sp³ C–X Bond
  { id: 'chem6-1m-5', text: 'Define primary alkyl halide. Give one example.', category: '1-mark', topicId: '6-1-2-sp3-cx-bond' },
  { id: 'chem6-1m-6', text: 'What is a secondary alkyl halide? How does it differ from a tertiary alkyl halide?', category: '1-mark', topicId: '6-1-2-sp3-cx-bond' },
  { id: 'chem6-1m-7', text: 'What are allylic halides? Give one example.', category: '1-mark', topicId: '6-1-2-sp3-cx-bond' },
  { id: 'chem6-1m-8', text: 'What are benzylic halides? Give one example.', category: '1-mark', topicId: '6-1-2-sp3-cx-bond' },
  { id: 'chem6-1m-9', text: 'To which type of carbon is the halogen bonded in allylic and benzylic halides?', category: '1-mark', topicId: '6-1-2-sp3-cx-bond' },
  { id: 'chem6-2m-3', text: 'Classify the following as primary, secondary, or tertiary alkyl halides:\n(i) CH₃CH₂CH₂Br\n(ii) (CH₃)₂CHBr\n(iii) (CH₃)₃CBr\n(iv) C₆H₅CH₂Cl', category: '2-mark', topicId: '6-1-2-sp3-cx-bond' },
  { id: 'chem6-2m-4', text: 'Distinguish between allylic and benzylic halides with one example and one structural feature each.', category: '2-mark', topicId: '6-1-2-sp3-cx-bond' },

  // 6.1.3 Compounds Containing sp² C–X Bond
  { id: 'chem6-1m-10', text: 'What are vinylic halides? Give one example.', category: '1-mark', topicId: '6-1-3-sp2-cx-bond' },
  { id: 'chem6-1m-11', text: 'What are aryl halides? Give one example.', category: '1-mark', topicId: '6-1-3-sp2-cx-bond' },
  { id: 'chem6-1m-12', text: 'What type of hybridisation does the carbon bearing halogen have in (a) haloalkane and (b) haloarene?', category: '1-mark', topicId: '6-1-3-sp2-cx-bond' },
  { id: 'chem6-2m-5', text: 'Distinguish between vinylic and aryl halides with suitable examples. Why are both less reactive than alkyl halides?', category: '2-mark', topicId: '6-1-3-sp2-cx-bond' },

  // 6.2 Nomenclature
  { id: 'chem6-1m-13', text: 'Write the IUPAC name of: CH₃CH₂CH(Cl)CH₃', category: '1-mark', topicId: '6-2-nomenclature' },
  { id: 'chem6-1m-14', text: 'Write the IUPAC name of: (CH₃)₃CBr', category: '1-mark', topicId: '6-2-nomenclature' },
  { id: 'chem6-1m-15', text: 'Write the IUPAC name of: CH₂=CHCl', category: '1-mark', topicId: '6-2-nomenclature' },
  { id: 'chem6-1m-16', text: 'Give the common and IUPAC name of CHCl₃.', category: '1-mark', topicId: '6-2-nomenclature' },
  { id: 'chem6-1m-17', text: 'Give the IUPAC name of benzyl chloride.', category: '1-mark', topicId: '6-2-nomenclature' },
  { id: 'chem6-2m-6', text: 'Write the IUPAC names of:\n(i) CH₃CH(Cl)CH(Br)CH₃\n(ii) (CH₃)₃CCH₂Br\n(iii) CH₂=CHCH₂Br\n(iv) CHF₂CBrClF', category: '2-mark', topicId: '6-2-nomenclature' },
  { id: 'chem6-2m-7', text: 'Draw the structures of all eight structural isomers of C₅H₁₁Br, name each according to IUPAC system.', category: '2-mark', topicId: '6-2-nomenclature' },
  { id: 'chem6-3m-1', text: 'Give the IUPAC names of: (i) sec-Butyl chloride (ii) neo-Pentyl bromide (iii) tert-Butyl bromide (iv) Allyl bromide (v) Methylene chloride (vi) Chloroform (vii) Carbon tetrachloride', category: '3-mark', topicId: '6-2-nomenclature' },

  // 6.3 Nature of C–X Bond
  { id: 'chem6-1m-18', text: 'Why is the C–X bond in haloalkanes polarised?', category: '1-mark', topicId: '6-3-nature-cx-bond' },
  { id: 'chem6-1m-19', text: 'In what order does the C–X bond length vary from C–F to C–I?', category: '1-mark', topicId: '6-3-nature-cx-bond' },
  { id: 'chem6-1m-20', text: 'Which has a higher bond enthalpy: C–F or C–I? Why?', category: '1-mark', topicId: '6-3-nature-cx-bond' },
  { id: 'chem6-1m-21', text: 'Arrange the following in increasing order of bond length: C–F, C–Cl, C–Br, C–I.', category: '1-mark', topicId: '6-3-nature-cx-bond' },
  { id: 'chem6-1m-22', text: 'Which C–X bond has the highest dipole moment among CH₃–F, CH₃–Cl, CH₃–Br, CH₃–I?', category: '1-mark', topicId: '6-3-nature-cx-bond' },
  { id: 'chem6-2m-8', text: 'Explain how bond length and bond enthalpy vary as we go from C–F to C–I. What is the significance of bond enthalpy in reactivity?', category: '2-mark', topicId: '6-3-nature-cx-bond' },
  { id: 'chem6-2m-9', text: 'Explain why the dipole moment of C–Cl bond is higher than that of C–I bond even though iodine is larger.', category: '2-mark', topicId: '6-3-nature-cx-bond' },

  // 6.4.1 From Alcohols
  { id: 'chem6-1m-23', text: 'Why is thionyl chloride (SOCl₂) preferred for preparing alkyl chlorides from alcohols?', category: '1-mark', topicId: '6-4-1-from-alcohols' },
  { id: 'chem6-1m-24', text: 'Write the reaction of ethanol with SOCl₂.', category: '1-mark', topicId: '6-4-1-from-alcohols' },
  { id: 'chem6-1m-25', text: 'What catalyst is needed for the reaction of primary and secondary alcohols with HCl?', category: '1-mark', topicId: '6-4-1-from-alcohols' },
  { id: 'chem6-1m-26', text: 'Write the order of reactivity of alcohols towards haloacids.', category: '1-mark', topicId: '6-4-1-from-alcohols' },
  { id: 'chem6-2m-10', text: 'Write the chemical equations for preparation of n-butyl bromide from: (i) 1-butanol using HBr (ii) 1-butanol using red P and Br₂.', category: '2-mark', topicId: '6-4-1-from-alcohols' },
  { id: 'chem6-2m-11', text: 'Explain why thionyl chloride is preferred over PCl₅ for the preparation of alkyl chlorides from alcohols.', category: '2-mark', topicId: '6-4-1-from-alcohols' },
  { id: 'chem6-3m-2', text: 'Write equations for the preparation of 1-iodobutane from: (i) 1-butanol (ii) 1-chlorobutane (iii) but-1-ene. State the name of the reaction involved in (ii).', category: '3-mark', topicId: '6-4-1-from-alcohols' },

  // 6.4.2 From Hydrocarbons
  { id: 'chem6-1m-27', text: 'Why does free radical halogenation of alkanes give a mixture of products?', category: '1-mark', topicId: '6-4-2-from-hydrocarbons' },
  { id: 'chem6-1m-28', text: 'What is Markovnikov\'s rule? Apply it to the addition of HI to propene.', category: '1-mark', topicId: '6-4-2-from-hydrocarbons' },
  { id: 'chem6-1m-29', text: 'What is the product of addition of Br₂ in CCl₄ to ethene?', category: '1-mark', topicId: '6-4-2-from-hydrocarbons' },
  { id: 'chem6-2m-12', text: 'Identify all possible monochloro structural isomers formed on free radical monochlorination of (CH₃)₂CHCH₂CH₃.', category: '2-mark', topicId: '6-4-2-from-hydrocarbons' },
  { id: 'chem6-2m-13', text: 'A hydrocarbon C₅H₁₀ does not react with chlorine in the dark but gives a single monochloro compound C₅H₉Cl in bright sunlight. Identify the hydrocarbon.', category: '2-mark', topicId: '6-4-2-from-hydrocarbons' },

  // 6.4.3 Halogen Exchange (Finkelstein & Swarts)
  { id: 'chem6-1m-30', text: 'What is the Finkelstein reaction? Write the equation.', category: '1-mark', topicId: '6-4-3-halogen-exchange' },
  { id: 'chem6-1m-31', text: 'Why is the Finkelstein reaction carried out in dry acetone?', category: '1-mark', topicId: '6-4-3-halogen-exchange' },
  { id: 'chem6-1m-32', text: 'What is the Swarts reaction? Give an example with equation.', category: '1-mark', topicId: '6-4-3-halogen-exchange' },
  { id: 'chem6-1m-33', text: 'Name the metallic fluorides used in the Swarts reaction.', category: '1-mark', topicId: '6-4-3-halogen-exchange' },
  { id: 'chem6-2m-14', text: 'Explain the Finkelstein reaction with mechanism. Why does NaCl or NaBr precipitate out in dry acetone?', category: '2-mark', topicId: '6-4-3-halogen-exchange' },
  { id: 'chem6-2m-15', text: 'How are alkyl fluorides best prepared? Write the equation and name the reaction.', category: '2-mark', topicId: '6-4-3-halogen-exchange' },

  // 6.5 Preparation of Haloarenes
  { id: 'chem6-1m-34', text: 'Name the catalyst used in the electrophilic halogenation of benzene.', category: '1-mark', topicId: '6-5-preparation-haloarenes' },
  { id: 'chem6-1m-35', text: 'Write the equation for the preparation of bromobenzene by electrophilic substitution.', category: '1-mark', topicId: '6-5-preparation-haloarenes' },
  { id: 'chem6-1m-36', text: 'What is Sandmeyer\'s reaction? Write the equation to prepare chlorobenzene.', category: '1-mark', topicId: '6-5-preparation-haloarenes' },
  { id: 'chem6-1m-37', text: 'What reagent is used to replace the diazonium group by iodine in the preparation of iodobenzene?', category: '1-mark', topicId: '6-5-preparation-haloarenes' },
  { id: 'chem6-2m-16', text: 'Write the mechanism of Sandmeyer\'s reaction. Give equations for preparation of chlorobenzene and bromobenzene from aniline.', category: '2-mark', topicId: '6-5-preparation-haloarenes' },
  { id: 'chem6-2m-17', text: 'Write the equation for preparation of iodobenzene from benzene diazonium chloride. Explain why KI can be used directly without Cu catalyst.', category: '2-mark', topicId: '6-5-preparation-haloarenes' },

  // 6.6 Physical Properties
  { id: 'chem6-1m-38', text: 'Why do haloalkanes have higher boiling points than hydrocarbons of comparable molecular mass?', category: '1-mark', topicId: '6-6-physical-properties' },
  { id: 'chem6-1m-39', text: 'Arrange the following in increasing order of boiling points: CH₃F, CH₃Cl, CH₃Br, CH₃I.', category: '1-mark', topicId: '6-6-physical-properties' },
  { id: 'chem6-1m-40', text: 'Why does branching in haloalkanes lower the boiling point?', category: '1-mark', topicId: '6-6-physical-properties' },
  { id: 'chem6-1m-41', text: 'Why are para-isomers of dihalobenzenes higher melting than ortho- and meta-isomers?', category: '1-mark', topicId: '6-6-physical-properties' },
  { id: 'chem6-1m-42', text: 'Why are haloalkanes slightly soluble in water but completely soluble in organic solvents?', category: '1-mark', topicId: '6-6-physical-properties' },
  { id: 'chem6-2m-18', text: 'For the same alkyl group, the boiling points of alkyl halides decrease in the order RI > RBr > RCl > RF. Explain.', category: '2-mark', topicId: '6-6-physical-properties' },
  { id: 'chem6-2m-19', text: 'Explain why the dipole moment of chlorobenzene is lower than that of cyclohexyl chloride.', category: '2-mark', topicId: '6-6-physical-properties' },

  // 6.7.1 Reactions of Haloalkanes (SN1, SN2, Elimination, Metals)
  { id: 'chem6-1m-43', text: 'Name the three categories of chemical reactions of haloalkanes.', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-1m-44', text: 'Define nucleophilic substitution reaction.', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-1m-45', text: 'What are ambident nucleophiles? Give one example.', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-1m-46', text: 'Why does KCN give alkyl cyanide while AgCN gives isocyanide as the main product?', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-1m-47', text: 'What product is formed when CH₃Br reacts with NaOH (aqueous)?', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-1m-48', text: 'What product is formed when CH₃Br reacts with KCN?', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-2m-20', text: 'Explain what are ambident nucleophiles. Why do KCN and AgCN give different products with the same alkyl halide?', category: '2-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-2m-21', text: 'Write the products formed when 2-bromopentane reacts with: (i) NaOH(aq) (ii) KCN (iii) NH₃ (iv) KOH/alcohol.', category: '2-mark', topicId: '6-7-1-reactions-haloalkanes' },

  // SN2 Mechanism
  { id: 'chem6-1m-49', text: 'What is the molecularity of the SN2 reaction? What is the rate expression?', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-1m-50', text: 'What happens to the configuration in an SN2 reaction?', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-1m-51', text: 'Why do methyl halides react most rapidly in SN2 reactions?', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-1m-52', text: 'What is meant by inversion of configuration?', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-2m-22', text: 'Describe the SN2 mechanism for the reaction of CH₃Cl with OH⁻. Draw the transition state.', category: '2-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-2m-23', text: 'Predict the order of reactivity of the four isomeric bromobutanes in SN2 reactions and give reasons.', category: '2-mark', topicId: '6-7-1-reactions-haloalkanes' },

  // SN1 Mechanism
  { id: 'chem6-1m-53', text: 'What is the molecularity of the SN1 reaction? Write the rate expression.', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-1m-54', text: 'In SN1, which step is the rate-determining step?', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-1m-55', text: 'What is the stereochemical outcome of an SN1 reaction on an optically active alkyl halide?', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-1m-56', text: 'Why do tertiary alkyl halides prefer SN1 over SN2?', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-2m-24', text: 'Describe the SN1 mechanism for the hydrolysis of tert-butyl bromide. Show both steps.', category: '2-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-2m-25', text: 'Explain why SN1 reactions of optically active alkyl halides lead to racemisation.', category: '2-mark', topicId: '6-7-1-reactions-haloalkanes' },

  // Stereochemistry
  { id: 'chem6-1m-57', text: 'What are optically active compounds? What instrument measures optical rotation?', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-1m-58', text: 'What is a chiral molecule? Give one example.', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-1m-59', text: 'What are enantiomers? Give one example.', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-1m-60', text: 'Define racemic mixture. What is its optical rotation?', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-2m-26', text: 'Explain why SN2 reactions proceed with inversion and SN1 reactions proceed with racemisation.', category: '2-mark', topicId: '6-7-1-reactions-haloalkanes' },

  // Elimination Reactions
  { id: 'chem6-1m-61', text: 'What are the reagent and conditions for elimination reaction of haloalkanes?', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-1m-62', text: 'State Zaitsev\'s rule for dehydrohalogenation reactions.', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-1m-63', text: 'What is the major alkene product when 2-bromopentane is dehydrohalogenated?', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-2m-27', text: 'Write the equation for elimination from 2-bromopentane with KOH/alcohol. Identify major and minor products.', category: '2-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-2m-28', text: 'Discuss: Elimination versus substitution in haloalkanes. What factors determine which route is taken?', category: '2-mark', topicId: '6-7-1-reactions-haloalkanes' },

  // Reaction with Metals
  { id: 'chem6-1m-64', text: 'What is a Grignard reagent? Write the general formula.', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-1m-65', text: 'Write the equation for the formation of ethyl magnesium bromide.', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-1m-66', text: 'Why must Grignard reagents be prepared under anhydrous conditions?', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-1m-67', text: 'State the Wurtz reaction. Write the general equation.', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-2m-29', text: 'Explain the nature of C–Mg and Mg–X bonds in a Grignard reagent. Why must dry ether be used?', category: '2-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-2m-30', text: 'How will you bring about: (i) 1-Chlorobutane to n-octane (ii) Benzene to biphenyl', category: '2-mark', topicId: '6-7-1-reactions-haloalkanes' },

  // 6.7.2 Reactions of Haloarenes
  { id: 'chem6-1m-68', text: 'Why are aryl halides less reactive than alkyl halides towards nucleophilic substitution?', category: '1-mark', topicId: '6-7-2-reactions-haloarenes' },
  { id: 'chem6-1m-69', text: 'Explain why the C–Cl bond in chlorobenzene has partial double bond character.', category: '1-mark', topicId: '6-7-2-reactions-haloarenes' },
  { id: 'chem6-1m-70', text: 'What conditions are needed to convert chlorobenzene to phenol by nucleophilic substitution?', category: '1-mark', topicId: '6-7-2-reactions-haloarenes' },
  { id: 'chem6-2m-31', text: 'Give four reasons why aryl halides are extremely less reactive towards nucleophilic substitution.', category: '2-mark', topicId: '6-7-2-reactions-haloarenes' },
  { id: 'chem6-2m-32', text: 'Explain: The presence of –NO₂ group at ortho- and para-positions increases reactivity of chlorobenzene towards OH⁻ but not at meta-position.', category: '2-mark', topicId: '6-7-2-reactions-haloarenes' },
  { id: 'chem6-3m-3', text: 'Discuss the low reactivity of aryl halides towards nucleophilic substitution on the basis of: (i) resonance effect (ii) hybridisation (iii) instability of phenyl cation', category: '3-mark', topicId: '6-7-2-reactions-haloarenes' },

  // Electrophilic Substitution in Haloarenes
  { id: 'chem6-1m-71', text: 'Name the four electrophilic substitution reactions that haloarenes undergo.', category: '1-mark', topicId: '6-7-2-reactions-haloarenes' },
  { id: 'chem6-1m-72', text: 'Is halogen in halobenzene ortho/para-directing or meta-directing?', category: '1-mark', topicId: '6-7-2-reactions-haloarenes' },
  { id: 'chem6-1m-73', text: 'Is halogen activating or deactivating in electrophilic aromatic substitution?', category: '1-mark', topicId: '6-7-2-reactions-haloarenes' },
  { id: 'chem6-1m-74', text: 'Write the major product of nitration of chlorobenzene.', category: '1-mark', topicId: '6-7-2-reactions-haloarenes' },
  { id: 'chem6-2m-33', text: 'Although chlorine is an electron withdrawing group, yet it is ortho-, para-directing. Explain using both inductive and resonance effects.', category: '2-mark', topicId: '6-7-2-reactions-haloarenes' },
  { id: 'chem6-2m-34', text: 'Explain why halogen deactivates the benzene ring but directs substituents to ortho/para positions.', category: '2-mark', topicId: '6-7-2-reactions-haloarenes' },
  { id: 'chem6-3m-4', text: 'Write equations for Wurtz-Fittig and Fittig reactions. How do they differ? Give one example of each.', category: '3-mark', topicId: '6-7-2-reactions-haloarenes' },
  { id: 'chem6-3m-5', text: 'Write equations showing how to carry out: (i) Benzene to 4-bromonitrobenzene (ii) Aniline to chlorobenzene (iii) Chlorobenzene to p-nitrophenol', category: '3-mark', topicId: '6-7-2-reactions-haloarenes' },

  // 6.8 Polyhalogen Compounds
  { id: 'chem6-1m-75', text: 'Write the IUPAC name and molecular formula of methylene chloride.', category: '1-mark', topicId: '6-8-1-dichloromethane' },
  { id: 'chem6-1m-76', text: 'State any two uses of dichloromethane.', category: '1-mark', topicId: '6-8-1-dichloromethane' },
  { id: 'chem6-2m-35', text: 'Give three industrial uses of dichloromethane and briefly describe its health hazards.', category: '2-mark', topicId: '6-8-1-dichloromethane' },

  { id: 'chem6-1m-77', text: 'Write the IUPAC name and molecular formula of chloroform.', category: '1-mark', topicId: '6-8-2-trichloromethane' },
  { id: 'chem6-1m-78', text: 'Why must chloroform be stored in closed dark-coloured bottles completely filled?', category: '1-mark', topicId: '6-8-2-trichloromethane' },
  { id: 'chem6-1m-79', text: 'Write the equation for the oxidation of chloroform in the presence of light and air.', category: '1-mark', topicId: '6-8-2-trichloromethane' },
  { id: 'chem6-2m-36', text: 'Explain the oxidation of chloroform in air. Write the chemical equation and name the toxic product formed.', category: '2-mark', topicId: '6-8-2-trichloromethane' },

  { id: 'chem6-1m-80', text: 'What was the earlier use of iodoform as an antiseptic? Why has it been replaced?', category: '1-mark', topicId: '6-8-3-triiodomethane' },
  { id: 'chem6-1m-81', text: 'What is responsible for the antiseptic properties of iodoform?', category: '1-mark', topicId: '6-8-3-triiodomethane' },

  { id: 'chem6-1m-82', text: 'Write the IUPAC name and molecular formula of carbon tetrachloride.', category: '1-mark', topicId: '6-8-4-tetrachloromethane' },
  { id: 'chem6-1m-83', text: 'How does CCl₄ affect the ozone layer?', category: '1-mark', topicId: '6-8-4-tetrachloromethane' },
  { id: 'chem6-2m-37', text: 'Discuss the environmental and health hazards of carbon tetrachloride. Why has its domestic use been discontinued?', category: '2-mark', topicId: '6-8-4-tetrachloromethane' },

  { id: 'chem6-1m-84', text: 'What are freons? Give the molecular formula of Freon-12.', category: '1-mark', topicId: '6-8-5-freons' },
  { id: 'chem6-1m-85', text: 'Name the reaction used to manufacture Freon-12 from CCl₄. Write the equation.', category: '1-mark', topicId: '6-8-5-freons' },
  { id: 'chem6-1m-86', text: 'How do freons damage the ozone layer?', category: '1-mark', topicId: '6-8-5-freons' },
  { id: 'chem6-2m-38', text: 'Explain the environmental hazard of freons. How do they reach the stratosphere and initiate ozone depletion?', category: '2-mark', topicId: '6-8-5-freons' },

  { id: 'chem6-1m-87', text: 'Who discovered DDT as an insecticide? When was the Nobel Prize awarded?', category: '1-mark', topicId: '6-8-6-ddt' },
  { id: 'chem6-1m-88', text: 'Write two uses of DDT.', category: '1-mark', topicId: '6-8-6-ddt' },
  { id: 'chem6-1m-89', text: 'Why was DDT banned in the United States in 1973?', category: '1-mark', topicId: '6-8-6-ddt' },
  { id: 'chem6-1m-90', text: 'What is the problem of bioaccumulation of DDT in living organisms?', category: '1-mark', topicId: '6-8-6-ddt' },
  { id: 'chem6-2m-39', text: 'Discuss the environmental concerns associated with the use of DDT. Why has its use been largely banned?', category: '2-mark', topicId: '6-8-6-ddt' },

  // MCQ Questions (1-mark)
  { id: 'chem6-mcq-1', text: 'Which one of the following has the highest dipole moment?\n(A) CH₂Cl₂\n(B) CHCl₃\n(C) CCl₄\n(D) CH₃Cl', category: '1-mark', topicId: '6-3-nature-cx-bond' },
  { id: 'chem6-mcq-2', text: 'The order of reactivity of alcohols towards haloacids is:\n(A) 1° > 2° > 3°\n(B) 3° > 2° > 1°\n(C) 2° > 1° > 3°\n(D) All have equal reactivity', category: '1-mark', topicId: '6-4-1-from-alcohols' },
  { id: 'chem6-mcq-3', text: 'The reaction: R–X + NaI → R–I + NaX (in acetone) is called:\n(A) Swarts reaction\n(B) Sandmeyer\'s reaction\n(C) Finkelstein reaction\n(D) Wurtz reaction', category: '1-mark', topicId: '6-4-3-halogen-exchange' },
  { id: 'chem6-mcq-4', text: 'Which of the following is an ambident nucleophile?\n(A) OH⁻\n(B) CN⁻\n(C) NH₃\n(D) I⁻', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-mcq-5', text: 'SN2 reactions are characterised by:\n(A) Racemisation\n(B) Retention of configuration\n(C) Inversion of configuration\n(D) No change in configuration', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-mcq-6', text: 'Which of the following alkyl halides reacts fastest in SN2 reactions?\n(A) CH₃Br\n(B) (CH₃)₂CHBr\n(C) (CH₃)₃CBr\n(D) CH₃CH₂CHBrCH₃', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-mcq-7', text: 'The major product when 2-bromopentane is treated with alcoholic KOH is:\n(A) Pent-1-ene\n(B) Pent-2-ene\n(C) Pentan-2-ol\n(D) Pentane', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-mcq-8', text: 'Chlorobenzene is less reactive than chlorocyclohexane towards nucleophilic substitution because:\n(A) Chlorobenzene has higher molecular weight\n(B) C–Cl bond in chlorobenzene has partial double bond character due to resonance\n(C) Chlorobenzene is less polar\n(D) Aromatic compounds do not undergo substitution', category: '1-mark', topicId: '6-7-2-reactions-haloarenes' },
  { id: 'chem6-mcq-9', text: 'p-Dichlorobenzene has a higher melting point than o- and m-isomers because:\n(A) It has higher molecular weight\n(B) Its symmetry allows better packing in crystal lattice\n(C) It is more reactive\n(D) Its boiling point is also highest', category: '1-mark', topicId: '6-6-physical-properties' },
  { id: 'chem6-mcq-10', text: 'The reactivity of halides R–X in both SN1 and SN2 follows the order:\n(A) R–F > R–Cl > R–Br > R–I\n(B) R–I > R–Br > R–Cl >> R–F\n(C) R–Br > R–Cl > R–I > R–F\n(D) All have equal reactivity', category: '1-mark', topicId: '6-7-1-reactions-haloalkanes' },

  // 3 Mark / 5 Mark / Conversion Questions
  { id: 'chem6-3m-6', text: 'How will you bring about: (i) Propene to 1-nitropropane (ii) Toluene to benzyl alcohol (iii) Propene to propyne (iv) Ethanol to ethyl fluoride (v) Bromomethane to propanone (vi) But-1-ene to but-2-ene', category: '3-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-3m-7', text: 'How will you bring about: (i) Propene to propan-1-ol (ii) Ethanol to but-1-yne (iii) 1-Bromopropane to 2-bromopropane (iv) Benzene to 4-bromonitrobenzene (v) 2-Chloropropane to 1-propanol', category: '3-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-3m-8', text: 'The treatment of alkyl chlorides with aqueous KOH leads to alcohols but with alcoholic KOH gives alkenes. Explain.', category: '3-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-3m-9', text: 'Primary alkyl halide C₄H₉Br (a) reacted with alcoholic KOH to give compound (b). Compound (b) reacted with HBr to give (c), which is an isomer of (a). When (a) reacted with sodium metal it gives compound (d), C₈H₁₈. Give structural formula of (a) and write all equations.', category: '3-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-3m-10', text: 'What happens when: (i) bromobenzene is treated with Mg in dry ether (ii) chlorobenzene is subjected to hydrolysis (iii) methyl bromide is treated with sodium in dry ether', category: '3-mark', topicId: '6-7-1-reactions-haloalkanes' },

  // Case-Based / 5-Mark Questions
  { id: 'chem6-case-1', text: 'Case Study: CH₃CH₂Br → (KCN/EtOH) → A → (LiAlH₄) → B → (NaNO₂/HCl/273K, then Cu₂Cl₂) → C → (KOH/EtOH/heat) → D\n(a) Identify A, B, C and D.\n(b) What type of reaction is the first step? Name the mechanism.\n(c) If AgCN was used instead of KCN, what would A be?\n(d) Write the IUPAC name of compound D.', category: 'case-study', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-case-2', text: 'Case Study: Compound X (C₄H₉Br) undergoes rapid reaction with aqueous AgNO₃ at room temperature giving white precipitate, while compound Y (C₄H₉Br) reacts slowly only on heating.\n(a) What mechanism does X follow? Identify X.\n(b) What mechanism does Y follow? Identify Y.\n(c) What intermediate is involved in the fast reaction?\n(d) What is the stereochemical outcome when X reacts with NaOH?\n(e) If Y is treated with KOH/alcohol, what product is formed?', category: 'case-study', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-5m-1', text: 'Write all geometrical and optical isomers that may form when C₄H₈BrCl is produced from but-2-ene and BrCl. Explain chirality and enantiomers with reference to these products.', category: '5-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-5m-2', text: 'Write the mechanism of: nBuBr + KCN → nBuCN\na) Write the complete SN2 mechanism with transition state.\nb) What product forms if AgCN is used? Explain why.\nc) Name two other ambident nucleophiles and give products with alkyl halide.', category: '5-mark', topicId: '6-7-1-reactions-haloalkanes' },
  { id: 'chem6-5m-3', text: 'How will you bring about:\n(i) Aniline to phenylisocyanide\n(ii) 2-Bromopropane to 1-bromopropane\n(iii) Chloroethane to butane\n(iv) tert-Butyl bromide to isobutyl bromide\n(v) Chlorobenzene to p-nitrophenol\n(vi) But-1-ene to n-butyliodide', category: '5-mark', topicId: '6-7-1-reactions-haloalkanes' },
];

// Export the question banks
// Unit 7: Alcohols, Phenols and Ethers - Question Bank
const unit7Questions: Question[] = [
  // 7.1.1 Alcohols — Mono, Di, Tri or Polyhydric
  { id: 'chem7-1m-1', text: 'Define monohydric alcohol. Give one example.', category: '1-mark', topicId: '7-1-1-alcohols-types' },
  { id: 'chem7-1m-2', text: 'What is a dihydric alcohol? Give the IUPAC name of ethylene glycol.', category: '1-mark', topicId: '7-1-1-alcohols-types' },
  { id: 'chem7-1m-3', text: 'What is a trihydric alcohol? Give the IUPAC name of glycerol.', category: '1-mark', topicId: '7-1-1-alcohols-types' },
  { id: 'chem7-1m-4', text: 'Define primary, secondary and tertiary alcohols. Give one example of each.', category: '1-mark', topicId: '7-1-1-alcohols-types' },
  { id: 'chem7-1m-5', text: 'What are allylic alcohols? Give one example.', category: '1-mark', topicId: '7-1-1-alcohols-types' },
  { id: 'chem7-1m-6', text: 'What are benzylic alcohols? Give one example.', category: '1-mark', topicId: '7-1-1-alcohols-types' },
  { id: 'chem7-2m-1', text: 'Classify the following as primary, secondary and tertiary alcohols:\n(i) CH₃–C(CH₃)₂–CH₂OH\n(ii) H₂C=CH–CH₂OH\n(iii) CH₃–CH₂–CH₂–OH\n(iv) Phenyl-CH(OH)-CH₃', category: '2-mark', topicId: '7-1-1-alcohols-types' },

  // 7.1.2 Phenols
  { id: 'chem7-1m-7', text: 'What are phenols? How do monohydric phenols differ from dihydric phenols?', category: '1-mark', topicId: '7-1-2-phenols-types' },
  { id: 'chem7-1m-8', text: 'Give the common and IUPAC names of catechol, resorcinol and hydroquinone.', category: '1-mark', topicId: '7-1-2-phenols-types' },

  // 7.1.3 Ethers
  { id: 'chem7-1m-9', text: 'Distinguish between symmetrical and unsymmetrical ethers. Give one example of each.', category: '1-mark', topicId: '7-1-3-ethers' },
  { id: 'chem7-1m-10', text: 'Is diethyl ether symmetrical or unsymmetrical? What about ethyl methyl ether?', category: '1-mark', topicId: '7-1-3-ethers' },

  // 7.2 Nomenclature
  { id: 'chem7-1m-11', text: 'What is the IUPAC suffix used for naming alcohols?', category: '1-mark', topicId: '7-2-nomenclature' },
  { id: 'chem7-1m-12', text: 'Write the IUPAC names of: (i) n-Propyl alcohol (ii) Isopropyl alcohol (iii) sec-Butyl alcohol', category: '1-mark', topicId: '7-2-nomenclature' },
  { id: 'chem7-1m-13', text: 'Write the IUPAC name of ethylene glycol and glycerol.', category: '1-mark', topicId: '7-2-nomenclature' },
  { id: 'chem7-1m-14', text: 'Write the common and IUPAC names of: o-Cresol, m-Cresol, p-Cresol.', category: '1-mark', topicId: '7-2-nomenclature' },
  { id: 'chem7-1m-15', text: 'Write the common and IUPAC names of: CH₃OCH₃, C₂H₅OC₂H₅, C₆H₅OCH₃.', category: '1-mark', topicId: '7-2-nomenclature' },
  { id: 'chem7-1m-16', text: 'Give the IUPAC name of anisole and phenetole.', category: '1-mark', topicId: '7-2-nomenclature' },
  { id: 'chem7-2m-2', text: 'Write IUPAC names of:\n(i) CH₃–CH(CH₃)–CH(OH)–CH₃\n(ii) HO–CH₂–CH(OH)–CH₂–OH\n(iii) CH₃–CH(Cl)–CH(CH₃)–CH₂OH\n(iv) H₂C=CH–CH(OH)–CH₂–CH₂–CH₃', category: '2-mark', topicId: '7-2-nomenclature' },
  { id: 'chem7-2m-3', text: 'Draw the structures of all isomeric alcohols of molecular formula C₅H₁₂O and give their IUPAC names. Classify as 1°, 2° or 3°.', category: '2-mark', topicId: '7-2-nomenclature' },
  { id: 'chem7-3m-1', text: 'Write IUPAC names of: (i) 2-Methylbutan-2-ol (ii) 1-Phenylpropan-2-ol (iii) Cyclopent-3-en-1-ol (iv) 4-Chloro-3-ethylbutan-1-ol. Classify as 1°, 2° or 3°.', category: '3-mark', topicId: '7-2-nomenclature' },

  // 7.3 Structures of Functional Groups
  { id: 'chem7-1m-17', text: 'What type of hybridisation does the carbon bearing –OH group have in: (a) methanol (b) phenol?', category: '1-mark', topicId: '7-3-structures' },
  { id: 'chem7-1m-18', text: 'Why is the C–O bond in phenol (136 pm) shorter than in methanol (142 pm)?', category: '1-mark', topicId: '7-3-structures' },
  { id: 'chem7-1m-19', text: 'What is the bond angle in alcohols? Why is it slightly less than 109°28\'?', category: '1-mark', topicId: '7-3-structures' },
  { id: 'chem7-2m-4', text: 'Explain why the C–O bond length in phenol is shorter than in methanol. Use hybridisation and conjugation arguments.', category: '2-mark', topicId: '7-3-structures' },

  // 7.4.1 Preparation of Alcohols
  { id: 'chem7-1m-20', text: 'Write the equation for acid-catalysed hydration of propene. Which product predominates according to Markovnikov\'s rule?', category: '1-mark', topicId: '7-4-1-preparation-alcohols' },
  { id: 'chem7-1m-21', text: 'What is hydroboration-oxidation? What reagent is used?', category: '1-mark', topicId: '7-4-1-preparation-alcohols' },
  { id: 'chem7-1m-22', text: 'In hydroboration, to which carbon does boron attach? How does the resulting alcohol relate to Markovnikov\'s rule?', category: '1-mark', topicId: '7-4-1-preparation-alcohols' },
  { id: 'chem7-1m-23', text: 'What type of alcohol is produced when an aldehyde is reduced?', category: '1-mark', topicId: '7-4-1-preparation-alcohols' },
  { id: 'chem7-1m-24', text: 'What type of alcohol is produced when a ketone is reduced?', category: '1-mark', topicId: '7-4-1-preparation-alcohols' },
  { id: 'chem7-1m-25', text: 'Name two reducing agents used for converting aldehydes/ketones to alcohols.', category: '1-mark', topicId: '7-4-1-preparation-alcohols' },
  { id: 'chem7-1m-26', text: 'What type of alcohol is produced when a Grignard reagent reacts with methanal (HCHO)?', category: '1-mark', topicId: '7-4-1-preparation-alcohols' },
  { id: 'chem7-1m-27', text: 'What type of alcohol is produced when a Grignard reagent reacts with ketones?', category: '1-mark', topicId: '7-4-1-preparation-alcohols' },
  { id: 'chem7-2m-5', text: 'Write equations for preparation of propan-2-ol and propan-1-ol from propene by (i) acid-catalysed hydration and (ii) hydroboration-oxidation.', category: '2-mark', topicId: '7-4-1-preparation-alcohols' },
  { id: 'chem7-2m-6', text: 'Write equations showing reduction of: (i) propanal with NaBH₄ (ii) acetone with LiAlH₄ (iii) propanoic acid with LiAlH₄.', category: '2-mark', topicId: '7-4-1-preparation-alcohols' },
  { id: 'chem7-2m-7', text: 'Write equations for preparation of: (i) a primary alcohol from HCHO and EtMgBr (ii) a secondary alcohol from CH₃CHO and MeMgBr (iii) a tertiary alcohol from acetone and EtMgBr.', category: '2-mark', topicId: '7-4-1-preparation-alcohols' },

  // 7.4.2 Preparation of Phenols
  { id: 'chem7-1m-28', text: 'Write the equation for the preparation of phenol from chlorobenzene.', category: '1-mark', topicId: '7-4-2-preparation-phenols' },
  { id: 'chem7-1m-29', text: 'What conditions are needed to convert chlorobenzene to phenol using NaOH?', category: '1-mark', topicId: '7-4-2-preparation-phenols' },
  { id: 'chem7-1m-30', text: 'Write the equation for preparation of phenol from benzenesulphonic acid.', category: '1-mark', topicId: '7-4-2-preparation-phenols' },
  { id: 'chem7-1m-31', text: 'How is phenol prepared from diazonium salts? Write the equation.', category: '1-mark', topicId: '7-4-2-preparation-phenols' },
  { id: 'chem7-1m-32', text: 'What is cumene? Write the industrial preparation of phenol from cumene.', category: '1-mark', topicId: '7-4-2-preparation-phenols' },
  { id: 'chem7-1m-33', text: 'What is the by-product obtained in the industrial preparation of phenol from cumene?', category: '1-mark', topicId: '7-4-2-preparation-phenols' },
  { id: 'chem7-2m-8', text: 'Give the equations for the preparation of phenol from cumene.', category: '2-mark', topicId: '7-4-2-preparation-phenols' },
  { id: 'chem7-2m-9', text: 'Give four methods of preparation of phenol with equations. Name the method used industrially.', category: '2-mark', topicId: '7-4-2-preparation-phenols' },

  // 7.4.3 Physical Properties
  { id: 'chem7-1m-34', text: 'Why do alcohols have higher boiling points than hydrocarbons of comparable molecular masses?', category: '1-mark', topicId: '7-4-3-physical-properties' },
  { id: 'chem7-1m-35', text: 'Why do the boiling points of alcohols decrease with increase in branching of carbon chain?', category: '1-mark', topicId: '7-4-3-physical-properties' },
  { id: 'chem7-1m-36', text: 'Why does the boiling point of ethanol (351 K) differ so much from that of methoxymethane (248 K)?', category: '1-mark', topicId: '7-4-3-physical-properties' },
  { id: 'chem7-1m-37', text: 'Why do alcohols and phenols dissolve in water?', category: '1-mark', topicId: '7-4-3-physical-properties' },
  { id: 'chem7-2m-10', text: 'Explain why propanol has a higher boiling point than butane (comparable molecular mass).', category: '2-mark', topicId: '7-4-3-physical-properties' },
  { id: 'chem7-2m-11', text: 'Arrange the following in order of increasing boiling points: Pentan-1-ol, n-butane, pentanal, ethoxyethane. Explain.', category: '2-mark', topicId: '7-4-3-physical-properties' },

  // 7.4.4a Reactions: O–H Bond Cleavage (Acidity)
  { id: 'chem7-1m-38', text: 'Write the equation for the reaction of ethanol with sodium. Name the products.', category: '1-mark', topicId: '7-4-4a-oh-bond-cleavage' },
  { id: 'chem7-1m-39', text: 'Why are alcohols considered Bronsted acids?', category: '1-mark', topicId: '7-4-4a-oh-bond-cleavage' },
  { id: 'chem7-1m-40', text: 'Write the order of acidic strength of primary, secondary, and tertiary alcohols. Explain.', category: '1-mark', topicId: '7-4-4a-oh-bond-cleavage' },
  { id: 'chem7-1m-41', text: 'Are alcohols stronger or weaker acids than water? Explain.', category: '1-mark', topicId: '7-4-4a-oh-bond-cleavage' },
  { id: 'chem7-1m-42', text: 'Why is phenol more acidic than ethanol?', category: '1-mark', topicId: '7-4-4a-oh-bond-cleavage' },
  { id: 'chem7-1m-43', text: 'Why does the presence of –NO₂ group at ortho and para positions increase the acidity of phenol?', category: '1-mark', topicId: '7-4-4a-oh-bond-cleavage' },
  { id: 'chem7-1m-44', text: 'Why does the presence of –CH₃ group decrease the acidity of phenol?', category: '1-mark', topicId: '7-4-4a-oh-bond-cleavage' },
  { id: 'chem7-1m-45', text: 'Why is phenoxide ion more stable than alkoxide ion? Use resonance structures.', category: '1-mark', topicId: '7-4-4a-oh-bond-cleavage' },
  { id: 'chem7-2m-12', text: 'Explain the acidic character of alcohols using the polarity of O–H bond. How does an electron-releasing group affect acidity?', category: '2-mark', topicId: '7-4-4a-oh-bond-cleavage' },
  { id: 'chem7-2m-13', text: 'Explain the higher acidity of phenol compared to ethanol using: (i) hybridisation of C in C–O bond (ii) stability of phenoxide vs alkoxide ions.', category: '2-mark', topicId: '7-4-4a-oh-bond-cleavage' },
  { id: 'chem7-2m-14', text: 'Draw the five resonance structures of phenoxide ion. How do they explain its stability?', category: '2-mark', topicId: '7-4-4a-oh-bond-cleavage' },
  { id: 'chem7-2m-15', text: 'Arrange in increasing order of acid strength: Propan-1-ol, 2,4,6-trinitrophenol, 3-nitrophenol, 3,5-dinitrophenol, phenol, 4-methylphenol.', category: '2-mark', topicId: '7-4-4a-oh-bond-cleavage' },

  // Esterification
  { id: 'chem7-1m-46', text: 'Write the equation for esterification of an alcohol with a carboxylic acid.', category: '1-mark', topicId: '7-4-4a-oh-bond-cleavage' },
  { id: 'chem7-1m-47', text: 'Write the equation for the reaction of phenol with acetic anhydride. Name the product.', category: '1-mark', topicId: '7-4-4a-oh-bond-cleavage' },
  { id: 'chem7-1m-48', text: 'What is acetylation? What drug is produced by acetylation of salicylic acid?', category: '1-mark', topicId: '7-4-4a-oh-bond-cleavage' },
  { id: 'chem7-2m-16', text: 'Write equations for esterification of an alcohol using: (i) carboxylic acid (ii) acid anhydride (iii) acid chloride. What is the role of pyridine?', category: '2-mark', topicId: '7-4-4a-oh-bond-cleavage' },
  { id: 'chem7-2m-17', text: 'Write the equation for preparation of aspirin from salicylic acid. State three properties of aspirin.', category: '2-mark', topicId: '7-4-4a-oh-bond-cleavage' },

  // 7.4.4b Reactions: C–O Bond Cleavage
  { id: 'chem7-1m-49', text: 'Write the equation for reaction of an alcohol with HX. What is the Lucas test?', category: '1-mark', topicId: '7-4-4b-co-bond-cleavage' },
  { id: 'chem7-1m-50', text: 'How does the Lucas test distinguish between primary, secondary and tertiary alcohols?', category: '1-mark', topicId: '7-4-4b-co-bond-cleavage' },
  { id: 'chem7-1m-51', text: 'Write the composition of Lucas reagent.', category: '1-mark', topicId: '7-4-4b-co-bond-cleavage' },
  { id: 'chem7-1m-52', text: 'Give the order of reactivity of alcohols with a given haloacid.', category: '1-mark', topicId: '7-4-4b-co-bond-cleavage' },
  { id: 'chem7-2m-18', text: 'Give structures of products when butan-1-ol and 2-methylbutan-2-ol react with (a) HCl–ZnCl₂ (b) HBr (c) SOCl₂.', category: '2-mark', topicId: '7-4-4b-co-bond-cleavage' },

  // Dehydration
  { id: 'chem7-1m-53', text: 'Write the condition and equation for dehydration of ethanol to ethene.', category: '1-mark', topicId: '7-4-4b-co-bond-cleavage' },
  { id: 'chem7-1m-54', text: 'Write the condition for formation of ether from ethanol by dehydration.', category: '1-mark', topicId: '7-4-4b-co-bond-cleavage' },
  { id: 'chem7-1m-55', text: 'What is the order of ease of dehydration of alcohols?', category: '1-mark', topicId: '7-4-4b-co-bond-cleavage' },
  { id: 'chem7-1m-56', text: 'Why are tertiary alcohols the easiest to dehydrate?', category: '1-mark', topicId: '7-4-4b-co-bond-cleavage' },
  { id: 'chem7-2m-19', text: 'Write the mechanism for acid dehydration of ethanol to yield ethene. Identify the rate-determining step.', category: '2-mark', topicId: '7-4-4b-co-bond-cleavage' },
  { id: 'chem7-2m-20', text: 'Predict the major product of acid catalysed dehydration of: (i) 1-methylcyclohexanol (ii) butan-1-ol. Apply Zaitsev\'s rule.', category: '2-mark', topicId: '7-4-4b-co-bond-cleavage' },

  // Oxidation
  { id: 'chem7-1m-57', text: 'What is the product of oxidation of a primary alcohol with mild oxidising agent?', category: '1-mark', topicId: '7-4-4b-co-bond-cleavage' },
  { id: 'chem7-1m-58', text: 'What is the product of oxidation of a primary alcohol with strong oxidising agent (KMnO₄)?', category: '1-mark', topicId: '7-4-4b-co-bond-cleavage' },
  { id: 'chem7-1m-59', text: 'What is the product of oxidation of a secondary alcohol with CrO₃?', category: '1-mark', topicId: '7-4-4b-co-bond-cleavage' },
  { id: 'chem7-1m-60', text: 'What is PCC? For what purpose is it used?', category: '1-mark', topicId: '7-4-4b-co-bond-cleavage' },
  { id: 'chem7-1m-61', text: 'Why is methanol poisonous? How is methanol poisoning treated?', category: '1-mark', topicId: '7-4-4b-co-bond-cleavage' },
  { id: 'chem7-2m-21', text: 'Write equations showing the oxidation of: (i) propan-1-ol with alkaline KMnO₄ (ii) butan-2-ol with CrO₃ (iii) but-3-en-1-ol with PCC.', category: '2-mark', topicId: '7-4-4b-co-bond-cleavage' },
  { id: 'chem7-2m-22', text: 'Name the reagents used in: (i) oxidation of primary alcohol to carboxylic acid (ii) oxidation of primary alcohol to aldehyde (iii) dehydration of propan-2-ol to propene.', category: '2-mark', topicId: '7-4-4b-co-bond-cleavage' },

  // 7.4.4c Reactions of Phenols
  { id: 'chem7-1m-62', text: 'How does the –OH group in phenol influence electrophilic substitution?', category: '1-mark', topicId: '7-4-4c-phenol-reactions' },
  { id: 'chem7-1m-63', text: 'Write the equation for nitration of phenol with dilute HNO₃ at 298 K.', category: '1-mark', topicId: '7-4-4c-phenol-reactions' },
  { id: 'chem7-1m-64', text: 'Why can o- and p-nitrophenol be separated by steam distillation?', category: '1-mark', topicId: '7-4-4c-phenol-reactions' },
  { id: 'chem7-1m-65', text: 'What is picric acid? How is it formed from phenol?', category: '1-mark', topicId: '7-4-4c-phenol-reactions' },
  { id: 'chem7-1m-66', text: 'What happens when phenol is treated with bromine water? Write the equation.', category: '1-mark', topicId: '7-4-4c-phenol-reactions' },
  { id: 'chem7-1m-67', text: 'Why does phenol not require a Lewis acid catalyst for halogenation?', category: '1-mark', topicId: '7-4-4c-phenol-reactions' },
  { id: 'chem7-2m-23', text: 'Write equations for: (i) bromination of phenol with Br₂ in CS₂ (ii) bromination of phenol with Br₂/water (iii) nitration of phenol with dilute HNO₃.', category: '2-mark', topicId: '7-4-4c-phenol-reactions' },
  { id: 'chem7-2m-24', text: 'Explain how the –OH group activates the benzene ring towards electrophilic substitution. Use resonance structures.', category: '2-mark', topicId: '7-4-4c-phenol-reactions' },

  // Kolbe's and Reimer-Tiemann
  { id: 'chem7-1m-68', text: 'State Kolbe\'s reaction. Write the equation.', category: '1-mark', topicId: '7-4-4c-phenol-reactions' },
  { id: 'chem7-1m-69', text: 'Which isomer (ortho or para) is the main product in Kolbe\'s reaction?', category: '1-mark', topicId: '7-4-4c-phenol-reactions' },
  { id: 'chem7-1m-70', text: 'State the Reimer-Tiemann reaction. Write the equation.', category: '1-mark', topicId: '7-4-4c-phenol-reactions' },
  { id: 'chem7-1m-71', text: 'What group is introduced in the Reimer-Tiemann reaction? At which position?', category: '1-mark', topicId: '7-4-4c-phenol-reactions' },
  { id: 'chem7-1m-72', text: 'What is formed when phenol is oxidised with chromic acid?', category: '1-mark', topicId: '7-4-4c-phenol-reactions' },
  { id: 'chem7-2m-25', text: 'Write the equation for Kolbe\'s reaction and explain why CO₂ can attack the phenoxide ion.', category: '2-mark', topicId: '7-4-4c-phenol-reactions' },
  { id: 'chem7-2m-26', text: 'Write the equations involved in the Reimer-Tiemann reaction. Show the intermediate and final product.', category: '2-mark', topicId: '7-4-4c-phenol-reactions' },

  // 7.5 Commercial Alcohols
  { id: 'chem7-1m-73', text: 'What is the common name of methanol? How was it traditionally produced?', category: '1-mark', topicId: '7-5-commercial-alcohols' },
  { id: 'chem7-1m-74', text: 'Write the equation for industrial production of methanol. What catalyst is used?', category: '1-mark', topicId: '7-5-commercial-alcohols' },
  { id: 'chem7-1m-75', text: 'State two uses of methanol.', category: '1-mark', topicId: '7-5-commercial-alcohols' },
  { id: 'chem7-1m-76', text: 'What are the hazardous effects of methanol ingestion?', category: '1-mark', topicId: '7-5-commercial-alcohols' },
  { id: 'chem7-1m-77', text: 'Write the equation for conversion of glucose to ethanol by fermentation. Name the enzyme involved.', category: '1-mark', topicId: '7-5-commercial-alcohols' },
  { id: 'chem7-1m-78', text: 'What is invertase? What does it do to sucrose?', category: '1-mark', topicId: '7-5-commercial-alcohols' },
  { id: 'chem7-1m-79', text: 'What is zymase? What reaction does it catalyse?', category: '1-mark', topicId: '7-5-commercial-alcohols' },
  { id: 'chem7-1m-80', text: 'What is denaturation of alcohol? Name the chemicals added.', category: '1-mark', topicId: '7-5-commercial-alcohols' },
  { id: 'chem7-2m-27', text: 'Describe the industrial preparation of methanol. What are the conditions? State its uses and hazards.', category: '2-mark', topicId: '7-5-commercial-alcohols' },
  { id: 'chem7-2m-28', text: 'Describe the fermentation process for production of ethanol from sugarcane molasses. Write the equations.', category: '2-mark', topicId: '7-5-commercial-alcohols' },

  // 7.6.1 Preparation of Ethers
  { id: 'chem7-1m-81', text: 'Write the conditions and equation for formation of diethyl ether from ethanol.', category: '1-mark', topicId: '7-6-1-preparation-ethers' },
  { id: 'chem7-1m-82', text: 'How does temperature affect whether dehydration gives ether or alkene?', category: '1-mark', topicId: '7-6-1-preparation-ethers' },
  { id: 'chem7-1m-83', text: 'Why is dehydration not suitable for secondary and tertiary alcohols to form ethers?', category: '1-mark', topicId: '7-6-1-preparation-ethers' },
  { id: 'chem7-1m-84', text: 'State Williamson synthesis. Write the general equation.', category: '1-mark', topicId: '7-6-1-preparation-ethers' },
  { id: 'chem7-1m-85', text: 'What type of alkyl halide gives best results in Williamson synthesis? Why?', category: '1-mark', topicId: '7-6-1-preparation-ethers' },
  { id: 'chem7-1m-86', text: 'Why does Williamson synthesis fail when a tertiary alkyl halide is used?', category: '1-mark', topicId: '7-6-1-preparation-ethers' },
  { id: 'chem7-1m-87', text: 'Write the equation for preparation of methoxybenzene (anisole) by Williamson synthesis.', category: '1-mark', topicId: '7-6-1-preparation-ethers' },
  { id: 'chem7-2m-29', text: 'Explain the mechanism of ether formation by dehydration of ethanol at 413 K. Why must temperature be kept low?', category: '2-mark', topicId: '7-6-1-preparation-ethers' },
  { id: 'chem7-2m-30', text: 'Write the names of reagents and equations for preparation of: (i) 1-Propoxypropane (ii) Ethoxybenzene (iii) 2-Methoxy-2-methylpropane by Williamson synthesis.', category: '2-mark', topicId: '7-6-1-preparation-ethers' },
  { id: 'chem7-2m-31', text: 'Illustrate with examples the limitations of Williamson synthesis. Why does a tertiary alkyl halide give only alkene?', category: '2-mark', topicId: '7-6-1-preparation-ethers' },
  { id: 'chem7-3m-2', text: 'Explain preparation of ethers by acid dehydration of secondary or tertiary alcohols is not a suitable method. Give reason.', category: '3-mark', topicId: '7-6-1-preparation-ethers' },

  // 7.6.2 Physical Properties of Ethers
  { id: 'chem7-1m-88', text: 'Why are the boiling points of ethers comparable to alkanes of similar molecular mass?', category: '1-mark', topicId: '7-6-2-physical-properties-ethers' },
  { id: 'chem7-1m-89', text: 'Why is the boiling point of ethanol (351 K) much higher than ethoxyethane (307.6 K)?', category: '1-mark', topicId: '7-6-2-physical-properties-ethers' },
  { id: 'chem7-1m-90', text: 'Why are ethers miscible with water to almost the same extent as alcohols of the same molecular mass?', category: '1-mark', topicId: '7-6-2-physical-properties-ethers' },
  { id: 'chem7-2m-32', text: 'Compare the boiling points: n-Pentane (309.1 K), Ethoxyethane (307.6 K), Butan-1-ol (390 K). Explain the differences.', category: '2-mark', topicId: '7-6-2-physical-properties-ethers' },

  // 7.6.3 Chemical Reactions of Ethers
  { id: 'chem7-1m-91', text: 'Under what conditions does cleavage of C–O bond in ethers occur?', category: '1-mark', topicId: '7-6-3-reactions-ethers' },
  { id: 'chem7-1m-92', text: 'What is the order of reactivity of HX in cleaving ethers?', category: '1-mark', topicId: '7-6-3-reactions-ethers' },
  { id: 'chem7-1m-93', text: 'Write the products when dialkyl ether reacts with HX.', category: '1-mark', topicId: '7-6-3-reactions-ethers' },
  { id: 'chem7-1m-94', text: 'Write the equation for cleavage of methoxybenzene (anisole) with HI. Why is the O–CH₃ bond broken, not O–C₆H₅?', category: '1-mark', topicId: '7-6-3-reactions-ethers' },
  { id: 'chem7-2m-33', text: 'Write the equation of the reaction of hydrogen iodide with: (i) 1-propoxypropane (ii) methoxybenzene (iii) benzyl ethyl ether.', category: '2-mark', topicId: '7-6-3-reactions-ethers' },
  { id: 'chem7-2m-34', text: 'Write the mechanism of the reaction of HI with methoxymethane. Show all three steps.', category: '2-mark', topicId: '7-6-3-reactions-ethers' },

  // Electrophilic Substitution in Aryl Ethers
  { id: 'chem7-1m-95', text: 'The alkoxy group (–OR) is ortho/para-directing. Explain using resonance structures.', category: '1-mark', topicId: '7-6-3-reactions-ethers' },
  { id: 'chem7-1m-96', text: 'Write the equation for bromination of anisole. Is a Lewis acid catalyst needed?', category: '1-mark', topicId: '7-6-3-reactions-ethers' },
  { id: 'chem7-1m-97', text: 'Write the major product of nitration of anisole.', category: '1-mark', topicId: '7-6-3-reactions-ethers' },
  { id: 'chem7-1m-98', text: 'Write the major product of Friedel-Crafts alkylation of anisole with CH₃Cl/AlCl₃.', category: '1-mark', topicId: '7-6-3-reactions-ethers' },
  { id: 'chem7-2m-35', text: 'Write equations of: (i) Friedel-Crafts alkylation of anisole (ii) Nitration of anisole (iii) Bromination of anisole (iv) Friedel-Crafts acetylation of anisole.', category: '2-mark', topicId: '7-6-3-reactions-ethers' },
  { id: 'chem7-2m-36', text: 'Explain: (i) the alkoxy group activates the benzene ring towards electrophilic substitution (ii) it directs incoming substituents to ortho and para positions.', category: '2-mark', topicId: '7-6-3-reactions-ethers' },

  // MCQ Questions (1-mark)
  { id: 'chem7-mcq-1', text: 'Arrange in increasing order of acid strength: Ethanol, Phenol, o-Nitrophenol, 2,4-Dinitrophenol, 2,4,6-Trinitrophenol.\n(A) Ethanol < 2,4,6-TNP < 2,4-DNP < o-NP < Phenol\n(B) Ethanol < Phenol < o-NP < 2,4-DNP < 2,4,6-TNP\n(C) Phenol < o-NP < 2,4-DNP < Ethanol < 2,4,6-TNP\n(D) 2,4,6-TNP < 2,4-DNP < o-NP < Phenol < Ethanol', category: '1-mark', topicId: '7-4-4a-oh-bond-cleavage' },
  { id: 'chem7-mcq-2', text: 'The reaction of diborane with an alkene gives an alcohol on oxidation. The –OH group attaches to the carbon:\n(A) bearing fewer H atoms (anti-Markovnikov)\n(B) bearing more H atoms (anti-Markovnikov)\n(C) bearing more H atoms (Markovnikov)\n(D) None of the above', category: '1-mark', topicId: '7-4-1-preparation-alcohols' },
  { id: 'chem7-mcq-3', text: 'o-Nitrophenol is steam volatile while p-nitrophenol is not because:\n(A) p-Nitrophenol has higher melting point\n(B) o-Nitrophenol has intramolecular H-bonding; p-nitrophenol has intermolecular H-bonding\n(C) o-Nitrophenol has lower molecular mass\n(D) p-Nitrophenol is less soluble', category: '1-mark', topicId: '7-4-4c-phenol-reactions' },
  { id: 'chem7-mcq-4', text: 'The order of ease of dehydration of alcohols is:\n(A) Primary > Secondary > Tertiary\n(B) Tertiary > Secondary > Primary\n(C) Secondary > Tertiary > Primary\n(D) All dehydrate with equal ease', category: '1-mark', topicId: '7-4-4b-co-bond-cleavage' },
  { id: 'chem7-mcq-5', text: 'When phenol is treated with bromine water, the product formed is:\n(A) o-Bromophenol\n(B) p-Bromophenol\n(C) 2,4-Dibromophenol\n(D) 2,4,6-Tribromophenol', category: '1-mark', topicId: '7-4-4c-phenol-reactions' },
  { id: 'chem7-mcq-6', text: 'In Williamson synthesis, the best results are obtained with:\n(A) Tertiary alkyl halide + primary alkoxide\n(B) Primary alkyl halide + sodium alkoxide\n(C) Secondary alkyl halide + sodium alkoxide\n(D) Aryl halide + sodium alkoxide', category: '1-mark', topicId: '7-6-1-preparation-ethers' },
  { id: 'chem7-mcq-7', text: 'The reactivity order of hydrogen halides in cleaving ethers is:\n(A) HCl > HBr > HI\n(B) HI > HBr > HCl\n(C) HBr > HI > HCl\n(D) All have equal reactivity', category: '1-mark', topicId: '7-6-3-reactions-ethers' },
  { id: 'chem7-mcq-8', text: 'The Kolbe\'s reaction of phenol with CO₂/NaOH gives:\n(A) p-Hydroxybenzoic acid\n(B) Salicylaldehyde\n(C) o-Hydroxybenzoic acid (Salicylic acid) mainly\n(D) Benzoic acid', category: '1-mark', topicId: '7-4-4c-phenol-reactions' },

  // 3 Mark / 5 Mark / Conversion Questions
  { id: 'chem7-3m-3', text: 'How are the following conversions carried out?\n(i) Propene → Propan-2-ol\n(ii) Benzyl chloride → Benzyl alcohol\n(iii) Ethyl magnesium chloride → Propan-1-ol\n(iv) Methyl magnesium bromide → 2-Methylpropan-2-ol', category: '3-mark', topicId: '7-4-1-preparation-alcohols' },
  { id: 'chem7-3m-4', text: 'Show how you would synthesise the following alcohols from appropriate alkenes:\n(i) 1-Methylcyclohexanol\n(ii) 2-Methylpentan-2-ol\n(iii) Pentan-3-ol\n(iv) Cyclopentanol', category: '3-mark', topicId: '7-4-1-preparation-alcohols' },
  { id: 'chem7-3m-5', text: 'Write the mechanism of dehydration of ethanol to yield ethene. Identify the rate-determining step.', category: '3-mark', topicId: '7-4-4b-co-bond-cleavage' },
  { id: 'chem7-3m-6', text: 'When 3-methylbutan-2-ol is treated with HBr, the major product is 2-bromo-2-methylbutane. Write the mechanism and explain the hydride shift.', category: '3-mark', topicId: '7-4-4b-co-bond-cleavage' },
  { id: 'chem7-3m-7', text: 'Explain the following with examples:\n(i) Kolbe\'s reaction\n(ii) Reimer-Tiemann reaction\n(iii) Williamson ether synthesis\n(iv) Unsymmetrical ether', category: '3-mark', topicId: '7-4-4c-phenol-reactions' },
  { id: 'chem7-3m-8', text: 'Write equations of: (i) Oxidation of propan-1-ol with alkaline KMnO₄ (ii) Bromine in CS₂ with phenol (iii) Dilute HNO₃ with phenol (iv) Treating phenol with chloroform in presence of aqueous NaOH', category: '3-mark', topicId: '7-4-4c-phenol-reactions' },

  // Case-Based / 5-Mark Questions
  { id: 'chem7-case-1', text: 'Case Study: Compound X (C₃H₈O) reacts with Na to give H₂. It dehydrates with conc. H₂SO₄ at 443 K to give compound Y. Compound Y adds HBr to give Z. Z reacts with NaOH(aq) to give X again.\n(a) Identify X, Y, Z.\n(b) What type of reaction occurs in each step?\n(c) If X is a secondary alcohol, name the alkene Y.\n(d) What product forms if X is oxidised with CrO₃?\n(e) Write the equation for X reacting with acetic anhydride.', category: 'case-study', topicId: '7-4-4b-co-bond-cleavage' },
  { id: 'chem7-case-2', text: 'Case Study: Phenol (P) undergoes: (i) reaction with Na to give H₂, (ii) reaction with NaOH to give sodium phenoxide Q, (iii) Q with CO₂/H⁺ to give salicylic acid R, (iv) P with CHCl₃/aq NaOH to give salicylaldehyde S, (v) P with dilute HNO₃ at 298 K to give isomers T1 and T2.\n(a) Name each reaction.\n(b) Write the equation for each reaction.\n(c) Identify T1 and T2. How can they be separated?\n(d) Draw all five resonance structures of phenoxide ion.\n(e) Why is phenol more acidic than ethanol?', category: 'case-study', topicId: '7-4-4c-phenol-reactions' },
  { id: 'chem7-5m-1', text: 'Write structures of the major products expected from:\n(a) Mononitration of 3-methylphenol\n(b) Dinitration of 3-methylphenol\n(c) Mononitration of phenyl methanoate\n(d) Acid catalysed hydration of but-1-ene\n(e) Reaction of 2-methylpropene with HBr', category: '5-mark', topicId: '7-4-4c-phenol-reactions' },
];

// Unit 8: Aldehydes, Ketones and Carboxylic Acids
const unit8Questions: Question[] = [
  // 8.1.1 Nomenclature of Aldehydes and Ketones - 1 Mark
  { id: 'chem8-1m-1', text: 'What is a carbonyl group? How does it differ in aldehydes and ketones?', category: '1-mark', topicId: '8-1-nomenclature-carbonyl' },
  { id: 'chem8-1m-2', text: 'Give the IUPAC name of CH₃CHO.', category: '1-mark', topicId: '8-1-1-nomenclature-ald-ket' },
  { id: 'chem8-1m-3', text: 'Name the common and IUPAC names of HCHO.', category: '1-mark', topicId: '8-1-1-nomenclature-ald-ket' },
  { id: 'chem8-1m-4', text: 'What does the suffix \'-al\' indicate in IUPAC nomenclature?', category: '1-mark', topicId: '8-1-1-nomenclature-ald-ket' },
  { id: 'chem8-1m-5', text: 'What suffix is used in IUPAC names for ketones?', category: '1-mark', topicId: '8-1-1-nomenclature-ald-ket' },
  { id: 'chem8-1m-6', text: 'Give the common name of CH₃COCH₃.', category: '1-mark', topicId: '8-1-1-nomenclature-ald-ket' },
  { id: 'chem8-1m-7', text: 'What are Greek letters α, β, γ used for in common names of aldehydes?', category: '1-mark', topicId: '8-1-1-nomenclature-ald-ket' },
  { id: 'chem8-1m-8', text: 'Give the IUPAC name of CH₃CH₂CH₂CHO (Valeraldehyde).', category: '1-mark', topicId: '8-1-1-nomenclature-ald-ket' },
  { id: 'chem8-1m-9', text: 'Name the simplest aromatic aldehyde and give its IUPAC name.', category: '1-mark', topicId: '8-1-1-nomenclature-ald-ket' },
  { id: 'chem8-1m-10', text: 'What is the IUPAC name of diisopropyl ketone?', category: '1-mark', topicId: '8-1-1-nomenclature-ald-ket' },

  // 8.1.1 Nomenclature - 2 Mark
  { id: 'chem8-2m-1', text: 'Distinguish between common and IUPAC nomenclature of aldehydes with two examples each.', category: '2-mark', topicId: '8-1-1-nomenclature-ald-ket' },
  { id: 'chem8-2m-2', text: 'Give the IUPAC names of: (i) Acetaldehyde (ii) Isobutyraldehyde (iii) Acrolein (iv) Benzaldehyde.', category: '2-mark', topicId: '8-1-1-nomenclature-ald-ket' },
  { id: 'chem8-2m-3', text: 'Write the common and IUPAC names of: (i) CH₃COCH₂CH₂CH₃ (ii) (CH₃)₂CHCOCH(CH₃)₂.', category: '2-mark', topicId: '8-1-1-nomenclature-ald-ket' },
  { id: 'chem8-2m-4', text: 'Name the following compounds by IUPAC system: (i) CH₃CH=CHCHO (ii) CH₃COCH₂COCH₃.', category: '2-mark', topicId: '8-1-1-nomenclature-ald-ket' },
  { id: 'chem8-2m-5', text: 'Give IUPAC names: (i) 3-Oxopentanal (ii) 2,4-Dimethylpentan-3-one. Draw their structures.', category: '2-mark', topicId: '8-1-1-nomenclature-ald-ket' },
  { id: 'chem8-2m-6', text: 'What is the IUPAC name of the compound represented as OHC-CH₂-CH(CHO)-CH₂-CHO?', category: '2-mark', topicId: '8-1-1-nomenclature-ald-ket' },

  // 8.1.1 Nomenclature - 3 Mark
  { id: 'chem8-3m-1', text: 'Write the structures of: (i) α-Methoxypropionaldehyde (ii) 3-Hydroxybutanal (iii) 2-Hydroxycyclopentane carbaldehyde (iv) 4-Oxopentanal (v) Di-sec-butyl ketone (vi) 4-Fluoroacetophenone. [NCERT Intext 8.1]', category: '3-mark', topicId: '8-1-1-nomenclature-ald-ket' },
  { id: 'chem8-3m-2', text: 'Name the following compounds and give their IUPAC names: (i) CH₃CO(CH₂)₄CH₃ (ii) CH₃CH₂CHBrCH₂CH(CH₃)CHO (iii) CH₃(CH₂)₅CHO (iv) Ph–CH=CH–CHO (v) PhCOPh. [NCERT Ex 8.4]', category: '3-mark', topicId: '8-1-1-nomenclature-ald-ket' },
  { id: 'chem8-3m-3', text: 'Name the following according to IUPAC system: (i) CH₃CH(CH₃)CH₂CH₂CHO (ii) CH₃CH₂COCH(C₂H₅)CH₂CH₂Cl (iii) CH₃CH=CHCHO (iv) CH₃CH(CH₃)CH₂C(CH₃)₂COCH₃ (v) (CH₃)₃CCH₂COOH (vi) OHCC₆H₄CHO-p. [NCERT Ex 8.2]', category: '3-mark', topicId: '8-1-1-nomenclature-ald-ket' },

  // 8.1.2 Structure of Carbonyl Group - 1 Mark
  { id: 'chem8-1m-11', text: 'What hybridisation is the carbonyl carbon? How many sigma bonds does it form?', category: '1-mark', topicId: '8-1-2-structure-carbonyl' },
  { id: 'chem8-1m-12', text: 'The C=O bond is polar. Which end is δ⁺ and which is δ⁻? Why?', category: '1-mark', topicId: '8-1-2-structure-carbonyl' },
  { id: 'chem8-1m-13', text: 'Why is the carbonyl group planar? State the bond angle.', category: '1-mark', topicId: '8-1-2-structure-carbonyl' },
  { id: 'chem8-1m-14', text: 'What makes carbonyl carbon electrophilic?', category: '1-mark', topicId: '8-1-2-structure-carbonyl' },
  { id: 'chem8-1m-15', text: 'Draw the two resonance structures of the carbonyl group showing neutral (A) and dipolar (B) forms.', category: '1-mark', topicId: '8-1-2-structure-carbonyl' },

  // 8.1.2 Structure - 2 Mark
  { id: 'chem8-2m-7', text: 'Describe the orbital structure of the carbonyl group. How is the π-bond formed?', category: '2-mark', topicId: '8-1-2-structure-carbonyl' },
  { id: 'chem8-2m-8', text: 'Explain why carbonyl compounds have higher dipole moments than ethers of comparable molecular mass.', category: '2-mark', topicId: '8-1-2-structure-carbonyl' },
  { id: 'chem8-2m-9', text: 'Compare the electrophilicity of the carbonyl carbon in benzaldehyde vs propanal. Give reason. [NCERT Example 8.3]', category: '2-mark', topicId: '8-1-2-structure-carbonyl' },

  // 8.2 Preparation - 1 Mark
  { id: 'chem8-1m-16', text: 'Which class of alcohol gives aldehydes on oxidation?', category: '1-mark', topicId: '8-2-preparation-ald-ket' },
  { id: 'chem8-1m-17', text: 'Which class of alcohol gives ketones on controlled oxidation?', category: '1-mark', topicId: '8-2-preparation-ald-ket' },
  { id: 'chem8-1m-18', text: 'What happens when alcohol vapours are passed over Cu at high temperature?', category: '1-mark', topicId: '8-2-preparation-ald-ket' },
  { id: 'chem8-1m-19', text: 'What reagent is used in the dehydrogenation of alcohols industrially?', category: '1-mark', topicId: '8-2-preparation-ald-ket' },
  { id: 'chem8-1m-20', text: 'What products are obtained by ozonolysis of an alkene followed by Zn/H₂O treatment?', category: '1-mark', topicId: '8-2-preparation-ald-ket' },
  { id: 'chem8-1m-21', text: 'What is obtained when ethyne is hydrated in the presence of H₂SO₄ and HgSO₄?', category: '1-mark', topicId: '8-2-preparation-ald-ket' },

  // 8.2.2 Preparation of Aldehydes - 1 Mark
  { id: 'chem8-1m-22', text: 'What is Rosenmund reduction? Name the catalyst used.', category: '1-mark', topicId: '8-2-2-prep-aldehydes' },
  { id: 'chem8-1m-23', text: 'What is Stephen reaction? Give the reagents involved.', category: '1-mark', topicId: '8-2-2-prep-aldehydes' },
  { id: 'chem8-1m-24', text: 'What reagent is used to selectively reduce nitriles to aldehydes (DIBAL-H method)?', category: '1-mark', topicId: '8-2-2-prep-aldehydes' },
  { id: 'chem8-1m-25', text: 'What is the Etard reaction? Name the reagent.', category: '1-mark', topicId: '8-2-2-prep-aldehydes' },
  { id: 'chem8-1m-26', text: 'State the Gattermann-Koch reaction.', category: '1-mark', topicId: '8-2-2-prep-aldehydes' },
  { id: 'chem8-1m-27', text: 'How is benzaldehyde prepared commercially from toluene?', category: '1-mark', topicId: '8-2-2-prep-aldehydes' },

  // 8.2 Preparation - 2 Mark
  { id: 'chem8-2m-10', text: 'Give reagents to bring about: (i) Hexan-1-ol → hexanal (ii) Cyclohexanol → cyclohexanone (iii) Allyl alcohol → propenal (iv) But-2-ene → ethanal. [NCERT Example 8.1]', category: '2-mark', topicId: '8-2-preparation-ald-ket' },
  { id: 'chem8-2m-11', text: 'Write the structures of products: (i) Benzene + C₂H₅COCl/AlCl₃ (ii) (C₆H₅CH₂)₂Cd + 2CH₃COCl (iii) H₃C–C≡C–H with Hg²⁺, H₂SO₄. [NCERT Intext 8.2]', category: '2-mark', topicId: '8-2-preparation-ald-ket' },
  { id: 'chem8-2m-12', text: 'Explain how an aldehyde can be prepared from: (a) an acyl chloride (b) a nitrile. Give reactions.', category: '2-mark', topicId: '8-2-2-prep-aldehydes' },
  { id: 'chem8-2m-13', text: 'Describe the preparation of benzaldehyde from toluene by side-chain chlorination followed by hydrolysis.', category: '2-mark', topicId: '8-2-2-prep-aldehydes' },
  { id: 'chem8-2m-14', text: 'How is benzaldehyde prepared using: (a) CrO₂Cl₂ (Etard reaction) (b) CrO₃ in acetic anhydride? Write reactions.', category: '2-mark', topicId: '8-2-2-prep-aldehydes' },
  { id: 'chem8-2m-15', text: 'Give the reagent for: (i) p-Fluorotoluene → p-fluorobenzaldehyde (ii) Ethanenitrile → ethanal. [NCERT Example 8.1]', category: '2-mark', topicId: '8-2-2-prep-aldehydes' },

  // 8.2.3 Preparation of Ketones - 1 Mark
  { id: 'chem8-1m-28', text: 'What is Friedel-Crafts acylation? Name the catalyst used.', category: '1-mark', topicId: '8-2-3-prep-ketones' },
  { id: 'chem8-1m-29', text: 'How is dialkylcadmium prepared from a Grignard reagent?', category: '1-mark', topicId: '8-2-3-prep-ketones' },
  { id: 'chem8-1m-30', text: 'Which compound reacts with Grignard reagent to give a ketone?', category: '1-mark', topicId: '8-2-3-prep-ketones' },

  // 8.2.3 Preparation of Ketones - 2 Mark
  { id: 'chem8-2m-16', text: 'Write the reaction for the preparation of a ketone from: (a) acyl chloride and dialkylcadmium (b) a nitrile and Grignard reagent. Give examples.', category: '2-mark', topicId: '8-2-3-prep-ketones' },
  { id: 'chem8-2m-17', text: 'How are aromatic ketones prepared by Friedel-Crafts acylation? Write the reaction for the preparation of acetophenone.', category: '2-mark', topicId: '8-2-3-prep-ketones' },
  { id: 'chem8-2m-18', text: 'Starting from benzene, how will you prepare: (i) acetophenone (ii) benzophenone? Show the reaction steps.', category: '2-mark', topicId: '8-2-3-prep-ketones' },

  // 8.3 Physical Properties - 1 Mark
  { id: 'chem8-1m-31', text: 'What is the physical state of methanal at room temperature?', category: '1-mark', topicId: '8-3-physical-properties' },
  { id: 'chem8-1m-32', text: 'Why do aldehydes and ketones have higher boiling points than hydrocarbons of similar molecular mass?', category: '1-mark', topicId: '8-3-physical-properties' },
  { id: 'chem8-1m-33', text: 'Why do aldehydes and ketones have lower boiling points than alcohols of similar molecular mass?', category: '1-mark', topicId: '8-3-physical-properties' },
  { id: 'chem8-1m-34', text: 'Why are lower members of aldehydes and ketones miscible with water?', category: '1-mark', topicId: '8-3-physical-properties' },
  { id: 'chem8-1m-35', text: 'What type of intermolecular forces are present in carbonyl compounds?', category: '1-mark', topicId: '8-3-physical-properties' },

  // 8.3 Physical Properties - 2 Mark
  { id: 'chem8-2m-19', text: 'Arrange the following in increasing order of boiling points: CH₃CH₂CH₂CHO, CH₃CH₂CH₂CH₂OH, H₅C₂–O–C₂H₅, CH₃CH₂CH₂CH₃. Give reason. [NCERT Example 8.2]', category: '2-mark', topicId: '8-3-physical-properties' },
  { id: 'chem8-2m-20', text: 'Arrange the following in increasing order of boiling points and explain: CH₃CHO, CH₃CH₂OH, CH₃OCH₃, CH₃CH₂CH₃. [NCERT Intext 8.3]', category: '2-mark', topicId: '8-3-physical-properties' },
  { id: 'chem8-2m-21', text: 'Explain why the solubility of aldehydes and ketones in water decreases with increasing chain length.', category: '2-mark', topicId: '8-3-physical-properties' },

  // 8.4 Nucleophilic Addition - 1 Mark
  { id: 'chem8-1m-36', text: 'What type of addition reactions do carbonyl compounds undergo — electrophilic or nucleophilic? Why?', category: '1-mark', topicId: '8-4-nucleophilic-addition' },
  { id: 'chem8-1m-37', text: 'In nucleophilic addition to carbonyl group, what change occurs in hybridisation of carbon?', category: '1-mark', topicId: '8-4-nucleophilic-addition' },
  { id: 'chem8-1m-38', text: 'Why are aldehydes more reactive than ketones in nucleophilic addition reactions?', category: '1-mark', topicId: '8-4-nucleophilic-addition' },
  { id: 'chem8-1m-39', text: 'What is a cyanohydrin? Name the reagent used to prepare it.', category: '1-mark', topicId: '8-4-nucleophilic-addition' },
  { id: 'chem8-1m-40', text: 'What catalyst is used in the addition of HCN to a carbonyl compound?', category: '1-mark', topicId: '8-4-nucleophilic-addition' },
  { id: 'chem8-1m-41', text: 'What is the bisulphite addition product of an aldehyde? What is its use?', category: '1-mark', topicId: '8-4-nucleophilic-addition' },
  { id: 'chem8-1m-42', text: 'Define a hemiacetal and an acetal.', category: '1-mark', topicId: '8-4-nucleophilic-addition' },
  { id: 'chem8-1m-43', text: 'What is the role of dry HCl in acetal formation?', category: '1-mark', topicId: '8-4-nucleophilic-addition' },
  { id: 'chem8-1m-44', text: 'Name the products when ammonia derivatives H₂N–Z react with carbonyl compounds.', category: '1-mark', topicId: '8-4-nucleophilic-addition' },
  { id: 'chem8-1m-45', text: 'Define oxime. Which reagent produces it from a ketone?', category: '1-mark', topicId: '8-4-nucleophilic-addition' },
  { id: 'chem8-1m-46', text: 'What are 2,4-DNP derivatives? What is their use?', category: '1-mark', topicId: '8-4-nucleophilic-addition' },
  { id: 'chem8-1m-47', text: 'What is a semicarbazone? Name the reagent used.', category: '1-mark', topicId: '8-4-nucleophilic-addition' },
  { id: 'chem8-1m-48', text: 'What is a Schiff\'s base?', category: '1-mark', topicId: '8-4-nucleophilic-addition' },

  // 8.4 Nucleophilic Addition - 2 Mark
  { id: 'chem8-2m-22', text: 'Explain the mechanism of nucleophilic addition to the carbonyl group. What intermediate is formed?', category: '2-mark', topicId: '8-4-nucleophilic-addition' },
  { id: 'chem8-2m-23', text: 'Would benzaldehyde be more or less reactive than propanal in nucleophilic addition? Explain. [NCERT Example 8.3]', category: '2-mark', topicId: '8-4-nucleophilic-addition' },
  { id: 'chem8-2m-24', text: 'Arrange in increasing order of reactivity towards nucleophilic addition: (i) Ethanal, Propanal, Propanone, Butanone. (ii) Benzaldehyde, p-Tolualdehyde, p-Nitrobenzaldehyde, Acetophenone. [NCERT Intext 8.4]', category: '2-mark', topicId: '8-4-nucleophilic-addition' },
  { id: 'chem8-2m-25', text: 'How is a cyanohydrin formed? Write the mechanism. Why is a base used as catalyst?', category: '2-mark', topicId: '8-4-nucleophilic-addition' },
  { id: 'chem8-2m-26', text: 'Explain formation of: (i) hemiacetal and acetal from an aldehyde and alcohol (ii) ethylene glycol ketal from a ketone.', category: '2-mark', topicId: '8-4-nucleophilic-addition' },
  { id: 'chem8-2m-27', text: 'Write reactions of acetaldehyde with: (i) hydroxylamine (ii) hydrazine (iii) phenylhydrazine (iv) semicarbazide.', category: '2-mark', topicId: '8-4-nucleophilic-addition' },
  { id: 'chem8-2m-28', text: 'Predict the products of the reactions given in NCERT Intext 8.5 (reactions i–iv).', category: '2-mark', topicId: '8-4-nucleophilic-addition' },

  // 8.4 Reduction Reactions - 1 Mark
  { id: 'chem8-1m-49', text: 'What are the products when aldehydes and ketones are reduced with NaBH₄?', category: '1-mark', topicId: '8-4-reduction-reactions' },
  { id: 'chem8-1m-50', text: 'What is Clemmensen reduction? Give the reagents.', category: '1-mark', topicId: '8-4-reduction-reactions' },
  { id: 'chem8-1m-51', text: 'What is Wolff-Kishner reduction? Give the conditions.', category: '1-mark', topicId: '8-4-reduction-reactions' },
  { id: 'chem8-1m-52', text: 'What is the difference between Clemmensen and Wolff-Kishner reductions in terms of conditions?', category: '1-mark', topicId: '8-4-reduction-reactions' },

  // 8.4 Reduction - 2 Mark
  { id: 'chem8-2m-29', text: 'Compare NaBH₄ and LiAlH₄ as reducing agents for carbonyl compounds. Which is milder?', category: '2-mark', topicId: '8-4-reduction-reactions' },
  { id: 'chem8-2m-30', text: 'Write reactions to show the reduction of propanone to: (a) propan-2-ol (b) propane. Name the reagents in each case.', category: '2-mark', topicId: '8-4-reduction-reactions' },

  // 8.4 Oxidation Reactions - 1 Mark
  { id: 'chem8-1m-53', text: 'Why are aldehydes more easily oxidised than ketones?', category: '1-mark', topicId: '8-4-oxidation-reactions' },
  { id: 'chem8-1m-54', text: 'What is Tollens\' reagent? What is observed when an aldehyde reacts with it?', category: '1-mark', topicId: '8-4-oxidation-reactions' },
  { id: 'chem8-1m-55', text: 'What is Fehling\'s reagent? What precipitate is formed with an aldehyde?', category: '1-mark', topicId: '8-4-oxidation-reactions' },
  { id: 'chem8-1m-56', text: 'Do aromatic aldehydes respond to Fehling\'s test? Give reason.', category: '1-mark', topicId: '8-4-oxidation-reactions' },
  { id: 'chem8-1m-57', text: 'What is the haloform reaction? Under what conditions does it occur?', category: '1-mark', topicId: '8-4-oxidation-reactions' },
  { id: 'chem8-1m-58', text: 'Which functional groups give a positive iodoform test?', category: '1-mark', topicId: '8-4-oxidation-reactions' },
  { id: 'chem8-1m-59', text: 'What yellow precipitate is formed in the iodoform test?', category: '1-mark', topicId: '8-4-oxidation-reactions' },

  // 8.4 Oxidation - 2 Mark
  { id: 'chem8-2m-31', text: 'Distinguish between Tollens\' test and Fehling\'s test. Which can be used to distinguish aliphatic from aromatic aldehydes?', category: '2-mark', topicId: '8-4-oxidation-reactions' },
  { id: 'chem8-2m-32', text: 'Write the reaction of acetaldehyde with: (a) Tollens\' reagent (b) Fehling\'s reagent. Name the products.', category: '2-mark', topicId: '8-4-oxidation-reactions' },
  { id: 'chem8-2m-33', text: 'Explain the haloform reaction. Which ketones undergo this reaction? Write the reaction with NaOX.', category: '2-mark', topicId: '8-4-oxidation-reactions' },
  { id: 'chem8-2m-34', text: 'An organic compound gives a positive iodoform test and also reduces Tollens\' reagent. What functional groups might it contain?', category: '2-mark', topicId: '8-4-oxidation-reactions' },
  { id: 'chem8-2m-35', text: 'Identify compound (A) with molecular formula C₈H₈O that: forms 2,4-DNP derivative; gives positive iodoform test; does NOT reduce Tollens\'/Fehling\'s reagent; on oxidation gives a compound B (C₇H₆O₂). [NCERT Example 8.4]', category: '2-mark', topicId: '8-4-oxidation-reactions' },

  // 8.4 Aldol and Cannizzaro - 1 Mark
  { id: 'chem8-1m-60', text: 'Why are α-hydrogens in carbonyl compounds acidic?', category: '1-mark', topicId: '8-4-aldol-cannizzaro' },
  { id: 'chem8-1m-61', text: 'What is aldol condensation? What is the role of dilute alkali?', category: '1-mark', topicId: '8-4-aldol-cannizzaro' },
  { id: 'chem8-1m-62', text: 'What is an aldol? What functional groups does it contain?', category: '1-mark', topicId: '8-4-aldol-cannizzaro' },
  { id: 'chem8-1m-63', text: 'What product is obtained when an aldol is heated?', category: '1-mark', topicId: '8-4-aldol-cannizzaro' },
  { id: 'chem8-1m-64', text: 'What is the Cannizzaro reaction? Which aldehydes undergo it?', category: '1-mark', topicId: '8-4-aldol-cannizzaro' },
  { id: 'chem8-1m-65', text: 'What two products are formed in the Cannizzaro reaction of formaldehyde?', category: '1-mark', topicId: '8-4-aldol-cannizzaro' },
  { id: 'chem8-1m-66', text: 'What is cross-aldol condensation? When does it give a mixture of products?', category: '1-mark', topicId: '8-4-aldol-cannizzaro' },

  // 8.4 Aldol/Cannizzaro - 2 Mark
  { id: 'chem8-2m-36', text: 'Write the aldol condensation reaction of ethanal. Name the intermediate (aldol) and the final condensation product.', category: '2-mark', topicId: '8-4-aldol-cannizzaro' },
  { id: 'chem8-2m-37', text: 'Write the aldol condensation product of propanone. Name it.', category: '2-mark', topicId: '8-4-aldol-cannizzaro' },
  { id: 'chem8-2m-38', text: 'Explain why Cannizzaro reaction is called a disproportionation reaction. Write the equation for benzaldehyde.', category: '2-mark', topicId: '8-4-aldol-cannizzaro' },
  { id: 'chem8-2m-39', text: 'Write structural formulas and names of four possible cross-aldol condensation products from propanal and butanal. Indicate nucleophile and electrophile in each case. [NCERT Ex 8.9]', category: '2-mark', topicId: '8-4-aldol-cannizzaro' },
  { id: 'chem8-2m-40', text: 'Which of the following undergo: (a) aldol condensation (b) Cannizzaro reaction (c) neither? (i) Methanal (ii) 2-Methylpentanal (iii) Benzaldehyde (iv) Benzophenone (v) Cyclohexanone (vi) 2,2-Dimethylbutanal. [NCERT Ex 8.7]', category: '2-mark', topicId: '8-4-aldol-cannizzaro' },

  // 8.4 Reactions - 3 Mark
  { id: 'chem8-3m-4', text: 'Give simple chemical tests to distinguish between: (i) Propanal and Propanone (ii) Acetophenone and Benzophenone (iii) Benzaldehyde and Acetophenone (iv) Pentan-2-one and Pentan-3-one (v) Ethanal and Propanal. [NCERT Ex 8.13]', category: '3-mark', topicId: '8-4-aldol-cannizzaro' },
  { id: 'chem8-3m-5', text: 'An organic compound with molecular formula C₉H₁₀O forms a 2,4-DNP derivative, reduces Tollens\' reagent and undergoes Cannizzaro reaction. On vigorous oxidation it gives 1,2-benzenedicarboxylic acid. Identify the compound. [NCERT Ex 8.10]', category: '3-mark', topicId: '8-4-aldol-cannizzaro' },
  { id: 'chem8-3m-6', text: 'An organic compound (A) (C₈H₁₆O₂) hydrolysed with dil. H₂SO₄ gives carboxylic acid (B) and alcohol (C). Oxidation of (C) with CrO₃ gives (B). (C) on dehydration gives but-1-ene. Write the reactions and identify A, B, C. [NCERT Ex 8.11]', category: '3-mark', topicId: '8-4-aldol-cannizzaro' },

  // 8.5 Uses - 1 Mark
  { id: 'chem8-1m-67', text: 'What is formalin? What is its concentration and use?', category: '1-mark', topicId: '8-5-uses-ald-ket' },
  { id: 'chem8-1m-68', text: 'Name the polymer prepared from formaldehyde and phenol.', category: '1-mark', topicId: '8-5-uses-ald-ket' },
  { id: 'chem8-1m-69', text: 'State one industrial use of acetaldehyde.', category: '1-mark', topicId: '8-5-uses-ald-ket' },
  { id: 'chem8-1m-70', text: 'What are the industrial uses of benzaldehyde?', category: '1-mark', topicId: '8-5-uses-ald-ket' },
  { id: 'chem8-1m-71', text: 'Name the common industrial solvents from carbonyl compounds.', category: '1-mark', topicId: '8-5-uses-ald-ket' },

  // 8.5 Uses - 2 Mark
  { id: 'chem8-2m-41', text: 'List four uses of aldehydes and ketones in industry and daily life.', category: '2-mark', topicId: '8-5-uses-ald-ket' },
  { id: 'chem8-2m-42', text: 'How is bakelite prepared from formaldehyde? What is its significance?', category: '2-mark', topicId: '8-5-uses-ald-ket' },

  // 8.6 Carboxylic Acid Nomenclature - 1 Mark
  { id: 'chem8-1m-72', text: 'What functional group is present in carboxylic acids? Name the two groups it consists of.', category: '1-mark', topicId: '8-6-nomenclature-carboxyl' },
  { id: 'chem8-1m-73', text: 'Why is the group called \'carboxyl\'?', category: '1-mark', topicId: '8-6-nomenclature-carboxyl' },
  { id: 'chem8-1m-74', text: 'What is the common name of HCOOH and from where is it derived?', category: '1-mark', topicId: '8-6-nomenclature-carboxyl' },
  { id: 'chem8-1m-75', text: 'What is the IUPAC name of CH₃COOH?', category: '1-mark', topicId: '8-6-nomenclature-carboxyl' },
  { id: 'chem8-1m-76', text: 'Write the IUPAC name of (CH₃)₂CHCOOH.', category: '1-mark', topicId: '8-6-nomenclature-carboxyl' },
  { id: 'chem8-1m-77', text: 'What is the origin of the name \'butyric acid\'?', category: '1-mark', topicId: '8-6-nomenclature-carboxyl' },
  { id: 'chem8-1m-78', text: 'Name the dicarboxylic acid present in oxalic acid (HOOC-COOH).', category: '1-mark', topicId: '8-6-nomenclature-carboxyl' },
  { id: 'chem8-1m-79', text: 'What suffix is used in IUPAC names of carboxylic acids?', category: '1-mark', topicId: '8-6-nomenclature-carboxyl' },

  // 8.6 Carboxylic Nomenclature - 2 Mark
  { id: 'chem8-2m-43', text: 'Give the IUPAC names of: (i) PhCH₂CH₂COOH (ii) (CH₃)₂C=CHCOOH (iii) 2-Methylcyclopentanecarboxylic acid. [NCERT Intext 8.6]', category: '2-mark', topicId: '8-6-nomenclature-carboxyl' },
  { id: 'chem8-2m-44', text: 'Write the common and IUPAC names of: (i) HCOOH (ii) CH₃COOH (iii) HOOC-COOH (iv) CH₃CH₂COOH (v) (CH₃)₂CHCOOH.', category: '2-mark', topicId: '8-6-nomenclature-carboxyl' },
  { id: 'chem8-2m-45', text: 'Distinguish between aliphatic and aromatic carboxylic acids with two examples each.', category: '2-mark', topicId: '8-6-nomenclature-carboxyl' },

  // 8.6.2 Structure - 1 Mark
  { id: 'chem8-1m-80', text: 'What is the bond angle around the carboxyl carbon?', category: '1-mark', topicId: '8-6-nomenclature-carboxyl' },
  { id: 'chem8-1m-81', text: 'Why is the carboxyl carbon less electrophilic than the carbonyl carbon of an aldehyde?', category: '1-mark', topicId: '8-6-nomenclature-carboxyl' },
  { id: 'chem8-1m-82', text: 'Draw the resonance structures of the carboxyl group.', category: '1-mark', topicId: '8-6-nomenclature-carboxyl' },

  // 8.6.2 Structure - 2 Mark
  { id: 'chem8-2m-46', text: 'Explain the structure of the carboxyl group using resonance. Why is it less reactive than a simple carbonyl group?', category: '2-mark', topicId: '8-6-nomenclature-carboxyl' },
  { id: 'chem8-2m-47', text: 'Why are carboxylic acids stronger acids than phenols, even though the phenoxide ion has more resonance structures? [NCERT Ex 8.20]', category: '2-mark', topicId: '8-6-nomenclature-carboxyl' },

  // 8.7 Preparation of Carboxylic Acids - 1 Mark
  { id: 'chem8-1m-83', text: 'Which oxidising agents convert primary alcohols to carboxylic acids?', category: '1-mark', topicId: '8-7-prep-carboxylic-acids' },
  { id: 'chem8-1m-84', text: 'What reagent is called Jones reagent?', category: '1-mark', topicId: '8-7-prep-carboxylic-acids' },
  { id: 'chem8-1m-85', text: 'How are aromatic carboxylic acids prepared from alkylbenzenes?', category: '1-mark', topicId: '8-7-prep-carboxylic-acids' },
  { id: 'chem8-1m-86', text: 'What is obtained when a nitrile (R–CN) is hydrolysed in acidic or basic medium?', category: '1-mark', topicId: '8-7-prep-carboxylic-acids' },
  { id: 'chem8-1m-87', text: 'How does a Grignard reagent react with CO₂ to give a carboxylic acid?', category: '1-mark', topicId: '8-7-prep-carboxylic-acids' },
  { id: 'chem8-1m-88', text: 'Name the intermediate when acid chlorides are hydrolysed with water.', category: '1-mark', topicId: '8-7-prep-carboxylic-acids' },
  { id: 'chem8-1m-89', text: 'What is formed when an ester undergoes basic hydrolysis?', category: '1-mark', topicId: '8-7-prep-carboxylic-acids' },

  // 8.7 Preparation - 2 Mark
  { id: 'chem8-2m-48', text: 'Write chemical reactions showing: (i) Butan-1-ol → butanoic acid (ii) Butanal → butanoic acid (iii) Benzyl alcohol → phenylethanoic acid. [NCERT Example 8.5]', category: '2-mark', topicId: '8-7-prep-carboxylic-acids' },
  { id: 'chem8-2m-49', text: 'How is benzoic acid prepared from: (i) toluene (ii) ethylbenzene (iii) acetophenone? Write reactions. [NCERT Intext 8.7]', category: '2-mark', topicId: '8-7-prep-carboxylic-acids' },
  { id: 'chem8-2m-50', text: 'Show how 3-Nitrobromobenzene can be converted to 3-nitrobenzoic acid. [NCERT Example 8.5(iii)]', category: '2-mark', topicId: '8-7-prep-carboxylic-acids' },
  { id: 'chem8-2m-51', text: 'How are carboxylic acids prepared from nitriles and amides? Write reactions with suitable examples.', category: '2-mark', topicId: '8-7-prep-carboxylic-acids' },
  { id: 'chem8-2m-52', text: 'Explain why methods using Grignard reagents and nitriles are called \'ascending the series\' methods.', category: '2-mark', topicId: '8-7-prep-carboxylic-acids' },

  // 8.7 Preparation - 3 Mark
  { id: 'chem8-3m-7', text: 'Write reactions to prepare benzene-1,4-dicarboxylic acid from 4-methylacetophenone. [NCERT Example 8.5(iv)]', category: '3-mark', topicId: '8-7-prep-carboxylic-acids' },
  { id: 'chem8-3m-8', text: 'Show how each of the following can be converted to benzoic acid: (i) Ethylbenzene (ii) Acetophenone (iii) Bromobenzene (iv) Styrene. [NCERT Intext 8.7]', category: '3-mark', topicId: '8-7-prep-carboxylic-acids' },
  { id: 'chem8-3m-9', text: 'How will you prepare the following compounds from benzene (using reagents with ≤1 carbon): (i) Methyl benzoate (ii) m-Nitrobenzoic acid (iii) p-Nitrobenzoic acid (iv) Phenylacetic acid. [NCERT Ex 8.14]', category: '3-mark', topicId: '8-7-prep-carboxylic-acids' },

  // 8.8 Physical Properties - 1 Mark
  { id: 'chem8-1m-90', text: 'What is the physical state of lower carboxylic acids (up to C9)?', category: '1-mark', topicId: '8-8-physical-carboxylic' },
  { id: 'chem8-1m-91', text: 'Why do carboxylic acids have higher boiling points than even alcohols of similar molecular mass?', category: '1-mark', topicId: '8-8-physical-carboxylic' },
  { id: 'chem8-1m-92', text: 'What is meant by a dimer of carboxylic acid? When is it formed?', category: '1-mark', topicId: '8-8-physical-carboxylic' },
  { id: 'chem8-1m-93', text: 'Why are lower aliphatic carboxylic acids soluble in water?', category: '1-mark', topicId: '8-8-physical-carboxylic' },
  { id: 'chem8-1m-94', text: 'Why is benzoic acid nearly insoluble in cold water?', category: '1-mark', topicId: '8-8-physical-carboxylic' },

  // 8.8 Physical Properties - 2 Mark
  { id: 'chem8-2m-53', text: 'Explain why carboxylic acids exist as dimers in the vapour phase or in aprotic solvents.', category: '2-mark', topicId: '8-8-physical-carboxylic' },
  { id: 'chem8-2m-54', text: 'Compare the boiling points of carboxylic acids, alcohols, aldehydes and hydrocarbons of similar molecular mass and explain the trend.', category: '2-mark', topicId: '8-8-physical-carboxylic' },

  // 8.9.1 Acidity - 1 Mark
  { id: 'chem8-1m-95', text: 'Write the dissociation equation of a carboxylic acid in water.', category: '1-mark', topicId: '8-9-1-acidity-carboxylic' },
  { id: 'chem8-1m-96', text: 'Define pKₐ. What does a smaller pKₐ indicate?', category: '1-mark', topicId: '8-9-1-acidity-carboxylic' },
  { id: 'chem8-1m-97', text: 'Arrange in increasing acidity: ethanol, phenol, acetic acid.', category: '1-mark', topicId: '8-9-1-acidity-carboxylic' },
  { id: 'chem8-1m-98', text: 'Why do carboxylic acids react with NaHCO₃ but phenols do not?', category: '1-mark', topicId: '8-9-1-acidity-carboxylic' },
  { id: 'chem8-1m-99', text: 'What is the effect of an electron-withdrawing group on the acidity of carboxylic acids?', category: '1-mark', topicId: '8-9-1-acidity-carboxylic' },
  { id: 'chem8-1m-100', text: 'Which is more acidic: CH₂FCOOH or CH₂ClCOOH? Why?', category: '1-mark', topicId: '8-9-1-acidity-carboxylic' },
  { id: 'chem8-1m-101', text: 'Which is a stronger acid: 4-nitrobenzoic acid or 4-methoxybenzoic acid? Why?', category: '1-mark', topicId: '8-9-1-acidity-carboxylic' },
  { id: 'chem8-1m-102', text: 'Arrange in decreasing acidity: CF₃COOH, CCl₃COOH, CH₃COOH, HCOOH.', category: '1-mark', topicId: '8-9-1-acidity-carboxylic' },

  // 8.9.1 Acidity - 2 Mark
  { id: 'chem8-2m-55', text: 'Explain why carboxylic acids are stronger acids than alcohols but weaker than mineral acids.', category: '2-mark', topicId: '8-9-1-acidity-carboxylic' },
  { id: 'chem8-2m-56', text: 'How does resonance stabilise the carboxylate ion? Compare with phenoxide ion to explain relative acidity.', category: '2-mark', topicId: '8-9-1-acidity-carboxylic' },
  { id: 'chem8-2m-57', text: 'Explain the effect of electron-withdrawing and electron-donating substituents on the acidity of benzoic acid with examples.', category: '2-mark', topicId: '8-9-1-acidity-carboxylic' },
  { id: 'chem8-2m-58', text: 'Which acid is stronger in each pair: (i) CH₃CO₂H or CH₂FCO₂H (ii) CH₂FCO₂H or CH₂ClCO₂H (iii) CH₂FCH₂CH₂CO₂H or CH₃CHFCH₂CO₂H. [NCERT Intext 8.8]', category: '2-mark', topicId: '8-9-1-acidity-carboxylic' },
  { id: 'chem8-2m-59', text: 'Arrange in increasing order of acid strength: Benzoic acid, 4-Nitrobenzoic acid, 3,4-Dinitrobenzoic acid, 4-Methoxybenzoic acid. Give reason. [NCERT Ex 8.12(iii)]', category: '2-mark', topicId: '8-9-1-acidity-carboxylic' },
  { id: 'chem8-2m-60', text: 'Arrange in increasing acid strength: CH₃CH₂CH(Br)COOH, CH₃CH(Br)CH₂COOH, (CH₃)₂CHCOOH, CH₃CH₂CH₂COOH. Explain. [NCERT Ex 8.12(ii)]', category: '2-mark', topicId: '8-9-1-acidity-carboxylic' },

  // 8.9.2 C-OH Cleavage - 1 Mark
  { id: 'chem8-1m-103', text: 'How is an acid anhydride formed from a carboxylic acid?', category: '1-mark', topicId: '8-9-2-c-oh-cleavage' },
  { id: 'chem8-1m-104', text: 'Write the reaction for the formation of ethanoic anhydride.', category: '1-mark', topicId: '8-9-2-c-oh-cleavage' },
  { id: 'chem8-1m-105', text: 'What is esterification? Name the type of catalyst used.', category: '1-mark', topicId: '8-9-2-c-oh-cleavage' },
  { id: 'chem8-1m-106', text: 'Which reagent converts a carboxylic acid to an acid chloride most conveniently? Why?', category: '1-mark', topicId: '8-9-2-c-oh-cleavage' },
  { id: 'chem8-1m-107', text: 'Write the equation for the reaction of acetic acid with PCl₅.', category: '1-mark', topicId: '8-9-2-c-oh-cleavage' },
  { id: 'chem8-1m-108', text: 'Why is SOCl₂ preferred over PCl₅ for making acid chlorides?', category: '1-mark', topicId: '8-9-2-c-oh-cleavage' },
  { id: 'chem8-1m-109', text: 'What salt and then what amide is formed when carboxylic acid reacts with ammonia?', category: '1-mark', topicId: '8-9-2-c-oh-cleavage' },

  // 8.9.2 C-OH Cleavage - 2 Mark
  { id: 'chem8-2m-61', text: 'Explain the mechanism of esterification of a carboxylic acid with an alcohol. What type of reaction is it?', category: '2-mark', topicId: '8-9-2-c-oh-cleavage' },
  { id: 'chem8-2m-62', text: 'Why should water or ester be removed as soon as it is formed during esterification? [NCERT Ex 8.18(iii)]', category: '2-mark', topicId: '8-9-2-c-oh-cleavage' },
  { id: 'chem8-2m-63', text: 'Write reactions of benzoic acid with: (i) SOCl₂ (ii) ammonia on heating (iii) ethanol/H⁺ (iv) P₂O₅.', category: '2-mark', topicId: '8-9-2-c-oh-cleavage' },

  // 8.9.3 Reduction & Decarboxylation - 1 Mark
  { id: 'chem8-1m-110', text: 'Which reagent reduces carboxylic acids to primary alcohols? Does NaBH₄ work?', category: '1-mark', topicId: '8-9-3-reduction-decarboxylation' },
  { id: 'chem8-1m-111', text: 'What is decarboxylation? Name the reagent used.', category: '1-mark', topicId: '8-9-3-reduction-decarboxylation' },
  { id: 'chem8-1m-112', text: 'What is Kolbe electrolysis? What product is formed?', category: '1-mark', topicId: '8-9-3-reduction-decarboxylation' },
  { id: 'chem8-1m-113', text: 'What is sodalime? Give its composition.', category: '1-mark', topicId: '8-9-3-reduction-decarboxylation' },

  // 8.9.3 Reduction & Decarboxylation - 2 Mark
  { id: 'chem8-2m-64', text: 'Write reactions for the reduction of benzoic acid to: (a) benzyl alcohol (b) methane (decarboxylation).', category: '2-mark', topicId: '8-9-3-reduction-decarboxylation' },
  { id: 'chem8-2m-65', text: 'Compare LiAlH₄ and diborane as reducing agents for carboxylic acids. Which is more selective?', category: '2-mark', topicId: '8-9-3-reduction-decarboxylation' },
  { id: 'chem8-2m-66', text: 'What is Kolbe electrolysis? Write the half-reactions and overall equation for electrolysis of sodium acetate.', category: '2-mark', topicId: '8-9-3-reduction-decarboxylation' },

  // 8.9.4 Substitution (HVZ) - 1 Mark
  { id: 'chem8-1m-114', text: 'What is Hell-Volhard-Zelinsky (HVZ) reaction?', category: '1-mark', topicId: '8-9-4-substitution-hvz' },
  { id: 'chem8-1m-115', text: 'What catalyst is used in HVZ reaction?', category: '1-mark', topicId: '8-9-4-substitution-hvz' },
  { id: 'chem8-1m-116', text: 'Where does halogenation of carboxylic acids occur — α, β or γ position?', category: '1-mark', topicId: '8-9-4-substitution-hvz' },
  { id: 'chem8-1m-117', text: 'Why do aromatic carboxylic acids not undergo Friedel-Crafts reaction?', category: '1-mark', topicId: '8-9-4-substitution-hvz' },
  { id: 'chem8-1m-118', text: 'In electrophilic substitution, where does the carboxyl group direct the incoming electrophile?', category: '1-mark', topicId: '8-9-4-substitution-hvz' },

  // 8.9.4 Substitution - 2 Mark
  { id: 'chem8-2m-67', text: 'Write the HVZ reaction for propanoic acid with Cl₂/red phosphorus. Name the product.', category: '2-mark', topicId: '8-9-4-substitution-hvz' },
  { id: 'chem8-2m-68', text: 'Write the reaction for nitration of benzoic acid. Why is the –COOH group meta-directing?', category: '2-mark', topicId: '8-9-4-substitution-hvz' },
  { id: 'chem8-2m-69', text: 'Show ring substitution (bromination) of benzoic acid. Why doesn\'t it undergo Friedel-Crafts acylation?', category: '2-mark', topicId: '8-9-4-substitution-hvz' },

  // 8.10 Uses - 1 Mark
  { id: 'chem8-1m-119', text: 'State two uses of methanoic acid (formic acid).', category: '1-mark', topicId: '8-10-uses-carboxylic' },
  { id: 'chem8-1m-120', text: 'What is the use of ethanoic acid in the food industry?', category: '1-mark', topicId: '8-10-uses-carboxylic' },
  { id: 'chem8-1m-121', text: 'Name the polymer manufactured using hexanedioic acid (adipic acid).', category: '1-mark', topicId: '8-10-uses-carboxylic' },
  { id: 'chem8-1m-122', text: 'What is the use of esters of benzoic acid?', category: '1-mark', topicId: '8-10-uses-carboxylic' },
  { id: 'chem8-1m-123', text: 'What is the use of sodium benzoate?', category: '1-mark', topicId: '8-10-uses-carboxylic' },
  { id: 'chem8-1m-124', text: 'State one use of higher fatty acids.', category: '1-mark', topicId: '8-10-uses-carboxylic' },

  // 8.10 Uses - 2 Mark
  { id: 'chem8-2m-70', text: 'Give four important industrial uses of carboxylic acids.', category: '2-mark', topicId: '8-10-uses-carboxylic' },
  { id: 'chem8-2m-71', text: 'Name the product formed from adipic acid and its important commercial use.', category: '2-mark', topicId: '8-10-uses-carboxylic' },

  // HOTS & Conversions - 5 Mark
  { id: 'chem8-5m-1', text: 'How will you bring about the following conversions in not more than two steps: (i) Propanone → Propene (ii) Benzoic acid → Benzaldehyde (iii) Ethanol → 3-Hydroxybutanal (iv) Benzene → m-Nitroacetophenone (v) Benzaldehyde → Benzophenone (vi) Bromobenzene → 1-Phenylethanol. [NCERT Ex 8.15]', category: '5-mark', topicId: '8-4-aldol-cannizzaro' },
  { id: 'chem8-5m-2', text: 'Complete each synthesis by giving the missing starting material, reagent or product for reactions (i)–(xi) as in NCERT Ex 8.17.', category: '5-mark', topicId: '8-7-prep-carboxylic-acids' },
  { id: 'chem8-5m-3', text: 'An organic compound contains 69.77% C, 11.63% H and the rest O. MW = 86. It does NOT reduce Tollens\' reagent but forms addition product with NaHSO₃ and gives positive iodoform test. On vigorous oxidation it gives ethanoic acid and propanoic acid. Write the possible structure. [NCERT Ex 8.19]', category: '5-mark', topicId: '8-4-oxidation-reactions' },
  { id: 'chem8-5m-4', text: 'Explain with reasons: (i) Why does cyclohexanone form cyanohydrin in good yield but 2,2,6-trimethylcyclohexanone does not? (ii) Why does only one –NH₂ group of semicarbazide participate in semicarbazone formation? (iii) Why should water/ester be removed during esterification? [NCERT Ex 8.18]', category: '5-mark', topicId: '8-4-nucleophilic-addition' },
  { id: 'chem8-5m-5', text: 'How will you prepare p-nitrobenzaldehyde from benzene? Write all steps. [NCERT Ex 8.14(v)]', category: '5-mark', topicId: '8-2-2-prep-aldehydes' },
  { id: 'chem8-5m-6', text: 'Give a plausible explanation: Although phenoxide ion has more resonating structures than carboxylate ion, carboxylic acid is a stronger acid than phenol. [NCERT Ex 8.20]', category: '5-mark', topicId: '8-9-1-acidity-carboxylic' },
  { id: 'chem8-5m-7', text: 'How will you convert ethanal into: (i) Butane-1,3-diol (ii) But-2-enal (iii) But-2-enoic acid? Write reactions for each. [NCERT Ex 8.8]', category: '5-mark', topicId: '8-4-aldol-cannizzaro' },
  { id: 'chem8-5m-8', text: 'Describe the following reactions with examples: (i) Aldol condensation (ii) Cannizzaro reaction (iii) Cross-aldol condensation (iv) Haloform reaction. [NCERT Ex 8.16]', category: '5-mark', topicId: '8-4-aldol-cannizzaro' },
  { id: 'chem8-5m-9', text: 'Arrange the following in increasing order of reactivity towards HCN: Acetaldehyde, Acetone, Di-tert-butyl ketone, Methyl tert-butyl ketone. Explain the basis of this order. [NCERT Ex 8.12(i)]', category: '5-mark', topicId: '8-4-nucleophilic-addition' },

  // Case-Based Questions
  { id: 'chem8-case-1', text: 'Case Study: Compound X (C₃H₆O) does not reduce Tollens\' reagent but gives a positive iodoform test. It forms a 2,4-DNP derivative and adds NaHSO₃. On reduction with NaBH₄ it gives compound Y (C₃H₈O) which reacts with Na to liberate H₂.\n(a) Identify X and Y.\n(b) Write the reaction of X with 2,4-DNP.\n(c) What is the product when X undergoes aldol condensation?\n(d) Write the iodoform reaction equation for X.\n(e) Why does X not reduce Tollens\' reagent while ethanal does?', category: 'case-study', topicId: '8-4-oxidation-reactions' },
  { id: 'chem8-case-2', text: 'Case Study: Carboxylic acid A (C₂H₄O₂) is the main constituent of vinegar. It reacts with ethanol in presence of H₂SO₄ to give compound B. A reacts with PCl₅ to give compound C. A reacts with NH₃ to give salt D which on heating gives amide E.\n(a) Name compounds A, B, C, D, E.\n(b) Write the equation for esterification.\n(c) Why is concentrated H₂SO₄ used in esterification?\n(d) What is the action of NaOH on ester B?\n(e) Arrange the following in increasing acidity: ethanol, acetic acid, phenol. Give reason.', category: 'case-study', topicId: '8-9-2-c-oh-cleavage' },
  { id: 'chem8-case-3', text: 'Case Study: Benzaldehyde (C₆H₅CHO) undergoes Cannizzaro reaction with conc. NaOH to give products P and Q. It also reacts with acetaldehyde in presence of dilute NaOH to give product R (cinnamaldehyde).\n(a) Identify P and Q in Cannizzaro reaction.\n(b) Write the equation for Cannizzaro reaction of benzaldehyde.\n(c) Why doesn\'t benzaldehyde undergo self aldol condensation?\n(d) Name the type of reaction when benzaldehyde reacts with acetaldehyde.\n(e) Give the structure of R and name the reaction.', category: 'case-study', topicId: '8-4-aldol-cannizzaro' },
];

// Unit 9: Amines
const unit9Questions: Question[] = [
  // 9.1 Structure of Amines - 1 Mark
  { id: 'chem9-1m-1', text: 'How are amines derived from ammonia?', category: '1-mark', topicId: '9-1-structure-amines' },
  { id: 'chem9-1m-2', text: 'What is the hybridisation of nitrogen in amines?', category: '1-mark', topicId: '9-1-structure-amines' },
  { id: 'chem9-1m-3', text: 'What is the geometry of amines? What angle does C–N–C make in trimethylamine?', category: '1-mark', topicId: '9-1-structure-amines' },
  { id: 'chem9-1m-4', text: 'Why is the C–N–C bond angle in amines less than 109.5°?', category: '1-mark', topicId: '9-1-structure-amines' },
  { id: 'chem9-1m-5', text: 'What is the role of the lone pair of electrons on nitrogen in amines?', category: '1-mark', topicId: '9-1-structure-amines' },
  { id: 'chem9-1m-6', text: 'Classify amines as Lewis acids or Lewis bases. Justify.', category: '1-mark', topicId: '9-1-structure-amines' },

  // 9.1 Structure - 2 Mark
  { id: 'chem9-2m-1', text: 'Describe the structure of amines with reference to sp³ hybridisation. Draw the orbital picture of trimethylamine.', category: '2-mark', topicId: '9-1-structure-amines' },
  { id: 'chem9-2m-2', text: 'Compare the geometry of amines with that of ammonia. How does the lone pair affect the bond angle?', category: '2-mark', topicId: '9-1-structure-amines' },
  { id: 'chem9-2m-3', text: 'Explain why nitrogen in amines is sp³ hybridised yet behaves as a nucleophile.', category: '2-mark', topicId: '9-1-structure-amines' },

  // 9.2 Classification - 1 Mark
  { id: 'chem9-1m-7', text: 'On what basis are amines classified as primary, secondary and tertiary?', category: '1-mark', topicId: '9-2-classification-amines' },
  { id: 'chem9-1m-8', text: 'Give the general formula of a primary, secondary and tertiary amine.', category: '1-mark', topicId: '9-2-classification-amines' },
  { id: 'chem9-1m-9', text: 'What are \'simple\' and \'mixed\' amines? Give one example each.', category: '1-mark', topicId: '9-2-classification-amines' },
  { id: 'chem9-1m-10', text: 'Classify the following as primary, secondary or tertiary: (i) (CH₃)₂CHNH₂ (ii) (C₂H₅)₂NH (iii) CH₃N(CH₃)₂.', category: '1-mark', topicId: '9-2-classification-amines' },
  { id: 'chem9-1m-11', text: 'Classify each of the following: (i) naphthalen-2-amine (ii) N,N-dimethylaniline (iii) (C₂H₅)₂CHNH₂ (iv) (C₂H₅)₂NH. [NCERT Intext 9.1]', category: '1-mark', topicId: '9-2-classification-amines' },

  // 9.2 Classification - 2 Mark
  { id: 'chem9-2m-4', text: 'Write structures of all isomeric amines with molecular formula C₄H₁₁N. Write their IUPAC names and indicate the type of isomerism. [NCERT Intext 9.2]', category: '2-mark', topicId: '9-2-classification-amines' },
  { id: 'chem9-2m-5', text: 'Write structures of different isomers of C₃H₉N and give their IUPAC names. Which of these will liberate N₂ gas on treatment with nitrous acid? [NCERT Intext 9.8]', category: '2-mark', topicId: '9-2-classification-amines' },

  // 9.3 Nomenclature - 1 Mark
  { id: 'chem9-1m-12', text: 'How are aliphatic amines named in the common system?', category: '1-mark', topicId: '9-3-nomenclature-amines' },
  { id: 'chem9-1m-13', text: 'What suffix is used in IUPAC names for primary amines?', category: '1-mark', topicId: '9-3-nomenclature-amines' },
  { id: 'chem9-1m-14', text: 'Give the IUPAC name of CH₃NH₂.', category: '1-mark', topicId: '9-3-nomenclature-amines' },
  { id: 'chem9-1m-15', text: 'Give the IUPAC name of H₂N–CH₂–CH₂–NH₂.', category: '1-mark', topicId: '9-3-nomenclature-amines' },
  { id: 'chem9-1m-16', text: 'What locant is used to designate substituents on nitrogen in secondary/tertiary amines?', category: '1-mark', topicId: '9-3-nomenclature-amines' },
  { id: 'chem9-1m-17', text: 'Give the IUPAC name of CH₃NHCH₂CH₃.', category: '1-mark', topicId: '9-3-nomenclature-amines' },
  { id: 'chem9-1m-18', text: 'Give the IUPAC name of (CH₃CH₂)₃N.', category: '1-mark', topicId: '9-3-nomenclature-amines' },
  { id: 'chem9-1m-19', text: 'What is the common name of C₆H₅NH₂? What is its IUPAC name?', category: '1-mark', topicId: '9-3-nomenclature-amines' },
  { id: 'chem9-1m-20', text: 'How is C₆H₅NH₂ named in the IUPAC system as an arene derivative?', category: '1-mark', topicId: '9-3-nomenclature-amines' },
  { id: 'chem9-1m-21', text: 'Give the IUPAC name of N,N-Dimethylaniline.', category: '1-mark', topicId: '9-3-nomenclature-amines' },

  // 9.3 Nomenclature - 2 Mark
  { id: 'chem9-2m-6', text: 'Write IUPAC names of the following and classify them as primary, secondary or tertiary: (i) (CH₃)₂CHNH₂ (ii) CH₃(CH₂)₂NH₂ (iii) CH₃NHCH(CH₃)₂ (iv) (CH₃)₃CNH₂ (v) C₆H₅NHCH₃ (vi) (CH₃CH₂)₂NCH₃ (vii) m-BrC₆H₄NH₂. [NCERT Ex 9.1]', category: '2-mark', topicId: '9-3-nomenclature-amines' },
  { id: 'chem9-2m-7', text: 'Name the following with common and IUPAC names: (i) Ethylmethylamine (ii) Trimethylamine (iii) N,N-Diethylbutylamine (iv) Allylamine (v) Hexamethylenediamine.', category: '2-mark', topicId: '9-3-nomenclature-amines' },

  // 9.4 Preparation - 1 Mark
  { id: 'chem9-1m-22', text: 'Name two catalysts used for reduction of nitro compounds to amines.', category: '1-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-1m-23', text: 'Why is iron scrap + HCl preferred for reduction of nitrobenzene?', category: '1-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-1m-24', text: 'What is ammonolysis of alkyl halides? Name the conditions used.', category: '1-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-1m-25', text: 'What is the order of reactivity of alkyl halides with amines?', category: '1-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-1m-26', text: 'What is the major disadvantage of ammonolysis in preparing amines?', category: '1-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-1m-27', text: 'How can primary amine be obtained as the major product in ammonolysis?', category: '1-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-1m-28', text: 'What reagent is used to reduce nitriles to primary amines?', category: '1-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-1m-29', text: 'Why is reduction of nitriles called \'ascent of amine series\'?', category: '1-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-1m-30', text: 'What is Gabriel phthalimide synthesis used for?', category: '1-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-1m-31', text: 'Why can\'t aromatic primary amines be prepared by Gabriel synthesis? [NCERT Ex 9.12]', category: '1-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-1m-32', text: 'What is Hoffmann bromamide (Hofmann\'s) degradation reaction?', category: '1-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-1m-33', text: 'How does the number of carbons in the amine compare with the amide in Hofmann reaction?', category: '1-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-1m-34', text: 'What reagents are used in the Hofmann bromamide reaction?', category: '1-mark', topicId: '9-4-preparation-amines' },

  // 9.4 Preparation - 2 Mark
  { id: 'chem9-2m-8', text: 'Write chemical equations for: (i) Reaction of ethanolic NH₃ with C₂H₅Cl (ii) Ammonolysis of benzyl chloride followed by reaction with 2 moles of CH₃Cl. [NCERT Example 9.1]', category: '2-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-2m-9', text: 'Write equations for: (i) CH₃CH₂Cl → CH₃CH₂CH₂NH₂ (ii) C₆H₅CH₂Cl → C₆H₅CH₂CH₂NH₂. [NCERT Example 9.2]', category: '2-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-2m-10', text: 'Write structures and IUPAC names of: (i) The amide which gives propanamine by Hofmann reaction. (ii) The amine produced by Hofmann degradation of benzamide. [NCERT Example 9.3]', category: '2-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-2m-11', text: 'Explain Gabriel phthalimide synthesis with the reaction sequence. Why is it preferred for making pure primary amines?', category: '2-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-2m-12', text: 'Write equations to show the preparation of aniline from: (i) nitrobenzene (ii) an amide by Hofmann reaction.', category: '2-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-2m-13', text: 'How will you convert: (i) Benzene into aniline (ii) Benzene into N,N-dimethylaniline (iii) Cl–(CH₂)₄–Cl into hexane-1,6-diamine? [NCERT Intext 9.3]', category: '2-mark', topicId: '9-4-preparation-amines' },

  // 9.4 Preparation - 3 Mark
  { id: 'chem9-3m-1', text: 'How will you convert: (i) Ethanoic acid into methanamine (ii) Hexanenitrile into 1-aminopentane (iii) Ethanamine into methanamine (iv) Ethanoic acid into propanoic acid (v) Methanamine into ethanamine (vi) Nitromethane into dimethylamine? [NCERT Ex 9.5 selected]', category: '3-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-3m-2', text: 'Accomplish the following conversions: (i) Nitrobenzene → benzoic acid (ii) Benzene → m-bromophenol (iii) Benzoic acid → aniline (iv) Benzamide → toluene (v) Aniline → benzyl alcohol. [NCERT Ex 9.8 selected]', category: '3-mark', topicId: '9-4-preparation-amines' },

  // 9.5 Physical Properties - 1 Mark
  { id: 'chem9-1m-35', text: 'What is the physical state and odour of lower aliphatic amines?', category: '1-mark', topicId: '9-5-physical-properties' },
  { id: 'chem9-1m-36', text: 'Why do aniline and other arylamines get coloured on storage?', category: '1-mark', topicId: '9-5-physical-properties' },
  { id: 'chem9-1m-37', text: 'Why are lower aliphatic amines soluble in water?', category: '1-mark', topicId: '9-5-physical-properties' },
  { id: 'chem9-1m-38', text: 'Why does the solubility of amines in water decrease with increasing molecular mass?', category: '1-mark', topicId: '9-5-physical-properties' },
  { id: 'chem9-1m-39', text: 'Compare the electronegativity of N (in amines) and O (in alcohols). Which forms stronger H-bonds?', category: '1-mark', topicId: '9-5-physical-properties' },
  { id: 'chem9-1m-40', text: 'State the order of boiling points of isomeric amines (primary, secondary, tertiary).', category: '1-mark', topicId: '9-5-physical-properties' },
  { id: 'chem9-1m-41', text: 'Why do tertiary amines have lower boiling points than primary amines of similar molecular mass?', category: '1-mark', topicId: '9-5-physical-properties' },
  { id: 'chem9-1m-42', text: 'In which organic solvents are amines soluble?', category: '1-mark', topicId: '9-5-physical-properties' },

  // 9.5 Physical Properties - 2 Mark
  { id: 'chem9-2m-14', text: 'Arrange in increasing order of boiling point: C₂H₅OH, (CH₃)₂NH, C₂H₅NH₂. [NCERT Ex 9.4(v)]', category: '2-mark', topicId: '9-5-physical-properties' },
  { id: 'chem9-2m-15', text: 'Arrange in increasing order of solubility in water: C₆H₅NH₂, (C₂H₅)₂NH, C₂H₅NH₂. [NCERT Ex 9.4(vi)]', category: '2-mark', topicId: '9-5-physical-properties' },
  { id: 'chem9-2m-16', text: 'Explain why primary amines have higher boiling points than tertiary amines of similar molecular mass. [NCERT Ex 9.14(ii)]', category: '2-mark', topicId: '9-5-physical-properties' },
  { id: 'chem9-2m-17', text: 'Why are amines less acidic than alcohols of comparable molecular masses? [NCERT Ex 9.14(i)]', category: '2-mark', topicId: '9-5-physical-properties' },
  { id: 'chem9-2m-18', text: 'Between butan-1-ol and butan-1-amine, which is more soluble in water? Give reason.', category: '2-mark', topicId: '9-5-physical-properties' },

  // 9.6.1 Basic Character - 1 Mark
  { id: 'chem9-1m-43', text: 'Why are amines basic in nature?', category: '1-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-1m-44', text: 'Define Kb and pKb of an amine. What does a smaller pKb indicate?', category: '1-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-1m-45', text: 'What is the pKb of ammonia? Are aliphatic amines stronger or weaker bases than ammonia?', category: '1-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-1m-46', text: 'Why are aliphatic amines stronger bases than ammonia?', category: '1-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-1m-47', text: 'What is the order of basicity of amines in the gas phase?', category: '1-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-1m-48', text: 'Why is the order of basicity irregular in the aqueous phase compared to gas phase?', category: '1-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-1m-49', text: 'Why are aromatic amines weaker bases than ammonia?', category: '1-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-1m-50', text: 'The pKb of aniline is 9.38 whereas that of methylamine is 3.38. Account for this difference.', category: '1-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-1m-51', text: 'How do electron-withdrawing groups affect the basic strength of aniline? Give one example.', category: '1-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-1m-52', text: 'How do electron-donating groups affect the basic strength of aniline? Give one example.', category: '1-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-1m-53', text: 'What is the order of basicity: (CH₃)₂NH, CH₃NH₂, (CH₃)₃N, NH₃ in aqueous solution?', category: '1-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-1m-54', text: 'What is the order of basicity: (C₂H₅)₂NH, C₂H₅NH₂, (C₂H₅)₃N, NH₃ in aqueous solution?', category: '1-mark', topicId: '9-6-1-basic-character' },

  // 9.6.1 Basic Character - 2 Mark
  { id: 'chem9-2m-19', text: 'Arrange in decreasing order of basic strength: C₆H₅NH₂, C₂H₅NH₂, (C₂H₅)₂NH, NH₃. [NCERT Example 9.4]', category: '2-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-2m-20', text: 'Arrange in increasing order of basic strength: (i) C₂H₅NH₂, C₆H₅NH₂, NH₃, C₆H₅CH₂NH₂, (C₂H₅)₂NH (ii) C₂H₅NH₂, (C₂H₅)₂NH, (C₂H₅)₃N, C₆H₅NH₂ (iii) CH₃NH₂, (CH₃)₂NH, (CH₃)₃N, C₆H₅NH₂, C₆H₅CH₂NH₂. [NCERT Intext 9.4]', category: '2-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-2m-21', text: 'Arrange in decreasing order of pKb: C₂H₅NH₂, C₆H₅NHCH₃, (C₂H₅)₂NH, C₆H₅NH₂. [NCERT Ex 9.4(i)]', category: '2-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-2m-22', text: 'Arrange in increasing order of basic strength: C₆H₅NH₂, C₆H₅N(CH₃)₂, (C₂H₅)₂NH, CH₃NH₂. [NCERT Ex 9.4(ii)]', category: '2-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-2m-23', text: 'Arrange in increasing order of basic strength: (a) Aniline, p-nitroaniline, p-toluidine (b) C₆H₅NH₂, C₆H₅NHCH₃, C₆H₅CH₂NH₂. [NCERT Ex 9.4(iii)]', category: '2-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-2m-24', text: 'Arrange in decreasing order of basic strength in gas phase: C₂H₅NH₂, (C₂H₅)₂NH, (C₂H₅)₃N, NH₃. [NCERT Ex 9.4(iv)]', category: '2-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-2m-25', text: 'Why are aliphatic amines stronger bases than aromatic amines? [NCERT Ex 9.14(iii)]', category: '2-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-2m-26', text: 'Explain the solvation effect and steric effect in determining basicity of aliphatic amines in aqueous solution.', category: '2-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-2m-27', text: 'Explain with resonance why aniline is a weaker base than methylamine. Draw the five resonance structures of aniline.', category: '2-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-2m-28', text: 'Complete the acid-base reactions and name products: (i) CH₃CH₂CH₂NH₂ + HCl → (ii) (C₂H₅)₃N + HCl → [NCERT Intext 9.5]', category: '2-mark', topicId: '9-6-1-basic-character' },

  // 9.6.2 Alkylation - 1 Mark
  { id: 'chem9-1m-55', text: 'What is alkylation of amines? What reagent is used?', category: '1-mark', topicId: '9-6-2-alkylation' },
  { id: 'chem9-1m-56', text: 'What is the final product when aniline is treated with excess methyl iodide?', category: '1-mark', topicId: '9-6-2-alkylation' },

  // 9.6.2 Alkylation - 2 Mark
  { id: 'chem9-2m-29', text: 'Write reactions of the final alkylation product of aniline with excess methyl iodide in the presence of sodium carbonate solution. [NCERT Intext 9.6]', category: '2-mark', topicId: '9-6-2-alkylation' },
  { id: 'chem9-2m-30', text: 'Write chemical equations to show the step-wise alkylation of ethylamine with chloroethane. Name all products formed.', category: '2-mark', topicId: '9-6-2-alkylation' },

  // 9.6.3 Acylation - 1 Mark
  { id: 'chem9-1m-57', text: 'What is acylation of amines? Name the products formed.', category: '1-mark', topicId: '9-6-3-acylation' },
  { id: 'chem9-1m-58', text: 'What is the role of pyridine in the acylation reaction?', category: '1-mark', topicId: '9-6-3-acylation' },
  { id: 'chem9-1m-59', text: 'What is benzoylation? Give the reaction of methanamine with benzoyl chloride.', category: '1-mark', topicId: '9-6-3-acylation' },
  { id: 'chem9-1m-60', text: 'Which amines undergo acylation — primary, secondary, or tertiary?', category: '1-mark', topicId: '9-6-3-acylation' },

  // 9.6.3 Acylation - 2 Mark
  { id: 'chem9-2m-31', text: 'Write the reaction of ethanamine with: (a) acetyl chloride (b) acetic anhydride (c) benzoyl chloride. Name the products.', category: '2-mark', topicId: '9-6-3-acylation' },
  { id: 'chem9-2m-32', text: 'Write the reaction of aniline with ethanoic anhydride. Name the product. [NCERT Intext 9.7 related]', category: '2-mark', topicId: '9-6-3-acylation' },
  { id: 'chem9-2m-33', text: 'Write chemical reaction of aniline with benzoyl chloride and write the name of the product. [NCERT Intext 9.7]', category: '2-mark', topicId: '9-6-3-acylation' },

  // 9.6.4 Carbylamine - 1 Mark
  { id: 'chem9-1m-61', text: 'State the carbylamine reaction. What are carbylamines?', category: '1-mark', topicId: '9-6-4-carbylamine' },
  { id: 'chem9-1m-62', text: 'Which class of amines gives a positive carbylamine test?', category: '1-mark', topicId: '9-6-4-carbylamine' },
  { id: 'chem9-1m-63', text: 'What reagents are used in the carbylamine reaction?', category: '1-mark', topicId: '9-6-4-carbylamine' },
  { id: 'chem9-1m-64', text: 'How is carbylamine reaction used as a test for primary amines?', category: '1-mark', topicId: '9-6-4-carbylamine' },
  { id: 'chem9-1m-65', text: 'Why do secondary and tertiary amines not give carbylamine reaction?', category: '1-mark', topicId: '9-6-4-carbylamine' },

  // 9.6.4 Carbylamine - 2 Mark
  { id: 'chem9-2m-34', text: 'Write the carbylamine reaction of aniline. What does a positive test indicate? [NCERT Ex 9.11(i)]', category: '2-mark', topicId: '9-6-4-carbylamine' },
  { id: 'chem9-2m-35', text: 'Give one chemical test to distinguish between: (i) methylamine and dimethylamine (ii) secondary and tertiary amines. [NCERT Ex 9.2(i)(ii)]', category: '2-mark', topicId: '9-6-4-carbylamine' },

  // 9.6.5 Nitrous Acid - 1 Mark
  { id: 'chem9-1m-66', text: 'How is nitrous acid prepared in situ for reactions with amines?', category: '1-mark', topicId: '9-6-5-nitrous-acid' },
  { id: 'chem9-1m-67', text: 'What product is formed when a primary aliphatic amine reacts with nitrous acid?', category: '1-mark', topicId: '9-6-5-nitrous-acid' },
  { id: 'chem9-1m-68', text: 'Why are aliphatic diazonium salts unstable? What do they decompose into?', category: '1-mark', topicId: '9-6-5-nitrous-acid' },
  { id: 'chem9-1m-69', text: 'What is the significance of quantitative evolution of N₂ from aliphatic diazonium salts?', category: '1-mark', topicId: '9-6-5-nitrous-acid' },
  { id: 'chem9-1m-70', text: 'At what temperature do aromatic amines react with nitrous acid to form diazonium salts?', category: '1-mark', topicId: '9-6-5-nitrous-acid' },
  { id: 'chem9-1m-71', text: 'What is diazotisation?', category: '1-mark', topicId: '9-6-5-nitrous-acid' },

  // 9.6.5 Nitrous Acid - 2 Mark
  { id: 'chem9-2m-36', text: 'Write the reactions of (i) aromatic and (ii) aliphatic primary amines with nitrous acid. [NCERT Ex 9.13]', category: '2-mark', topicId: '9-6-5-nitrous-acid' },
  { id: 'chem9-2m-37', text: 'Give one chemical test to distinguish: (i) ethylamine and aniline (ii) aniline and benzylamine. [NCERT Ex 9.2(iii)(iv)]', category: '2-mark', topicId: '9-6-5-nitrous-acid' },
  { id: 'chem9-2m-38', text: 'Write structures of isomers of C₃H₉N that will liberate N₂ gas with nitrous acid. [NCERT Intext 9.8]', category: '2-mark', topicId: '9-6-5-nitrous-acid' },

  // 9.6.6 Hinsberg Test - 1 Mark
  { id: 'chem9-1m-72', text: 'What is Hinsberg\'s reagent?', category: '1-mark', topicId: '9-6-6-hinsberg-test' },
  { id: 'chem9-1m-73', text: 'What product is formed when a primary amine reacts with benzenesulphonyl chloride?', category: '1-mark', topicId: '9-6-6-hinsberg-test' },
  { id: 'chem9-1m-74', text: 'Why is the sulphonamide from a primary amine soluble in alkali?', category: '1-mark', topicId: '9-6-6-hinsberg-test' },
  { id: 'chem9-1m-75', text: 'Why is the sulphonamide from a secondary amine insoluble in alkali?', category: '1-mark', topicId: '9-6-6-hinsberg-test' },
  { id: 'chem9-1m-76', text: 'Why do tertiary amines not react with benzenesulphonyl chloride?', category: '1-mark', topicId: '9-6-6-hinsberg-test' },
  { id: 'chem9-1m-77', text: 'How is Hinsberg\'s test used to distinguish primary, secondary and tertiary amines?', category: '1-mark', topicId: '9-6-6-hinsberg-test' },

  // 9.6.6 Hinsberg Test - 2 Mark
  { id: 'chem9-2m-39', text: 'Write the reactions of ethanamine (primary), diethylamine (secondary) and triethylamine (tertiary) with benzenesulphonyl chloride. State which product is soluble in alkali.', category: '2-mark', topicId: '9-6-6-hinsberg-test' },
  { id: 'chem9-2m-40', text: 'Describe a method for identification of primary, secondary and tertiary amines. Write chemical equations. [NCERT Ex 9.6]', category: '2-mark', topicId: '9-6-6-hinsberg-test' },
  { id: 'chem9-2m-41', text: 'Give one chemical test to distinguish aniline from N-methylaniline. [NCERT Ex 9.2(v)]', category: '2-mark', topicId: '9-6-6-hinsberg-test' },

  // 9.6.7 Electrophilic Substitution - 1 Mark
  { id: 'chem9-1m-78', text: 'The –NH₂ group is ortho and para directing. Explain why.', category: '1-mark', topicId: '9-6-7-electrophilic-substitution' },
  { id: 'chem9-1m-79', text: 'What white precipitate is formed when aniline reacts with bromine water?', category: '1-mark', topicId: '9-6-7-electrophilic-substitution' },
  { id: 'chem9-1m-80', text: 'Why is direct bromination of aniline difficult to control?', category: '1-mark', topicId: '9-6-7-electrophilic-substitution' },
  { id: 'chem9-1m-81', text: 'How is the –NH₂ group \'protected\' before carrying out monobromination of aniline?', category: '1-mark', topicId: '9-6-7-electrophilic-substitution' },
  { id: 'chem9-1m-82', text: 'Why does acetylation reduce the activating effect of –NH₂ group?', category: '1-mark', topicId: '9-6-7-electrophilic-substitution' },
  { id: 'chem9-1m-83', text: 'Why does direct nitration of aniline give a mixture of ortho, para and meta products?', category: '1-mark', topicId: '9-6-7-electrophilic-substitution' },
  { id: 'chem9-1m-84', text: 'How is p-nitroaniline obtained as the major product of nitration?', category: '1-mark', topicId: '9-6-7-electrophilic-substitution' },
  { id: 'chem9-1m-85', text: 'What is sulphanilic acid? How is it formed from aniline?', category: '1-mark', topicId: '9-6-7-electrophilic-substitution' },
  { id: 'chem9-1m-86', text: 'Why does aniline not undergo Friedel-Crafts reaction?', category: '1-mark', topicId: '9-6-7-electrophilic-substitution' },

  // 9.6.7 Electrophilic Substitution - 2 Mark
  { id: 'chem9-2m-42', text: 'Write the reaction of aniline with Br₂/H₂O. Name the product and explain why tribromination occurs.', category: '2-mark', topicId: '9-6-7-electrophilic-substitution' },
  { id: 'chem9-2m-43', text: 'Explain how p-bromoaniline can be prepared from aniline. Why must the –NH₂ group be protected? Show reaction steps.', category: '2-mark', topicId: '9-6-7-electrophilic-substitution' },
  { id: 'chem9-2m-44', text: 'Write the reactions to obtain p-nitroaniline from aniline using acetylation as protection. [NCERT Ex 9.11(iii) related]', category: '2-mark', topicId: '9-6-7-electrophilic-substitution' },
  { id: 'chem9-2m-45', text: 'Explain sulphonation of aniline. What product is obtained? Write the reaction and give its common name.', category: '2-mark', topicId: '9-6-7-electrophilic-substitution' },
  { id: 'chem9-2m-46', text: 'Account for: (i) Although –NH₂ is o,p-directing, aniline on nitration gives substantial m-nitroaniline. (ii) Aniline does not undergo Friedel-Crafts reaction. [NCERT Ex 9.3(iv)(v)]', category: '2-mark', topicId: '9-6-7-electrophilic-substitution' },
  { id: 'chem9-2m-47', text: 'Complete the following reactions: (i) C₆H₅NH₂ + CHCl₃ + alc.KOH → (ii) C₆H₅NH₂ + Br₂(aq) → (iii) C₆H₅NH₂ + (CH₃CO)₂O → [NCERT Ex 9.11(i)(v)(vi)]', category: '2-mark', topicId: '9-6-7-electrophilic-substitution' },

  // 9.7 Diazonium Preparation - 1 Mark
  { id: 'chem9-1m-87', text: 'Write the general formula of a diazonium salt. What is the diazonium group called?', category: '1-mark', topicId: '9-7-diazonium-preparation' },
  { id: 'chem9-1m-88', text: 'Name C₆H₅N₂⁺Cl⁻ and C₆H₅N₂⁺HSO₄⁻.', category: '1-mark', topicId: '9-7-diazonium-preparation' },
  { id: 'chem9-1m-89', text: 'How are diazonium salts named according to IUPAC system?', category: '1-mark', topicId: '9-7-diazonium-preparation' },
  { id: 'chem9-1m-90', text: 'What is diazotisation? Write the reaction for preparation of benzenediazonium chloride.', category: '1-mark', topicId: '9-7-diazonium-preparation' },
  { id: 'chem9-1m-91', text: 'At what temperature is benzenediazonium chloride prepared? Why must this temperature be maintained?', category: '1-mark', topicId: '9-7-diazonium-preparation' },
  { id: 'chem9-1m-92', text: 'Why are aliphatic diazonium salts unstable but aromatic ones are stable at low temperatures?', category: '1-mark', topicId: '9-7-diazonium-preparation' },
  { id: 'chem9-1m-93', text: 'Explain the stability of arenediazonium ion on the basis of resonance.', category: '1-mark', topicId: '9-7-diazonium-preparation' },
  { id: 'chem9-1m-94', text: 'Why is the diazonium salt not stored but used immediately?', category: '1-mark', topicId: '9-7-diazonium-preparation' },

  // 9.7 Diazonium Preparation - 2 Mark
  { id: 'chem9-2m-48', text: 'Write the reaction for the preparation of benzenediazonium chloride from aniline. State the conditions and explain the term diazotisation.', category: '2-mark', topicId: '9-7-diazonium-preparation' },
  { id: 'chem9-2m-49', text: 'Compare the stability of aryl diazonium salts with alkyl diazonium salts and explain. [NCERT Ex 9.3(vi)]', category: '2-mark', topicId: '9-7-diazonium-preparation' },

  // 9.8 Diazonium Physical Properties - 1 Mark
  { id: 'chem9-1m-95', text: 'Describe the physical appearance of benzenediazonium chloride.', category: '1-mark', topicId: '9-8-diazonium-physical' },
  { id: 'chem9-1m-96', text: 'Is benzenediazonium chloride soluble in water?', category: '1-mark', topicId: '9-8-diazonium-physical' },
  { id: 'chem9-1m-97', text: 'What happens when benzenediazonium chloride is warmed with water?', category: '1-mark', topicId: '9-8-diazonium-physical' },
  { id: 'chem9-1m-98', text: 'Which diazonium salt is water-insoluble and stable at room temperature?', category: '1-mark', topicId: '9-8-diazonium-physical' },

  // 9.9 Diazonium Reactions - 1 Mark
  { id: 'chem9-1m-99', text: 'Into how many categories are reactions of diazonium salts broadly divided?', category: '1-mark', topicId: '9-9-diazonium-reactions' },
  { id: 'chem9-1m-100', text: 'What is the Sandmeyer reaction?', category: '1-mark', topicId: '9-9-diazonium-reactions' },
  { id: 'chem9-1m-101', text: 'What is the Gatterman reaction (diazonium salt version)?', category: '1-mark', topicId: '9-9-diazonium-reactions' },
  { id: 'chem9-1m-102', text: 'Which reaction gives better yield — Sandmeyer or Gattermann? Why?', category: '1-mark', topicId: '9-9-diazonium-reactions' },
  { id: 'chem9-1m-103', text: 'How is iodobenzene prepared from benzenediazonium chloride?', category: '1-mark', topicId: '9-9-diazonium-reactions' },
  { id: 'chem9-1m-104', text: 'How is arylfluoride prepared from a diazonium salt? Name the reaction steps.', category: '1-mark', topicId: '9-9-diazonium-reactions' },
  { id: 'chem9-1m-105', text: 'How is the diazonium group replaced by H? Name the reducing agents used.', category: '1-mark', topicId: '9-9-diazonium-reactions' },
  { id: 'chem9-1m-106', text: 'How is phenol prepared from benzenediazonium chloride?', category: '1-mark', topicId: '9-9-diazonium-reactions' },
  { id: 'chem9-1m-107', text: 'How is a –NO₂ group introduced via diazonium salt?', category: '1-mark', topicId: '9-9-diazonium-reactions' },
  { id: 'chem9-1m-108', text: 'What is a coupling reaction of diazonium salts? What type of reaction is it?', category: '1-mark', topicId: '9-9-diazonium-reactions' },
  { id: 'chem9-1m-109', text: 'What coloured compound is formed when benzenediazonium chloride couples with phenol?', category: '1-mark', topicId: '9-9-diazonium-reactions' },
  { id: 'chem9-1m-110', text: 'What product is formed when benzenediazonium chloride couples with aniline?', category: '1-mark', topicId: '9-9-diazonium-reactions' },
  { id: 'chem9-1m-111', text: 'What is an azo dye? Name two azo dyes formed in coupling reactions.', category: '1-mark', topicId: '9-9-diazonium-reactions' },

  // 9.9 Diazonium Reactions - 2 Mark
  { id: 'chem9-2m-50', text: 'Write the reactions for Sandmeyer reaction (replacement by Cl⁻, Br⁻, CN⁻) from benzenediazonium chloride.', category: '2-mark', topicId: '9-9-diazonium-reactions' },
  { id: 'chem9-2m-51', text: 'Compare Sandmeyer and Gattermann reactions. Write reactions for both with benzenediazonium chloride.', category: '2-mark', topicId: '9-9-diazonium-reactions' },
  { id: 'chem9-2m-52', text: 'Write equations for: (i) Replacement by iodide (ii) Replacement by fluoride (iii) Replacement by –OH (iv) Replacement by –H. [NCERT Ex 9.11(ii)(iv)]', category: '2-mark', topicId: '9-9-diazonium-reactions' },
  { id: 'chem9-2m-53', text: 'Write the coupling reactions of benzenediazonium chloride with (a) phenol in alkaline medium (b) aniline in acidic medium. Name the products.', category: '2-mark', topicId: '9-9-diazonium-reactions' },
  { id: 'chem9-2m-54', text: 'Complete the following: (i) C₆H₅N₂Cl + H₃PO₂ + H₂O → (ii) C₆H₅N₂Cl + C₂H₅OH → (iii) C₆H₅N₂Cl + (i)HBF₄, (ii)NaNO₂/Cu,Δ → [NCERT Ex 9.11(ii)(iv)(vii)]', category: '2-mark', topicId: '9-9-diazonium-reactions' },

  // 9.10 Diazonium Synthesis - 1 Mark
  { id: 'chem9-1m-112', text: 'List four groups that can be introduced into an aromatic ring via diazonium salts.', category: '1-mark', topicId: '9-10-diazonium-synthesis' },
  { id: 'chem9-1m-113', text: 'Why can aryl fluorides and iodides not be prepared by direct halogenation?', category: '1-mark', topicId: '9-10-diazonium-synthesis' },
  { id: 'chem9-1m-114', text: 'Why is the diazonium route preferred to introduce –CN into an aromatic ring?', category: '1-mark', topicId: '9-10-diazonium-synthesis' },
  { id: 'chem9-1m-115', text: 'What is the commercial importance of coupling reactions of diazonium salts?', category: '1-mark', topicId: '9-10-diazonium-synthesis' },

  // 9.10 Diazonium Synthesis - 2 Mark
  { id: 'chem9-2m-55', text: 'How will you convert 4-nitrotoluene to 2-bromobenzoic acid? Show all steps. [NCERT Example 9.5]', category: '2-mark', topicId: '9-10-diazonium-synthesis' },
  { id: 'chem9-2m-56', text: 'Convert: (i) 3-Methylaniline into 3-nitrotoluene (ii) Aniline into 1,3,5-tribromobenzene. [NCERT Intext 9.9]', category: '2-mark', topicId: '9-10-diazonium-synthesis' },
  { id: 'chem9-2m-57', text: 'Give the structures of A, B, C in the following: (i) C₆H₅N₂Cl → (CuCN) A → (H₂O/H⁺) B → (NH₃/Δ) C (ii) C₆H₅NO₂ → (Fe/HCl) A → (NaNO₂+HCl/273K) B → (H₂O/H⁺/Δ) C. [NCERT Ex 9.9 ii & iv]', category: '2-mark', topicId: '9-10-diazonium-synthesis' },

  // HOTS & Conversions - 3-5 Mark
  { id: 'chem9-5m-1', text: 'Account for the following: (i) pKb of aniline is more than that of methylamine. (ii) Ethylamine is soluble in water whereas aniline is not. (iii) Methylamine in water reacts with FeCl₃ to precipitate hydrated ferric oxide. (iv) Although –NH₂ is o,p-directing, aniline gives substantial m-nitroaniline. (v) Aniline does not undergo Friedel-Crafts reaction. (vi) Diazonium salts of aromatic amines are more stable than aliphatic amines. (vii) Gabriel phthalimide synthesis is preferred for primary amines. [NCERT Ex 9.3]', category: '5-mark', topicId: '9-6-1-basic-character' },
  { id: 'chem9-5m-2', text: 'Write short notes on: (i) Carbylamine reaction (ii) Diazotisation (iii) Hofmann\'s bromamide reaction (iv) Coupling reaction (v) Ammonolysis (vi) Acetylation (vii) Gabriel phthalimide synthesis. [NCERT Ex 9.7]', category: '5-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-5m-3', text: 'Give the structures of A, B and C in the following reactions: (i) CH₃CH₂I →(NaCN) A →(OH⁻/partial hydrolysis) B →(NaOH+Br₂) C (ii) CH₃CH₂Br →(KCN) A →(LiAlH₄) B →(HNO₂/0°C) C (iii) CH₃COOH →(NH₃/Δ) A →(NaOBr) B →(NaNO₂/HCl) C (iv) C₆H₅NO₂ →(Fe/HCl) A →(HNO₂/273K) B →(C₆H₅OH) C. [NCERT Ex 9.9 selected]', category: '5-mark', topicId: '9-9-diazonium-reactions' },
  { id: 'chem9-5m-4', text: 'Accomplish the following conversions: (i) Aniline → 2,4,6-tribromofluorobenzene (ii) Benzyl chloride → 2-phenylethanamine (iii) Chlorobenzene → p-chloroaniline (iv) Aniline → p-bromoaniline. [NCERT Ex 9.8 selected]', category: '5-mark', topicId: '9-10-diazonium-synthesis' },
  { id: 'chem9-5m-5', text: 'An aromatic compound \'A\' on treatment with aqueous ammonia and heating forms compound \'B\' which on heating with Br₂ and KOH forms compound \'C\' of molecular formula C₆H₇N. Write the structures and IUPAC names of A, B, and C. [NCERT Ex 9.10]', category: '5-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-5m-6', text: 'How will you convert: (i) Hexanenitrile into 1-aminopentane (ii) Ethanamine into methanamine (iii) Nitromethane into dimethylamine (iv) Propanoic acid into ethanoic acid? [NCERT Ex 9.5]', category: '5-mark', topicId: '9-4-preparation-amines' },
  { id: 'chem9-5m-7', text: 'Give one chemical test to distinguish between: (i) methylamine and dimethylamine (ii) secondary and tertiary amines (iii) ethylamine and aniline (iv) aniline and benzylamine (v) aniline and N-methylaniline. [NCERT Ex 9.2]', category: '5-mark', topicId: '9-6-6-hinsberg-test' },

  // Case-Based Questions
  { id: 'chem9-case-1', text: 'Case Study: Aniline (C₆H₅NH₂) is an important aromatic amine used in dye industry. It is prepared from nitrobenzene by reduction with Fe/HCl. When aniline reacts with bromine water, it gives a white precipitate X. When aniline is treated with acetyl chloride, it gives compound Y which on nitration followed by hydrolysis gives compound Z.\n(a) Identify X, Y, Z with structures.\n(b) Why does aniline give tribrominated product with Br₂/H₂O?\n(c) Why is acetylation done before nitration?\n(d) Why is aniline a weaker base than methylamine?\n(e) Write the reaction of aniline with HCl.', category: 'case-study', topicId: '9-6-7-electrophilic-substitution' },
  { id: 'chem9-case-2', text: 'Case Study: Benzenediazonium chloride (C₆H₅N₂⁺Cl⁻) is prepared by treating aniline with NaNO₂ and HCl at 273-278 K. It undergoes Sandmeyer reaction with Cu₂Cl₂/HCl to give chlorobenzene P. It couples with phenol in alkaline medium to give an orange dye Q. When heated with water, it gives phenol R.\n(a) Name the preparation reaction of diazonium salt.\n(b) Write the equation for Sandmeyer reaction.\n(c) Why must the temperature be maintained below 278 K?\n(d) Name compound Q and write its structure.\n(e) Why are aryl diazonium salts more stable than alkyl diazonium salts?', category: 'case-study', topicId: '9-9-diazonium-reactions' },
  { id: 'chem9-case-3', text: 'Case Study: Amines can be distinguished using Hinsberg\'s test. When a primary amine reacts with benzenesulphonyl chloride (C₆H₅SO₂Cl) in presence of alkali, it forms a sulphonamide A which dissolves in NaOH. A secondary amine forms sulphonamide B which is insoluble in NaOH. Tertiary amines do not react.\n(a) Why is the sulphonamide from primary amine soluble in alkali?\n(b) Why is the sulphonamide from secondary amine insoluble in alkali?\n(c) Write the reaction of ethylamine with Hinsberg\'s reagent.\n(d) How will you distinguish aniline from N-methylaniline using this test?\n(e) Why don\'t tertiary amines react with benzenesulphonyl chloride?', category: 'case-study', topicId: '9-6-6-hinsberg-test' },
];

// Unit 10: Biomolecules
const unit10Questions: Question[] = [
  // 10.1 Carbohydrates - 1 Mark
  { id: 'chem10-1m-1', text: 'What is the chemical definition of carbohydrates?', category: '1-mark', topicId: '10-1-carbohydrates' },
  { id: 'chem10-1m-2', text: 'Why are carbohydrates also called saccharides?', category: '1-mark', topicId: '10-1-carbohydrates' },
  { id: 'chem10-1m-3', text: 'Give the general molecular formula of carbohydrates. Give one example that fits but is NOT a carbohydrate.', category: '1-mark', topicId: '10-1-carbohydrates' },
  { id: 'chem10-1m-4', text: 'Why is rhamnose (C₆H₁₂O₅) classified as a carbohydrate even though it does not fit the general formula?', category: '1-mark', topicId: '10-1-carbohydrates' },
  { id: 'chem10-1m-5', text: 'What functional groups are present in carbohydrates?', category: '1-mark', topicId: '10-1-carbohydrates' },
  { id: 'chem10-1m-6', text: 'What are reducing sugars? Give the test used to identify them.', category: '1-mark', topicId: '10-1-carbohydrates' },
  { id: 'chem10-1m-7', text: 'All monosaccharides are reducing sugars — true or false? Justify.', category: '1-mark', topicId: '10-1-carbohydrates' },

  // 10.1 Carbohydrates - 2 Mark
  { id: 'chem10-2m-1', text: 'Explain why glucose or sucrose are soluble in water but cyclohexane or benzene are not. [NCERT Intext 10.1]', category: '2-mark', topicId: '10-1-carbohydrates' },
  { id: 'chem10-2m-2', text: 'Define carbohydrates. Why are some carbohydrates called non-sugars?', category: '2-mark', topicId: '10-1-carbohydrates' },
  { id: 'chem10-2m-3', text: 'Classify carbohydrates based on hydrolysis behaviour. Give one example of each class.', category: '2-mark', topicId: '10-1-carbohydrates' },

  // 10.1.1 Classification - 1 Mark
  { id: 'chem10-1m-8', text: 'Define monosaccharides. Give two examples.', category: '1-mark', topicId: '10-1-1-classification' },
  { id: 'chem10-1m-9', text: 'Define oligosaccharides. What are disaccharides?', category: '1-mark', topicId: '10-1-1-classification' },
  { id: 'chem10-1m-10', text: 'Define polysaccharides. Give two examples.', category: '1-mark', topicId: '10-1-1-classification' },
  { id: 'chem10-1m-11', text: 'What products does sucrose give on hydrolysis?', category: '1-mark', topicId: '10-1-1-classification' },
  { id: 'chem10-1m-12', text: 'What products does maltose give on hydrolysis?', category: '1-mark', topicId: '10-1-1-classification' },
  { id: 'chem10-1m-13', text: 'What is an aldose? What is a ketose?', category: '1-mark', topicId: '10-1-1-classification' },
  { id: 'chem10-1m-14', text: 'Name a hexose that is an aldose and one that is a ketose.', category: '1-mark', topicId: '10-1-1-classification' },
  { id: 'chem10-1m-15', text: 'What type of monosaccharide is glucose? What type is fructose?', category: '1-mark', topicId: '10-1-1-classification' },
  { id: 'chem10-1m-16', text: 'What does the term \'pentose\' mean? Give one example.', category: '1-mark', topicId: '10-1-1-classification' },

  // 10.1.1 Classification - 2 Mark
  { id: 'chem10-2m-4', text: 'Classify the following into monosaccharides and disaccharides: Ribose, 2-deoxyribose, maltose, galactose, fructose and lactose. [NCERT Ex 10.4]', category: '2-mark', topicId: '10-1-1-classification' },
  { id: 'chem10-2m-5', text: 'Distinguish between reducing and non-reducing sugars with one example each.', category: '2-mark', topicId: '10-1-1-classification' },

  // 10.1.2 Glucose - 1 Mark
  { id: 'chem10-1m-17', text: 'How is glucose prepared from sucrose?', category: '1-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-1m-18', text: 'How is glucose commercially prepared from starch?', category: '1-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-1m-19', text: 'What is the molecular formula of glucose?', category: '1-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-1m-20', text: 'Glucose is an aldohexose. What does this mean?', category: '1-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-1m-21', text: 'What is glucose also known as, and why?', category: '1-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-1m-22', text: 'When glucose is heated with HI, what product is formed? What does this indicate?', category: '1-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-1m-23', text: 'What reaction of glucose with hydroxylamine confirms the presence of a carbonyl group?', category: '1-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-1m-24', text: 'What reaction with HCN supports the carbonyl group in glucose?', category: '1-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-1m-25', text: 'What is gluconic acid? How is it formed from glucose?', category: '1-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-1m-26', text: 'What does acetylation of glucose with acetic anhydride produce? What does it confirm?', category: '1-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-1m-27', text: 'What is saccharic acid? How is it formed?', category: '1-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-1m-28', text: 'What does oxidation with HNO₃ to give saccharic acid indicate about the structure of glucose?', category: '1-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-1m-29', text: 'What does \'D\' before glucose indicate? What does \'(+)\' indicate?', category: '1-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-1m-30', text: 'What is the reference compound used for D/L configuration of carbohydrates?', category: '1-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-1m-31', text: 'Which carbon of glucose is compared with glyceraldehyde for D/L assignment?', category: '1-mark', topicId: '10-1-2-glucose' },

  // 10.1.2 Glucose - 2 Mark
  { id: 'chem10-2m-6', text: 'Write the open chain structure of D-(+)-glucose and label all functional groups.', category: '2-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-2m-7', text: 'Give six experimental evidences used to determine the structure of glucose.', category: '2-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-2m-8', text: 'Why does glucose not give Schiff\'s test despite having an aldehydic group? [NCERT Ex 10.10]', category: '2-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-2m-9', text: 'Enumerate the reactions of D-glucose which cannot be explained by its open chain structure. [NCERT Ex 10.10]', category: '2-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-2m-10', text: 'Explain the cyclic (hemiacetal) structure of glucose. Which –OH group is involved? What ring is formed?', category: '2-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-2m-11', text: 'What are anomers? How do α and β forms of glucose differ? [NCERT Ex 10.10]', category: '2-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-2m-12', text: 'What is pyranose structure? Draw the Haworth structures of α-D-(+)-glucopyranose and β-D-(+)-glucopyranose.', category: '2-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-2m-13', text: 'What happens when D-glucose is treated with: (i) HI (ii) bromine water (iii) HNO₃? [NCERT Ex 10.9]', category: '2-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-2m-14', text: 'What is the anomeric carbon? Why do α and β forms of glucose have different melting points?', category: '2-mark', topicId: '10-1-2-glucose' },

  // 10.1.2 Fructose - 1 Mark
  { id: 'chem10-1m-32', text: 'What is the molecular formula of fructose?', category: '1-mark', topicId: '10-1-2-fructose' },
  { id: 'chem10-1m-33', text: 'Fructose is a ketohexose. What does this mean?', category: '1-mark', topicId: '10-1-2-fructose' },
  { id: 'chem10-1m-34', text: 'At which carbon is the keto group in fructose?', category: '1-mark', topicId: '10-1-2-fructose' },
  { id: 'chem10-1m-35', text: 'Fructose belongs to the D-series and is laevorotatory. How is it written?', category: '1-mark', topicId: '10-1-2-fructose' },
  { id: 'chem10-1m-36', text: 'What type of cyclic ring does fructose form? What is it named after?', category: '1-mark', topicId: '10-1-2-fructose' },
  { id: 'chem10-1m-37', text: 'How many carbon atoms and oxygen atoms are in a furan ring?', category: '1-mark', topicId: '10-1-2-fructose' },

  // 10.1.2 Fructose - 2 Mark
  { id: 'chem10-2m-15', text: 'Draw the open-chain structure of D-(–)-fructose and compare it with glucose.', category: '2-mark', topicId: '10-1-2-fructose' },
  { id: 'chem10-2m-16', text: 'Describe the cyclic structure of fructose. Draw the Haworth structures of α-D-(–)-fructofuranose and β-D-(–)-fructofuranose.', category: '2-mark', topicId: '10-1-2-fructose' },

  // 10.1.3 Disaccharides - 1 Mark
  { id: 'chem10-1m-38', text: 'What is a glycosidic linkage?', category: '1-mark', topicId: '10-1-3-disaccharides' },
  { id: 'chem10-1m-39', text: 'What monosaccharides does sucrose give on hydrolysis?', category: '1-mark', topicId: '10-1-3-disaccharides' },
  { id: 'chem10-1m-40', text: 'Which carbons are linked in the glycosidic bond of sucrose?', category: '1-mark', topicId: '10-1-3-disaccharides' },
  { id: 'chem10-1m-41', text: 'Why is sucrose a non-reducing sugar?', category: '1-mark', topicId: '10-1-3-disaccharides' },
  { id: 'chem10-1m-42', text: 'Sucrose is dextrorotatory. What happens to the sign of rotation after hydrolysis? What is the product called?', category: '1-mark', topicId: '10-1-3-disaccharides' },
  { id: 'chem10-1m-43', text: 'What is invert sugar?', category: '1-mark', topicId: '10-1-3-disaccharides' },
  { id: 'chem10-1m-44', text: 'What monosaccharides does maltose give on hydrolysis?', category: '1-mark', topicId: '10-1-3-disaccharides' },
  { id: 'chem10-1m-45', text: 'Describe the glycosidic linkage in maltose. Why is maltose a reducing sugar?', category: '1-mark', topicId: '10-1-3-disaccharides' },
  { id: 'chem10-1m-46', text: 'What is lactose commonly called? Which monosaccharides does it contain?', category: '1-mark', topicId: '10-1-3-disaccharides' },
  { id: 'chem10-1m-47', text: 'Describe the glycosidic linkage in lactose. Why is it a reducing sugar?', category: '1-mark', topicId: '10-1-3-disaccharides' },
  { id: 'chem10-1m-48', text: 'What are the expected products of hydrolysis of lactose? [NCERT Intext 10.2]', category: '1-mark', topicId: '10-1-3-disaccharides' },

  // 10.1.3 Disaccharides - 2 Mark
  { id: 'chem10-2m-17', text: 'Distinguish between reducing and non-reducing disaccharides with sucrose and maltose as examples.', category: '2-mark', topicId: '10-1-3-disaccharides' },
  { id: 'chem10-2m-18', text: 'Compare the glycosidic linkages in sucrose, maltose and lactose tabularly (carbons involved, type, reducing/non-reducing).', category: '2-mark', topicId: '10-1-3-disaccharides' },
  { id: 'chem10-2m-19', text: 'What do you understand by the term glycosidic linkage? [NCERT Ex 10.5]', category: '2-mark', topicId: '10-1-3-disaccharides' },
  { id: 'chem10-2m-20', text: 'What are the hydrolysis products of (i) sucrose and (ii) lactose? [NCERT Ex 10.7]', category: '2-mark', topicId: '10-1-3-disaccharides' },

  // 10.1.4 Polysaccharides - 1 Mark
  { id: 'chem10-1m-49', text: 'What is the main storage polysaccharide in plants?', category: '1-mark', topicId: '10-1-4-polysaccharides' },
  { id: 'chem10-1m-50', text: 'Name the two components of starch. Which is water soluble?', category: '1-mark', topicId: '10-1-4-polysaccharides' },
  { id: 'chem10-1m-51', text: 'What is the monomer of starch?', category: '1-mark', topicId: '10-1-4-polysaccharides' },
  { id: 'chem10-1m-52', text: 'What glycosidic linkage holds the chain together in amylose?', category: '1-mark', topicId: '10-1-4-polysaccharides' },
  { id: 'chem10-1m-53', text: 'What linkage causes branching in amylopectin?', category: '1-mark', topicId: '10-1-4-polysaccharides' },
  { id: 'chem10-1m-54', text: 'Cellulose is the most abundant organic substance in plant kingdom — True or False?', category: '1-mark', topicId: '10-1-4-polysaccharides' },
  { id: 'chem10-1m-55', text: 'What is the monomer of cellulose? What type of glycosidic linkage is present?', category: '1-mark', topicId: '10-1-4-polysaccharides' },
  { id: 'chem10-1m-56', text: 'Why cannot humans digest cellulose?', category: '1-mark', topicId: '10-1-4-polysaccharides' },
  { id: 'chem10-1m-57', text: 'What is glycogen? Where is it stored in the body?', category: '1-mark', topicId: '10-1-4-polysaccharides' },
  { id: 'chem10-1m-58', text: 'Why is glycogen called animal starch?', category: '1-mark', topicId: '10-1-4-polysaccharides' },
  { id: 'chem10-1m-59', text: 'What is the basic structural difference between starch and cellulose? [NCERT Ex 10.8]', category: '1-mark', topicId: '10-1-4-polysaccharides' },

  // 10.1.4 Polysaccharides - 2 Mark
  { id: 'chem10-2m-21', text: 'Compare amylose and amylopectin in terms of water solubility, structure and glycosidic linkages.', category: '2-mark', topicId: '10-1-4-polysaccharides' },
  { id: 'chem10-2m-22', text: 'What is glycogen? How is it different from starch? [NCERT Ex 10.6]', category: '2-mark', topicId: '10-1-4-polysaccharides' },
  { id: 'chem10-2m-23', text: 'Write two main functions of carbohydrates in plants. [NCERT Ex 10.3]', category: '2-mark', topicId: '10-1-4-polysaccharides' },
  { id: 'chem10-2m-24', text: 'What is the basic structural difference between starch and cellulose? [NCERT Ex 10.8]', category: '2-mark', topicId: '10-1-4-polysaccharides' },

  // 10.2.1 Amino Acids - 1 Mark
  { id: 'chem10-1m-60', text: 'What are proteins? From which Greek word is the name derived?', category: '1-mark', topicId: '10-2-1-amino-acids' },
  { id: 'chem10-1m-61', text: 'Name the monomers of proteins.', category: '1-mark', topicId: '10-2-1-amino-acids' },
  { id: 'chem10-1m-62', text: 'Give four chief sources of proteins.', category: '1-mark', topicId: '10-2-1-amino-acids' },
  { id: 'chem10-1m-63', text: 'What functional groups are present in an amino acid?', category: '1-mark', topicId: '10-2-1-amino-acids' },
  { id: 'chem10-1m-64', text: 'What type of amino acids are obtained on hydrolysis of proteins?', category: '1-mark', topicId: '10-2-1-amino-acids' },
  { id: 'chem10-1m-65', text: 'What is a zwitterion? How does it form in aqueous solution?', category: '1-mark', topicId: '10-2-1-amino-acids' },
  { id: 'chem10-1m-66', text: 'Why do amino acids behave like salts rather than simple amines or carboxylic acids?', category: '1-mark', topicId: '10-2-1-amino-acids' },
  { id: 'chem10-1m-67', text: 'Except glycine, all α-amino acids are optically active. Why?', category: '1-mark', topicId: '10-2-1-amino-acids' },
  { id: 'chem10-1m-68', text: 'What is the configuration of most naturally occurring amino acids — D or L?', category: '1-mark', topicId: '10-2-1-amino-acids' },
  { id: 'chem10-1m-69', text: 'How are L-amino acids represented structurally?', category: '1-mark', topicId: '10-2-1-amino-acids' },
  { id: 'chem10-1m-70', text: 'What are essential amino acids?', category: '1-mark', topicId: '10-2-1-amino-acids' },
  { id: 'chem10-1m-71', text: 'What are non-essential amino acids?', category: '1-mark', topicId: '10-2-1-amino-acids' },
  { id: 'chem10-1m-72', text: 'Name two essential amino acids.', category: '1-mark', topicId: '10-2-1-amino-acids' },
  { id: 'chem10-1m-73', text: 'Name two non-essential amino acids.', category: '1-mark', topicId: '10-2-1-amino-acids' },
  { id: 'chem10-1m-74', text: 'Why are the melting points and solubility in water of amino acids generally higher than halo acids? [NCERT Intext 10.4]', category: '1-mark', topicId: '10-2-1-amino-acids' },
  { id: 'chem10-1m-75', text: 'What is the 3-letter and 1-letter symbol for glycine and alanine?', category: '1-mark', topicId: '10-2-1-amino-acids' },
  { id: 'chem10-1m-76', text: 'Classify glycine, glutamic acid, and lysine as acidic, basic or neutral amino acids.', category: '1-mark', topicId: '10-2-1-amino-acids' },

  // 10.2.1 Amino Acids - 2 Mark
  { id: 'chem10-2m-25', text: 'Define essential and non-essential amino acids. Give two examples of each type. [NCERT Ex 10.11]', category: '2-mark', topicId: '10-2-1-amino-acids' },
  { id: 'chem10-2m-26', text: 'Show the zwitter ion formation from an α-amino acid in aqueous solution. Explain amphoteric behaviour.', category: '2-mark', topicId: '10-2-1-amino-acids' },
  { id: 'chem10-2m-27', text: 'How do you explain the amphoteric behaviour of amino acids? [NCERT Ex 10.16]', category: '2-mark', topicId: '10-2-1-amino-acids' },
  { id: 'chem10-2m-28', text: 'Classify the following amino acids as acidic, basic or neutral: Glycine, Glutamic acid, Lysine, Cysteine, Arginine.', category: '2-mark', topicId: '10-2-1-amino-acids' },

  // 10.2.3 Protein Structure - 1 Mark
  { id: 'chem10-1m-77', text: 'What is a peptide bond? How is it formed?', category: '1-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-1m-78', text: 'Name the product formed when two amino acids are joined by a peptide bond.', category: '1-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-1m-79', text: 'How many peptide linkages are in a tripeptide?', category: '1-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-1m-80', text: 'What is a polypeptide?', category: '1-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-1m-81', text: 'When is a polypeptide called a protein?', category: '1-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-1m-82', text: 'How many amino acids does insulin contain?', category: '1-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-1m-83', text: 'What are fibrous proteins? Give two examples.', category: '1-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-1m-84', text: 'What are globular proteins? Give two examples.', category: '1-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-1m-85', text: 'What is the primary structure of a protein?', category: '1-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-1m-86', text: 'What is the secondary structure of a protein? Name the two types.', category: '1-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-1m-87', text: 'Describe the α-helix structure.', category: '1-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-1m-88', text: 'Describe the β-pleated sheet structure.', category: '1-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-1m-89', text: 'What is the tertiary structure of a protein?', category: '1-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-1m-90', text: 'What is the quaternary structure of a protein?', category: '1-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-1m-91', text: 'Name the forces that stabilise secondary and tertiary structures of proteins.', category: '1-mark', topicId: '10-2-3-protein-structure' },

  // 10.2.3 Protein Structure - 2 Mark
  { id: 'chem10-2m-29', text: 'Define peptide linkage. Write the reaction for the formation of glycylalanine. [NCERT Ex 10.12(i)]', category: '2-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-2m-30', text: 'Define primary structure of proteins. [NCERT Ex 10.12(ii)]', category: '2-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-2m-31', text: 'What are the common types of secondary structure of proteins? [NCERT Ex 10.13]', category: '2-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-2m-32', text: 'What type of bonding helps in stabilising the α-helix structure of proteins? [NCERT Ex 10.14]', category: '2-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-2m-33', text: 'Differentiate between globular and fibrous proteins. [NCERT Ex 10.15]', category: '2-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-2m-34', text: 'Describe the four levels of protein structure with examples.', category: '2-mark', topicId: '10-2-3-protein-structure' },

  // 10.2.4 Denaturation - 1 Mark
  { id: 'chem10-1m-92', text: 'What is denaturation of proteins?', category: '1-mark', topicId: '10-2-4-denaturation' },
  { id: 'chem10-1m-93', text: 'What structural changes occur during denaturation?', category: '1-mark', topicId: '10-2-4-denaturation' },
  { id: 'chem10-1m-94', text: 'Which structure(s) of protein are destroyed on denaturation?', category: '1-mark', topicId: '10-2-4-denaturation' },
  { id: 'chem10-1m-95', text: 'Give two common examples of denaturation.', category: '1-mark', topicId: '10-2-4-denaturation' },
  { id: 'chem10-1m-96', text: 'What happens to the biological activity of a protein on denaturation?', category: '1-mark', topicId: '10-2-4-denaturation' },
  { id: 'chem10-1m-97', text: 'Where does the water go after boiling an egg? [NCERT Intext 10.5]', category: '1-mark', topicId: '10-2-4-denaturation' },

  // 10.2.4 Denaturation - 2 Mark
  { id: 'chem10-2m-35', text: 'Define denaturation. What is the effect of denaturation on the structure of proteins? [NCERT Ex 10.12(iii) & 10.18]', category: '2-mark', topicId: '10-2-4-denaturation' },
  { id: 'chem10-2m-36', text: 'Give the conditions under which denaturation occurs and two biological examples.', category: '2-mark', topicId: '10-2-4-denaturation' },

  // 10.3 Enzymes - 1 Mark
  { id: 'chem10-1m-98', text: 'What are enzymes? What is their chemical nature?', category: '1-mark', topicId: '10-3-enzymes' },
  { id: 'chem10-1m-99', text: 'How are enzymes named? Give one example.', category: '1-mark', topicId: '10-3-enzymes' },
  { id: 'chem10-1m-100', text: 'What is the suffix used for enzyme names?', category: '1-mark', topicId: '10-3-enzymes' },
  { id: 'chem10-1m-101', text: 'Name the enzyme that hydrolyses maltose.', category: '1-mark', topicId: '10-3-enzymes' },
  { id: 'chem10-1m-102', text: 'What are oxidoreductase enzymes?', category: '1-mark', topicId: '10-3-enzymes' },
  { id: 'chem10-1m-103', text: 'How do enzymes function like chemical catalysts?', category: '1-mark', topicId: '10-3-enzymes' },
  { id: 'chem10-1m-104', text: 'What is the activation energy for acid hydrolysis of sucrose vs. by sucrase?', category: '1-mark', topicId: '10-3-enzymes' },
  { id: 'chem10-1m-105', text: 'What are enzymes? [NCERT Ex 10.17]', category: '1-mark', topicId: '10-3-enzymes' },

  // 10.3 Enzymes - 2 Mark
  { id: 'chem10-2m-37', text: 'Explain the mechanism of enzyme action using the lock and key model or activation energy concept.', category: '2-mark', topicId: '10-3-enzymes' },
  { id: 'chem10-2m-38', text: 'Compare the properties of enzymes with chemical catalysts.', category: '2-mark', topicId: '10-3-enzymes' },

  // 10.4 Vitamins - 1 Mark
  { id: 'chem10-1m-106', text: 'What are vitamins? How are they classified?', category: '1-mark', topicId: '10-4-vitamins' },
  { id: 'chem10-1m-107', text: 'From which two words was the term \'vitamine\' derived?', category: '1-mark', topicId: '10-4-vitamins' },
  { id: 'chem10-1m-108', text: 'Name the four fat-soluble vitamins.', category: '1-mark', topicId: '10-4-vitamins' },
  { id: 'chem10-1m-109', text: 'Name the water-soluble vitamins.', category: '1-mark', topicId: '10-4-vitamins' },
  { id: 'chem10-1m-110', text: 'Where are fat-soluble vitamins stored in the body?', category: '1-mark', topicId: '10-4-vitamins' },
  { id: 'chem10-1m-111', text: 'Why must water-soluble vitamins be supplied regularly in the diet?', category: '1-mark', topicId: '10-4-vitamins' },
  { id: 'chem10-1m-112', text: 'Which water-soluble vitamin can be stored in the body?', category: '1-mark', topicId: '10-4-vitamins' },
  { id: 'chem10-1m-113', text: 'Name the deficiency disease of Vitamin A.', category: '1-mark', topicId: '10-4-vitamins' },
  { id: 'chem10-1m-114', text: 'What is night blindness? Which vitamin deficiency causes it?', category: '1-mark', topicId: '10-4-vitamins' },
  { id: 'chem10-1m-115', text: 'What is Beri beri? Which vitamin deficiency causes it?', category: '1-mark', topicId: '10-4-vitamins' },
  { id: 'chem10-1m-116', text: 'What is scurvy? Which vitamin deficiency causes it?', category: '1-mark', topicId: '10-4-vitamins' },
  { id: 'chem10-1m-117', text: 'What is rickets? Which vitamin deficiency causes it?', category: '1-mark', topicId: '10-4-vitamins' },
  { id: 'chem10-1m-118', text: 'What is pernicious anaemia? Which vitamin deficiency causes it?', category: '1-mark', topicId: '10-4-vitamins' },
  { id: 'chem10-1m-119', text: 'Which vitamin is responsible for blood coagulation? [NCERT Ex 10.19]', category: '1-mark', topicId: '10-4-vitamins' },
  { id: 'chem10-1m-120', text: 'Why cannot vitamin C be stored in our body? [NCERT Intext 10.6]', category: '1-mark', topicId: '10-4-vitamins' },
  { id: 'chem10-1m-121', text: 'Name the vitamin known as ascorbic acid. Give its sources.', category: '1-mark', topicId: '10-4-vitamins' },
  { id: 'chem10-1m-122', text: 'What is cheilosis? Name the vitamin whose deficiency causes it.', category: '1-mark', topicId: '10-4-vitamins' },
  { id: 'chem10-1m-123', text: 'Name the deficiency disease caused by lack of Vitamin D.', category: '1-mark', topicId: '10-4-vitamins' },

  // 10.4 Vitamins - 2 Mark
  { id: 'chem10-2m-39', text: 'How are vitamins classified? Name the vitamin responsible for coagulation of blood. [NCERT Ex 10.19]', category: '2-mark', topicId: '10-4-vitamins' },
  { id: 'chem10-2m-40', text: 'Why are vitamin A and vitamin C essential to us? Give their important sources. [NCERT Ex 10.20]', category: '2-mark', topicId: '10-4-vitamins' },
  { id: 'chem10-2m-41', text: 'Prepare a table with columns: Vitamin name, Solubility (fat/water), Deficiency disease, Sources — for Vitamins A, B₁, B₂, C, D, K.', category: '2-mark', topicId: '10-4-vitamins' },

  // 10.5 Nucleic Acids - 1 Mark
  { id: 'chem10-1m-124', text: 'What are nucleic acids? Why are they also called polynucleotides?', category: '1-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-1m-125', text: 'Name the two types of nucleic acids.', category: '1-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-1m-126', text: 'What are chromosomes made of?', category: '1-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-1m-127', text: 'What is heredity?', category: '1-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-1m-128', text: 'What are the products of complete hydrolysis of a nucleic acid?', category: '1-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-1m-129', text: 'Name the sugar present in DNA.', category: '1-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-1m-130', text: 'Name the sugar present in RNA.', category: '1-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-1m-131', text: 'Name the four nitrogenous bases in DNA.', category: '1-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-1m-132', text: 'Name the four nitrogenous bases in RNA. Which base is different from DNA?', category: '1-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-1m-133', text: 'What is a nucleoside?', category: '1-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-1m-134', text: 'What is a nucleotide?', category: '1-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-1m-135', text: 'What linkage joins nucleotides in a nucleic acid chain?', category: '1-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-1m-136', text: 'Between which carbons of pentose sugar does the phosphodiester linkage form?', category: '1-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-1m-137', text: 'Who proposed the double helix structure of DNA?', category: '1-mark', topicId: '10-5-2-dna-structure' },
  { id: 'chem10-1m-138', text: 'What holds the two strands of DNA together?', category: '1-mark', topicId: '10-5-2-dna-structure' },
  { id: 'chem10-1m-139', text: 'Which base pairs with adenine in DNA? Which pairs with cytosine?', category: '1-mark', topicId: '10-5-2-dna-structure' },
  { id: 'chem10-1m-140', text: 'Name the three types of RNA and their functions.', category: '1-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-1m-141', text: 'What products are formed when a nucleotide from DNA containing thymine is hydrolysed? [NCERT Intext 10.7]', category: '1-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-1m-142', text: 'What does the structure of RNA suggest when its hydrolysis gives no fixed ratio of bases? [NCERT Intext 10.8]', category: '1-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-1m-143', text: 'What is the difference between a nucleoside and a nucleotide? [NCERT Ex 10.22]', category: '1-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-1m-144', text: 'What are nucleic acids? Mention their two important functions. [NCERT Ex 10.21]', category: '1-mark', topicId: '10-5-nucleic-acids' },

  // 10.5 Nucleic Acids - 2 Mark
  { id: 'chem10-2m-42', text: 'Explain the double helix structure of DNA proposed by Watson and Crick.', category: '2-mark', topicId: '10-5-2-dna-structure' },
  { id: 'chem10-2m-43', text: 'The two strands in DNA are not identical but are complementary. Explain. [NCERT Ex 10.23]', category: '2-mark', topicId: '10-5-2-dna-structure' },
  { id: 'chem10-2m-44', text: 'Write the important structural and functional differences between DNA and RNA. [NCERT Ex 10.24]', category: '2-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-2m-45', text: 'What are the different types of RNA found in the cell? State the function of each. [NCERT Ex 10.25]', category: '2-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-2m-46', text: 'What is DNA fingerprinting? List four applications of DNA fingerprinting.', category: '2-mark', topicId: '10-5-2-dna-structure' },

  // 10.5.3 Biological Functions - 1 Mark
  { id: 'chem10-1m-145', text: 'DNA is the chemical basis of heredity. Explain.', category: '1-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-1m-146', text: 'What is the role of DNA in maintaining species identity?', category: '1-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-1m-147', text: 'How does a DNA molecule duplicate itself?', category: '1-mark', topicId: '10-5-2-dna-structure' },
  { id: 'chem10-1m-148', text: 'What is the role of RNA in protein synthesis?', category: '1-mark', topicId: '10-5-nucleic-acids' },

  // 10.6 Hormones - 1 Mark
  { id: 'chem10-1m-149', text: 'What are hormones? Where are they produced?', category: '1-mark', topicId: '10-6-hormones' },
  { id: 'chem10-1m-150', text: 'How are hormones transported to their site of action?', category: '1-mark', topicId: '10-6-hormones' },
  { id: 'chem10-1m-151', text: 'Give one example each of a steroid hormone, a polypeptide hormone and an amino acid derivative hormone.', category: '1-mark', topicId: '10-6-hormones' },
  { id: 'chem10-1m-152', text: 'What is the role of insulin in the body?', category: '1-mark', topicId: '10-6-hormones' },
  { id: 'chem10-1m-153', text: 'What is the role of glucagon? How does it oppose insulin?', category: '1-mark', topicId: '10-6-hormones' },
  { id: 'chem10-1m-154', text: 'What is thyroxine? Which amino acid is it derived from?', category: '1-mark', topicId: '10-6-hormones' },
  { id: 'chem10-1m-155', text: 'What condition results from abnormally low levels of thyroxine?', category: '1-mark', topicId: '10-6-hormones' },
  { id: 'chem10-1m-156', text: 'What is hypothyroidism? What causes it?', category: '1-mark', topicId: '10-6-hormones' },
  { id: 'chem10-1m-157', text: 'What is hyperthyroidism?', category: '1-mark', topicId: '10-6-hormones' },
  { id: 'chem10-1m-158', text: 'What is the role of glucocorticoids?', category: '1-mark', topicId: '10-6-hormones' },
  { id: 'chem10-1m-159', text: 'What is Addison\'s disease?', category: '1-mark', topicId: '10-6-hormones' },
  { id: 'chem10-1m-160', text: 'What is testosterone? State its role.', category: '1-mark', topicId: '10-6-hormones' },
  { id: 'chem10-1m-161', text: 'What is estradiol? State its role.', category: '1-mark', topicId: '10-6-hormones' },
  { id: 'chem10-1m-162', text: 'What is progesterone responsible for?', category: '1-mark', topicId: '10-6-hormones' },

  // 10.6 Hormones - 2 Mark
  { id: 'chem10-2m-47', text: 'Classify hormones on the basis of their chemical nature and give two examples of each class.', category: '2-mark', topicId: '10-6-hormones' },
  { id: 'chem10-2m-48', text: 'Explain how insulin and glucagon together regulate blood glucose levels.', category: '2-mark', topicId: '10-6-hormones' },
  { id: 'chem10-2m-49', text: 'Write a short note on steroid hormones produced by adrenal cortex and gonads.', category: '2-mark', topicId: '10-6-hormones' },

  // HOTS & 5-Mark Questions
  { id: 'chem10-5m-1', text: 'Define the following as related to proteins: (i) Peptide linkage (ii) Primary structure (iii) Denaturation. [NCERT Ex 10.12]', category: '5-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-5m-2', text: 'Write two main functions of carbohydrates in plants. Classify: Ribose, 2-deoxyribose, maltose, galactose, fructose and lactose into mono- and disaccharides. [NCERT Ex 10.3 & 10.4]', category: '5-mark', topicId: '10-1-1-classification' },
  { id: 'chem10-5m-3', text: 'What happens when D-glucose is treated with: (i) HI (ii) Bromine water (iii) HNO₃? Enumerate reactions that cannot be explained by the open chain structure. [NCERT Ex 10.9 & 10.10]', category: '5-mark', topicId: '10-1-2-glucose' },
  { id: 'chem10-5m-4', text: 'Write the important structural and functional differences between DNA and RNA. What are the different types of RNA found in the cell? [NCERT Ex 10.24 & 10.25]', category: '5-mark', topicId: '10-5-nucleic-acids' },
  { id: 'chem10-5m-5', text: 'How are vitamins classified? Prepare a table: Vitamin, Solubility, Deficiency Disease, Sources — for A, B₁, B₂, B₆, B₁₂, C, D, E, K. [NCERT Ex 10.19 & 10.20]', category: '5-mark', topicId: '10-4-vitamins' },
  { id: 'chem10-5m-6', text: 'What is the basic structural difference between starch and cellulose? How is glycogen different from starch? [NCERT Ex 10.6 & 10.8]', category: '5-mark', topicId: '10-1-4-polysaccharides' },
  { id: 'chem10-5m-7', text: 'Differentiate between: (i) globular and fibrous proteins (ii) primary and secondary structure (iii) nucleoside and nucleotide (iv) DNA and RNA. [NCERT Ex 10.15, 10.22, 10.24]', category: '5-mark', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-5m-8', text: 'Explain the four levels of protein structure (primary, secondary, tertiary, quaternary) with examples. What forces stabilise each level?', category: '5-mark', topicId: '10-2-3-protein-structure' },

  // Case-Based Questions
  { id: 'chem10-case-1', text: 'Case Study: Glucose (C₆H₁₂O₆) is an aldohexose and the most important monosaccharide. It exists in two cyclic forms called α and β anomers. On treatment with bromine water it gives gluconic acid. On treatment with HNO₃ it gives saccharic acid.\n(a) What is the evidence that glucose is an aldose?\n(b) Draw the open chain structure of glucose.\n(c) What are anomers? How do α and β glucose differ?\n(d) Why does glucose not give Schiff\'s test despite having an aldehyde group?\n(e) What is the cyclic structure of glucose called?', category: 'case-study', topicId: '10-1-2-glucose' },
  { id: 'chem10-case-2', text: 'Case Study: Proteins are polymers of α-amino acids linked by peptide bonds. The sequence of amino acids is the primary structure. Hydrogen bonding between C=O and N-H groups creates secondary structures like α-helix and β-pleated sheet.\n(a) What is a peptide bond? Write its formation.\n(b) What are essential amino acids? Give two examples.\n(c) Explain zwitterion formation in amino acids.\n(d) What is denaturation? Give two examples.\n(e) Differentiate between fibrous and globular proteins.', category: 'case-study', topicId: '10-2-3-protein-structure' },
  { id: 'chem10-case-3', text: 'Case Study: DNA is a double helix composed of two polynucleotide chains held together by hydrogen bonds between complementary base pairs (A-T and G-C). It stores genetic information and replicates during cell division.\n(a) What are the components of a nucleotide?\n(b) Distinguish between nucleoside and nucleotide.\n(c) How many hydrogen bonds form between A-T and G-C?\n(d) Name the three types of RNA and their functions.\n(e) Why are the two strands of DNA called complementary?', category: 'case-study', topicId: '10-5-2-dna-structure' },
];

export const chemistryQuestionBanks: ChapterQuestionBank[] = [
  {
    chapterId: 'solutions',
    questions: unit1Questions,
  },
  {
    chapterId: 'electrochemistry',
    questions: unit2Questions,
  },
  {
    chapterId: 'chemical-kinetics',
    questions: unit3Questions,
  },
  {
    chapterId: 'd-f-block',
    questions: unit4Questions,
  },
  {
    chapterId: 'coordination',
    questions: unit5Questions,
  },
  {
    chapterId: 'haloalkanes',
    questions: unit6Questions,
  },
  {
    chapterId: 'alcohols',
    questions: unit7Questions,
  },
  {
    chapterId: 'aldehydes-ketones',
    questions: unit8Questions,
  },
  {
    chapterId: 'amines',
    questions: unit9Questions,
  },
  {
    chapterId: 'biomolecules',
    questions: unit10Questions,
  },
];

// Helper function to get questions for a specific chapter
export function getChemistryChapterQuestions(chapterId: string): Question[] {
  const bank = chemistryQuestionBanks.find(b => b.chapterId === chapterId);
  return bank?.questions || [];
}

// Helper function to get questions by category
export function getChemistryQuestionsByCategory(chapterId: string, category: string): Question[] {
  const questions = getChemistryChapterQuestions(chapterId);
  return questions.filter(q => q.category === category);
}

// Helper function to get questions by topic
export function getChemistryQuestionsByTopic(chapterId: string, topicId: string): Question[] {
  const questions = getChemistryChapterQuestions(chapterId);
  return questions.filter(q => q.topicId === topicId);
}
