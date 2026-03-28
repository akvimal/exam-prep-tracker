import { ChapterQuestionBank, Question } from '@/lib/types';

// Chapter 1: Electric Charges and Fields - Question Bank
const chapter1Questions: Question[] = [
  // 1.1 & 1.2 Introduction and Electric Charge
  { id: 'c1-1m-1', text: 'What is the cause of lightning during thunderstorms?', category: '1-mark', topicId: '1-1-introduction' },
  { id: 'c1-1m-2', text: "Name the Greek word from which the term 'electricity' is derived and what does it mean?", category: '1-mark', topicId: '1-2-electric-charge' },
  { id: 'c1-1m-3', text: 'Who is credited with the discovery that amber rubbed with wool attracts light objects?', category: '1-mark', topicId: '1-2-electric-charge' },
  { id: 'c1-2m-1', text: 'What happens when a glass rod rubbed with silk is brought near another glass rod rubbed with silk? Explain why.', category: '2-mark', topicId: '1-2-electric-charge' },
  { id: 'c1-2m-2', text: 'Distinguish between positive and negative charges with examples.', category: '2-mark', topicId: '1-2-electric-charge' },
  { id: 'c1-3m-1', text: 'Explain with an example how charges are developed on bodies by the method of rubbing. Why do the two bodies acquire opposite charges?', category: '3-mark', topicId: '1-2-electric-charge' },
  { id: 'c1-3m-2', text: 'A glass rod is rubbed with silk cloth and then brought in contact with the silk. What happens to the charges? Explain.', category: '3-mark', topicId: '1-2-electric-charge' },

  // 1.3 Conductors and Insulators
  { id: 'c1-1m-4', text: 'Define conductors and insulators.', category: '1-mark', topicId: '1-3-conductors-insulators' },
  { id: 'c1-1m-5', text: 'Why does a metal spoon not get electrified on rubbing while a plastic comb does?', category: '1-mark', topicId: '1-3-conductors-insulators' },
  { id: 'c1-1m-6', text: 'What is a semiconductor?', category: '1-mark', topicId: '1-3-conductors-insulators' },
  { id: 'c1-2m-3', text: 'Why does charge put on an insulator stay at the same place while on a conductor it spreads over the entire surface?', category: '2-mark', topicId: '1-3-conductors-insulators' },
  { id: 'c1-2m-4', text: 'Give two examples each of conductors and insulators.', category: '2-mark', topicId: '1-3-conductors-insulators' },
  { id: 'c1-3m-3', text: 'Explain why a metal rod with a wooden handle shows signs of charging when rubbed without touching its metal part, but not otherwise.', category: '3-mark', topicId: '1-3-conductors-insulators' },

  // 1.4 Basic Properties of Electric Charge
  { id: 'c1-1m-7', text: 'State the principle of quantisation of electric charge.', category: '1-mark', topicId: '1-4-basic-properties' },
  { id: 'c1-1m-8', text: 'What is the SI unit of electric charge?', category: '1-mark', topicId: '1-4-basic-properties' },
  { id: 'c1-1m-9', text: 'What is the value of electronic charge in coulombs?', category: '1-mark', topicId: '1-4-basic-properties' },
  { id: 'c1-2m-5', text: 'A system contains charges +1, +2, –3, +4, and –5 in arbitrary units. Find the total charge of the system.', category: '2-mark', topicId: '1-4-basic-properties' },
  { id: 'c1-2m-6', text: 'Why is quantisation of charge not observed at macroscopic level?', category: '2-mark', topicId: '1-4-basic-properties' },
  { id: 'c1-3m-4', text: 'State and explain the law of conservation of electric charge with an example.', category: '3-mark', topicId: '1-4-basic-properties' },
  { id: 'c1-3m-5', text: 'Explain additivity of charges. If a body contains n₁ electrons and n₂ protons, what is the total charge on the body?', category: '3-mark', topicId: '1-4-basic-properties' },
  { id: 'c1-5m-1', text: 'Explain the three basic properties of electric charge: (i) Additivity (ii) Conservation (iii) Quantisation', category: '5-mark', topicId: '1-4-basic-properties' },
  { id: 'c1-num-1', text: 'If 10⁹ electrons move out of a body every second, how much time is required to get a total charge of 1 C on another body?', category: 'numerical', topicId: '1-4-basic-properties' },
  { id: 'c1-num-2', text: 'How much positive and negative charge is there in a cup of water (250 g)? (Given: Molecular mass of water = 18 g, Avogadro number = 6.02 × 10²³)', category: 'numerical', topicId: '1-4-basic-properties' },

  // 1.5 Coulomb's Law
  { id: 'c1-1m-10', text: "State Coulomb's law in electrostatics.", category: '1-mark', topicId: '1-5-coulombs-law' },
  { id: 'c1-1m-11', text: 'What is the value of permittivity of free space (ε₀)?', category: '1-mark', topicId: '1-5-coulombs-law' },
  { id: 'c1-1m-12', text: 'Define one coulomb of charge.', category: '1-mark', topicId: '1-5-coulombs-law' },
  { id: 'c1-2m-7', text: "Write Coulomb's law in vector form and explain each term.", category: '2-mark', topicId: '1-5-coulombs-law' },
  { id: 'c1-2m-8', text: "Compare Coulomb's law with Newton's law of gravitation.", category: '2-mark', topicId: '1-5-coulombs-law' },
  { id: 'c1-3m-6', text: 'Two point charges q₁ and q₂ are separated by distance r. Write the expression for force between them. What happens to this force when: (a) distance is doubled (b) charges are doubled?', category: '3-mark', topicId: '1-5-coulombs-law' },
  { id: 'c1-3m-7', text: "Why is Coulomb's law called an inverse square law? What is the significance of the constant k?", category: '3-mark', topicId: '1-5-coulombs-law' },
  { id: 'c1-5m-2', text: "State Coulomb's law. Derive an expression for the force between two point charges. Discuss the nature of forces for like and unlike charges.", category: '5-mark', topicId: '1-5-coulombs-law' },
  { id: 'c1-num-3', text: 'What is the force between two small charged spheres having charges of 2 × 10⁻⁷ C and 3 × 10⁻⁷ C placed 30 cm apart in air?', category: 'numerical', topicId: '1-5-coulombs-law' },
  { id: 'c1-num-4', text: 'Compare the magnitude of electrostatic force and gravitational force between an electron and a proton separated by 1 Å. (Given: mₑ = 9.11 × 10⁻³¹ kg, mₚ = 1.67 × 10⁻²⁷ kg)', category: 'numerical', topicId: '1-5-coulombs-law' },
  { id: 'c1-num-5', text: 'Two identical charged spheres A and B repel each other with force F when separated by distance d. A third identical uncharged sphere C touches A and then B. What is the new force between A and B at the same separation?', category: 'numerical', topicId: '1-5-coulombs-law' },

  // 1.6 Forces Between Multiple Charges (Superposition Principle)
  { id: 'c1-1m-13', text: 'State the principle of superposition of electric charges.', category: '1-mark', topicId: '1-6-superposition' },
  { id: 'c1-2m-9', text: 'Three charges q₁, q₂, and q₃ are placed at the vertices of an equilateral triangle. Write the expression for the net force on charge q₁.', category: '2-mark', topicId: '1-6-superposition' },
  { id: 'c1-3m-8', text: 'State and explain the principle of superposition with an example of three charges.', category: '3-mark', topicId: '1-6-superposition' },
  { id: 'c1-5m-3', text: 'Derive an expression for the force on a charge q₁ due to n other charges q₂, q₃, ..., qₙ using the superposition principle.', category: '5-mark', topicId: '1-6-superposition' },
  { id: 'c1-num-6', text: 'Consider three charges q₁, q₂, q₃ each equal to q at the vertices of an equilateral triangle of side l. What is the force on a charge Q placed at the centroid of the triangle?', category: 'numerical', topicId: '1-6-superposition' },
  { id: 'c1-num-7', text: 'Four point charges qₐ = 2 μC, qB = –5 μC, qC = 2 μC, and qD = –5 μC are located at the corners of a square ABCD of side 10 cm. What is the force on a charge of 1 μC placed at the centre of the square?', category: 'numerical', topicId: '1-6-superposition' },

  // 1.7 Electric Field
  { id: 'c1-1m-14', text: 'Define electric field at a point.', category: '1-mark', topicId: '1-7-electric-field' },
  { id: 'c1-1m-15', text: 'What is the SI unit of electric field?', category: '1-mark', topicId: '1-7-electric-field' },
  { id: 'c1-1m-16', text: 'Write the relation between electric field and force on a test charge.', category: '1-mark', topicId: '1-7-electric-field' },
  { id: 'c1-2m-10', text: 'Define electric field intensity. Write its SI unit and dimensional formula.', category: '2-mark', topicId: '1-7-electric-field' },
  { id: 'c1-2m-11', text: 'What is meant by a test charge? Why should it be infinitesimally small?', category: '2-mark', topicId: '1-7-electric-field' },
  { id: 'c1-3m-9', text: 'Derive an expression for the electric field at a point due to a point charge q.', category: '3-mark', topicId: '1-7-electric-field' },
  { id: 'c1-3m-10', text: 'Electric field is independent of test charge. Explain.', category: '3-mark', topicId: '1-7-electric-field' },
  { id: 'c1-5m-4', text: 'Define electric field. Derive an expression for the electric field at a point due to a system of n point charges.', category: '5-mark', topicId: '1-7-electric-field' },
  { id: 'c1-num-8', text: 'Two point charges q₁ = +10⁻⁸ C and q₂ = –10⁻⁸ C are placed 0.1 m apart. Calculate the electric field at points A, B, and C as shown, where A is midpoint, B is 5 cm from q₁ on extended line, and C is on perpendicular bisector at 10 cm.', category: 'numerical', topicId: '1-7-electric-field' },
  { id: 'c1-num-9', text: 'An electron falls through a distance of 1.5 cm in a uniform electric field of magnitude 2.0 × 10⁴ N/C. Calculate the time of fall.', category: 'numerical', topicId: '1-7-electric-field' },

  // 1.8 Electric Field Lines
  { id: 'c1-1m-17', text: 'What are electric field lines?', category: '1-mark', topicId: '1-8-field-lines' },
  { id: 'c1-1m-18', text: 'Why do two electric field lines never cross each other?', category: '1-mark', topicId: '1-8-field-lines' },
  { id: 'c1-1m-19', text: 'What is the nature of electric field when field lines are parallel and equidistant?', category: '1-mark', topicId: '1-8-field-lines' },
  { id: 'c1-2m-12', text: 'Draw the electric field lines for (a) an isolated positive charge (b) an isolated negative charge.', category: '2-mark', topicId: '1-8-field-lines' },
  { id: 'c1-2m-13', text: 'State any four properties of electric field lines.', category: '2-mark', topicId: '1-8-field-lines' },
  { id: 'c1-3m-11', text: 'Draw electric field lines for: (a) two positive charges (b) a dipole (positive and negative charges). Explain the pattern.', category: '3-mark', topicId: '1-8-field-lines' },
  { id: 'c1-3m-12', text: 'How does the density of electric field lines indicate the strength of electric field? Explain with diagram.', category: '3-mark', topicId: '1-8-field-lines' },
  { id: 'c1-5m-5', text: 'What are electric field lines? State and explain the properties of electric field lines with suitable diagrams.', category: '5-mark', topicId: '1-8-field-lines' },

  // 1.9 Electric Flux
  { id: 'c1-1m-20', text: 'Define electric flux. Write its SI unit.', category: '1-mark', topicId: '1-9-electric-flux' },
  { id: 'c1-1m-21', text: 'What is the electric flux through a surface held parallel to the electric field?', category: '1-mark', topicId: '1-9-electric-flux' },
  { id: 'c1-2m-14', text: 'Write the expression for electric flux through a surface element ΔS when electric field E makes angle θ with the normal to the surface.', category: '2-mark', topicId: '1-9-electric-flux' },
  { id: 'c1-2m-15', text: 'What is the significance of area as a vector? How is its direction determined for a closed surface?', category: '2-mark', topicId: '1-9-electric-flux' },
  { id: 'c1-3m-13', text: 'Define electric flux. Derive an expression for the total flux through a closed surface enclosing a point charge.', category: '3-mark', topicId: '1-9-electric-flux' },
  { id: 'c1-num-10', text: 'Consider a uniform electric field E = 3 × 10³ î N/C. What is the flux through a square of 10 cm side whose plane is (a) parallel to yz plane (b) normal makes 60° with x-axis?', category: 'numerical', topicId: '1-9-electric-flux' },
  { id: 'c1-num-11', text: 'The electric field components in a region are Eₓ = αx^(1/2), Ey = Ez = 0 where α = 800 N/C m^(1/2). Calculate the flux through a cube of side 0.1 m placed with one corner at the origin.', category: 'numerical', topicId: '1-9-electric-flux' },

  // 1.10 Electric Dipole
  { id: 'c1-1m-22', text: 'What is an electric dipole?', category: '1-mark', topicId: '1-10-electric-dipole' },
  { id: 'c1-1m-23', text: 'Define dipole moment. Write its SI unit.', category: '1-mark', topicId: '1-10-electric-dipole' },
  { id: 'c1-1m-24', text: 'What is meant by an axial point and equatorial point of a dipole?', category: '1-mark', topicId: '1-10-electric-dipole' },
  { id: 'c1-2m-16', text: 'Define electric dipole moment. Is it a scalar or vector quantity? Give its direction.', category: '2-mark', topicId: '1-10-electric-dipole' },
  { id: 'c1-2m-17', text: 'What are polar and non-polar molecules? Give one example of each.', category: '2-mark', topicId: '1-10-electric-dipole' },
  { id: 'c1-3m-14', text: 'Derive an expression for the electric field at a point on the axial line of an electric dipole.', category: '3-mark', topicId: '1-10-electric-dipole' },
  { id: 'c1-3m-15', text: 'Derive an expression for the electric field at a point on the equatorial line of an electric dipole.', category: '3-mark', topicId: '1-10-electric-dipole' },
  { id: 'c1-5m-6', text: '(a) Define electric dipole and dipole moment. (b) Derive expressions for the electric field intensity at a point (i) on the axial line (ii) on the equatorial line of an electric dipole. (c) Compare the two fields for large distances.', category: '5-mark', topicId: '1-10-electric-dipole' },
  { id: 'c1-num-12', text: 'Two charges ±10 μC are placed 5.0 mm apart. Determine the electric field at (a) a point P on the axis 15 cm from centre (b) a point Q, 15 cm from centre on equatorial line.', category: 'numerical', topicId: '1-10-electric-dipole' },
  { id: 'c1-num-13', text: 'A system has two charges qₐ = 2.5 × 10⁻⁷ C and qB = –2.5 × 10⁻⁷ C located at A(0, 0, –15 cm) and B(0, 0, +15 cm). Find the total charge and electric dipole moment of the system.', category: 'numerical', topicId: '1-10-electric-dipole' },

  // 1.11 Dipole in a Uniform External Field
  { id: 'c1-1m-25', text: 'What is the net force on an electric dipole placed in a uniform electric field?', category: '1-mark', topicId: '1-11-dipole-external-field' },
  { id: 'c1-1m-26', text: 'When is the torque on a dipole maximum in an external electric field?', category: '1-mark', topicId: '1-11-dipole-external-field' },
  { id: 'c1-2m-18', text: 'Derive an expression for the torque on an electric dipole placed in a uniform electric field.', category: '2-mark', topicId: '1-11-dipole-external-field' },
  { id: 'c1-2m-19', text: 'When is the dipole in stable equilibrium in an external field?', category: '2-mark', topicId: '1-11-dipole-external-field' },
  { id: 'c1-3m-16', text: 'An electric dipole is placed in a non-uniform electric field. What force and torque does it experience? Explain with diagram.', category: '3-mark', topicId: '1-11-dipole-external-field' },
  { id: 'c1-3m-17', text: 'Explain why a charged comb attracts small pieces of paper which are neutral.', category: '3-mark', topicId: '1-11-dipole-external-field' },
  { id: 'c1-5m-7', text: 'Derive an expression for the torque experienced by an electric dipole placed in a uniform electric field. When is the torque (a) maximum (b) minimum?', category: '5-mark', topicId: '1-11-dipole-external-field' },
  { id: 'c1-num-14', text: 'An electric dipole with dipole moment 4 × 10⁻⁹ C m is aligned at 30° with a uniform electric field of magnitude 5 × 10⁴ N/C. Calculate the magnitude of torque acting on the dipole.', category: 'numerical', topicId: '1-11-dipole-external-field' },

  // 1.12 Continuous Charge Distribution
  { id: 'c1-1m-27', text: 'Define linear charge density. Write its SI unit.', category: '1-mark', topicId: '1-12-continuous-charge' },
  { id: 'c1-1m-28', text: 'Define surface charge density.', category: '1-mark', topicId: '1-12-continuous-charge' },
  { id: 'c1-1m-29', text: 'Define volume charge density.', category: '1-mark', topicId: '1-12-continuous-charge' },
  { id: 'c1-2m-20', text: 'Distinguish between linear, surface, and volume charge densities with their expressions and SI units.', category: '2-mark', topicId: '1-12-continuous-charge' },
  { id: 'c1-2m-21', text: 'Write the expression for electric field due to a continuous charge distribution.', category: '2-mark', topicId: '1-12-continuous-charge' },
  { id: 'c1-3m-18', text: 'Explain the concept of continuous charge distribution. Define linear, surface, and volume charge densities.', category: '3-mark', topicId: '1-12-continuous-charge' },

  // 1.13 Gauss's Law
  { id: 'c1-1m-30', text: "State Gauss's law in electrostatics.", category: '1-mark', topicId: '1-13-gauss-law' },
  { id: 'c1-1m-31', text: 'What is a Gaussian surface?', category: '1-mark', topicId: '1-13-gauss-law' },
  { id: 'c1-1m-32', text: 'What is the total electric flux through a closed surface enclosing a charge q?', category: '1-mark', topicId: '1-13-gauss-law' },
  { id: 'c1-2m-22', text: "State Gauss's theorem. Write its mathematical expression.", category: '2-mark', topicId: '1-13-gauss-law' },
  { id: 'c1-2m-23', text: 'The net outward flux through a closed surface is zero. Does it mean there are no charges inside? Explain.', category: '2-mark', topicId: '1-13-gauss-law' },
  { id: 'c1-3m-19', text: "State and prove Gauss's law for a point charge enclosed by a spherical Gaussian surface.", category: '3-mark', topicId: '1-13-gauss-law' },
  { id: 'c1-3m-20', text: "Using Gauss's law, show that the total flux through a closed cylindrical surface placed in a uniform electric field is zero.", category: '3-mark', topicId: '1-13-gauss-law' },
  { id: 'c1-5m-8', text: "State Gauss's theorem in electrostatics. Using this theorem, derive an expression for the electric field due to a point charge.", category: '5-mark', topicId: '1-13-gauss-law' },
  { id: 'c1-num-15', text: 'A point charge +10 μC is at a distance 5 cm directly above the centre of a square of side 10 cm. What is the magnitude of electric flux through the square?', category: 'numerical', topicId: '1-13-gauss-law' },
  { id: 'c1-num-16', text: 'A point charge of 2.0 μC is at the centre of a cubic Gaussian surface 9.0 cm on edge. What is the net electric flux through the surface?', category: 'numerical', topicId: '1-13-gauss-law' },
  { id: 'c1-num-17', text: 'A point charge causes an electric flux of –1.0 × 10³ Nm²/C through a spherical Gaussian surface of 10 cm radius. (a) If radius is doubled, what is the flux? (b) What is the value of the charge?', category: 'numerical', topicId: '1-13-gauss-law' },

  // 1.14 Applications of Gauss's Law
  { id: 'c1-3m-21', text: "Using Gauss's law, derive an expression for the electric field due to an infinitely long straight uniformly charged wire.", category: '3-mark', topicId: '1-14-gauss-applications' },
  { id: 'c1-3m-22', text: "Using Gauss's law, derive an expression for the electric field due to a uniformly charged infinite plane sheet.", category: '3-mark', topicId: '1-14-gauss-applications' },
  { id: 'c1-3m-23', text: "Using Gauss's law, derive an expression for the electric field at a point outside a uniformly charged thin spherical shell.", category: '3-mark', topicId: '1-14-gauss-applications' },
  { id: 'c1-3m-24', text: 'Show that the electric field inside a uniformly charged thin spherical shell is zero.', category: '3-mark', topicId: '1-14-gauss-applications' },
  { id: 'c1-5m-9', text: "State Gauss's theorem. Apply it to find the electric field at a point due to an infinitely long straight conductor having uniform linear charge density λ.", category: '5-mark', topicId: '1-14-gauss-applications' },
  { id: 'c1-5m-10', text: "Apply Gauss's theorem to derive an expression for the electric field intensity at a point near an infinite plane sheet of charge. Show that the field is independent of distance from the sheet.", category: '5-mark', topicId: '1-14-gauss-applications' },
  { id: 'c1-5m-11', text: "Using Gauss's theorem, derive an expression for the electric field intensity at any point (a) outside (b) on the surface (c) inside a uniformly charged thin spherical shell. Draw a graph showing variation of E with distance r from the centre.", category: '5-mark', topicId: '1-14-gauss-applications' },
  { id: 'c1-num-18', text: 'An infinite line charge produces a field of 9 × 10⁴ N/C at a distance of 2 cm. Calculate the linear charge density.', category: 'numerical', topicId: '1-14-gauss-applications' },
  { id: 'c1-num-19', text: 'Two large, thin metal plates are parallel and close to each other with surface charge densities of opposite signs and magnitude 17.0 × 10⁻²² C/m². Find E (a) in outer region of first plate (b) in outer region of second plate (c) between the plates.', category: 'numerical', topicId: '1-14-gauss-applications' },
  { id: 'c1-num-20', text: 'A uniformly charged conducting sphere of 2.4 m diameter has a surface charge density of 80.0 μC/m². (a) Find the charge on the sphere. (b) What is the total electric flux leaving the surface?', category: 'numerical', topicId: '1-14-gauss-applications' },
  { id: 'c1-num-21', text: 'A conducting sphere of radius 10 cm has an unknown charge. If the electric field 20 cm from the centre is 1.5 × 10³ N/C pointing radially inward, what is the net charge on the sphere?', category: 'numerical', topicId: '1-14-gauss-applications' },

  // Assertion-Reason Questions
  { id: 'c1-ar-1', text: 'Assertion: Electric field lines never form closed loops. Reason: Electrostatic field is conservative in nature.', category: 'assertion-reason', topicId: '1-8-field-lines' },
  { id: 'c1-ar-2', text: 'Assertion: The electric field inside a charged conductor is zero. Reason: Charges reside only on the surface of a conductor.', category: 'assertion-reason', topicId: '1-14-gauss-applications' },
  { id: 'c1-ar-3', text: "Assertion: Gauss's law is valid for any closed surface. Reason: The flux through a closed surface depends only on the charge enclosed.", category: 'assertion-reason', topicId: '1-13-gauss-law' },
  { id: 'c1-ar-4', text: 'Assertion: A dipole experiences no net force in a uniform electric field. Reason: The forces on the two charges of the dipole are equal and opposite.', category: 'assertion-reason', topicId: '1-11-dipole-external-field' },

  // Case Study Questions
  { id: 'c1-cs-1', text: 'Case Study: Gold Leaf Electroscope - A gold-leaf electroscope consists of a vertical metal rod housed in a box, with two thin gold leaves attached to its bottom end. When a charged object touches the metal knob at the top of the rod, charge flows onto the leaves and they diverge. Questions: (a) Why do the gold leaves diverge when a charged body touches the knob? (b) What does the degree of divergence indicate? (c) Will the electroscope work if gold leaves are replaced by plastic strips? Justify. (d) How can you identify the nature of charge on a body using an electroscope?', category: 'case-study', topicId: '1-2-electric-charge' },
  { id: 'c1-cs-2', text: 'Case Study: Lightning and Static Electricity - During thunderstorms, we see lightning in the sky. This is due to the discharge of electric charges that accumulate in clouds due to friction. Questions: (a) What causes the accumulation of charge in clouds? (b) Why are lightning conductors installed on tall buildings? (c) Why do we experience electric shocks when touching a car door handle after a journey? (d) Name the branch of physics that deals with static charges.', category: 'case-study', topicId: '1-3-conductors-insulators' },

  // HOTS Questions
  { id: 'c1-hots-1', text: 'Two identical metal spheres A and B have charges +Q and –3Q respectively. They are kept at some distance and allowed to touch each other and then separated. What is the ratio of final charges on A and B?', category: 'hots', topicId: '1-4-basic-properties' },
  { id: 'c1-hots-2', text: 'A charge q is placed at the centre of a cube of side a. What is the electric flux through (a) one face of the cube (b) the entire cube?', category: 'hots', topicId: '1-13-gauss-law' },
  { id: 'c1-hots-3', text: 'Can two equipotential surfaces intersect? Justify your answer.', category: 'hots', topicId: '1-8-field-lines' },
  { id: 'c1-hots-4', text: 'An electric dipole is held in a uniform electric field. (a) What is the net force on it? (b) What is the net torque on it? (c) What happens if the field is non-uniform?', category: 'hots', topicId: '1-11-dipole-external-field' },
  { id: 'c1-hots-5', text: "Using Gauss's law, show that the electric field at any point inside a uniformly charged spherical shell is zero, while outside it is as if the total charge were concentrated at the centre.", category: 'hots', topicId: '1-14-gauss-applications' },
];

// Chapter 2: Electrostatic Potential and Capacitance - Question Bank
const chapter2Questions: Question[] = [
  // 2.1 Introduction
  { id: 'c2-1m-1', text: 'Define conservative force. Give one example.', category: '1-mark', topicId: '2-1-introduction' },
  { id: 'c2-1m-2', text: 'Why is electrostatic force called a conservative force?', category: '1-mark', topicId: '2-1-introduction' },
  { id: 'c2-1m-3', text: 'What is the relationship between work done by an external force and potential energy?', category: '1-mark', topicId: '2-1-introduction' },
  { id: 'c2-1m-4', text: 'State the analogy between gravitational potential energy and electrostatic potential energy.', category: '1-mark', topicId: '2-1-introduction' },
  { id: 'c2-2m-1', text: 'Explain why work done against a conservative force gets stored as potential energy.', category: '2-mark', topicId: '2-1-introduction' },
  { id: 'c2-2m-2', text: 'When a charge q is moved from point R to point P against an electrostatic force, what happens to the kinetic energy and potential energy? Explain.', category: '2-mark', topicId: '2-1-introduction' },

  // 2.2 Electrostatic Potential
  { id: 'c2-1m-5', text: 'Define electrostatic potential at a point.', category: '1-mark', topicId: '2-2-electrostatic-potential' },
  { id: 'c2-1m-6', text: 'What is the SI unit of electrostatic potential?', category: '1-mark', topicId: '2-2-electrostatic-potential' },
  { id: 'c2-1m-7', text: 'Is electrostatic potential a scalar or vector quantity?', category: '1-mark', topicId: '2-2-electrostatic-potential' },
  { id: 'c2-1m-8', text: 'What is the physical significance of potential difference?', category: '1-mark', topicId: '2-2-electrostatic-potential' },
  { id: 'c2-1m-9', text: 'Define 1 volt.', category: '1-mark', topicId: '2-2-electrostatic-potential' },
  { id: 'c2-2m-3', text: 'Distinguish between electrostatic potential and potential energy.', category: '2-mark', topicId: '2-2-electrostatic-potential' },
  { id: 'c2-2m-4', text: 'Why is potential difference more significant than the absolute value of potential?', category: '2-mark', topicId: '2-2-electrostatic-potential' },
  { id: 'c2-2m-5', text: 'What is the work done in moving a unit positive charge from infinity to a point where the potential is V?', category: '2-mark', topicId: '2-2-electrostatic-potential' },
  { id: 'c2-3m-1', text: 'Derive the expression for potential difference between two points in an electric field.', category: '3-mark', topicId: '2-2-electrostatic-potential' },
  { id: 'c2-3m-2', text: 'A test charge q is brought from point R to point P in an electric field. Show that the work done is W_RP = U_P − U_R.', category: '3-mark', topicId: '2-2-electrostatic-potential' },
  { id: 'c2-3m-3', text: 'Explain why potential energy is defined only to within an additive constant. What is the conventional choice for zero potential energy?', category: '3-mark', topicId: '2-2-electrostatic-potential' },
  { id: 'c2-5m-1', text: '(a) Define electrostatic potential at a point. (b) Derive the relation between work done by external force and potential energy difference. (c) Why is the work done by electrostatic field independent of the path taken?', category: '5-mark', topicId: '2-2-electrostatic-potential' },

  // 2.3 Potential due to a Point Charge
  { id: 'c2-1m-10', text: 'Write the expression for potential at a distance r from a point charge Q.', category: '1-mark', topicId: '2-3-potential-point-charge' },
  { id: 'c2-1m-11', text: 'What is the potential at infinity due to a point charge?', category: '1-mark', topicId: '2-3-potential-point-charge' },
  { id: 'c2-1m-12', text: 'How does potential vary with distance from a point charge?', category: '1-mark', topicId: '2-3-potential-point-charge' },
  { id: 'c2-1m-13', text: 'What is the sign of potential due to a negative point charge?', category: '1-mark', topicId: '2-3-potential-point-charge' },
  { id: 'c2-2m-6', text: 'A charge Q is placed at the origin. Derive the expression for potential at a point P at distance r from it.', category: '2-mark', topicId: '2-3-potential-point-charge' },
  { id: 'c2-2m-7', text: 'Compare the variation of electric field (E) and potential (V) with distance r from a point charge.', category: '2-mark', topicId: '2-3-potential-point-charge' },
  { id: 'c2-2m-8', text: 'Why is work done by the external force positive when bringing a positive test charge towards a positive charge?', category: '2-mark', topicId: '2-3-potential-point-charge' },
  { id: 'c2-3m-4', text: 'Derive the expression V(r) = Q/(4πε₀r) for potential due to a point charge Q at distance r.', category: '3-mark', topicId: '2-3-potential-point-charge' },
  { id: 'c2-3m-5', text: 'Draw graphs showing the variation of (i) potential V and (ii) electric field E with distance r from a point charge Q.', category: '3-mark', topicId: '2-3-potential-point-charge' },
  { id: 'c2-3m-6', text: 'For a negative charge Q < 0, explain why the potential is negative and what it physically signifies.', category: '3-mark', topicId: '2-3-potential-point-charge' },
  { id: 'c2-num-1', text: 'Calculate the potential at a point P due to a charge of 4 × 10⁻⁷ C located 9 cm away.', category: 'numerical', topicId: '2-3-potential-point-charge' },
  { id: 'c2-num-2', text: 'Find the work done in bringing a charge of 2 × 10⁻⁹ C from infinity to a point where potential is 4 × 10⁴ V.', category: 'numerical', topicId: '2-3-potential-point-charge' },
  { id: 'c2-num-3', text: 'Two charges 3 × 10⁻⁸ C and –2 × 10⁻⁸ C are located 15 cm apart. At what point(s) on the line joining the two charges is the electric potential zero?', category: 'numerical', topicId: '2-3-potential-point-charge' },

  // 2.4 Potential due to an Electric Dipole
  { id: 'c2-1m-14', text: 'Write the expression for potential due to a dipole at a point on its axial line.', category: '1-mark', topicId: '2-4-potential-dipole' },
  { id: 'c2-1m-15', text: 'What is the potential at a point on the equatorial plane of a dipole?', category: '1-mark', topicId: '2-4-potential-dipole' },
  { id: 'c2-1m-16', text: 'How does the potential due to a dipole vary with distance at large distances?', category: '1-mark', topicId: '2-4-potential-dipole' },
  { id: 'c2-1m-17', text: 'Define dipole moment. What is its SI unit?', category: '1-mark', topicId: '2-4-potential-dipole' },
  { id: 'c2-2m-9', text: 'Why is the potential zero at every point on the equatorial plane of a dipole?', category: '2-mark', topicId: '2-4-potential-dipole' },
  { id: 'c2-2m-10', text: 'Compare the dependence of potential on distance for (i) a point charge and (ii) a dipole.', category: '2-mark', topicId: '2-4-potential-dipole' },
  { id: 'c2-2m-11', text: 'Write the general expression for potential due to a dipole at any point making angle θ with the dipole axis.', category: '2-mark', topicId: '2-4-potential-dipole' },
  { id: 'c2-3m-7', text: 'Derive the expression for potential at a point P at distance r from the centre of a dipole, where r >> a (half the dipole length).', category: '3-mark', topicId: '2-4-potential-dipole' },
  { id: 'c2-3m-8', text: 'Show that potential due to a dipole at large distances is V = (1/4πε₀)(p cos θ/r²).', category: '3-mark', topicId: '2-4-potential-dipole' },
  { id: 'c2-3m-9', text: 'For a dipole, prove that V = ±p/(4πε₀r²) on the axial line (positive for θ = 0, negative for θ = π).', category: '3-mark', topicId: '2-4-potential-dipole' },
  { id: 'c2-5m-2', text: '(a) Derive the expression for potential at any point due to an electric dipole. (b) Compare the potential due to a dipole with that due to a single charge in terms of: (i) Dependence on r (ii) Dependence on angle θ (iii) Axial symmetry', category: '5-mark', topicId: '2-4-potential-dipole' },
  { id: 'c2-num-4', text: 'An electric dipole consists of charges ±10 μC separated by 5 mm. Calculate the potential at a point on the axial line 15 cm from the centre.', category: 'numerical', topicId: '2-4-potential-dipole' },

  // 2.5 Potential due to a System of Charges
  { id: 'c2-1m-18', text: 'State the superposition principle for electrostatic potential.', category: '1-mark', topicId: '2-5-potential-system' },
  { id: 'c2-1m-19', text: 'Is potential a scalar or vector quantity? Why does this make calculation simpler?', category: '1-mark', topicId: '2-5-potential-system' },
  { id: 'c2-1m-20', text: 'Write the expression for potential at a point due to n point charges.', category: '1-mark', topicId: '2-5-potential-system' },
  { id: 'c2-2m-12', text: 'How is the potential at a point due to a system of charges calculated using the superposition principle?', category: '2-mark', topicId: '2-5-potential-system' },
  { id: 'c2-2m-13', text: 'Write the expression for potential outside and inside a uniformly charged spherical shell.', category: '2-mark', topicId: '2-5-potential-system' },
  { id: 'c2-2m-14', text: 'Why is potential constant inside a uniformly charged spherical shell?', category: '2-mark', topicId: '2-5-potential-system' },
  { id: 'c2-3m-10', text: 'Derive the expression for potential at a point P due to a system of n point charges q₁, q₂, ..., qₙ.', category: '3-mark', topicId: '2-5-potential-system' },
  { id: 'c2-3m-11', text: 'For a uniformly charged spherical shell of radius R and total charge q, derive expressions for potential: (a) Outside the shell (r ≥ R) (b) Inside the shell (r < R)', category: '3-mark', topicId: '2-5-potential-system' },
  { id: 'c2-num-5', text: 'Four charges of 1 μC, 2 μC, 3 μC, and 4 μC are placed at the corners of a square of side 1 m. Find the potential at the centre of the square.', category: 'numerical', topicId: '2-5-potential-system' },

  // 2.6 Equipotential Surfaces
  { id: 'c2-1m-21', text: 'Define an equipotential surface.', category: '1-mark', topicId: '2-6-equipotential' },
  { id: 'c2-1m-22', text: 'What is the shape of equipotential surfaces for a point charge?', category: '1-mark', topicId: '2-6-equipotential' },
  { id: 'c2-1m-23', text: "Why can't two equipotential surfaces intersect?", category: '1-mark', topicId: '2-6-equipotential' },
  { id: 'c2-1m-24', text: 'What is the work done in moving a charge along an equipotential surface?', category: '1-mark', topicId: '2-6-equipotential' },
  { id: 'c2-1m-25', text: 'What is the angle between electric field and equipotential surface at any point?', category: '1-mark', topicId: '2-6-equipotential' },
  { id: 'c2-2m-15', text: 'Draw the equipotential surfaces for (a) a uniform electric field (b) a point charge.', category: '2-mark', topicId: '2-6-equipotential' },
  { id: 'c2-2m-16', text: 'Prove that electric field is always perpendicular to an equipotential surface.', category: '2-mark', topicId: '2-6-equipotential' },
  { id: 'c2-2m-17', text: 'Draw equipotential surfaces for (a) an electric dipole (b) two identical positive charges.', category: '2-mark', topicId: '2-6-equipotential' },
  { id: 'c2-2m-18', text: 'Derive the relation |E| = −dV/dl.', category: '2-mark', topicId: '2-6-equipotential' },
  { id: 'c2-2m-19', text: 'In which direction does the electric field point with respect to the potential?', category: '2-mark', topicId: '2-6-equipotential' },
  { id: 'c2-3m-12', text: 'Explain why electric field must be normal to an equipotential surface at every point.', category: '3-mark', topicId: '2-6-equipotential' },
  { id: 'c2-3m-13', text: 'Derive the relation between electric field and potential: E = −dV/dl.', category: '3-mark', topicId: '2-6-equipotential' },
  { id: 'c2-3m-14', text: 'State three properties of equipotential surfaces and explain each briefly.', category: '3-mark', topicId: '2-6-equipotential' },
  { id: 'c2-3m-15', text: 'Show that the electric field is in the direction of steepest decrease of potential.', category: '3-mark', topicId: '2-6-equipotential' },
  { id: 'c2-3m-16', text: 'Two equipotential surfaces A and B have potentials V and V + δV respectively. If δl is the perpendicular distance between them, prove that |E| = |δV|/δl.', category: '3-mark', topicId: '2-6-equipotential' },
  { id: 'c2-5m-3', text: '(a) Define equipotential surface. (b) List four properties of equipotential surfaces. (c) Draw equipotential surfaces for: (i) A point charge (ii) A uniform electric field (iii) An electric dipole', category: '5-mark', topicId: '2-6-equipotential' },

  // 2.7 Potential Energy of a System of Charges
  { id: 'c2-1m-26', text: 'Define potential energy of a system of charges.', category: '1-mark', topicId: '2-7-potential-energy-system' },
  { id: 'c2-1m-27', text: 'Write the expression for potential energy of two point charges q₁ and q₂ separated by distance r₁₂.', category: '1-mark', topicId: '2-7-potential-energy-system' },
  { id: 'c2-1m-28', text: 'What is the sign of potential energy for like charges? For unlike charges?', category: '1-mark', topicId: '2-7-potential-energy-system' },
  { id: 'c2-2m-20', text: 'Explain why potential energy is positive for like charges and negative for unlike charges.', category: '2-mark', topicId: '2-7-potential-energy-system' },
  { id: 'c2-2m-21', text: 'What does negative potential energy signify physically?', category: '2-mark', topicId: '2-7-potential-energy-system' },
  { id: 'c2-2m-22', text: 'Why is work done independent of the path in assembling a charge configuration?', category: '2-mark', topicId: '2-7-potential-energy-system' },
  { id: 'c2-3m-17', text: 'Derive the expression for potential energy of a system of two charges q₁ and q₂ at positions r₁ and r₂.', category: '3-mark', topicId: '2-7-potential-energy-system' },
  { id: 'c2-3m-18', text: 'For a system of three charges q₁, q₂, and q₃, derive the expression for total potential energy.', category: '3-mark', topicId: '2-7-potential-energy-system' },
  { id: 'c2-3m-19', text: 'Calculate the work done in assembling a system of three charges at the vertices of an equilateral triangle.', category: '3-mark', topicId: '2-7-potential-energy-system' },
  { id: 'c2-5m-4', text: '(a) Derive the expression for potential energy of a system of three point charges. (b) Four charges +q, −q, +q, and −q are placed at the corners of a square ABCD of side d. Find: (i) The work required to assemble this arrangement (ii) The work needed to bring a charge q₀ to the centre E', category: '5-mark', topicId: '2-7-potential-energy-system' },
  { id: 'c2-num-6', text: 'Four charges are arranged at the corners of a square ABCD of side d: +q at A, −q at B, +q at C, −q at D. (a) Find the work required to put together this arrangement. (b) A charge q₀ is brought to the centre E. How much extra work is needed?', category: 'numerical', topicId: '2-7-potential-energy-system' },
  { id: 'c2-num-7', text: 'Determine the electrostatic potential energy of a system consisting of two charges 7 μC and −2 μC placed at (−9 cm, 0, 0) and (9 cm, 0, 0) respectively.', category: 'numerical', topicId: '2-7-potential-energy-system' },

  // 2.8 Potential Energy in an External Field
  { id: 'c2-1m-29', text: 'What is the potential energy of a charge q at a point where external potential is V(r)?', category: '1-mark', topicId: '2-8-potential-energy-external' },
  { id: 'c2-1m-30', text: 'Define 1 electron volt (eV). Express it in joules.', category: '1-mark', topicId: '2-8-potential-energy-external' },
  { id: 'c2-1m-31', text: 'What is 1 MeV in joules?', category: '1-mark', topicId: '2-8-potential-energy-external' },
  { id: 'c2-1m-32', text: 'What is the torque on a dipole placed in a uniform electric field?', category: '1-mark', topicId: '2-8-potential-energy-external' },
  { id: 'c2-1m-33', text: 'Write the expression for potential energy of a dipole in a uniform electric field.', category: '1-mark', topicId: '2-8-potential-energy-external' },
  { id: 'c2-1m-34', text: 'When is the potential energy of a dipole in an external field (a) minimum (b) maximum?', category: '1-mark', topicId: '2-8-potential-energy-external' },
  { id: 'c2-2m-23', text: 'Distinguish between potential energy of a system of charges and potential energy of a charge in an external field.', category: '2-mark', topicId: '2-8-potential-energy-external' },
  { id: 'c2-2m-24', text: 'An electron is accelerated through a potential difference of 100 V. Calculate its kinetic energy in eV and joules.', category: '2-mark', topicId: '2-8-potential-energy-external' },
  { id: 'c2-2m-25', text: 'Show that the net force on a dipole in a uniform electric field is zero.', category: '2-mark', topicId: '2-8-potential-energy-external' },
  { id: 'c2-2m-26', text: 'What is the work done in rotating a dipole from angle θ₀ to θ₁ in an external field E?', category: '2-mark', topicId: '2-8-potential-energy-external' },
  { id: 'c2-2m-27', text: 'Why is θ = π/2 chosen as the reference for zero potential energy of a dipole?', category: '2-mark', topicId: '2-8-potential-energy-external' },
  { id: 'c2-3m-20', text: 'Derive the expression for potential energy of a system of two charges q₁ and q₂ in an external electric field.', category: '3-mark', topicId: '2-8-potential-energy-external' },
  { id: 'c2-3m-21', text: 'Two charges q₁ and q₂ are at positions r₁ and r₂ in an external potential V(r). Show that the total potential energy is: U = q₁V(r₁) + q₂V(r₂) + (q₁q₂)/(4πε₀r₁₂)', category: '3-mark', topicId: '2-8-potential-energy-external' },
  { id: 'c2-3m-22', text: 'Derive the expression U(θ) = −pE cos θ = −p·E for potential energy of a dipole in a uniform external field.', category: '3-mark', topicId: '2-8-potential-energy-external' },
  { id: 'c2-3m-23', text: 'A dipole is placed in a uniform electric field. Derive expressions for: (a) Torque on the dipole (b) Potential energy of the dipole (c) Conditions for stable and unstable equilibrium', category: '3-mark', topicId: '2-8-potential-energy-external' },
  { id: 'c2-5m-5', text: '(a) Derive the expression for potential energy of a dipole in a uniform external electric field. (b) What are the positions of stable and unstable equilibrium? (c) Calculate the work done in rotating a dipole by 180° from the stable equilibrium position.', category: '5-mark', topicId: '2-8-potential-energy-external' },
  { id: 'c2-num-8', text: 'A system of two charges 7 μC and −2 μC is placed at (−9 cm, 0, 0) and (9 cm, 0, 0) in an external field E = A(1/r²) where A = 9 × 10⁵ NC⁻¹m². What is the electrostatic energy of the configuration?', category: 'numerical', topicId: '2-8-potential-energy-external' },
  { id: 'c2-num-9', text: 'A molecule has a permanent electric dipole moment of 10⁻²⁹ C·m. A mole of this substance is polarised by a field of 10⁶ V/m. The field direction is suddenly changed by 60°. Estimate the heat released.', category: 'numerical', topicId: '2-8-potential-energy-external' },

  // 2.9 Electrostatics of Conductors
  { id: 'c2-1m-35', text: 'What is the electric field inside a conductor in electrostatic equilibrium?', category: '1-mark', topicId: '2-9-electrostatics-conductors' },
  { id: 'c2-1m-36', text: 'Where does excess charge reside in a conductor?', category: '1-mark', topicId: '2-9-electrostatics-conductors' },
  { id: 'c2-1m-37', text: 'What is the direction of electric field at the surface of a charged conductor?', category: '1-mark', topicId: '2-9-electrostatics-conductors' },
  { id: 'c2-1m-38', text: 'Define electrostatic shielding.', category: '1-mark', topicId: '2-9-electrostatics-conductors' },
  { id: 'c2-1m-39', text: 'What is the electric field inside a cavity of a conductor with no charges inside?', category: '1-mark', topicId: '2-9-electrostatics-conductors' },
  { id: 'c2-2m-28', text: 'Why is the electric field zero inside a conductor?', category: '2-mark', topicId: '2-9-electrostatics-conductors' },
  { id: 'c2-2m-29', text: 'Why must the electric field be normal to the surface of a conductor?', category: '2-mark', topicId: '2-9-electrostatics-conductors' },
  { id: 'c2-2m-30', text: 'Explain why potential is constant throughout the volume of a conductor.', category: '2-mark', topicId: '2-9-electrostatics-conductors' },
  { id: 'c2-2m-31', text: 'What happens when a conductor with a cavity is placed in an external electric field?', category: '2-mark', topicId: '2-9-electrostatics-conductors' },
  { id: 'c2-3m-24', text: 'State and explain any four important results regarding electrostatics of conductors.', category: '3-mark', topicId: '2-9-electrostatics-conductors' },
  { id: 'c2-3m-25', text: 'Derive the expression E = σ/ε₀ for electric field just outside the surface of a charged conductor.', category: '3-mark', topicId: '2-9-electrostatics-conductors' },
  { id: 'c2-3m-26', text: 'Explain the phenomenon of electrostatic shielding. Give its applications.', category: '3-mark', topicId: '2-9-electrostatics-conductors' },
  { id: 'c2-5m-6', text: 'Discuss the following properties of conductors in electrostatic equilibrium: (a) Electric field inside a conductor (b) Electric field at the surface (c) Charge distribution (d) Potential inside and on the surface (e) Electrostatic shielding', category: '5-mark', topicId: '2-9-electrostatics-conductors' },

  // 2.10 Dielectrics and Polarisation
  { id: 'c2-1m-40', text: 'What are dielectrics? Give two examples.', category: '1-mark', topicId: '2-10-dielectrics' },
  { id: 'c2-1m-41', text: 'Define polarisation of a dielectric.', category: '1-mark', topicId: '2-10-dielectrics' },
  { id: 'c2-1m-42', text: 'What is the difference between polar and non-polar molecules?', category: '1-mark', topicId: '2-10-dielectrics' },
  { id: 'c2-1m-43', text: 'Give one example each of polar and non-polar molecules.', category: '1-mark', topicId: '2-10-dielectrics' },
  { id: 'c2-1m-44', text: 'Define electric susceptibility.', category: '1-mark', topicId: '2-10-dielectrics' },
  { id: 'c2-2m-32', text: 'Distinguish between conductors and dielectrics.', category: '2-mark', topicId: '2-10-dielectrics' },
  { id: 'c2-2m-33', text: 'Explain how a non-polar molecule develops an induced dipole moment in an external field.', category: '2-mark', topicId: '2-10-dielectrics' },
  { id: 'c2-2m-34', text: 'How does a polar dielectric get polarised in an external field?', category: '2-mark', topicId: '2-10-dielectrics' },
  { id: 'c2-2m-35', text: 'What are the surface charge densities induced on a dielectric slab placed in an external field?', category: '2-mark', topicId: '2-10-dielectrics' },
  { id: 'c2-3m-27', text: 'Explain the behaviour of a dielectric in an external electric field. How does it differ from a conductor?', category: '3-mark', topicId: '2-10-dielectrics' },
  { id: 'c2-3m-28', text: 'Define polarisation P and write its relation with electric susceptibility χₑ: P = ε₀χₑE.', category: '3-mark', topicId: '2-10-dielectrics' },
  { id: 'c2-3m-29', text: 'Explain why the electric field inside a dielectric is reduced compared to the external field.', category: '3-mark', topicId: '2-10-dielectrics' },
  { id: 'c2-5m-7', text: '(a) Distinguish between polar and non-polar dielectrics with examples. (b) Explain how an external electric field polarises a dielectric. (c) How does polarisation reduce the electric field inside the dielectric?', category: '5-mark', topicId: '2-10-dielectrics' },

  // 2.11 Capacitors and Capacitance
  { id: 'c2-1m-45', text: 'Define a capacitor.', category: '1-mark', topicId: '2-11-capacitors' },
  { id: 'c2-1m-46', text: 'Define capacitance of a capacitor.', category: '1-mark', topicId: '2-11-capacitors' },
  { id: 'c2-1m-47', text: 'What is the SI unit of capacitance?', category: '1-mark', topicId: '2-11-capacitors' },
  { id: 'c2-1m-48', text: 'What does 1 farad mean?', category: '1-mark', topicId: '2-11-capacitors' },
  { id: 'c2-1m-49', text: 'On what factors does capacitance of a capacitor depend?', category: '1-mark', topicId: '2-11-capacitors' },
  { id: 'c2-1m-50', text: 'Draw the symbol for (a) fixed capacitor (b) variable capacitor.', category: '1-mark', topicId: '2-11-capacitors' },
  { id: 'c2-2m-36', text: 'Why is capacitance independent of charge Q or voltage V?', category: '2-mark', topicId: '2-11-capacitors' },
  { id: 'c2-2m-37', text: 'What is dielectric strength? Why is it important for capacitors?', category: '2-mark', topicId: '2-11-capacitors' },
  { id: 'c2-2m-38', text: 'Why is 1 farad considered a very large unit of capacitance?', category: '2-mark', topicId: '2-11-capacitors' },
  { id: 'c2-2m-39', text: 'Express 1 μF, 1 nF, and 1 pF in farads.', category: '2-mark', topicId: '2-11-capacitors' },
  { id: 'c2-3m-30', text: 'Define capacitance and derive the relation C = Q/V. What are its units?', category: '3-mark', topicId: '2-11-capacitors' },
  { id: 'c2-3m-31', text: 'Explain why capacitors with large capacitance are useful for storing charge.', category: '3-mark', topicId: '2-11-capacitors' },
  { id: 'c2-3m-32', text: 'What limits the maximum charge that can be stored on a capacitor?', category: '3-mark', topicId: '2-11-capacitors' },

  // 2.12 The Parallel Plate Capacitor
  { id: 'c2-1m-51', text: 'Write the expression for capacitance of a parallel plate capacitor with vacuum between the plates.', category: '1-mark', topicId: '2-12-parallel-plate' },
  { id: 'c2-1m-52', text: 'What is the electric field between the plates of a parallel plate capacitor?', category: '1-mark', topicId: '2-12-parallel-plate' },
  { id: 'c2-1m-53', text: 'Why is the electric field uniform between the plates?', category: '1-mark', topicId: '2-12-parallel-plate' },
  { id: 'c2-2m-40', text: 'What is meant by "fringing of field" at the edges of a parallel plate capacitor?', category: '2-mark', topicId: '2-12-parallel-plate' },
  { id: 'c2-2m-41', text: 'For a parallel plate capacitor, show that electric field is E = σ/ε₀ between the plates.', category: '2-mark', topicId: '2-12-parallel-plate' },
  { id: 'c2-2m-42', text: 'How does the capacitance of a parallel plate capacitor depend on (a) area of plates (b) separation between plates?', category: '2-mark', topicId: '2-12-parallel-plate' },
  { id: 'c2-3m-33', text: 'Derive the expression C = ε₀A/d for the capacitance of a parallel plate capacitor.', category: '3-mark', topicId: '2-12-parallel-plate' },
  { id: 'c2-3m-34', text: 'Show that electric field is zero in the regions outside the plates and is E = σ/ε₀ between the plates.', category: '3-mark', topicId: '2-12-parallel-plate' },
  { id: 'c2-3m-35', text: 'Calculate the capacitance of a parallel plate capacitor with plate area 1 m² and separation 1 mm.', category: '3-mark', topicId: '2-12-parallel-plate' },
  { id: 'c2-5m-8', text: '(a) Derive the expression for electric field between the plates of a parallel plate capacitor. (b) Hence derive the expression for capacitance. (c) What would be the area of plates needed for a capacitance of 1 F with 1 cm separation?', category: '5-mark', topicId: '2-12-parallel-plate' },
  { id: 'c2-num-10', text: 'In a parallel plate capacitor with air between the plates, each plate has area 6 × 10⁻³ m² and separation is 3 mm. Calculate the capacitance and charge on each plate when connected to 100 V supply.', category: 'numerical', topicId: '2-12-parallel-plate' },
  { id: 'c2-num-11', text: 'Calculate the area of plates needed for a 1 F capacitor with separation 1 cm.', category: 'numerical', topicId: '2-12-parallel-plate' },

  // 2.13 Effect of Dielectric on Capacitance
  { id: 'c2-1m-54', text: 'What happens to capacitance when a dielectric is inserted between the plates?', category: '1-mark', topicId: '2-13-dielectric-effect' },
  { id: 'c2-1m-55', text: 'Define dielectric constant (K) of a material.', category: '1-mark', topicId: '2-13-dielectric-effect' },
  { id: 'c2-1m-56', text: 'What is the permittivity of vacuum?', category: '1-mark', topicId: '2-13-dielectric-effect' },
  { id: 'c2-1m-57', text: 'Write the relation between permittivity, permittivity of vacuum, and dielectric constant.', category: '1-mark', topicId: '2-13-dielectric-effect' },
  { id: 'c2-2m-43', text: 'How does the capacitance change when a dielectric of constant K fills the space between plates?', category: '2-mark', topicId: '2-13-dielectric-effect' },
  { id: 'c2-2m-44', text: 'Define relative permittivity. How is it related to capacitance?', category: '2-mark', topicId: '2-13-dielectric-effect' },
  { id: 'c2-2m-45', text: 'Write the expression for capacitance of a parallel plate capacitor with dielectric medium.', category: '2-mark', topicId: '2-13-dielectric-effect' },
  { id: 'c2-3m-36', text: 'Derive the expression C = KC₀ = ε₀KA/d for a parallel plate capacitor with dielectric.', category: '3-mark', topicId: '2-13-dielectric-effect' },
  { id: 'c2-3m-37', text: 'Show that when a dielectric is inserted, the electric field inside becomes E = σ/(Kε₀).', category: '3-mark', topicId: '2-13-dielectric-effect' },
  { id: 'c2-3m-38', text: 'Explain how the surface charge density on the dielectric reduces the effective charge on the plates.', category: '3-mark', topicId: '2-13-dielectric-effect' },
  { id: 'c2-5m-9', text: '(a) Explain how a dielectric reduces the electric field between the plates of a capacitor. (b) Derive the expression for capacitance with dielectric. (c) A slab of dielectric constant K and thickness (3/4)d is inserted in a capacitor of separation d. Find the new capacitance.', category: '5-mark', topicId: '2-13-dielectric-effect' },
  { id: 'c2-num-12', text: 'A slab of dielectric constant K has thickness (3/4)d where d is the plate separation. How is capacitance changed?', category: 'numerical', topicId: '2-13-dielectric-effect' },
  { id: 'c2-num-13', text: 'A parallel plate capacitor with air has capacitance 8 pF. The distance is reduced by half and filled with dielectric of K = 6. Find new capacitance.', category: 'numerical', topicId: '2-13-dielectric-effect' },

  // 2.14 Combination of Capacitors
  { id: 'c2-1m-58', text: 'What remains same for capacitors connected in series?', category: '1-mark', topicId: '2-14-capacitor-combination' },
  { id: 'c2-1m-59', text: 'Write the formula for equivalent capacitance of n capacitors in series.', category: '1-mark', topicId: '2-14-capacitor-combination' },
  { id: 'c2-1m-60', text: 'Is the equivalent capacitance of series combination greater or smaller than individual capacitances?', category: '1-mark', topicId: '2-14-capacitor-combination' },
  { id: 'c2-1m-61', text: 'What remains same for capacitors connected in parallel?', category: '1-mark', topicId: '2-14-capacitor-combination' },
  { id: 'c2-1m-62', text: 'Write the formula for equivalent capacitance of n capacitors in parallel.', category: '1-mark', topicId: '2-14-capacitor-combination' },
  { id: 'c2-1m-63', text: 'Is the equivalent capacitance of parallel combination greater or smaller than individual capacitances?', category: '1-mark', topicId: '2-14-capacitor-combination' },
  { id: 'c2-2m-46', text: 'Derive the formula for equivalent capacitance of two capacitors in series.', category: '2-mark', topicId: '2-14-capacitor-combination' },
  { id: 'c2-2m-47', text: 'Why is the charge same on all capacitors in series combination?', category: '2-mark', topicId: '2-14-capacitor-combination' },
  { id: 'c2-2m-48', text: 'Three capacitors of 9 pF each are in series. Find the total capacitance.', category: '2-mark', topicId: '2-14-capacitor-combination' },
  { id: 'c2-2m-49', text: 'Derive the formula for equivalent capacitance of two capacitors in parallel.', category: '2-mark', topicId: '2-14-capacitor-combination' },
  { id: 'c2-2m-50', text: 'Why is the potential difference same across all capacitors in parallel combination?', category: '2-mark', topicId: '2-14-capacitor-combination' },
  { id: 'c2-3m-39', text: 'Derive the expression for equivalent capacitance of: (a) Two capacitors in series (b) Two capacitors in parallel', category: '3-mark', topicId: '2-14-capacitor-combination' },
  { id: 'c2-3m-40', text: 'Three capacitors of capacitances 2 pF, 3 pF, and 4 pF are connected in parallel. Find: (a) Total capacitance (b) Charge on each capacitor when connected to 100 V supply', category: '3-mark', topicId: '2-14-capacitor-combination' },
  { id: 'c2-5m-10', text: '(a) Derive expressions for equivalent capacitance of capacitors in (i) series (ii) parallel. (b) A network of four 10 μF capacitors is connected to 500 V supply as shown. Determine: (i) Equivalent capacitance (ii) Charge on each capacitor', category: '5-mark', topicId: '2-14-capacitor-combination' },
  { id: 'c2-num-14', text: 'Three capacitors each of 9 pF are in series. Find: (a) Total capacitance (b) Potential difference across each when connected to 120 V', category: 'numerical', topicId: '2-14-capacitor-combination' },
  { id: 'c2-num-15', text: 'Three capacitors of 2 pF, 3 pF, and 4 pF are in parallel. Find: (a) Total capacitance (b) Charge on each with 100 V supply', category: 'numerical', topicId: '2-14-capacitor-combination' },
  { id: 'c2-num-16', text: 'A network has C₁, C₂, C₃ = 10 μF each in series, and this combination in parallel with C₄ = 10 μF. Connected to 500 V. Find equivalent capacitance and charge on each capacitor.', category: 'numerical', topicId: '2-14-capacitor-combination' },

  // 2.15 Energy Stored in a Capacitor
  { id: 'c2-1m-64', text: 'Write the expression for energy stored in a capacitor.', category: '1-mark', topicId: '2-15-energy-stored' },
  { id: 'c2-1m-65', text: 'Where is the energy stored in a charged capacitor?', category: '1-mark', topicId: '2-15-energy-stored' },
  { id: 'c2-1m-66', text: 'What is the energy density of an electric field?', category: '1-mark', topicId: '2-15-energy-stored' },
  { id: 'c2-1m-67', text: 'Write three equivalent expressions for energy stored in a capacitor.', category: '1-mark', topicId: '2-15-energy-stored' },
  { id: 'c2-2m-51', text: 'Derive the expression U = ½QV for energy stored in a capacitor.', category: '2-mark', topicId: '2-15-energy-stored' },
  { id: 'c2-2m-52', text: 'Show that energy density in an electric field is u = ½ε₀E².', category: '2-mark', topicId: '2-15-energy-stored' },
  { id: 'c2-2m-53', text: 'A capacitor is charged and disconnected. It is then connected to an identical uncharged capacitor. What happens to the energy?', category: '2-mark', topicId: '2-15-energy-stored' },
  { id: 'c2-3m-41', text: 'Derive the expression U = ½CV² = ½Q²/C = ½QV for energy stored in a capacitor.', category: '3-mark', topicId: '2-15-energy-stored' },
  { id: 'c2-3m-42', text: 'For a parallel plate capacitor, show that energy stored is U = ½ε₀E²(Ad).', category: '3-mark', topicId: '2-15-energy-stored' },
  { id: 'c2-3m-43', text: 'Derive the expression for energy density of electric field: u = ½ε₀E².', category: '3-mark', topicId: '2-15-energy-stored' },
  { id: 'c2-5m-11', text: "(a) Derive the expression for energy stored in a charged capacitor. (b) Show that this energy can be viewed as stored in the electric field. (c) Derive the expression for energy density. (d) A 900 pF capacitor is charged by 100 V battery. Find the energy stored. If it's then connected to another 900 pF uncharged capacitor, what is the new energy? Where did the lost energy go?", category: '5-mark', topicId: '2-15-energy-stored' },
  { id: 'c2-num-17', text: 'A 12 pF capacitor is connected to 50 V. Find energy stored.', category: 'numerical', topicId: '2-15-energy-stored' },
  { id: 'c2-num-18', text: 'A 600 pF capacitor charged by 200 V is disconnected and connected to another uncharged 600 pF capacitor. Find energy lost.', category: 'numerical', topicId: '2-15-energy-stored' },
  { id: 'c2-num-19', text: "A 900 pF capacitor is charged by 100 V battery. (a) Energy stored = ? (b) After connecting to another 900 pF: Total energy = ? Energy lost = ? Where did it go?", category: 'numerical', topicId: '2-15-energy-stored' },

  // Assertion-Reason for Chapter 2
  { id: 'c2-ar-1', text: 'Assertion: Equipotential surfaces are closer together where the electric field is stronger. Reason: E = −dV/dl, so stronger field means larger potential change over same distance.', category: 'assertion-reason', topicId: '2-6-equipotential' },
  { id: 'c2-ar-2', text: 'Assertion: The work done in moving a charge between two points on an equipotential surface is zero. Reason: Potential difference between any two points on an equipotential surface is zero.', category: 'assertion-reason', topicId: '2-6-equipotential' },
  { id: 'c2-ar-3', text: 'Assertion: The capacitance of a parallel plate capacitor increases when a dielectric is introduced. Reason: The dielectric reduces the electric field between the plates.', category: 'assertion-reason', topicId: '2-13-dielectric-effect' },
  { id: 'c2-ar-4', text: 'Assertion: The potential inside a charged spherical shell is constant. Reason: Electric field inside the shell is zero.', category: 'assertion-reason', topicId: '2-5-potential-system' },

  // Case Study for Chapter 2
  { id: 'c2-cs-1', text: 'Case Study: Van de Graaff Generator - The Van de Graaff generator is an electrostatic machine that produces very high voltages by accumulating charge on a hollow metal sphere. A belt running over pulleys carries charge from a lower comb to an upper comb inside the sphere. Questions: (1) Why does charge spread to the outer surface of the metal sphere? (2) What limits the maximum potential achievable? (3) If the sphere has radius 1 m, what is its capacitance? (4) Why is the Van de Graaff generator enclosed in a high-pressure gas chamber?', category: 'case-study', topicId: '2-9-electrostatics-conductors' },
  { id: 'c2-cs-2', text: 'Case Study: Capacitors in Electronic Circuits - Capacitors are essential components in electronic circuits. In camera flashes, a capacitor stores energy from a battery and releases it quickly to produce a bright flash. Questions: (1) Why is quick energy release possible from a capacitor? (2) How do capacitors smooth voltage in power supplies? (3) What advantage do electrolytic capacitors have? (4) A camera flash capacitor of 200 μF is charged to 300 V. Calculate energy stored.', category: 'case-study', topicId: '2-15-energy-stored' },

  // HOTS for Chapter 2
  { id: 'c2-hots-1', text: 'Two metal spheres of radii r₁ and r₂ (r₁ > r₂) having the same charge are joined by a thin wire. Where does charge flow and why?', category: 'hots', topicId: '2-9-electrostatics-conductors' },
  { id: 'c2-hots-2', text: 'Prove that for capacitors in series, the equivalent capacitance is always less than the smallest individual capacitance.', category: 'hots', topicId: '2-14-capacitor-combination' },
  { id: 'c2-hots-3', text: 'A parallel plate capacitor is charged and disconnected from the battery. The plates are then pulled apart. What happens to: (a) Charge on plates (b) Potential difference (c) Capacitance (d) Energy stored', category: 'hots', topicId: '2-15-energy-stored' },
  { id: 'c2-hots-4', text: 'Why can a single conductor be considered as a capacitor with the other conductor at infinity?', category: 'hots', topicId: '2-11-capacitors' },
  { id: 'c2-hots-5', text: 'A 4 μF capacitor is charged to 400 V and connected to an uncharged 2 μF capacitor. Find: (a) Final voltage across each (b) Initial and final energies (c) Energy lost and explain where it went', category: 'hots', topicId: '2-15-energy-stored' },
];

// Chapter 3: Current Electricity - Question Bank
const chapter3Questions: Question[] = [
  // 3.1 & 3.2 Introduction and Electric Current
  { id: 'c3-1m-1', text: 'What is meant by "charges in motion" constituting electric current? Give one example from everyday life.', category: '1-mark', topicId: '3-1-introduction' },
  { id: 'c3-1m-2', text: 'Define electric current. Write its SI unit.', category: '1-mark', topicId: '3-2-electric-current' },
  { id: 'c3-1m-3', text: 'Is electric current a scalar or a vector quantity? Justify your answer.', category: '1-mark', topicId: '3-2-electric-current' },
  { id: 'c3-1m-4', text: 'Write the instantaneous current formula I(t) = lim(ΔQ/Δt) as Δt→0. What does each symbol represent?', category: '1-mark', topicId: '3-2-electric-current' },
  { id: 'c3-1m-5', text: 'What is the order of magnitude of current in: (a) domestic appliances (b) lightning (c) human nerves?', category: '1-mark', topicId: '3-2-electric-current' },
  { id: 'c3-2m-1', text: 'Distinguish between steady current and instantaneous current with mathematical expressions for each.', category: '2-mark', topicId: '3-2-electric-current' },
  { id: 'c3-2m-2', text: 'What happens when a positive charge flows forward and a negative charge flows backward across an area? Derive the net current expression q = q+ − q−.', category: '2-mark', topicId: '3-2-electric-current' },
  { id: 'c3-2m-3', text: 'A torch bulb draws a steady current of 0.3 A. How much charge flows through it in 2 minutes?', category: '2-mark', topicId: '3-2-electric-current' },
  { id: 'c3-3m-1', text: 'Explain with examples how lightning and a torch differ in terms of the nature of electric current flowing in each.', category: '3-mark', topicId: '3-2-electric-current' },
  { id: 'c3-3m-2', text: 'The net charge flowing across a cross-section is given by q(t) = 3t² + 2t coulombs. Find the current at t = 2 s. Is this a steady or a varying current? Justify.', category: '3-mark', topicId: '3-2-electric-current' },
  { id: 'c3-num-1', text: 'If 10⁹ electrons pass through a cross-section of a wire every second, calculate the current. (e = 1.6 × 10⁻¹⁹ C)', category: 'numerical', topicId: '3-2-electric-current' },
  { id: 'c3-num-2', text: 'The current in a wire decreases uniformly from 4 A to 0 A in 8 s. How much charge flows through it in this time?', category: 'numerical', topicId: '3-2-electric-current' },

  // 3.3 Electric Currents in Conductors
  { id: 'c3-1m-6', text: 'What are free electrons? In which type of materials are they present?', category: '1-mark', topicId: '3-3-currents-in-conductors' },
  { id: 'c3-1m-7', text: 'Name the region of the upper atmosphere where free charged particles exist naturally.', category: '1-mark', topicId: '3-3-currents-in-conductors' },
  { id: 'c3-1m-8', text: 'Why is there no net electric current in a metallic conductor in the absence of an electric field?', category: '1-mark', topicId: '3-3-currents-in-conductors' },
  { id: 'c3-2m-4', text: 'An electron colliding with a positive ion in a metal emerges with the same speed but in a random direction. What does this imply about the average velocity of electrons with no applied field?', category: '2-mark', topicId: '3-3-currents-in-conductors' },
  { id: 'c3-2m-5', text: 'Distinguish between the behaviour of electrons in a conductor in the (i) absence and (ii) presence of an external electric field.', category: '2-mark', topicId: '3-3-currents-in-conductors' },
  { id: 'c3-2m-6', text: 'Explain why charges placed on the ends of a metallic cylinder produce only a transient current and not a steady one.', category: '2-mark', topicId: '3-3-currents-in-conductors' },
  { id: 'c3-3m-3', text: 'With the help of a diagram, explain what happens when an electric field is applied across a cylindrical conductor. Why does the current stop after some time, and how is a steady current maintained?', category: '3-mark', topicId: '3-3-currents-in-conductors' },
  { id: 'c3-3m-4', text: 'Compare the nature of charge carriers in: (i) metallic solid conductors (ii) electrolytic solutions (iii) ionosphere. How does this affect current flow in each?', category: '3-mark', topicId: '3-3-currents-in-conductors' },

  // 3.4 Ohm's Law
  { id: 'c3-1m-9', text: "State Ohm's law. Write its mathematical form.", category: '1-mark', topicId: '3-4-ohms-law' },
  { id: 'c3-1m-10', text: 'What is the SI unit of electrical resistance? Define it.', category: '1-mark', topicId: '3-4-ohms-law' },
  { id: 'c3-1m-11', text: 'Define resistivity (ρ). On what factors does it depend?', category: '1-mark', topicId: '3-4-ohms-law' },
  { id: 'c3-1m-12', text: 'What is current density? Write its SI unit.', category: '1-mark', topicId: '3-4-ohms-law' },
  { id: 'c3-1m-13', text: 'Define conductivity σ and write its relation with resistivity.', category: '1-mark', topicId: '3-4-ohms-law' },
  { id: 'c3-2m-7', text: 'Show, using the concept of combining two identical slabs in series, that resistance is proportional to the length of the conductor.', category: '2-mark', topicId: '3-4-ohms-law' },
  { id: 'c3-2m-8', text: 'Show, using the concept of splitting a slab lengthwise, that resistance is inversely proportional to the cross-sectional area.', category: '2-mark', topicId: '3-4-ohms-law' },
  { id: 'c3-2m-9', text: "Write Ohm's law in vector form. Define each quantity in the expression j = σE.", category: '2-mark', topicId: '3-4-ohms-law' },
  { id: 'c3-2m-10', text: 'A wire of length l and cross-sectional area A has resistance R. What will be its resistance if its length is doubled and area is halved?', category: '2-mark', topicId: '3-4-ohms-law' },
  { id: 'c3-3m-5', text: 'Derive the relation R = ρl/A. Define resistivity and state its SI unit.', category: '3-mark', topicId: '3-4-ohms-law' },
  { id: 'c3-3m-6', text: "Starting from V = IR and the geometry of a conductor, derive the vector form of Ohm's law: E = jρ. Define current density j and resistivity ρ.", category: '3-mark', topicId: '3-4-ohms-law' },
  { id: 'c3-5m-1', text: "Starting from Ohm's law V = IR, derive the vector form of Ohm's law j = σE. Define current density j, conductivity σ, and resistivity ρ. State the SI units of each.", category: '5-mark', topicId: '3-4-ohms-law' },
  { id: 'c3-num-3', text: 'A conductor of length 2 m and cross-sectional area 4 × 10⁻⁶ m² has resistance 5 Ω. Find its resistivity.', category: 'numerical', topicId: '3-4-ohms-law' },
  { id: 'c3-num-4', text: 'A negligibly small current is passed through a wire of length 15 m and uniform cross-section 6.0 × 10⁻⁷ m², and its resistance is measured to be 5.0 Ω. What is the resistivity of the material? (NCERT 3.4)', category: 'numerical', topicId: '3-4-ohms-law' },

  // 3.5 Drift of Electrons and the Origin of Resistivity
  { id: 'c3-1m-14', text: 'Define drift velocity of electrons.', category: '1-mark', topicId: '3-5-drift-velocity' },
  { id: 'c3-1m-15', text: 'In which direction do electrons drift in a metallic conductor when an electric field E is applied?', category: '1-mark', topicId: '3-5-drift-velocity' },
  { id: 'c3-1m-16', text: 'Define relaxation time τ of electrons in a conductor.', category: '1-mark', topicId: '3-5-drift-velocity' },
  { id: 'c3-1m-17', text: 'Write the expression for drift velocity vd in terms of e, E, τ, and m.', category: '1-mark', topicId: '3-5-drift-velocity' },
  { id: 'c3-2m-11', text: 'Derive the expression for drift velocity: vd = eEτ/m.', category: '2-mark', topicId: '3-5-drift-velocity' },
  { id: 'c3-2m-12', text: 'Why do electrons acquire only a steady average drift speed and not increasing acceleration, despite being acted on by an electric field?', category: '2-mark', topicId: '3-5-drift-velocity' },
  { id: 'c3-2m-13', text: 'Even though electron drift speed is very small (~mm/s), electric current is established almost instantly when a circuit is closed. Explain why.', category: '2-mark', topicId: '3-5-drift-velocity' },
  { id: 'c3-2m-14', text: 'The drift speed of electrons is superposed over their thermal velocities. Explain this statement.', category: '2-mark', topicId: '3-5-drift-velocity' },
  { id: 'c3-3m-7', text: 'Derive the expression for current I = neAvd. Define each symbol.', category: '3-mark', topicId: '3-5-drift-velocity' },
  { id: 'c3-3m-8', text: 'Using the drift velocity model, derive the expression for conductivity σ = ne²τ/m.', category: '3-mark', topicId: '3-5-drift-velocity' },
  { id: 'c3-3m-9', text: 'Are paths of electrons between successive collisions (a) straight lines when no field is applied? (b) curved when field is applied? Justify each answer.', category: '3-mark', topicId: '3-5-drift-velocity' },
  { id: 'c3-5m-2', text: "Using the concept of electron drift, derive Ohm's law from first principles and obtain the expression for conductivity in terms of electron density n, electron charge e, mass m, and relaxation time τ.", category: '5-mark', topicId: '3-5-drift-velocity' },
  { id: 'c3-num-5', text: '(NCERT Ex. 3.1) Estimate the average drift speed of conduction electrons in a copper wire of cross-sectional area 1.0 × 10⁻⁷ m² carrying a current of 1.5 A. (n = 8.5 × 10²⁸ m⁻³)', category: 'numerical', topicId: '3-5-drift-velocity' },
  { id: 'c3-num-6', text: 'Compare the drift speed obtained in the above problem with (i) thermal speed of copper atoms at 300 K (~2 × 10² m/s) and (ii) speed of propagation of electric field (3 × 10⁸ m/s).', category: 'numerical', topicId: '3-5-drift-velocity' },
  { id: 'c3-num-7', text: 'The number density of free electrons in a copper conductor is 8.5 × 10²⁸ m⁻³. How long does an electron take to drift from one end of a wire 3.0 m long to its other end? Area = 2.0 × 10⁻⁶ m², current = 3.0 A. (NCERT 3.9)', category: 'numerical', topicId: '3-5-drift-velocity' },

  // 3.5.1 Mobility
  { id: 'c3-1m-18', text: 'Define mobility μ of charge carriers. Write its SI unit.', category: '1-mark', topicId: '3-5-1-mobility' },
  { id: 'c3-1m-19', text: 'Write the expression for mobility in terms of drift velocity and electric field.', category: '1-mark', topicId: '3-5-1-mobility' },
  { id: 'c3-2m-15', text: 'Derive the expression μ = eτ/m for the mobility of electrons.', category: '2-mark', topicId: '3-5-1-mobility' },
  { id: 'c3-2m-16', text: 'Name the charge carriers in: (i) metals (ii) ionised gases (iii) electrolytes. How does this affect mobility?', category: '2-mark', topicId: '3-5-1-mobility' },
  { id: 'c3-num-8', text: 'Calculate the mobility of electrons in a conductor if the relaxation time is 2 × 10⁻¹⁴ s. (mass of electron = 9.1 × 10⁻³¹ kg)', category: 'numerical', topicId: '3-5-1-mobility' },

  // 3.6 Limitations of Ohm's Law
  { id: 'c3-1m-20', text: "Name one device that does not obey Ohm's law.", category: '1-mark', topicId: '3-6-limitations-ohms-law' },
  { id: 'c3-1m-21', text: 'What is a non-ohmic conductor? Give one example.', category: '1-mark', topicId: '3-6-limitations-ohms-law' },
  { id: 'c3-1m-22', text: 'What does the slope of the V-I graph represent for an ohmic conductor?', category: '1-mark', topicId: '3-6-limitations-ohms-law' },
  { id: 'c3-2m-17', text: "State three types of deviations from Ohm's law with one example for each type.", category: '2-mark', topicId: '3-6-limitations-ohms-law' },
  { id: 'c3-2m-18', text: 'Sketch the V-I characteristic of (a) an ohmic conductor and (b) a semiconductor diode. How do they differ?', category: '2-mark', topicId: '3-6-limitations-ohms-law' },
  { id: 'c3-3m-10', text: "What is GaAs? Describe its unique V-I behaviour showing negative resistance and explain how it violates Ohm's law.", category: '3-mark', topicId: '3-6-limitations-ohms-law' },
  { id: 'c3-3m-11', text: "A diode has an asymmetric V-I characteristic. Explain what this means and why it violates Ohm's law type (b) deviation.", category: '3-mark', topicId: '3-6-limitations-ohms-law' },

  // 3.7 & 3.8 Resistivity of Various Materials and Temperature Dependence
  { id: 'c3-1m-23', text: 'What is the range of resistivity of metals?', category: '1-mark', topicId: '3-7-resistivity-materials' },
  { id: 'c3-1m-24', text: 'How does the resistivity of a semiconductor change with increase in temperature?', category: '1-mark', topicId: '3-8-temperature-dependence' },
  { id: 'c3-1m-25', text: 'Define temperature coefficient of resistivity α.', category: '1-mark', topicId: '3-8-temperature-dependence' },
  { id: 'c3-1m-26', text: 'Why does the resistivity of a metal increase with temperature?', category: '1-mark', topicId: '3-8-temperature-dependence' },
  { id: 'c3-1m-27', text: 'Name two alloys that have very weak temperature dependence of resistivity. State one use.', category: '1-mark', topicId: '3-8-temperature-dependence' },
  { id: 'c3-2m-19', text: 'Write the formula ρT = ρ₀[1 + α(T − T₀)] and define each term. What does the sign of α indicate for metals versus semiconductors?', category: '2-mark', topicId: '3-8-temperature-dependence' },
  { id: 'c3-2m-20', text: 'Classify materials into conductors, semiconductors, and insulators on the basis of resistivity, giving typical ranges.', category: '2-mark', topicId: '3-7-resistivity-materials' },
  { id: 'c3-2m-21', text: 'Why is nichrome used in wire-wound standard resistors?', category: '2-mark', topicId: '3-8-temperature-dependence' },
  { id: 'c3-3m-12', text: 'Explain qualitatively, using ρ = m/(ne²τ), why the resistivity of metals increases but resistivity of semiconductors decreases with increasing temperature.', category: '3-mark', topicId: '3-8-temperature-dependence' },
  { id: 'c3-3m-13', text: 'A graph of ρT versus T for copper deviates from a straight line at very low temperatures. Explain why Eq. 3.26 has limited applicability.', category: '3-mark', topicId: '3-8-temperature-dependence' },
  { id: 'c3-5m-3', text: 'Discuss the temperature dependence of resistivity for: (a) metals (b) alloys like nichrome (c) semiconductors. Draw a labelled graph for each case and explain the physical basis of each behaviour.', category: '5-mark', topicId: '3-8-temperature-dependence' },
  { id: 'c3-num-9', text: '(NCERT Ex. 3.3) An electric toaster uses nichrome for its heating element. Resistance at room temperature 27 °C is 75.3 Ω. When connected to 230 V, current settles to 2.68 A. Find steady temperature. (α = 1.70 × 10⁻⁴ °C⁻¹)', category: 'numerical', topicId: '3-8-temperature-dependence' },
  { id: 'c3-num-10', text: '(NCERT Ex. 3.4) Platinum resistance thermometer: resistance at 0 °C = 5 Ω, at 100 °C = 5.23 Ω, in a hot bath = 5.795 Ω. Find the temperature of the bath.', category: 'numerical', topicId: '3-8-temperature-dependence' },
  { id: 'c3-num-11', text: '(NCERT 3.3) At room temperature 27.0 °C, resistance of a heating element is 100 Ω. What is the temperature if resistance is found to be 117 Ω? (α = 1.70 × 10⁻⁴ °C⁻¹)', category: 'numerical', topicId: '3-8-temperature-dependence' },
  { id: 'c3-num-12', text: '(NCERT 3.5) A silver wire has resistance 2.1 Ω at 27.5 °C and 2.7 Ω at 100 °C. Determine the temperature coefficient of resistivity of silver.', category: 'numerical', topicId: '3-8-temperature-dependence' },
  { id: 'c3-num-13', text: '(NCERT 3.6) A heating element using nichrome connected to 230 V draws initial current 3.2 A settling to 2.8 A. Find steady temperature if room temperature is 27.0 °C. (α = 1.70 × 10⁻⁴ °C⁻¹)', category: 'numerical', topicId: '3-8-temperature-dependence' },

  // 3.9 Electrical Energy, Power
  { id: 'c3-1m-28', text: 'Write the expression for power dissipated in a resistor R carrying current I with voltage V.', category: '1-mark', topicId: '3-9-electrical-energy-power' },
  { id: 'c3-1m-29', text: 'What is "ohmic loss"? In which form is energy dissipated?', category: '1-mark', topicId: '3-9-electrical-energy-power' },
  { id: 'c3-1m-30', text: 'Why are high-voltage transmission lines used for power distribution?', category: '1-mark', topicId: '3-9-electrical-energy-power' },
  { id: 'c3-2m-22', text: "Derive the expression P = I²R for power dissipated in a resistor from P = IV and Ohm's law.", category: '2-mark', topicId: '3-9-electrical-energy-power' },
  { id: 'c3-2m-23', text: 'Show that power wasted in transmission cables is Pc = P²Rc/V². Hence justify why power is transmitted at high voltage.', category: '2-mark', topicId: '3-9-electrical-energy-power' },
  { id: 'c3-2m-24', text: 'In a conductor, charge carriers do not move freely. Where does the electrical energy go? Explain using the concept of collisions.', category: '2-mark', topicId: '3-9-electrical-energy-power' },
  { id: 'c3-3m-14', text: "Derive an expression for the heat produced in a conductor carrying current I in time t (Joule's law of heating). Start from the work done by the electric field.", category: '3-mark', topicId: '3-9-electrical-energy-power' },
  { id: 'c3-3m-15', text: 'A device of power P is connected via cables of resistance Rc to a supply of voltage V. Derive the expression for power lost in cables and explain the strategy used in power transmission.', category: '3-mark', topicId: '3-9-electrical-energy-power' },
  { id: 'c3-5m-4', text: '(a) Derive the expression for energy dissipated W = IVΔt in a conductor. (b) Hence derive P = IV = I²R = V²/R. (c) Explain the application to power transmission. (d) What is the role of a transformer in the transmission network?', category: '5-mark', topicId: '3-9-electrical-energy-power' },
  { id: 'c3-num-14', text: 'A 60 W bulb is connected to a 220 V supply. Find (a) resistance of the filament and (b) current through it.', category: 'numerical', topicId: '3-9-electrical-energy-power' },
  { id: 'c3-num-15', text: 'Two resistors of 4 Ω and 6 Ω are connected in parallel across a 12 V battery. Calculate the power dissipated in each resistor.', category: 'numerical', topicId: '3-9-electrical-energy-power' },
  { id: 'c3-num-16', text: 'An electric iron of resistance 25 Ω takes a current of 8 A. Calculate the heat developed in 30 minutes.', category: 'numerical', topicId: '3-9-electrical-energy-power' },

  // 3.10 Cells, EMF, Internal Resistance
  { id: 'c3-1m-31', text: 'Define electromotive force (emf) of a cell. Is it actually a force? Why is it called so?', category: '1-mark', topicId: '3-10-cells-emf' },
  { id: 'c3-1m-32', text: 'Define internal resistance of a cell.', category: '1-mark', topicId: '3-10-cells-emf' },
  { id: 'c3-1m-33', text: 'What is the terminal voltage of a cell when no current is drawn from it?', category: '1-mark', topicId: '3-10-cells-emf' },
  { id: 'c3-1m-34', text: 'Write the expression for current I in a circuit with a cell of emf ε, internal resistance r, and external resistance R.', category: '1-mark', topicId: '3-10-cells-emf' },
  { id: 'c3-2m-25', text: 'Derive the expression V = ε − Ir for the terminal voltage of a cell under load.', category: '2-mark', topicId: '3-10-cells-emf' },
  { id: 'c3-2m-26', text: 'When is the terminal voltage of a cell (a) less than emf (b) equal to emf? Explain.', category: '2-mark', topicId: '3-10-cells-emf' },
  { id: 'c3-2m-27', text: 'What is the maximum current that can be drawn from a cell of emf ε and internal resistance r? Explain why cells should not be short-circuited.', category: '2-mark', topicId: '3-10-cells-emf' },
  { id: 'c3-3m-16', text: 'A cell has two electrodes P (positive) and N (negative) immersed in electrolyte. Explain how emf ε = V+ + V− arises. What is the significance of internal resistance r?', category: '3-mark', topicId: '3-10-cells-emf' },
  { id: 'c3-3m-17', text: 'Distinguish between emf and terminal voltage of a cell. Under what conditions is terminal voltage approximately equal to emf?', category: '3-mark', topicId: '3-10-cells-emf' },
  { id: 'c3-5m-5', text: '(a) With the help of a labelled diagram, explain the construction of an electrolytic cell. (b) Define emf and internal resistance. (c) Derive V = ε − Ir. (d) Draw a graph of V vs I for a cell with internal resistance.', category: '5-mark', topicId: '3-10-cells-emf' },
  { id: 'c3-num-17', text: '(NCERT 3.1) The storage battery of a car has emf 12 V. Internal resistance is 0.4 Ω. What is the maximum current that can be drawn from the battery?', category: 'numerical', topicId: '3-10-cells-emf' },
  { id: 'c3-num-18', text: '(NCERT 3.2) A battery of emf 10 V and internal resistance 3 Ω is connected to a resistor. Current in circuit is 0.5 A. Find (a) resistance of the resistor and (b) terminal voltage of the battery when circuit is closed.', category: 'numerical', topicId: '3-10-cells-emf' },
  { id: 'c3-num-19', text: '(NCERT 3.8) A storage battery of emf 8.0 V and internal resistance 0.5 Ω is being charged by a 120 V dc supply using a series resistor of 15.5 Ω. What is the terminal voltage of the battery during charging? What is the purpose of the series resistor?', category: 'numerical', topicId: '3-10-cells-emf' },

  // 3.11 Cells in Series and in Parallel
  { id: 'c3-1m-35', text: 'Write the expression for equivalent emf of n cells of emf ε each connected in series.', category: '1-mark', topicId: '3-11-cells-series-parallel' },
  { id: 'c3-1m-36', text: 'Write the expression for equivalent internal resistance of n cells in series.', category: '1-mark', topicId: '3-11-cells-series-parallel' },
  { id: 'c3-1m-37', text: 'In parallel combination of cells, what is the equivalent internal resistance if each cell has internal resistance r?', category: '1-mark', topicId: '3-11-cells-series-parallel' },
  { id: 'c3-2m-28', text: 'Two cells of emf ε₁ and ε₂ with internal resistances r₁ and r₂ are connected in series aiding. Write expressions for εeq and req.', category: '2-mark', topicId: '3-11-cells-series-parallel' },
  { id: 'c3-2m-29', text: 'If two cells are connected with their negative terminals joined together (opposing series), write the expression for equivalent emf.', category: '2-mark', topicId: '3-11-cells-series-parallel' },
  { id: 'c3-2m-30', text: 'Under what condition is a parallel combination of cells preferred over a series combination?', category: '2-mark', topicId: '3-11-cells-series-parallel' },
  { id: 'c3-3m-18', text: 'Derive expressions for equivalent emf and internal resistance when two cells are connected in series.', category: '3-mark', topicId: '3-11-cells-series-parallel' },
  { id: 'c3-3m-19', text: 'Derive expressions for equivalent emf (εeq) and internal resistance (req) when two cells are connected in parallel.', category: '3-mark', topicId: '3-11-cells-series-parallel' },
  { id: 'c3-5m-6', text: '(a) Derive the expressions for εeq and req for n cells in parallel combination. (b) Under what condition does the parallel combination behave like a single cell of emf ε and internal resistance r/n?', category: '5-mark', topicId: '3-11-cells-series-parallel' },
  { id: 'c3-num-20', text: 'Three cells each of emf 2 V and internal resistance 1 Ω are connected (a) in series and (b) in parallel across an external resistance of 2 Ω. Find the current delivered in each case.', category: 'numerical', topicId: '3-11-cells-series-parallel' },
  { id: 'c3-num-21', text: 'Two cells of emf 3 V and 5 V, and internal resistances 1 Ω and 2 Ω, are connected in parallel. Find the equivalent emf and equivalent internal resistance.', category: 'numerical', topicId: '3-11-cells-series-parallel' },

  // 3.12 Kirchhoff's Rules
  { id: 'c3-1m-38', text: "State Kirchhoff's junction (current) rule. On which conservation law is it based?", category: '1-mark', topicId: '3-12-kirchhoffs-rules' },
  { id: 'c3-1m-39', text: "State Kirchhoff's loop (voltage) rule. On which conservation law is it based?", category: '1-mark', topicId: '3-12-kirchhoffs-rules' },
  { id: 'c3-1m-40', text: "In applying Kirchhoff's loop rule, what sign convention is used when traversing a resistor in the direction of current?", category: '1-mark', topicId: '3-12-kirchhoffs-rules' },
  { id: 'c3-2m-31', text: 'At a junction, currents I₁ = 2 A and I₂ = 3 A enter while I₃ and I₄ leave such that I₃ = 2I₄. Find I₃ and I₄.', category: '2-mark', topicId: '3-12-kirchhoffs-rules' },
  { id: 'c3-2m-32', text: "Write the sign conventions used when applying Kirchhoff's loop rule across (a) a resistor (b) a cell being traversed from − to + terminal.", category: '2-mark', topicId: '3-12-kirchhoffs-rules' },
  { id: 'c3-2m-33', text: "Explain why Kirchhoff's loop rule is essentially a statement of conservation of energy.", category: '2-mark', topicId: '3-12-kirchhoffs-rules' },
  { id: 'c3-3m-20', text: "State and explain both of Kirchhoff's rules. Apply the junction rule at a node where currents I₁, I₂ enter and I₃, I₄, I₅ leave.", category: '3-mark', topicId: '3-12-kirchhoffs-rules' },
  { id: 'c3-3m-21', text: "Apply Kirchhoff's rules to the loop ADCA in Fig. 3.17 (NCERT) and write the resulting equation. (10 V source, resistors 4 Ω, 4 Ω, 1 Ω, 2 Ω, 2 Ω, 5 V source)", category: '3-mark', topicId: '3-12-kirchhoffs-rules' },
  { id: 'c3-5m-7', text: '(NCERT Ex. 3.6) Determine the current in each branch of the network shown in Fig. 3.17. (Circuit: 10 V battery, resistors 4 Ω, 4 Ω, 1 Ω, 2 Ω, 2 Ω; 5 V battery)', category: '5-mark', topicId: '3-12-kirchhoffs-rules' },
  { id: 'c3-5m-8', text: '(NCERT Ex. 3.5) A battery of 10 V and negligible internal resistance is connected across diagonally opposite corners of a cubical network of 12 resistors each of resistance 1 Ω. Determine equivalent resistance and current along each edge.', category: '5-mark', topicId: '3-12-kirchhoffs-rules' },
  { id: 'c3-num-22', text: '(NCERT 3.7) Determine the current in each branch of the network shown in Fig. 3.20 (10 Ω, 5 Ω, 5 Ω, 5 Ω, 10 Ω resistors; 10 V battery).', category: 'numerical', topicId: '3-12-kirchhoffs-rules' },

  // 3.13 Wheatstone Bridge
  { id: 'c3-1m-41', text: 'Write the balance condition for a Wheatstone bridge.', category: '1-mark', topicId: '3-13-wheatstone-bridge' },
  { id: 'c3-1m-42', text: 'What is the galvanometer current Ig when a Wheatstone bridge is balanced?', category: '1-mark', topicId: '3-13-wheatstone-bridge' },
  { id: 'c3-1m-43', text: 'What is a meter bridge? On which principle does it work?', category: '1-mark', topicId: '3-13-wheatstone-bridge' },
  { id: 'c3-2m-34', text: 'Describe the Wheatstone bridge circuit with a labelled diagram. Write the balance condition and explain what it means physically.', category: '2-mark', topicId: '3-13-wheatstone-bridge' },
  { id: 'c3-2m-35', text: 'How is an unknown resistance determined using a Wheatstone bridge? Write the formula for the unknown resistance R₄ in terms of R₁, R₂, R₃.', category: '2-mark', topicId: '3-13-wheatstone-bridge' },
  { id: 'c3-3m-22', text: "Derive the balance condition R₁/R₂ = R₃/R₄ for a Wheatstone bridge using Kirchhoff's rules.", category: '3-mark', topicId: '3-13-wheatstone-bridge' },
  { id: 'c3-3m-23', text: "What are the conditions of a balanced Wheatstone bridge? Using Kirchhoff's loop rule for loops ADBA and CBDC, derive the null condition.", category: '3-mark', topicId: '3-13-wheatstone-bridge' },
  { id: 'c3-5m-9', text: '(NCERT Ex. 3.7) The four arms of a Wheatstone bridge have resistances: AB = 100 Ω, BC = 10 Ω, CD = 5 Ω, DA = 60 Ω. A galvanometer of 15 Ω resistance is connected across BD. Calculate the current through the galvanometer when a potential difference of 10 V is maintained across AC.', category: '5-mark', topicId: '3-13-wheatstone-bridge' },
  { id: 'c3-num-23', text: 'In a balanced Wheatstone bridge R₁ = 100 Ω, R₂ = 200 Ω, R₃ = 150 Ω. Find the unknown resistance R₄.', category: 'numerical', topicId: '3-13-wheatstone-bridge' },
  { id: 'c3-num-24', text: 'A Wheatstone bridge has P = 10 Ω, Q = 30 Ω, R = 30 Ω. Find S when bridge is balanced. If S is changed to 31 Ω, will the galvanometer deflect towards B or D?', category: 'numerical', topicId: '3-13-wheatstone-bridge' },

  // Assertion-Reason Questions
  { id: 'c3-ar-1', text: "Assertion: Electric current is a scalar quantity even though it has both magnitude and direction.\nReason: Current does not obey the law of vector addition.", category: 'assertion-reason', topicId: '3-2-electric-current' },
  { id: 'c3-ar-2', text: "Assertion: Drift velocity of electrons is very small (~mm/s), yet current is established almost instantly when a circuit is closed.\nReason: The electric field propagates through the conductor at the speed of light.", category: 'assertion-reason', topicId: '3-5-drift-velocity' },
  { id: 'c3-ar-3', text: "Assertion: The resistance of a metallic conductor increases with temperature.\nReason: The number of free electrons in a metal decreases with increase in temperature.", category: 'assertion-reason', topicId: '3-8-temperature-dependence' },
  { id: 'c3-ar-4', text: "Assertion: Nichrome is used as a heating element in electric appliances.\nReason: Nichrome has high resistivity and high melting point.", category: 'assertion-reason', topicId: '3-9-electrical-energy-power' },
  { id: 'c3-ar-5', text: "Assertion: A battery of higher emf does not necessarily deliver a larger current to an external circuit.\nReason: The current also depends on the internal resistance of the battery and the external resistance.", category: 'assertion-reason', topicId: '3-10-cells-emf' },
  { id: 'c3-ar-6', text: "Assertion: Kirchhoff's junction rule is a statement of conservation of charge.\nReason: At steady state, there is no accumulation of charge at any junction.", category: 'assertion-reason', topicId: '3-12-kirchhoffs-rules' },
  { id: 'c3-ar-7', text: "Assertion: In a balanced Wheatstone bridge, the galvanometer shows zero deflection even if its resistance is changed.\nReason: The balance condition R₁/R₂ = R₃/R₄ is independent of the galvanometer resistance.", category: 'assertion-reason', topicId: '3-13-wheatstone-bridge' },

  // Case Study Questions
  { id: 'c3-cs-1', text: "Case Study: Household Wiring and Electrical Safety\nIn household wiring, different electrical appliances are connected in parallel across a 220 V supply. Each appliance is rated for a specific power consumption. The main supply is protected by a fuse or MCB (miniature circuit breaker). When too many appliances are switched on simultaneously, the total current exceeds the safe limit and the fuse blows, protecting the wiring from overheating. The resistance of the connecting wires, though small, also dissipates some energy as heat (Joule heating).\nQuestions:\n(a) Why are household appliances connected in parallel rather than in series?\n(b) A household fuse is rated 5 A. Which of the following sets of appliances can be used simultaneously on a 220 V circuit: (i) 1000 W heater and 60 W bulb (ii) 100 W TV and 500 W iron?\n(c) If the connecting wire in a household circuit has resistance 0.5 Ω and carries a current of 4 A, calculate the power wasted in the wire.\n(d) What is the function of an MCB? On what principle does it work?", category: 'case-study', topicId: '3-9-electrical-energy-power' },
  { id: 'c3-cs-2', text: "Case Study: Resistance and Temperature — Thermistors\nA thermistor is a temperature-sensitive resistor made from semiconductor material. Unlike metals, its resistance decreases sharply with increasing temperature. This property is exploited in temperature-sensing circuits, fire alarms, and medical thermometers. The steep variation of resistance with temperature makes thermistors more sensitive than platinum resistance thermometers for small temperature ranges. NTC (Negative Temperature Coefficient) thermistors decrease in resistance with temperature, while PTC (Positive Temperature Coefficient) ones increase.\nQuestions:\n(a) Why does resistance of a thermistor decrease with increasing temperature?\n(b) Compare the temperature dependence of resistivity of a thermistor (semiconductor) with that of a metallic conductor. Draw a rough graph.\n(c) A thermistor has resistance 1000 Ω at 25 °C and 100 Ω at 75 °C. It is connected in series with a fixed resistor of 500 Ω and a 6 V battery. Find the current at each temperature.\n(d) Why are thermistors preferred over metallic resistance thermometers for detecting small temperature changes?", category: 'case-study', topicId: '3-8-temperature-dependence' },

  // HOTS Questions
  { id: 'c3-hots-1', text: 'A copper wire is stretched to make it 0.1% longer. By what percentage does its resistance change? (Assume volume is constant.)', category: 'hots', topicId: '3-4-ohms-law' },
  { id: 'c3-hots-2', text: 'Two cells of emf ε₁ = 3 V (r₁ = 1 Ω) and ε₂ = 2 V (r₂ = 2 Ω) are connected in parallel such that their positive terminals are together. Find the equivalent emf and effective internal resistance. What does a negative value of current from one cell signify?', category: 'hots', topicId: '3-11-cells-series-parallel' },
  { id: 'c3-hots-3', text: 'In a Wheatstone bridge all four resistors are equal at R. The bridge is balanced. One resistor is now heated and its resistance increases to R + ΔR. Will the bridge remain balanced? If not, in which direction does the galvanometer deflect? Explain using the balance condition.', category: 'hots', topicId: '3-13-wheatstone-bridge' },
  { id: 'c3-hots-4', text: 'Using the relation ρ = m/(ne²τ), explain why: (a) Silver has lower resistivity than iron despite both being metals. (b) Adding impurities to a pure metal increases its resistivity.', category: 'hots', topicId: '3-5-drift-velocity' },
  { id: 'c3-hots-5', text: 'A long straight wire of radius a carries a steady current I distributed uniformly across its cross-section. Using the drift velocity model, show that the current density is j = I/(πa²) and find the drift speed of electrons. (n = 8.5 × 10²⁸ m⁻³, I = 10 A, a = 1 mm)', category: 'hots', topicId: '3-5-drift-velocity' },
];

// Chapter 4: Moving Charges and Magnetism - Question Bank
const chapter4Questions: Question[] = [
  // 4.1 Introduction
  { id: 'c4-1m-1', text: 'Who discovered the relationship between electric current and magnetism in 1820? Describe his key observation.', category: '1-mark', topicId: '4-1-introduction' },
  { id: 'c4-1m-2', text: 'What did Oersted conclude from the deflection of a compass needle near a current-carrying wire?', category: '1-mark', topicId: '4-1-introduction' },
  { id: 'c4-1m-3', text: 'How does reversing the direction of current in a straight wire affect the deflection of a nearby compass needle?', category: '1-mark', topicId: '4-1-introduction' },
  { id: 'c4-1m-4', text: 'Name the scientist who unified electricity and magnetism in 1864 by formulating the laws obeyed by both.', category: '1-mark', topicId: '4-1-introduction' },
  { id: 'c4-2m-1', text: 'Describe the shape and direction of the magnetic field lines formed around a straight current-carrying conductor, as revealed by iron filings.', category: '2-mark', topicId: '4-1-introduction' },
  { id: 'c4-2m-2', text: "What evidence from Oersted's experiment shows that the magnetic field strength depends on both current magnitude and distance from the wire?", category: '2-mark', topicId: '4-1-introduction' },
  { id: 'c4-3m-1', text: "Briefly describe Oersted's experiment in 1820. What was the significance of his discovery for the development of physics?", category: '3-mark', topicId: '4-1-introduction' },

  // 4.2.1 Sources and Fields
  { id: 'c4-1m-5', text: 'What produces a magnetic field in addition to an electric field?', category: '1-mark', topicId: '4-2-1-sources-fields' },
  { id: 'c4-1m-6', text: 'State the principle of superposition as applied to magnetic fields.', category: '1-mark', topicId: '4-2-1-sources-fields' },
  { id: 'c4-1m-7', text: 'How does a magnetic field B(r) differ from an electric field E(r) in terms of the nature of the source that produces it?', category: '1-mark', topicId: '4-2-1-sources-fields' },
  { id: 'c4-2m-3', text: 'Compare electric field and magnetic field with respect to: (i) source, (ii) dependence on time, (iii) principle of superposition.', category: '2-mark', topicId: '4-2-1-sources-fields' },
  { id: 'c4-2m-4', text: 'In what two stages can the interaction between two moving charges be understood?', category: '2-mark', topicId: '4-2-1-sources-fields' },

  // 4.2.2 Magnetic Field, Lorentz Force
  { id: 'c4-1m-8', text: 'Write the expression for the Lorentz force on a charge q moving with velocity v in the presence of electric field E and magnetic field B.', category: '1-mark', topicId: '4-2-2-lorentz-force' },
  { id: 'c4-1m-9', text: 'What is the SI unit of magnetic field B? Define it.', category: '1-mark', topicId: '4-2-2-lorentz-force' },
  { id: 'c4-1m-10', text: 'Under what condition is the magnetic force on a moving charge zero?', category: '1-mark', topicId: '4-2-2-lorentz-force' },
  { id: 'c4-1m-11', text: 'Does the magnetic force do any work on a moving charged particle? Justify.', category: '1-mark', topicId: '4-2-2-lorentz-force' },
  { id: 'c4-1m-12', text: 'What is the relation between tesla and gauss?', category: '1-mark', topicId: '4-2-2-lorentz-force' },
  { id: 'c4-2m-5', text: 'List four important features of the magnetic force q(v × B) on a charged particle.', category: '2-mark', topicId: '4-2-2-lorentz-force' },
  { id: 'c4-2m-6', text: 'A positive charge moves in the +x direction and the magnetic field is along +y. Using the right-hand rule, find the direction of the magnetic force on the charge.', category: '2-mark', topicId: '4-2-2-lorentz-force' },
  { id: 'c4-2m-7', text: 'Why does a negative charge experience a force opposite to that on a positive charge in the same magnetic field?', category: '2-mark', topicId: '4-2-2-lorentz-force' },
  { id: 'c4-2m-8', text: 'Compare the Lorentz magnetic force with the electric force qE in terms of: (i) direction with respect to velocity, (ii) work done on the charge, (iii) ability to change kinetic energy.', category: '2-mark', topicId: '4-2-2-lorentz-force' },
  { id: 'c4-3m-2', text: 'State all the features of the Lorentz force. Explain why magnetic force cannot change the speed of a charged particle but can change its direction.', category: '3-mark', topicId: '4-2-2-lorentz-force' },
  { id: 'c4-3m-3', text: '(NCERT Ex. 4.2) If the magnetic field is parallel to the +y axis and a charged particle moves along the +x axis, find the direction of Lorentz force for (a) an electron and (b) a proton.', category: '3-mark', topicId: '4-2-2-lorentz-force' },
  { id: 'c4-num-1', text: 'A proton moves with velocity 3 × 10⁶ m/s along the +x axis in a magnetic field B = 0.5 T along the +z axis. Find the magnitude and direction of the magnetic force on the proton. (q = 1.6 × 10⁻¹⁹ C)', category: 'numerical', topicId: '4-2-2-lorentz-force' },
  { id: 'c4-num-2', text: 'An electron moves with velocity 4 × 10⁶ m/s at 30° to a magnetic field of 0.2 T. Calculate the magnitude of the magnetic force on the electron.', category: 'numerical', topicId: '4-2-2-lorentz-force' },

  // 4.2.3 Force on Current-Carrying Conductor
  { id: 'c4-1m-13', text: 'Write the expression for force on a straight current-carrying conductor of length l placed in a uniform magnetic field B.', category: '1-mark', topicId: '4-2-3-force-conductor' },
  { id: 'c4-1m-14', text: 'When is the force on a current-carrying conductor placed in a magnetic field maximum? When is it zero?', category: '1-mark', topicId: '4-2-3-force-conductor' },
  { id: 'c4-2m-9', text: 'Starting from the force on a single moving charge q v × B, derive the expression F = Il × B for the force on a straight current-carrying conductor.', category: '2-mark', topicId: '4-2-3-force-conductor' },
  { id: 'c4-2m-10', text: 'A straight wire carries current I. The force on a segment of length l in a magnetic field B at angle θ to the wire is F = BIl sinθ. Derive this from the vector expression.', category: '2-mark', topicId: '4-2-3-force-conductor' },
  { id: 'c4-3m-4', text: 'Show that the magnetic force on a current-carrying conductor in a uniform magnetic field depends on current density j, cross-sectional area A, drift velocity vd, and external magnetic field B. Hence derive F = Il × B.', category: '3-mark', topicId: '4-2-3-force-conductor' },
  { id: 'c4-3m-5', text: 'For a wire of arbitrary shape in a magnetic field, how is the total Lorentz force calculated? Write the integral form.', category: '3-mark', topicId: '4-2-3-force-conductor' },
  { id: 'c4-5m-1', text: '(a) Derive the expression for force on a straight current-carrying conductor of length l in a uniform external magnetic field B. (b) A straight wire of mass 200 g and length 1.5 m carries a current of 2 A. It is suspended in mid-air by a uniform horizontal magnetic field B. What is the magnitude of B? (NCERT Ex. 4.1)', category: '5-mark', topicId: '4-2-3-force-conductor' },
  { id: 'c4-num-3', text: '(NCERT 4.5) What is the magnitude of magnetic force per unit length on a wire carrying a current of 8 A and making an angle of 30° with the direction of a uniform magnetic field of 0.15 T?', category: 'numerical', topicId: '4-2-3-force-conductor' },
  { id: 'c4-num-4', text: '(NCERT 4.6) A 3.0 cm wire carrying a current of 10 A is placed inside a solenoid perpendicular to its axis. The magnetic field inside the solenoid is 0.27 T. What is the magnetic force on the wire?', category: 'numerical', topicId: '4-2-3-force-conductor' },

  // 4.3 Motion in a Magnetic Field
  { id: 'c4-1m-15', text: 'What is the shape of the path of a charged particle moving perpendicular to a uniform magnetic field?', category: '1-mark', topicId: '4-3-motion-magnetic-field' },
  { id: 'c4-1m-16', text: 'Write the expression for the radius of the circular path of a charged particle in a uniform magnetic field.', category: '1-mark', topicId: '4-3-motion-magnetic-field' },
  { id: 'c4-1m-17', text: 'What is cyclotron frequency? Write its expression.', category: '1-mark', topicId: '4-3-motion-magnetic-field' },
  { id: 'c4-1m-18', text: 'Why is the cyclotron frequency independent of the speed of the particle?', category: '1-mark', topicId: '4-3-motion-magnetic-field' },
  { id: 'c4-1m-19', text: 'What is the shape of the path of a charged particle when it has a velocity component parallel to the magnetic field?', category: '1-mark', topicId: '4-3-motion-magnetic-field' },
  { id: 'c4-1m-20', text: 'Define the pitch of a helical path.', category: '1-mark', topicId: '4-3-motion-magnetic-field' },
  { id: 'c4-2m-11', text: 'Derive the expression r = mv/(qB) for the radius of the circular orbit of a charged particle in a uniform magnetic field.', category: '2-mark', topicId: '4-3-motion-magnetic-field' },
  { id: 'c4-2m-12', text: 'Show that the cyclotron frequency ν = qB/(2πm) is independent of the particle speed. Why is this property important for cyclotron design?', category: '2-mark', topicId: '4-3-motion-magnetic-field' },
  { id: 'c4-2m-13', text: 'A charged particle enters a uniform magnetic field at an angle to the field direction. Explain why it follows a helical path. What determines the pitch?', category: '2-mark', topicId: '4-3-motion-magnetic-field' },
  { id: 'c4-2m-14', text: 'Compare the motion of a charged particle in: (i) an electric field only, (ii) a magnetic field only. In which case does the particle gain kinetic energy?', category: '2-mark', topicId: '4-3-motion-magnetic-field' },
  { id: 'c4-3m-6', text: 'A positive charge q of mass m moves with velocity v perpendicular to a uniform magnetic field B. Show that it moves in a circle. Derive expressions for (a) radius r, (b) angular frequency ω, (c) time period T.', category: '3-mark', topicId: '4-3-motion-magnetic-field' },
  { id: 'c4-3m-7', text: 'Explain helical motion of a charged particle in a magnetic field. Derive the expression for pitch p = 2πmv‖/(qB).', category: '3-mark', topicId: '4-3-motion-magnetic-field' },
  { id: 'c4-5m-2', text: '(a) Derive the expression for the radius and frequency of circular motion of a charged particle in a uniform magnetic field. (b) Why does the magnetic force do no work? (c) (NCERT Ex. 4.3) Find the radius of path, frequency, and energy in keV of an electron (m = 9 × 10⁻³¹ kg, q = 1.6 × 10⁻¹⁹ C) moving at 3 × 10⁷ m/s in a magnetic field of 6 × 10⁻⁴ T.', category: '5-mark', topicId: '4-3-motion-magnetic-field' },
  { id: 'c4-num-5', text: '(NCERT 4.11) In a chamber, a uniform magnetic field of 6.5 G is maintained. An electron is shot into the field with speed 4.8 × 10⁶ m/s normal to the field. Determine the radius of the circular orbit. (e = 1.6 × 10⁻¹⁹ C, mₑ = 9.1 × 10⁻³¹ kg)', category: 'numerical', topicId: '4-3-motion-magnetic-field' },
  { id: 'c4-num-6', text: '(NCERT 4.12) From the above exercise, obtain the frequency of revolution of the electron. Does the answer depend on the speed? Explain.', category: 'numerical', topicId: '4-3-motion-magnetic-field' },
  { id: 'c4-num-7', text: 'A proton (m = 1.67 × 10⁻²⁷ kg, q = 1.6 × 10⁻¹⁹ C) moves in a circle of radius 5 cm in a magnetic field of 0.1 T. Find its speed and kinetic energy.', category: 'numerical', topicId: '4-3-motion-magnetic-field' },

  // 4.4 Biot-Savart Law
  { id: 'c4-1m-21', text: 'State Biot-Savart law in words.', category: '1-mark', topicId: '4-4-biot-savart' },
  { id: 'c4-1m-22', text: 'Write the vector form of Biot-Savart law for the magnetic field dB due to a current element Idl.', category: '1-mark', topicId: '4-4-biot-savart' },
  { id: 'c4-1m-23', text: 'What is the value of µ₀/4π? Write its SI unit.', category: '1-mark', topicId: '4-4-biot-savart' },
  { id: 'c4-1m-24', text: 'What is the permeability of free space µ₀? Write its value.', category: '1-mark', topicId: '4-4-biot-savart' },
  { id: 'c4-1m-25', text: 'At what angle between the current element dl and the position vector r is the magnetic field due to the element maximum?', category: '1-mark', topicId: '4-4-biot-savart' },
  { id: 'c4-2m-15', text: "State Biot-Savart law. Compare it with Coulomb's law — mention two similarities and two differences.", category: '2-mark', topicId: '4-4-biot-savart' },
  { id: 'c4-2m-16', text: 'Why is the magnetic field due to a current element zero in the direction along the element (θ = 0)?', category: '2-mark', topicId: '4-4-biot-savart' },
  { id: 'c4-2m-17', text: 'Explain why the magnetic field due to an infinitely long wire remains finite even though the wire is infinite.', category: '2-mark', topicId: '4-4-biot-savart' },
  { id: 'c4-2m-18', text: 'What is the relationship between ε₀, µ₀, and the speed of light c? Write the expression and explain its significance.', category: '2-mark', topicId: '4-4-biot-savart' },
  { id: 'c4-3m-8', text: "State the Biot-Savart law. List four points of comparison between Biot-Savart law and Coulomb's law for the electrostatic field.", category: '3-mark', topicId: '4-4-biot-savart' },
  { id: 'c4-3m-9', text: 'Write the Biot-Savart law in vector form. Explain each term. Show that |dB| = µ₀Idl sinθ/(4πr²).', category: '3-mark', topicId: '4-4-biot-savart' },
  { id: 'c4-5m-3', text: "(a) State and explain Biot-Savart law with a labelled diagram. (b) List four important similarities and differences between Biot-Savart law and Coulomb's law. (c) (NCERT Ex. 4.4) An element Δl = Δx î is placed at the origin carrying current I = 10 A. What is the magnetic field on the y-axis at distance 0.5 m? Δx = 1 cm.", category: '5-mark', topicId: '4-4-biot-savart' },
  { id: 'c4-num-8', text: 'A current element of length 2 mm carries a current of 5 A. Calculate the magnetic field at a point P located 10 cm away, if the angle between the element and the line joining it to P is 60°.', category: 'numerical', topicId: '4-4-biot-savart' },

  // 4.5 Magnetic Field on Axis of Circular Current Loop
  { id: 'c4-1m-26', text: 'Write the expression for the magnetic field at the centre of a circular coil of radius R carrying current I.', category: '1-mark', topicId: '4-5-circular-loop' },
  { id: 'c4-1m-27', text: 'Write the expression for the magnetic field at a point on the axis of a circular current loop at distance x from the centre.', category: '1-mark', topicId: '4-5-circular-loop' },
  { id: 'c4-1m-28', text: 'State the right-hand thumb rule for determining the direction of the magnetic field due to a circular current loop.', category: '1-mark', topicId: '4-5-circular-loop' },
  { id: 'c4-2m-19', text: 'Using Biot-Savart law, explain why only the axial component of the magnetic field survives when integrating over a complete circular loop.', category: '2-mark', topicId: '4-5-circular-loop' },
  { id: 'c4-2m-20', text: 'Write the expression for the axial field of a circular current loop. What does it reduce to at: (a) the centre (x = 0)? (b) very large distances (x >> R)?', category: '2-mark', topicId: '4-5-circular-loop' },
  { id: 'c4-2m-21', text: 'How does the magnetic field on the axis of a circular loop vary with distance from the centre? Draw a qualitative graph.', category: '2-mark', topicId: '4-5-circular-loop' },
  { id: 'c4-3m-10', text: 'Derive the expression for the magnetic field at a point P on the axis of a circular loop of radius R carrying current I, at a distance x from the centre.', category: '3-mark', topicId: '4-5-circular-loop' },
  { id: 'c4-3m-11', text: 'For a circular coil of N turns, radius R, carrying current I, write the field at the centre and at a large axial distance. Show how the loop behaves as a magnetic dipole at large distances.', category: '3-mark', topicId: '4-5-circular-loop' },
  { id: 'c4-5m-4', text: '(a) Using Biot-Savart law, derive the expression B = µ₀IR²/[2(x²+R²)^(3/2)] for the magnetic field at a point on the axis of a circular current loop. (b) Hence find the field at the centre. (c) (NCERT Ex. 4.6) Find the magnetic field at the centre of a tightly wound 100-turn coil of radius 10 cm carrying a current of 1 A.', category: '5-mark', topicId: '4-5-circular-loop' },
  { id: 'c4-num-9', text: '(NCERT 4.1) A circular coil of 100 turns, each of radius 8.0 cm, carries a current of 0.40 A. What is the magnitude of magnetic field B at the centre?', category: 'numerical', topicId: '4-5-circular-loop' },
  { id: 'c4-num-10', text: '(NCERT Ex. 4.5) A straight wire carrying 12 A is bent into a semi-circular arc of radius 2.0 cm. (a) What is the magnetic field due to the straight segments? (b) What is the field at the centre due to the semicircle? (c) Would the answer change for the opposite orientation?', category: 'numerical', topicId: '4-5-circular-loop' },

  // 4.6 Ampere's Circuital Law
  { id: 'c4-1m-29', text: "State Ampere's circuital law.", category: '1-mark', topicId: '4-6-amperes-law' },
  { id: 'c4-1m-30', text: "Write the mathematical expression for Ampere's circuital law.", category: '1-mark', topicId: '4-6-amperes-law' },
  { id: 'c4-1m-31', text: 'What is an Amperian loop?', category: '1-mark', topicId: '4-6-amperes-law' },
  { id: 'c4-1m-32', text: "For a long straight wire, write the expression for magnetic field B at a distance r from the wire using Ampere's law.", category: '1-mark', topicId: '4-6-amperes-law' },
  { id: 'c4-1m-33', text: "Ampere's law is analogous to which law in electrostatics?", category: '1-mark', topicId: '4-6-amperes-law' },
  { id: 'c4-2m-22', text: "State the three conditions under which the simplified form BL = µ₀Iₑ of Ampere's law is applicable.", category: '2-mark', topicId: '4-6-amperes-law' },
  { id: 'c4-2m-23', text: "Apply Ampere's circuital law to a long straight wire to derive B = µ₀I/(2πr). Explain the sign convention used.", category: '2-mark', topicId: '4-6-amperes-law' },
  { id: 'c4-2m-24', text: "Compare Ampere's circuital law with Biot-Savart law. In what way is Ampere's law more convenient?", category: '2-mark', topicId: '4-6-amperes-law' },
  { id: 'c4-2m-25', text: "The magnetic field lines due to a long straight wire form concentric circles. Explain this result using Ampere's law and its cylindrical symmetry.", category: '2-mark', topicId: '4-6-amperes-law' },
  { id: 'c4-3m-12', text: "Using Ampere's law, derive the expression B = µ₀I/(2πr) for the magnetic field at a perpendicular distance r from an infinitely long straight current-carrying wire.", category: '3-mark', topicId: '4-6-amperes-law' },
  { id: 'c4-3m-13', text: "Explain the concept of the Amperian loop. Why must the loop be chosen appropriately for Ampere's law to be easily applicable?", category: '3-mark', topicId: '4-6-amperes-law' },
  { id: 'c4-5m-5', text: "(NCERT Ex. 4.7) A long straight wire of circular cross-section of radius a carries steady current I, uniformly distributed across the cross-section. Using Ampere's law, calculate the magnetic field: (a) outside the wire (r > a) — show B ∝ 1/r, and (b) inside the wire (r < a) — show B ∝ r. Draw the B vs r graph.", category: '5-mark', topicId: '4-6-amperes-law' },
  { id: 'c4-num-11', text: '(NCERT 4.2) A long straight wire carries a current of 35 A. What is the magnitude of field B at a point 20 cm from the wire?', category: 'numerical', topicId: '4-6-amperes-law' },
  { id: 'c4-num-12', text: '(NCERT 4.3) A long straight wire in the horizontal plane carries a current of 50 A in the north-to-south direction. Give the magnitude and direction of B at a point 2.5 m east of the wire.', category: 'numerical', topicId: '4-6-amperes-law' },
  { id: 'c4-num-13', text: '(NCERT 4.4) A horizontal overhead power line carries 90 A from east to west. What is the magnitude and direction of the magnetic field due to the current 1.5 m below the line?', category: 'numerical', topicId: '4-6-amperes-law' },

  // 4.7 The Solenoid
  { id: 'c4-1m-34', text: 'What is a solenoid? What is meant by a "long" solenoid?', category: '1-mark', topicId: '4-7-solenoid' },
  { id: 'c4-1m-35', text: 'Write the expression for the magnetic field inside a long solenoid.', category: '1-mark', topicId: '4-7-solenoid' },
  { id: 'c4-1m-36', text: 'Why is the magnetic field outside a long solenoid approximately zero?', category: '1-mark', topicId: '4-7-solenoid' },
  { id: 'c4-1m-37', text: 'What is the nature of the magnetic field inside a long solenoid (uniform/non-uniform)?', category: '1-mark', topicId: '4-7-solenoid' },
  { id: 'c4-2m-26', text: "Using Ampere's circuital law with a rectangular Amperian loop, derive the expression B = µ₀nI for the magnetic field inside a long solenoid.", category: '2-mark', topicId: '4-7-solenoid' },
  { id: 'c4-2m-27', text: 'Explain why the magnetic field between neighbouring turns of a solenoid cancels out, giving a field only along the axis inside.', category: '2-mark', topicId: '4-7-solenoid' },
  { id: 'c4-2m-28', text: 'How is the field of a solenoid similar to that of a bar magnet? Explain the analogy of north and south poles.', category: '2-mark', topicId: '4-7-solenoid' },
  { id: 'c4-3m-14', text: "With the help of a labelled diagram, derive the expression for the magnetic field inside a long solenoid using Ampere's circuital law.", category: '3-mark', topicId: '4-7-solenoid' },
  { id: 'c4-3m-15', text: 'Describe the magnetic field distribution of a finite solenoid: (a) at the interior midpoint P, (b) at the exterior midpoint Q. How does this change as the solenoid becomes very long?', category: '3-mark', topicId: '4-7-solenoid' },
  { id: 'c4-5m-6', text: "(a) Draw the magnetic field pattern for a long solenoid. (b) Apply Ampere's circuital law to a rectangular loop to derive B = µ₀nI. Explain why each arm of the rectangular loop contributes differently. (c) (NCERT Ex. 4.8) A solenoid of length 0.5 m has a radius of 1 cm and is made up of 500 turns. It carries a current of 5 A. Find the magnetic field inside the solenoid.", category: '5-mark', topicId: '4-7-solenoid' },
  { id: 'c4-num-14', text: '(NCERT 4.8) A closely wound solenoid 80 cm long has 5 layers of windings of 400 turns each. Diameter of solenoid is 1.8 cm and it carries 8.0 A. Estimate magnitude of B inside near its centre.', category: 'numerical', topicId: '4-7-solenoid' },

  // 4.8 Force Between Two Parallel Currents
  { id: 'c4-1m-38', text: 'State the rule: "Parallel currents attract and antiparallel currents repel."', category: '1-mark', topicId: '4-8-parallel-currents' },
  { id: 'c4-1m-39', text: 'Write the expression for force per unit length between two long parallel conductors carrying currents Iₐ and Ib separated by distance d.', category: '1-mark', topicId: '4-8-parallel-currents' },
  { id: 'c4-1m-40', text: 'Define 1 ampere based on the force between two parallel conductors.', category: '1-mark', topicId: '4-8-parallel-currents' },
  { id: 'c4-1m-41', text: 'How does the force between two parallel current-carrying conductors differ from the force between two like charges?', category: '1-mark', topicId: '4-8-parallel-currents' },
  { id: 'c4-2m-29', text: 'Derive the expression fba = µ₀IₐIb/(2πd) for the force per unit length between two long parallel current-carrying conductors.', category: '2-mark', topicId: '4-8-parallel-currents' },
  { id: 'c4-2m-30', text: 'Two parallel wires carry currents in opposite directions. What is the nature of the force between them? Explain using the direction of the magnetic field produced by each wire.', category: '2-mark', topicId: '4-8-parallel-currents' },
  { id: 'c4-2m-31', text: 'State and explain the definition of the SI unit of current (ampere) based on the force between two parallel conductors.', category: '2-mark', topicId: '4-8-parallel-currents' },
  { id: 'c4-3m-16', text: 'Two long parallel conductors a and b carry currents Iₐ and Ib in the same direction and are separated by distance d. Show that they attract each other with force per unit length fba = µ₀IₐIb/(2πd).', category: '3-mark', topicId: '4-8-parallel-currents' },
  { id: 'c4-3m-17', text: 'How is the definition of the ampere related to the SI unit of charge (coulomb)? Define 1 coulomb using the ampere.', category: '3-mark', topicId: '4-8-parallel-currents' },
  { id: 'c4-5m-7', text: "(a) Derive the expression for force per unit length between two parallel current-carrying conductors. (b) State whether parallel and antiparallel currents attract or repel — contrast this with the electrostatic case of like charges. (c) (NCERT Ex. 4.9) The horizontal component of the earth's magnetic field is 3.0 × 10⁻⁵ T. A long straight conductor carries 1 A. Find the force per unit length when current is: (i) east to west, (ii) south to north.", category: '5-mark', topicId: '4-8-parallel-currents' },
  { id: 'c4-num-15', text: '(NCERT 4.7) Two long and parallel straight wires A and B carry currents 8.0 A and 5.0 A in the same direction and are separated by 4.0 cm. Estimate the force on a 10 cm section of wire A.', category: 'numerical', topicId: '4-8-parallel-currents' },

  // 4.9.1 Torque on Rectangular Current Loop
  { id: 'c4-1m-42', text: 'What is the net force on a rectangular current loop placed in a uniform magnetic field?', category: '1-mark', topicId: '4-9-1-rectangular-loop' },
  { id: 'c4-1m-43', text: 'Write the expression for torque on a rectangular current loop of area A carrying current I placed in a uniform magnetic field B, when the normal to the loop makes angle θ with B.', category: '1-mark', topicId: '4-9-1-rectangular-loop' },
  { id: 'c4-1m-44', text: 'Define magnetic moment of a current loop. Write its expression and SI unit.', category: '1-mark', topicId: '4-9-1-rectangular-loop' },
  { id: 'c4-1m-45', text: 'Write the vector expression for torque on a magnetic dipole in a uniform magnetic field.', category: '1-mark', topicId: '4-9-1-rectangular-loop' },
  { id: 'c4-2m-32', text: 'Derive the expression τ = IAB for the torque on a rectangular current loop when the plane of the loop is parallel to the magnetic field.', category: '2-mark', topicId: '4-9-1-rectangular-loop' },
  { id: 'c4-2m-33', text: 'Show that the torque on a rectangular current loop in a uniform magnetic field is τ = IAB sinθ, where θ is the angle between the normal to the loop and B.', category: '2-mark', topicId: '4-9-1-rectangular-loop' },
  { id: 'c4-2m-34', text: 'When is the torque on a current loop (a) maximum and (b) zero? Explain the conditions of stable and unstable equilibrium.', category: '2-mark', topicId: '4-9-1-rectangular-loop' },
  { id: 'c4-2m-35', text: 'Compare torque on electric dipole τ = p × E with torque on magnetic dipole τ = m × B. Identify corresponding quantities.', category: '2-mark', topicId: '4-9-1-rectangular-loop' },
  { id: 'c4-3m-18', text: 'Derive the expression for torque on a rectangular current loop of sides a and b carrying current I in a uniform magnetic field B. Consider the general case when the normal to the loop makes angle θ with B.', category: '3-mark', topicId: '4-9-1-rectangular-loop' },
  { id: 'c4-3m-19', text: 'A rectangular loop ABCD carrying current I is placed in a uniform magnetic field B. Forces F₁ and F₂ act on the opposite arms. Show that the net force is zero but there is a net torque. Derive τ = NIAB sinθ.', category: '3-mark', topicId: '4-9-1-rectangular-loop' },
  { id: 'c4-5m-8', text: '(a) Derive the expression for torque on a rectangular current loop in a uniform magnetic field in the general case. (b) Define magnetic moment. Write the vector form τ = m × B. (c) (NCERT Ex. 4.10) A 100-turn circular coil of radius 10 cm carries 3.2 A. Find: (i) field at centre, (ii) magnetic moment, (iii) torques in initial (θ=0) and final (θ=90°) positions, (iv) angular speed after rotating 90° (moment of inertia = 0.1 kg m²).', category: '5-mark', topicId: '4-9-1-rectangular-loop' },
  { id: 'c4-num-16', text: '(NCERT 4.9) A square coil of side 10 cm consists of 20 turns and carries 12 A. The coil is suspended vertically and the normal to the coil makes 30° with a uniform horizontal magnetic field of 0.80 T. What is the torque on the coil?', category: 'numerical', topicId: '4-9-1-rectangular-loop' },
  { id: 'c4-num-17', text: 'A circular coil of 50 turns and radius 5 cm carries a current of 2 A in a uniform magnetic field of 0.5 T. Find the maximum torque on the coil and the magnetic moment.', category: 'numerical', topicId: '4-9-1-rectangular-loop' },

  // 4.9.2 Circular Current Loop as Magnetic Dipole
  { id: 'c4-1m-46', text: 'Write the expression for the magnetic field on the axis of a circular current loop at large distances (x >> R). Compare it with the electric field of a dipole.', category: '1-mark', topicId: '4-9-2-magnetic-dipole' },
  { id: 'c4-1m-47', text: 'What is the magnetic analogue of an electric dipole?', category: '1-mark', topicId: '4-9-2-magnetic-dipole' },
  { id: 'c4-1m-48', text: 'What is the fundamental difference between an electric dipole and a magnetic dipole?', category: '1-mark', topicId: '4-9-2-magnetic-dipole' },
  { id: 'c4-2m-36', text: 'Show that for x >> R, the axial field of a circular current loop B ≈ µ₀m/(2πx³), where m = IA is the magnetic moment. Compare with the electric dipole axial field.', category: '2-mark', topicId: '4-9-2-magnetic-dipole' },
  { id: 'c4-2m-37', text: 'State the analogy between a circular current loop and an electric dipole. Write the corresponding substitutions that transform one expression into the other.', category: '2-mark', topicId: '4-9-2-magnetic-dipole' },
  { id: 'c4-3m-20', text: 'A planar current loop of any shape is equivalent to a magnetic dipole of dipole moment m = IA. Explain this statement. Why do magnetic monopoles not exist?', category: '3-mark', topicId: '4-9-2-magnetic-dipole' },
  { id: 'c4-3m-21', text: '(NCERT Ex. 4.11) (a) Can a uniform magnetic field make a horizontal current loop turn about its vertical axis? (b) What is the stable equilibrium orientation of a current loop in an external magnetic field? (c) Why does a flexible current loop in an external field take a circular shape?', category: '3-mark', topicId: '4-9-2-magnetic-dipole' },

  // 4.10 Moving Coil Galvanometer
  { id: 'c4-1m-49', text: 'What is a moving coil galvanometer (MCG)? State its working principle.', category: '1-mark', topicId: '4-10-galvanometer' },
  { id: 'c4-1m-50', text: 'Write the expression for current sensitivity of a galvanometer.', category: '1-mark', topicId: '4-10-galvanometer' },
  { id: 'c4-1m-51', text: 'Write the expression for voltage sensitivity of a galvanometer.', category: '1-mark', topicId: '4-10-galvanometer' },
  { id: 'c4-1m-52', text: 'What is a shunt resistance? Why is it connected in parallel with the galvanometer to convert it to an ammeter?', category: '1-mark', topicId: '4-10-galvanometer' },
  { id: 'c4-1m-53', text: 'Why is a large resistance connected in series with a galvanometer to convert it into a voltmeter?', category: '1-mark', topicId: '4-10-galvanometer' },
  { id: 'c4-1m-54', text: 'Why is a cylindrical soft iron core used in a galvanometer?', category: '1-mark', topicId: '4-10-galvanometer' },
  { id: 'c4-2m-38', text: 'Describe the construction of a moving coil galvanometer with the help of a labelled diagram. Explain the role of the uniform radial magnetic field.', category: '2-mark', topicId: '4-10-galvanometer' },
  { id: 'c4-2m-39', text: 'Derive the expression φ = (NAB/k)I for the deflection of the galvanometer. Define each quantity.', category: '2-mark', topicId: '4-10-galvanometer' },
  { id: 'c4-2m-40', text: "Why can't a galvanometer be used directly as an ammeter? How is it converted to an ammeter? Derive the expression for shunt resistance.", category: '2-mark', topicId: '4-10-galvanometer' },
  { id: 'c4-2m-41', text: 'Explain why increasing the current sensitivity of a galvanometer by doubling N does not increase its voltage sensitivity.', category: '2-mark', topicId: '4-10-galvanometer' },
  { id: 'c4-3m-22', text: 'Explain the working principle of a moving coil galvanometer. How does equilibrium between the magnetic torque and the spring restoring torque lead to the deflection formula?', category: '3-mark', topicId: '4-10-galvanometer' },
  { id: 'c4-3m-23', text: 'Describe the conversion of a galvanometer to: (a) an ammeter using a shunt resistance rs, and (b) a voltmeter using a series resistance R. State the condition for each.', category: '3-mark', topicId: '4-10-galvanometer' },
  { id: 'c4-3m-24', text: 'Define current sensitivity and voltage sensitivity of a galvanometer. Show that increasing current sensitivity by doubling N leaves voltage sensitivity unchanged, since resistance also doubles.', category: '3-mark', topicId: '4-10-galvanometer' },
  { id: 'c4-5m-9', text: '(a) Describe the principle, construction, and working of a moving coil galvanometer with a labelled diagram. (b) Derive φ = (NAB/k)I. (c) Explain conversion to ammeter and voltmeter with expressions for shunt and series resistance. (d) (NCERT Ex. 4.12) In a circuit (3 V source, 3 Ω external resistance), what is the current if the ammeter is: (i) a galvanometer with RG = 60 Ω? (ii) galvanometer with shunt rs = 0.02 Ω? (iii) ideal ammeter with zero resistance?', category: '5-mark', topicId: '4-10-galvanometer' },
  { id: 'c4-num-18', text: '(NCERT 4.10) Two moving coil meters M₁ and M₂ have: R₁ = 10 Ω, N₁ = 30, A₁ = 3.6 × 10⁻³ m², B₁ = 0.25 T; R₂ = 14 Ω, N₂ = 42, A₂ = 1.8 × 10⁻³ m², B₂ = 0.50 T. (Spring constants are identical.) Determine the ratio of (a) current sensitivity and (b) voltage sensitivity of M₂ and M₁.', category: 'numerical', topicId: '4-10-galvanometer' },
  { id: 'c4-num-19', text: 'A galvanometer has resistance RG = 50 Ω and gives full-scale deflection for 1 mA. Find: (a) shunt resistance to convert it to an ammeter for 10 A full scale, (b) series resistance to convert it to a voltmeter for 100 V full scale.', category: 'numerical', topicId: '4-10-galvanometer' },
  { id: 'c4-num-20', text: '(NCERT 4.13) A circular coil of 30 turns and radius 8.0 cm carrying a current of 6.0 A is suspended vertically in a uniform horizontal magnetic field of magnitude 1.0 T. The field lines make 60° with the normal of the coil. Calculate the magnitude of the counter torque needed to prevent the coil from turning.', category: 'numerical', topicId: '4-10-galvanometer' },

  // Assertion-Reason Questions
  { id: 'c4-ar-1', text: 'Assertion: The magnetic force on a moving charge does no work on it.\nReason: The magnetic force is always perpendicular to the velocity of the charge.', category: 'assertion-reason', topicId: '4-2-2-lorentz-force' },
  { id: 'c4-ar-2', text: 'Assertion: A current-carrying circular loop behaves like a magnetic dipole at large distances.\nReason: The axial field of a circular current loop varies as 1/x³ for x >> R, similar to an electric dipole field.', category: 'assertion-reason', topicId: '4-9-2-magnetic-dipole' },
  { id: 'c4-ar-3', text: 'Assertion: Parallel currents attract each other, but like (positive) charges repel.\nReason: The magnetic force between parallel current-carrying conductors is attractive in nature.', category: 'assertion-reason', topicId: '4-8-parallel-currents' },
  { id: 'c4-ar-4', text: "Assertion: The frequency of a charged particle in a uniform magnetic field is independent of its speed.\nReason: The radius of the circular path increases in proportion to the speed, keeping the angular velocity constant.", category: 'assertion-reason', topicId: '4-3-motion-magnetic-field' },
  { id: 'c4-ar-5', text: 'Assertion: Magnetic field lines always form closed loops.\nReason: Magnetic monopoles do not exist; there are no sources or sinks of magnetic field.', category: 'assertion-reason', topicId: '4-4-biot-savart' },
  { id: 'c4-ar-6', text: 'Assertion: A soft iron core is placed inside the coil of a moving coil galvanometer.\nReason: The soft iron core makes the magnetic field radial and also increases its strength.', category: 'assertion-reason', topicId: '4-10-galvanometer' },
  { id: 'c4-ar-7', text: 'Assertion: Increasing the current sensitivity of a galvanometer does not necessarily increase its voltage sensitivity.\nReason: Doubling the number of turns doubles both the current sensitivity and the resistance of the coil, leaving voltage sensitivity unchanged.', category: 'assertion-reason', topicId: '4-10-galvanometer' },
  { id: 'c4-ar-8', text: "Assertion: Ampere's circuital law is not independent of the Biot-Savart law.\nReason: Ampere's law can be derived from the Biot-Savart law, just as Gauss's law can be derived from Coulomb's law.", category: 'assertion-reason', topicId: '4-6-amperes-law' },

  // Case Study Questions
  { id: 'c4-cs-1', text: "Case Study: The Cyclotron\nA cyclotron is a device used to accelerate charged particles to very high energies. It consists of two D-shaped hollow metallic chambers (called dees) placed in a strong magnetic field. An alternating electric field is applied between the dees. A charged particle injected at the centre is accelerated across the gap, follows a semicircular path inside the dee due to the magnetic force, and returns to the gap. The key principle is that the cyclotron frequency ν = qB/(2πm) is independent of the particle's speed.\n\nQuestions:\n(a) Why is it possible to use the same alternating frequency throughout the acceleration process in a cyclotron?\n(b) As the charged particle gains speed, what happens to: (i) its radius of circular motion, (ii) its time period, (iii) its kinetic energy?\n(c) Why does the cyclotron fail to accelerate neutrons or photons?\n(d) A proton (m = 1.67 × 10⁻²⁷ kg, q = 1.6 × 10⁻¹⁹ C) is accelerated in a cyclotron with a magnetic field of 1.5 T. Calculate the cyclotron frequency.", category: 'case-study', topicId: '4-3-motion-magnetic-field' },
  { id: 'c4-cs-2', text: "Case Study: Velocity Selector\nA velocity selector uses perpendicular electric and magnetic fields to select charged particles of a specific speed from a beam. When a charged particle enters a region where electric field E and magnetic field B are perpendicular to each other and to the beam direction, only particles with velocity v = E/B experience zero net force.\n\nQuestions:\n(a) What is the condition for a charged particle to pass through a velocity selector undeflected?\n(b) A velocity selector has E = 2 × 10⁴ N/C and B = 0.1 T. What is the speed of the selected particle?\n(c) In which direction should the electric and magnetic fields be oriented relative to each other and to the beam for a velocity selector to function?\n(d) If a particle with the selected velocity v = E/B enters a second region with only magnetic field B', it moves in a circle of radius r = mv/(qB'). How can this be used to find the charge-to-mass ratio q/m of the particle?", category: 'case-study', topicId: '4-2-2-lorentz-force' },

  // HOTS Questions
  { id: 'c4-hots-1', text: 'A long straight wire A carrying current I₁ and a rectangular loop PQRS carrying current I₂ are coplanar. The wire is parallel to side PQ. Explain qualitatively which sides of the loop experience attraction, which experience repulsion, and whether the net force on the loop is towards or away from the wire.', category: 'hots', topicId: '4-8-parallel-currents' },
  { id: 'c4-hots-2', text: 'Two charged particles of equal charge but different masses m₁ and m₂ (m₁ > m₂) are projected with the same velocity v perpendicular to a uniform magnetic field B. Compare their: (a) radii, (b) time periods, (c) kinetic energies. Which particle completes its circular orbit faster?', category: 'hots', topicId: '4-3-motion-magnetic-field' },
  { id: 'c4-hots-3', text: 'Using ε₀µ₀ = 1/c², explain the deep connection between electricity, magnetism, and the speed of light. What does this imply about the nature of electromagnetic waves?', category: 'hots', topicId: '4-4-biot-savart' },
  { id: 'c4-hots-4', text: 'A galvanometer with full-scale deflection current Ig and resistance RG is to be converted into both an ammeter (range 0-I) and a voltmeter (range 0-V). Derive expressions for the shunt and series resistances required. If the same galvanometer is used for both, explain why the ammeter should have very low resistance and the voltmeter very high resistance.', category: 'hots', topicId: '4-10-galvanometer' },
  { id: 'c4-hots-5', text: 'A current loop of magnetic moment m is placed in a non-uniform magnetic field. Show that it experiences both a torque and a net force. In which direction does the force act — towards the region of stronger or weaker field?', category: 'hots', topicId: '4-9-torque-dipole' },
];

// Chapter 5: Magnetism and Matter - Question Bank
const chapter5Questions: Question[] = [
  // 5.1 Introduction
  { id: 'c5-1m-1', text: 'State any two commonly known ideas regarding magnetism observed in nature.', category: '1-mark', topicId: '5-1-introduction' },
  { id: 'c5-1m-2', text: "The word 'magnet' is derived from the name of which island in Greece? What was found there?", category: '1-mark', topicId: '5-1-introduction' },
  { id: 'c5-1m-3', text: 'Who are credited with discovering that moving charges produce magnetic fields?', category: '1-mark', topicId: '5-1-introduction' },
  { id: 'c5-1m-4', text: "In which direction does Earth's magnetic field point approximately?", category: '1-mark', topicId: '5-1-introduction' },
  { id: 'c5-2m-1', text: "Explain two fundamental properties of a freely suspended bar magnet with respect to Earth's geographic poles.", category: '2-mark', topicId: '5-1-introduction' },
  { id: 'c5-2m-2', text: 'Why is it said that magnetic monopoles do not exist? What happens when a bar magnet is broken in two?', category: '2-mark', topicId: '5-1-introduction' },
  { id: 'c5-3m-1', text: 'Describe five commonly known facts about magnetism, distinguishing them from electrostatic properties.', category: '3-mark', topicId: '5-1-introduction' },

  // 5.2 The Bar Magnet
  { id: 'c5-1m-5', text: 'What does the pattern of iron filings around a bar magnet suggest about its nature?', category: '1-mark', topicId: '5-2-bar-magnet' },
  { id: 'c5-1m-6', text: 'Which pole of a freely suspended bar magnet points towards the geographic north?', category: '1-mark', topicId: '5-2-bar-magnet' },
  { id: 'c5-1m-7', text: 'Name the two poles of a bar magnet and state how like and unlike poles interact.', category: '1-mark', topicId: '5-2-bar-magnet' },
  { id: 'c5-2m-3', text: 'Describe the iron filing experiment used to map the magnetic field of a bar magnet. What does the pattern reveal?', category: '2-mark', topicId: '5-2-bar-magnet' },
  { id: 'c5-2m-4', text: '(NCERT 5.1) A bar magnet is cut into two pieces: (i) transverse to its length, (ii) along its length. What happens in each case?', category: '2-mark', topicId: '5-2-bar-magnet' },
  { id: 'c5-2m-5', text: 'A magnetised needle in a uniform magnetic field experiences a torque but no net force. Explain why an iron nail near a bar magnet experiences a force of attraction in addition to a torque.', category: '2-mark', topicId: '5-2-bar-magnet' },
  { id: 'c5-3m-2', text: '(NCERT 5.1) Answer the following: (a) Must every magnetic configuration have a north and south pole? What about a toroid? (b) Two identical looking iron bars A and B are given; one is definitely magnetised. Using only A and B, how do you determine which one?', category: '3-mark', topicId: '5-2-bar-magnet' },

  // 5.2.1 The Magnetic Field Lines
  { id: 'c5-1m-8', text: 'State any two properties of magnetic field lines.', category: '1-mark', topicId: '5-2-1-field-lines' },
  { id: 'c5-1m-9', text: 'Do magnetic field lines intersect? Justify your answer.', category: '1-mark', topicId: '5-2-1-field-lines' },
  { id: 'c5-1m-10', text: 'What does the tangent to a magnetic field line at any point represent?', category: '1-mark', topicId: '5-2-1-field-lines' },
  { id: 'c5-1m-11', text: 'How is the strength of a magnetic field indicated by field lines?', category: '1-mark', topicId: '5-2-1-field-lines' },
  { id: 'c5-2m-6', text: 'Distinguish between the magnetic field lines of a bar magnet and the electric field lines of an electric dipole, listing at least two differences.', category: '2-mark', topicId: '5-2-1-field-lines' },
  { id: 'c5-2m-7', text: 'How can magnetic field lines be plotted experimentally? Explain briefly.', category: '2-mark', topicId: '5-2-1-field-lines' },
  { id: 'c5-2m-8', text: 'Magnetic field lines of a magnet and a solenoid are similar at large distances. What does this analogy suggest?', category: '2-mark', topicId: '5-2-1-field-lines' },
  { id: 'c5-3m-3', text: 'List all four important properties of magnetic field lines and illustrate each with a brief explanation.', category: '3-mark', topicId: '5-2-1-field-lines' },

  // 5.2.2 Bar Magnet as an Equivalent Solenoid
  { id: 'c5-1m-12', text: "State Ampere's hypothesis regarding the origin of magnetism.", category: '1-mark', topicId: '5-2-2-equivalent-solenoid' },
  { id: 'c5-1m-13', text: 'Write the expression for the axial magnetic field of a bar magnet at a large distance r (r >> l).', category: '1-mark', topicId: '5-2-2-equivalent-solenoid' },
  { id: 'c5-1m-14', text: 'What is the analogy between cutting a bar magnet in half and cutting a solenoid?', category: '1-mark', topicId: '5-2-2-equivalent-solenoid' },
  { id: 'c5-2m-9', text: 'How does the axial field of a finite solenoid compare with that of a bar magnet at large distances? Write the formula.', category: '2-mark', topicId: '5-2-2-equivalent-solenoid' },
  { id: 'c5-2m-10', text: 'Explain why a bar magnet can be thought of as an equivalent solenoid. What evidence supports this analogy?', category: '2-mark', topicId: '5-2-2-equivalent-solenoid' },
  { id: 'c5-3m-4', text: "Starting from Ampere's hypothesis, explain the analogy between a bar magnet and a current-carrying solenoid. State the condition under which the axial field of a solenoid equals that of a bar magnet.", category: '3-mark', topicId: '5-2-2-equivalent-solenoid' },
  { id: 'c5-num-1', text: 'A bar magnet has a magnetic moment m = 5 A·m². Calculate the magnetic field at a point on its axis at a distance of 20 cm from its centre. (µ₀/4π = 10⁻⁷ T·m/A)', category: 'numerical', topicId: '5-2-2-equivalent-solenoid' },
  { id: 'c5-num-2', text: 'The axial field of a bar magnet at a distance of 0.1 m from the centre is 4.8 × 10⁻⁵ T. Calculate the magnetic moment of the bar magnet.', category: 'numerical', topicId: '5-2-2-equivalent-solenoid' },

  // 5.2.3 The Dipole in a Uniform Magnetic Field
  { id: 'c5-1m-15', text: 'Write the expression for the torque experienced by a magnetic dipole of moment m in a uniform magnetic field B.', category: '1-mark', topicId: '5-2-3-dipole-uniform-field' },
  { id: 'c5-1m-16', text: 'At what orientation of a magnetic dipole in an external field is its potential energy minimum? Maximum?', category: '1-mark', topicId: '5-2-3-dipole-uniform-field' },
  { id: 'c5-1m-17', text: 'Define magnetic potential energy of a dipole in a uniform magnetic field. Write its formula.', category: '1-mark', topicId: '5-2-3-dipole-uniform-field' },
  { id: 'c5-1m-18', text: 'What is the condition for stable equilibrium of a magnetic dipole in a uniform magnetic field?', category: '1-mark', topicId: '5-2-3-dipole-uniform-field' },
  { id: 'c5-2m-11', text: 'Derive the expression for the potential energy of a magnetic dipole in an external magnetic field B. Where is the zero of potential energy fixed?', category: '2-mark', topicId: '5-2-3-dipole-uniform-field' },
  { id: 'c5-2m-12', text: '(NCERT 5.2) A short bar magnet of magnetic moment m = 0.32 J T⁻¹ is placed in a uniform magnetic field of 0.15 T. Find the potential energy for (a) stable equilibrium and (b) unstable equilibrium.', category: '2-mark', topicId: '5-2-3-dipole-uniform-field' },
  { id: 'c5-2m-13', text: 'A compass needle of known magnetic moment is placed in a magnetic field. Describe how this arrangement is used to determine either B or the magnetic moment.', category: '2-mark', topicId: '5-2-3-dipole-uniform-field' },
  { id: 'c5-3m-5', text: '(NCERT 5.2) For the configuration shown in Fig. 5.4 of NCERT (needle P at O, needles Q in various positions): (a) In which configuration is the system not in equilibrium? (b) Which are stable and unstable? (c) Which has the lowest potential energy?', category: '3-mark', topicId: '5-2-3-dipole-uniform-field' },
  { id: 'c5-num-3', text: '(NCERT 5.1) A short bar magnet placed with its axis at 30° to a uniform field of 0.25 T experiences a torque of 4.5 × 10⁻² J. Find the magnetic moment of the magnet.', category: 'numerical', topicId: '5-2-3-dipole-uniform-field' },
  { id: 'c5-num-4', text: '(NCERT 5.5) A bar magnet of magnetic moment 1.5 J T⁻¹ lies aligned with a uniform magnetic field of 0.22 T. (a) Work required to turn it normal to the field; (b) opposite to the field; (c) torque in each case.', category: 'numerical', topicId: '5-2-3-dipole-uniform-field' },

  // 5.2.4 The Electrostatic Analog
  { id: 'c5-1m-19', text: 'Write the replacements that convert the electric dipole field equations into magnetic dipole field equations.', category: '1-mark', topicId: '5-2-4-electrostatic-analog' },
  { id: 'c5-1m-20', text: 'Write the equatorial field (B_E) of a bar magnet of moment m at distance r (r >> l).', category: '1-mark', topicId: '5-2-4-electrostatic-analog' },
  { id: 'c5-1m-21', text: 'Write the axial field (B_A) of a bar magnet of moment m at distance r (r >> l).', category: '1-mark', topicId: '5-2-4-electrostatic-analog' },
  { id: 'c5-2m-14', text: 'Tabulate the analogy between electric and magnetic dipoles covering: dipole moment, equatorial field, axial field, torque, and potential energy.', category: '2-mark', topicId: '5-2-4-electrostatic-analog' },
  { id: 'c5-2m-15', text: 'What substitution converts the electric potential energy formula –p·E into the magnetic potential energy formula?', category: '2-mark', topicId: '5-2-4-electrostatic-analog' },
  { id: 'c5-3m-6', text: 'Compare electric and magnetic dipoles in terms of (i) dipole moment symbol, (ii) equatorial field formula, (iii) axial field formula, (iv) torque in external field, (v) energy in external field. Highlight key differences.', category: '3-mark', topicId: '5-2-4-electrostatic-analog' },
  { id: 'c5-num-5', text: '(NCERT 5.7) A short bar magnet has a magnetic moment of 0.48 J T⁻¹. Calculate the magnitude and direction of the magnetic field at a distance of 10 cm from the centre on (a) the axis, and (b) the equatorial line of the magnet.', category: 'numerical', topicId: '5-2-4-electrostatic-analog' },

  // 5.3 Magnetism and Gauss's Law
  { id: 'c5-1m-22', text: "State Gauss's law for magnetism.", category: '1-mark', topicId: '5-3-gauss-law' },
  { id: 'c5-1m-23', text: 'What is the net magnetic flux through any closed surface?', category: '1-mark', topicId: '5-3-gauss-law' },
  { id: 'c5-1m-24', text: 'Why are there no sources or sinks of magnetic field B?', category: '1-mark', topicId: '5-3-gauss-law' },
  { id: 'c5-1m-25', text: 'What is the simplest magnetic element that exists in nature?', category: '1-mark', topicId: '5-3-gauss-law' },
  { id: 'c5-2m-16', text: "Compare Gauss's law for electrostatics with Gauss's law for magnetism. What fundamental difference does this reflect?", category: '2-mark', topicId: '5-3-gauss-law' },
  { id: 'c5-2m-17', text: '(NCERT 5.4) Do the magnetic field lines also represent lines of force on a moving charged particle? Explain.', category: '2-mark', topicId: '5-3-gauss-law' },
  { id: 'c5-2m-18', text: "(NCERT 5.4) If magnetic monopoles existed, how would Gauss's law of magnetism be modified?", category: '2-mark', topicId: '5-3-gauss-law' },
  { id: 'c5-2m-19', text: '(NCERT 5.4) Does a bar magnet exert a torque on itself due to its own field? Does one element of a current-carrying wire exert a force on another element of the same wire?', category: '2-mark', topicId: '5-3-gauss-law' },
  { id: 'c5-2m-20', text: '(NCERT 5.4) Can a system have magnetic moments even though its net charge is zero?', category: '2-mark', topicId: '5-3-gauss-law' },
  { id: 'c5-3m-7', text: '(NCERT 5.3) Examine the diagrams in Fig. 5.6 of NCERT and for each of (a), (b), (c), (d), (e), (f), (g) state whether the magnetic field lines are correctly drawn. Identify any that describe electrostatic field lines correctly.', category: '3-mark', topicId: '5-3-gauss-law' },
  { id: 'c5-5m-1', text: "State and explain Gauss's law for magnetism. Compare it with Gauss's law for electrostatics and explain why isolated magnetic poles (monopoles) do not exist. What would be the consequence if they did exist?", category: '5-mark', topicId: '5-3-gauss-law' },

  // 5.4 Magnetisation and Magnetic Intensity
  { id: 'c5-1m-26', text: 'Define magnetisation M of a material. Write its SI unit.', category: '1-mark', topicId: '5-4-magnetisation' },
  { id: 'c5-1m-27', text: 'Define magnetic intensity H. Write its relation to B and M.', category: '1-mark', topicId: '5-4-magnetisation' },
  { id: 'c5-1m-28', text: 'Define magnetic susceptibility χ. What are its typical values for paramagnetic and diamagnetic materials?', category: '1-mark', topicId: '5-4-magnetisation' },
  { id: 'c5-1m-29', text: 'Write the relation between relative magnetic permeability µ_r and magnetic susceptibility χ.', category: '1-mark', topicId: '5-4-magnetisation' },
  { id: 'c5-1m-30', text: 'Write the relation between B, µ₀, H, and M.', category: '1-mark', topicId: '5-4-magnetisation' },
  { id: 'c5-1m-31', text: 'What is the physical significance of the quantity H in a magnetised material?', category: '1-mark', topicId: '5-4-magnetisation' },
  { id: 'c5-2m-21', text: 'Distinguish between magnetic intensity H and magnetisation M. Write their relation to the total magnetic field B.', category: '2-mark', topicId: '5-4-magnetisation' },
  { id: 'c5-2m-22', text: 'Define relative magnetic permeability µ_r and magnetic permeability µ. How are they related to χ?', category: '2-mark', topicId: '5-4-magnetisation' },
  { id: 'c5-2m-23', text: 'A solenoid core is filled with a magnetic material. How is the net B inside modified? Write the expressions for B_m and the total B.', category: '2-mark', topicId: '5-4-magnetisation' },
  { id: 'c5-2m-24', text: 'Explain the terms: (i) magnetisation M, (ii) magnetic susceptibility χ, (iii) relative permeability µ_r — stating the formula connecting each pair.', category: '2-mark', topicId: '5-4-magnetisation' },
  { id: 'c5-3m-8', text: 'Starting with a solenoid carrying current, derive the expression B = µ₀(H + M) for a magnetised material, defining all terms.', category: '3-mark', topicId: '5-4-magnetisation' },
  { id: 'c5-3m-9', text: 'Explain how magnetic susceptibility χ determines whether a material is diamagnetic, paramagnetic, or ferromagnetic. Give the condition on χ for each type.', category: '3-mark', topicId: '5-4-magnetisation' },
  { id: 'c5-5m-2', text: 'Define the following magnetic quantities with units and formulas: (a) magnetisation M, (b) magnetic intensity H, (c) magnetic susceptibility χ, (d) relative permeability µ_r, (e) magnetic permeability µ. State the equation connecting B, H, and M.', category: '5-mark', topicId: '5-4-magnetisation' },
  { id: 'c5-num-6', text: '(NCERT 5.5) A solenoid has a core of relative permeability 400. Windings carry 2 A and there are 1000 turns/m. Calculate: (a) H, (b) B, (c) M, and (d) magnetising current I_M.', category: 'numerical', topicId: '5-4-magnetisation' },
  { id: 'c5-num-7', text: 'A material has magnetic susceptibility χ = 2.5 × 10⁻⁴. Find its relative permeability and state whether it is diamagnetic or paramagnetic.', category: 'numerical', topicId: '5-4-magnetisation' },

  // 5.5 Magnetic Properties of Materials
  { id: 'c5-1m-32', text: 'Classify materials as diamagnetic, paramagnetic, and ferromagnetic on the basis of the sign and magnitude of χ.', category: '1-mark', topicId: '5-5-magnetic-properties' },
  { id: 'c5-1m-33', text: 'What is the range of µ_r for a diamagnetic material?', category: '1-mark', topicId: '5-5-magnetic-properties' },
  { id: 'c5-1m-34', text: 'Give one example each of a diamagnetic, paramagnetic, and ferromagnetic material.', category: '1-mark', topicId: '5-5-magnetic-properties' },
  { id: 'c5-2m-25', text: 'Tabulate the values of χ, µ_r, and µ for diamagnetic, paramagnetic, and ferromagnetic materials.', category: '2-mark', topicId: '5-5-magnetic-properties' },
  { id: 'c5-3m-10', text: 'Compare diamagnetic, paramagnetic, and ferromagnetic materials with respect to: (i) susceptibility, (ii) relative permeability, (iii) behaviour in a non-uniform field, (iv) examples.', category: '3-mark', topicId: '5-5-magnetic-properties' },

  // 5.5.1 Diamagnetism
  { id: 'c5-1m-35', text: 'Define diamagnetic substances. In which direction do they move in a non-uniform magnetic field?', category: '1-mark', topicId: '5-5-1-diamagnetism' },
  { id: 'c5-1m-36', text: 'Name any four diamagnetic materials.', category: '1-mark', topicId: '5-5-1-diamagnetism' },
  { id: 'c5-1m-37', text: 'What is the Meissner effect?', category: '1-mark', topicId: '5-5-1-diamagnetism' },
  { id: 'c5-1m-38', text: 'What is the value of χ and µ_r for a perfect superconductor (perfect diamagnet)?', category: '1-mark', topicId: '5-5-1-diamagnetism' },
  { id: 'c5-1m-39', text: 'State the range of χ for a diamagnetic material.', category: '1-mark', topicId: '5-5-1-diamagnetism' },
  { id: 'c5-2m-26', text: 'Explain the origin of diamagnetism in terms of orbital magnetic moments of electrons.', category: '2-mark', topicId: '5-5-1-diamagnetism' },
  { id: 'c5-2m-27', text: 'Describe the behaviour of a diamagnetic bar placed in a non-uniform magnetic field. What happens to the field lines inside the material?', category: '2-mark', topicId: '5-5-1-diamagnetism' },
  { id: 'c5-2m-28', text: 'Why are superconductors described as perfect diamagnets? State the values of χ, µ_r, and µ for a superconductor.', category: '2-mark', topicId: '5-5-1-diamagnetism' },
  { id: 'c5-2m-29', text: 'Explain why diamagnetism is universal but often masked by other magnetic properties.', category: '2-mark', topicId: '5-5-1-diamagnetism' },
  { id: 'c5-3m-11', text: "Explain the phenomenon of diamagnetism at the atomic level using Lenz's law. How does the substance develop a net magnetic moment opposite to the applied field?", category: '3-mark', topicId: '5-5-1-diamagnetism' },

  // 5.5.2 Paramagnetism
  { id: 'c5-1m-40', text: 'Define paramagnetic substances. How do they behave in a non-uniform magnetic field?', category: '1-mark', topicId: '5-5-2-paramagnetism' },
  { id: 'c5-1m-41', text: 'Name any four paramagnetic materials.', category: '1-mark', topicId: '5-5-2-paramagnetism' },
  { id: 'c5-1m-42', text: 'What is the role of temperature in the magnetic behaviour of paramagnetic materials?', category: '1-mark', topicId: '5-5-2-paramagnetism' },
  { id: 'c5-1m-43', text: 'What is saturation magnetisation in a paramagnetic material?', category: '1-mark', topicId: '5-5-2-paramagnetism' },
  { id: 'c5-2m-30', text: 'Explain at the atomic level why paramagnetic substances are weakly attracted to a magnet.', category: '2-mark', topicId: '5-5-2-paramagnetism' },
  { id: 'c5-2m-31', text: 'How does increasing temperature affect the magnetisation of a paramagnetic material? Explain in terms of thermal motion.', category: '2-mark', topicId: '5-5-2-paramagnetism' },
  { id: 'c5-2m-32', text: 'Describe the behaviour of a paramagnetic bar placed in (i) a uniform field, (ii) a non-uniform field. What happens to the field lines inside?', category: '2-mark', topicId: '5-5-2-paramagnetism' },
  { id: 'c5-2m-33', text: 'Compare paramagnetism and diamagnetism with respect to: (i) atomic structure, (ii) direction of induced magnetisation, (iii) behaviour in a field.', category: '2-mark', topicId: '5-5-2-paramagnetism' },
  { id: 'c5-3m-12', text: 'Describe paramagnetism in terms of permanent atomic dipole moments. How does an external field B₀ overcome thermal agitation to produce magnetisation? What is the saturation condition?', category: '3-mark', topicId: '5-5-2-paramagnetism' },

  // 5.5.3 Ferromagnetism
  { id: 'c5-1m-44', text: 'Define ferromagnetic substances. Give two examples of ferromagnetic elements.', category: '1-mark', topicId: '5-5-3-ferromagnetism' },
  { id: 'c5-1m-45', text: 'What is a magnetic domain?', category: '1-mark', topicId: '5-5-3-ferromagnetism' },
  { id: 'c5-1m-46', text: 'What is a hard ferromagnet? Give one example.', category: '1-mark', topicId: '5-5-3-ferromagnetism' },
  { id: 'c5-1m-47', text: 'What is a soft ferromagnet? Give one example.', category: '1-mark', topicId: '5-5-3-ferromagnetism' },
  { id: 'c5-1m-48', text: 'What is the typical domain size in a ferromagnetic material? How many atoms does it contain?', category: '1-mark', topicId: '5-5-3-ferromagnetism' },
  { id: 'c5-1m-49', text: 'What happens to a ferromagnet when it is heated above the Curie temperature?', category: '1-mark', topicId: '5-5-3-ferromagnetism' },
  { id: 'c5-2m-34', text: 'Explain the concept of magnetic domains in ferromagnetic materials. What happens to domains when an external magnetic field is applied?', category: '2-mark', topicId: '5-5-3-ferromagnetism' },
  { id: 'c5-2m-35', text: 'Distinguish between hard and soft ferromagnetic materials with one example each. Which is used in permanent magnets?', category: '2-mark', topicId: '5-5-3-ferromagnetism' },
  { id: 'c5-2m-36', text: 'How does ferromagnetism depend on temperature? What happens above the Curie temperature?', category: '2-mark', topicId: '5-5-3-ferromagnetism' },
  { id: 'c5-2m-37', text: 'Compare ferromagnetism with paramagnetism with respect to: (i) alignment of dipoles, (ii) value of χ, (iii) domain structure.', category: '2-mark', topicId: '5-5-3-ferromagnetism' },
  { id: 'c5-3m-13', text: 'Describe the domain theory of ferromagnetism. Explain with diagrams (description): (a) randomly oriented domains, (b) domain alignment in an external field. What determines whether magnetisation persists after removal of the field?', category: '3-mark', topicId: '5-5-3-ferromagnetism' },
  { id: 'c5-3m-14', text: 'Explain why the relative magnetic permeability of ferromagnetic materials is greater than 1000. Discuss the cooperative effect among atomic dipoles.', category: '3-mark', topicId: '5-5-3-ferromagnetism' },
  { id: 'c5-5m-3', text: 'Compare all three types of magnetic materials — diamagnetic, paramagnetic, and ferromagnetic — with respect to: (a) definition, (b) atomic origin, (c) susceptibility range, (d) relative permeability, (e) behaviour in a non-uniform field, (f) examples. Include the effect of temperature on each.', category: '5-mark', topicId: '5-5-3-ferromagnetism' },

  // NCERT Textbook Exercise Questions
  { id: 'c5-ncert-1', text: '(Ex 5.1) A short bar magnet placed with its axis at 30° with a uniform external magnetic field of 0.25 T experiences a torque of magnitude 4.5 × 10⁻² J. What is the magnitude of the magnetic moment of the magnet?', category: 'numerical', topicId: '5-2-3-dipole-uniform-field' },
  { id: 'c5-ncert-2', text: '(Ex 5.2) A short bar magnet of magnetic moment m = 0.32 J T⁻¹ is placed in a uniform magnetic field of 0.15 T. If the bar is free to rotate in the plane of the field, which orientation corresponds to (a) stable and (b) unstable equilibrium? What is the potential energy in each case?', category: 'numerical', topicId: '5-2-3-dipole-uniform-field' },
  { id: 'c5-ncert-3', text: '(Ex 5.3) A closely wound solenoid of 800 turns and area of cross section 2.5 × 10⁻⁴ m² carries a current of 3.0 A. Explain how the solenoid acts like a bar magnet. What is its associated magnetic moment?', category: 'numerical', topicId: '5-2-2-equivalent-solenoid' },
  { id: 'c5-ncert-4', text: '(Ex 5.4) If the solenoid in Ex 5.3 is free to turn about the vertical direction and a uniform horizontal magnetic field of 0.25 T is applied, what is the magnitude of torque on the solenoid when its axis makes an angle of 30° with the direction of the applied field?', category: 'numerical', topicId: '5-2-3-dipole-uniform-field' },
  { id: 'c5-ncert-5', text: '(Ex 5.5) A bar magnet of magnetic moment 1.5 J T⁻¹ lies aligned with the direction of a uniform magnetic field of 0.22 T. (a) What is the work required by an external torque to turn it (i) normal to the field, (ii) opposite to the field? (b) What is the torque in cases (i) and (ii)?', category: 'numerical', topicId: '5-2-3-dipole-uniform-field' },
  { id: 'c5-ncert-6', text: '(Ex 5.6) A closely wound solenoid of 2000 turns and area of cross-section 1.6 × 10⁻⁴ m², carrying a current of 4.0 A, is suspended through its centre. (a) What is the magnetic moment? (b) What is the torque on the solenoid if a horizontal magnetic field of 7.5 × 10⁻² T is applied at 30° to the axis?', category: 'numerical', topicId: '5-2-3-dipole-uniform-field' },
  { id: 'c5-ncert-7', text: '(Ex 5.7) A short bar magnet has a magnetic moment of 0.48 J T⁻¹. Give the direction and magnitude of the magnetic field at 10 cm from the centre of the magnet on (a) the axis, (b) the equatorial line.', category: 'numerical', topicId: '5-2-4-electrostatic-analog' },

  // Board Pattern Questions
  { id: 'c5-board-1', text: "(Board) Define the term 'magnetic susceptibility'. For which class of materials is it large and positive?", category: '1-mark', topicId: '5-4-magnetisation' },
  { id: 'c5-board-2', text: '(Board) A bar magnet is cut into three equal pieces perpendicular to its length. How many poles does each piece have?', category: '1-mark', topicId: '5-2-bar-magnet' },
  { id: 'c5-board-3', text: '(Board) What is the net magnetic flux through a closed surface enclosing a bar magnet?', category: '1-mark', topicId: '5-3-gauss-law' },
  { id: 'c5-board-4', text: '(Board) Name the phenomenon of complete expulsion of magnetic field lines from a superconductor.', category: '1-mark', topicId: '5-5-1-diamagnetism' },
  { id: 'c5-board-5', text: '(Board) How will you distinguish a magnetised bar from an unmagnetised iron bar using only the two bars? Justify your method.', category: '2-mark', topicId: '5-2-bar-magnet' },
  { id: 'c5-board-6', text: '(Board) Derive the expression for the torque on a bar magnet placed in a uniform magnetic field. At what angle is the torque maximum?', category: '2-mark', topicId: '5-2-3-dipole-uniform-field' },
  { id: 'c5-board-7', text: '(Board) A circular coil of 50 turns, area 4 × 10⁻⁴ m², carries a current of 0.5 A. Find its magnetic moment and state the direction of the magnetic dipole moment.', category: '2-mark', topicId: '5-2-2-equivalent-solenoid' },
  { id: 'c5-board-8', text: '(Board) Draw a labelled diagram of magnetic field lines of a bar magnet. List any three properties of magnetic field lines.', category: '3-mark', topicId: '5-2-1-field-lines' },
  { id: 'c5-board-9', text: '(Board) Define magnetisation M and magnetic intensity H. Write the expression for the total magnetic field B in terms of H and M. Obtain the relation B = µ₀µ_r H.', category: '3-mark', topicId: '5-4-magnetisation' },
  { id: 'c5-board-10', text: '(Board) Explain the terms (i) diamagnetic, (ii) paramagnetic, (iii) ferromagnetic substances. Give one example of each and state the sign of χ for each.', category: '3-mark', topicId: '5-5-magnetic-properties' },
  { id: 'c5-board-11', text: "(Board) (a) State Gauss's law of magnetism and compare it with Gauss's law of electrostatics. (b) Draw field lines for a bar magnet and a solenoid, showing similarity. (c) Why is a bar magnet treated as equivalent to a solenoid?", category: '5-mark', topicId: '5-3-gauss-law' },
  { id: 'c5-board-12', text: '(Board) (a) Define magnetic susceptibility and relative permeability. Derive the relation µ = µ₀µ_r. (b) A solenoid has a core of relative permeability 800, 500 turns/m, and carries 2 A. Calculate H, M, and B.', category: '5-mark', topicId: '5-4-magnetisation' },

  // Assertion-Reason Questions
  { id: 'c5-ar-1', text: 'Assertion: Magnetic field lines form continuous closed loops. Reason: Magnetic monopoles do not exist.', category: 'assertion-reason', topicId: '5-3-gauss-law' },
  { id: 'c5-ar-2', text: 'Assertion: Diamagnetic substances are weakly repelled by magnets. Reason: The induced magnetic moment in diamagnetic substances opposes the applied field.', category: 'assertion-reason', topicId: '5-5-1-diamagnetism' },
  { id: 'c5-ar-3', text: 'Assertion: Ferromagnetic materials have large positive susceptibility. Reason: Ferromagnetic materials have domain structure.', category: 'assertion-reason', topicId: '5-5-3-ferromagnetism' },
  { id: 'c5-ar-4', text: 'Assertion: A bar magnet and a solenoid produce similar magnetic field patterns at large distances. Reason: Both can be treated as magnetic dipoles.', category: 'assertion-reason', topicId: '5-2-2-equivalent-solenoid' },
  { id: 'c5-ar-5', text: 'Assertion: The net magnetic flux through any closed surface is zero. Reason: This is because magnetic monopoles do not exist.', category: 'assertion-reason', topicId: '5-3-gauss-law' },

  // Case Study Questions
  { id: 'c5-case-1', text: 'Case Study: A physics student is studying the magnetic properties of different materials. She places samples of copper, aluminium, and iron in a non-uniform magnetic field. (a) Which sample will move towards the stronger field region? (b) Which will move towards the weaker field region? (c) Classify each material based on their magnetic behaviour. (d) What happens to the iron sample if heated above its Curie temperature?', category: 'case-study', topicId: '5-5-magnetic-properties' },
  { id: 'c5-case-2', text: 'Case Study: A bar magnet of magnetic moment 0.5 A·m² is placed in a uniform magnetic field of 0.4 T. (a) Calculate the torque when the magnet makes an angle of 30° with the field. (b) What is the potential energy at this position? (c) In which position is the magnet in stable equilibrium? (d) What work is required to rotate it from stable to unstable equilibrium?', category: 'case-study', topicId: '5-2-3-dipole-uniform-field' },

  // HOTS Questions
  { id: 'c5-hots-1', text: 'Why does breaking a magnet into pieces always produce magnets with both north and south poles, unlike cutting a charged rod which can separate positive and negative charges?', category: 'hots', topicId: '5-2-bar-magnet' },
  { id: 'c5-hots-2', text: 'A superconductor exhibits perfect diamagnetism (χ = -1). Explain why a small magnet can levitate above a superconductor surface.', category: 'hots', topicId: '5-5-1-diamagnetism' },
  { id: 'c5-hots-3', text: 'If magnetic monopoles were discovered, how would our understanding of magnetism change? What modifications would be needed in Maxwell\'s equations?', category: 'hots', topicId: '5-3-gauss-law' },
];

// Chapter 6: Electromagnetic Induction - Question Bank
const chapter6Questions: Question[] = [
  // 6.1 Introduction
  { id: 'c6-1m-1', text: 'Who conducted the pioneering experiments that demonstrated electromagnetic induction around 1830?', category: '1-mark', topicId: '6-1-introduction' },
  { id: 'c6-1m-2', text: 'What is electromagnetic induction?', category: '1-mark', topicId: '6-1-introduction' },
  { id: 'c6-1m-3', text: "Name two devices whose development was a direct outcome of Faraday's discovery of electromagnetic induction.", category: '1-mark', topicId: '6-1-introduction' },
  { id: 'c6-1m-4', text: "What was Faraday's reply when asked about the use of his discovery?", category: '1-mark', topicId: '6-1-introduction' },
  { id: 'c6-2m-1', text: 'Explain how the discovery of electromagnetic induction changed the modern world. Give two practical applications.', category: '2-mark', topicId: '6-1-introduction' },
  { id: 'c6-2m-2', text: 'What question about electricity and magnetism led Faraday to conduct his famous experiments? State the conclusion he reached.', category: '2-mark', topicId: '6-1-introduction' },

  // 6.2 The Experiments of Faraday and Henry
  { id: 'c6-1m-5', text: "In Faraday's Experiment 6.1, what causes the galvanometer to deflect?", category: '1-mark', topicId: '6-2-faraday-experiments' },
  { id: 'c6-1m-6', text: 'What happens to the galvanometer reading when the bar magnet is held stationary near the coil?', category: '1-mark', topicId: '6-2-faraday-experiments' },
  { id: 'c6-1m-7', text: 'When the North-pole is pushed towards a coil and then the South-pole is pushed towards it, how do the galvanometer deflections compare?', category: '1-mark', topicId: '6-2-faraday-experiments' },
  { id: 'c6-1m-8', text: 'What is the key conclusion from all three experiments of Faraday?', category: '1-mark', topicId: '6-2-faraday-experiments' },
  { id: 'c6-1m-9', text: 'In Experiment 6.3, why does the galvanometer show deflection only momentarily when the key K is pressed?', category: '1-mark', topicId: '6-2-faraday-experiments' },
  { id: 'c6-2m-3', text: "Describe Faraday's Experiment 6.1. What happens when (a) the magnet moves towards the coil, (b) the magnet is stationary, (c) the magnet is withdrawn?", category: '2-mark', topicId: '6-2-faraday-experiments' },
  { id: 'c6-2m-4', text: 'In Experiment 6.2, what replaces the bar magnet? Why does the galvanometer show deflection when coil C2 is moved towards C1?', category: '2-mark', topicId: '6-2-faraday-experiments' },
  { id: 'c6-2m-5', text: 'Describe Experiment 6.3. Why does the deflection increase when an iron rod is inserted along the axis of the coils?', category: '2-mark', topicId: '6-2-faraday-experiments' },
  { id: 'c6-2m-6', text: '(NCERT 6.1 Ex) In Experiment 6.2: (a) What would you do to obtain a large galvanometer deflection? (b) How can you demonstrate induced current without a galvanometer?', category: '2-mark', topicId: '6-2-faraday-experiments' },
  { id: 'c6-3m-1', text: 'Describe all three experiments of Faraday and Henry. What common conclusion can be drawn from them about the condition for electromagnetic induction?', category: '3-mark', topicId: '6-2-faraday-experiments' },

  // 6.3 Magnetic Flux
  { id: 'c6-1m-10', text: 'Define magnetic flux. Write its SI unit.', category: '1-mark', topicId: '6-3-magnetic-flux' },
  { id: 'c6-1m-11', text: 'Write the formula for magnetic flux through a plane surface of area A placed in a uniform magnetic field B at angle θ.', category: '1-mark', topicId: '6-3-magnetic-flux' },
  { id: 'c6-1m-12', text: 'Is magnetic flux a scalar or a vector quantity?', category: '1-mark', topicId: '6-3-magnetic-flux' },
  { id: 'c6-1m-13', text: 'What are the SI units of magnetic flux? Give two equivalent forms.', category: '1-mark', topicId: '6-3-magnetic-flux' },
  { id: 'c6-1m-14', text: 'When is the magnetic flux through a coil maximum? When is it zero?', category: '1-mark', topicId: '6-3-magnetic-flux' },
  { id: 'c6-2m-7', text: 'A coil of area A is placed in a uniform field B. Write the expression for flux (a) when the plane of the coil is perpendicular to B, (b) when the plane of the coil is parallel to B.', category: '2-mark', topicId: '6-3-magnetic-flux' },
  { id: 'c6-2m-8', text: 'How is the expression for magnetic flux extended to a non-uniform field over a curved surface? Write the general formula.', category: '2-mark', topicId: '6-3-magnetic-flux' },
  { id: 'c6-num-1', text: 'A rectangular coil of area 0.04 m² is placed in a uniform magnetic field of 0.5 T. Calculate the flux when (a) the plane of the coil is perpendicular to the field, (b) the plane makes an angle of 30° with the field direction.', category: 'numerical', topicId: '6-3-magnetic-flux' },

  // 6.4 Faraday's Law of Induction
  { id: 'c6-1m-15', text: "State Faraday's law of electromagnetic induction.", category: '1-mark', topicId: '6-4-faradays-law' },
  { id: 'c6-1m-16', text: "Write the mathematical expression for the induced emf according to Faraday's law.", category: '1-mark', topicId: '6-4-faradays-law' },
  { id: 'c6-1m-17', text: "What does the negative sign in Faraday's law indicate?", category: '1-mark', topicId: '6-4-faradays-law' },
  { id: 'c6-1m-18', text: 'Write the expression for total induced emf in a coil of N turns. How can induced emf be increased?', category: '1-mark', topicId: '6-4-faradays-law' },
  { id: 'c6-1m-19', text: 'Name three ways in which the flux through a coil can be varied.', category: '1-mark', topicId: '6-4-faradays-law' },
  { id: 'c6-2m-9', text: "Explain using Faraday's law why the galvanometer shows a momentary deflection in Experiment 6.3 when the key is pressed, and no deflection when it is held pressed.", category: '2-mark', topicId: '6-4-faradays-law' },
  { id: 'c6-2m-10', text: 'A coil has N turns. Derive the expression for the induced emf in terms of the rate of change of flux linkage.', category: '2-mark', topicId: '6-4-faradays-law' },
  { id: 'c6-2m-11', text: 'How does changing the shape of a coil in a magnetic field induce an emf? Give two examples of how flux can be varied.', category: '2-mark', topicId: '6-4-faradays-law' },
  { id: 'c6-3m-2', text: "State and explain Faraday's law of electromagnetic induction. Illustrate with Experiments 6.1 and 6.2 how it accounts for the observations.", category: '3-mark', topicId: '6-4-faradays-law' },
  { id: 'c6-num-2', text: '(NCERT Ex 6.2) A square loop of side 10 cm and resistance 0.5 Ω is placed vertically in the east-west plane. A uniform field of 0.10 T is set up in the north-east direction. The field is decreased to zero in 0.70 s. Find the induced emf and current.', category: 'numerical', topicId: '6-4-faradays-law' },
  { id: 'c6-num-3', text: "(NCERT Ex 6.3) A circular coil of radius 10 cm, 500 turns and resistance 2 Ω is placed perpendicular to the horizontal component of Earth's field (3.0 × 10⁻⁵ T). It is rotated about its vertical diameter through 180° in 0.25 s. Find the induced emf and current.", category: 'numerical', topicId: '6-4-faradays-law' },
  { id: 'c6-num-4', text: '(NCERT Ex 6.3) A long solenoid with 15 turns per cm has a small loop of area 2.0 cm² placed inside, normal to its axis. If current changes steadily from 2.0 A to 4.0 A in 0.1 s, find the induced emf.', category: 'numerical', topicId: '6-4-faradays-law' },

  // 6.5 Lenz's Law and Conservation of Energy
  { id: 'c6-1m-20', text: "State Lenz's law.", category: '1-mark', topicId: '6-5-lenz-law' },
  { id: 'c6-1m-21', text: "Who deduced Lenz's law and in which year?", category: '1-mark', topicId: '6-5-lenz-law' },
  { id: 'c6-1m-22', text: "What does the negative sign in Faraday's equation represent physically?", category: '1-mark', topicId: '6-5-lenz-law' },
  { id: 'c6-1m-23', text: 'What would happen if the induced current aided the change in flux instead of opposing it?', category: '1-mark', topicId: '6-5-lenz-law' },
  { id: 'c6-2m-12', text: "Using Lenz's law, determine the direction of induced current when the North-pole of a bar magnet is (a) pushed towards a coil, (b) withdrawn from a coil.", category: '2-mark', topicId: '6-5-lenz-law' },
  { id: 'c6-2m-13', text: "Explain how Lenz's law is consistent with the law of conservation of energy. What would happen if Lenz's law were violated?", category: '2-mark', topicId: '6-5-lenz-law' },
  { id: 'c6-2m-14', text: "(NCERT Ex 6.4) Loops of different shapes move into and out of a magnetic field region. Using Lenz's law, determine the direction of induced current in (i) a rectangular loop entering the field, (ii) a triangular loop leaving the field.", category: '2-mark', topicId: '6-5-lenz-law' },
  { id: 'c6-2m-15', text: '(NCERT Ex 6.5a) A closed loop is held stationary in the field between two permanent magnets. Can current be induced by using very strong magnets?', category: '2-mark', topicId: '6-5-lenz-law' },
  { id: 'c6-2m-16', text: '(NCERT Ex 6.5c) A rectangular loop and a circular loop both move out of a uniform field with constant velocity. In which loop is the induced emf constant during exit? Explain.', category: '2-mark', topicId: '6-5-lenz-law' },
  { id: 'c6-2m-17', text: '(NCERT Ex 6.5d) Predict the polarity of the capacitor plates when a magnet moves towards a loop connected to a capacitor.', category: '2-mark', topicId: '6-5-lenz-law' },
  { id: 'c6-3m-3', text: "State Lenz's law. Using the concept of energy conservation, explain why the induced current must oppose the change in flux. Describe the direction of induced current for (a) magnet approaching a coil, (b) magnet receding from a coil.", category: '3-mark', topicId: '6-5-lenz-law' },
  { id: 'c6-5m-1', text: "(a) State Faraday's law and Lenz's law of electromagnetic induction. (b) Explain, with the help of a diagram, the direction of induced current when a bar magnet's North-pole approaches a coil. (c) How does Lenz's law follow from the law of conservation of energy?", category: '5-mark', topicId: '6-5-lenz-law' },

  // 6.6 Motional Electromotive Force
  { id: 'c6-1m-24', text: 'Define motional emf. Write its formula.', category: '1-mark', topicId: '6-6-motional-emf' },
  { id: 'c6-1m-25', text: 'A rod of length l moves with velocity v perpendicular to a field B. Write the expression for the motional emf.', category: '1-mark', topicId: '6-6-motional-emf' },
  { id: 'c6-1m-26', text: 'How is motional emf explained using the Lorentz force on charge carriers?', category: '1-mark', topicId: '6-6-motional-emf' },
  { id: 'c6-1m-27', text: 'What force causes an emf in a stationary conductor when the magnetic field changes?', category: '1-mark', topicId: '6-6-motional-emf' },
  { id: 'c6-2m-18', text: 'Derive the expression for motional emf ε = Blv for a conductor of length l moving with velocity v perpendicular to a uniform magnetic field B.', category: '2-mark', topicId: '6-6-motional-emf' },
  { id: 'c6-2m-19', text: 'Explain the origin of motional emf using the Lorentz force. Show that ε = Blv.', category: '2-mark', topicId: '6-6-motional-emf' },
  { id: 'c6-2m-20', text: 'What is the difference between the mechanism of emf induction in (a) a moving conductor in a static field, and (b) a stationary conductor in a changing field?', category: '2-mark', topicId: '6-6-motional-emf' },
  { id: 'c6-3m-4', text: 'A rectangular conducting loop PQRS is placed in a uniform magnetic field B perpendicular to its plane. The arm PQ is moved with velocity v. (a) Derive the expression for induced emf. (b) If resistance is R, find the induced current. (c) Explain energy considerations.', category: '3-mark', topicId: '6-6-motional-emf' },
  { id: 'c6-5m-2', text: "(a) Define motional emf. Derive ε = Blv using Faraday's law for a rod moving in a magnetic field. (b) Also derive it using the Lorentz force. (c) Explain why a time-varying magnetic field also generates an electric field.", category: '5-mark', topicId: '6-6-motional-emf' },
  { id: 'c6-num-5', text: '(NCERT Ex 6.5) A 1.0 m long metallic rod is rotated with angular frequency 400 rad/s about an axis normal to the rod through one end. A constant field of 0.5 T parallel to the axis exists. Calculate the emf between the centre and the ring.', category: 'numerical', topicId: '6-6-motional-emf' },
  { id: 'c6-num-6', text: "(NCERT Ex 6.6) A horizontal wire 10 m long extending east-west falls at 5.0 m/s, perpendicular to the horizontal component of Earth's field (0.30 × 10⁻⁴ T). (a) Find the instantaneous emf. (b) State the direction of emf. (c) Which end is at higher potential?", category: 'numerical', topicId: '6-6-motional-emf' },
  { id: 'c6-num-7', text: "(NCERT Ex 6.7) A wheel with 10 metallic spokes, each 0.5 m long, is rotated at 120 rev/min in a plane normal to Earth's field (H_E = 0.4 G). Find the induced emf between axle and rim. (1 G = 10⁻⁴ T)", category: 'numerical', topicId: '6-6-motional-emf' },
  { id: 'c6-num-8', text: 'A rod of length 50 cm moves with a velocity of 2 m/s perpendicular to a magnetic field of 0.4 T. Calculate the motional emf induced in the rod.', category: 'numerical', topicId: '6-6-motional-emf' },

  // 6.7 Inductance
  { id: 'c6-1m-28', text: 'Define inductance. Write its SI unit.', category: '1-mark', topicId: '6-7-inductance' },
  { id: 'c6-1m-29', text: 'What is flux linkage? Write its expression for a coil of N turns.', category: '1-mark', topicId: '6-7-inductance' },
  { id: 'c6-1m-30', text: 'On what factors does inductance depend?', category: '1-mark', topicId: '6-7-inductance' },
  { id: 'c6-1m-31', text: 'Write the dimensions of inductance.', category: '1-mark', topicId: '6-7-inductance' },
  { id: 'c6-1m-32', text: 'In honour of whom is the SI unit of inductance named?', category: '1-mark', topicId: '6-7-inductance' },
  { id: 'c6-2m-21', text: 'State the relation NΦ_B ∝ I for a coil. What is the constant of proportionality called?', category: '2-mark', topicId: '6-7-inductance' },
  { id: 'c6-2m-22', text: 'Explain the analogy between inductance and capacitance with respect to their dependence on geometry and material properties.', category: '2-mark', topicId: '6-7-inductance' },

  // 6.7.1 Mutual Inductance
  { id: 'c6-1m-33', text: 'Define mutual inductance. Write its SI unit.', category: '1-mark', topicId: '6-7-1-mutual-inductance' },
  { id: 'c6-1m-34', text: 'Write the expression for the induced emf in coil 1 due to changing current in coil 2 in terms of mutual inductance M.', category: '1-mark', topicId: '6-7-1-mutual-inductance' },
  { id: 'c6-1m-35', text: 'State the equality M₁₂ = M₂₁. What is its significance?', category: '1-mark', topicId: '6-7-1-mutual-inductance' },
  { id: 'c6-1m-36', text: 'Write the formula for mutual inductance of two co-axial solenoids.', category: '1-mark', topicId: '6-7-1-mutual-inductance' },
  { id: 'c6-1m-37', text: 'How does the presence of a medium of relative permeability µ_r affect the mutual inductance of two coils?', category: '1-mark', topicId: '6-7-1-mutual-inductance' },
  { id: 'c6-2m-23', text: 'Derive the expression for mutual inductance M₁₂ of two long co-axial solenoids S1 and S2, where S1 is the inner solenoid.', category: '2-mark', topicId: '6-7-1-mutual-inductance' },
  { id: 'c6-2m-24', text: 'Show that M₁₂ = M₂₁ for two co-axial solenoids. Why is this equality important?', category: '2-mark', topicId: '6-7-1-mutual-inductance' },
  { id: 'c6-2m-25', text: '(NCERT Ex 6.8) Two concentric circular coils of radii r₁ (small) and r₂ (large) are placed co-axially with r₁ << r₂. Obtain the mutual inductance of the arrangement.', category: '2-mark', topicId: '6-7-1-mutual-inductance' },
  { id: 'c6-2m-26', text: 'The induced emf in coil 1 is ε₁ = –M(dI₂/dt). What does this tell us about the relationship between the rate of change of current and induced emf?', category: '2-mark', topicId: '6-7-1-mutual-inductance' },
  { id: 'c6-3m-5', text: 'Define mutual inductance. Derive the expression M = µ₀n₁n₂πr₁²l for two long co-axial solenoids, clearly stating all assumptions and the meaning of each symbol.', category: '3-mark', topicId: '6-7-1-mutual-inductance' },
  { id: 'c6-5m-3', text: '(a) Define mutual inductance and derive its expression for two co-axial solenoids. (b) Write the formula for induced emf. (c) A pair of coils has mutual inductance 1.5 H. If current in one coil changes from 0 to 20 A in 0.5 s, find the change in flux linkage with the other coil and the induced emf.', category: '5-mark', topicId: '6-7-1-mutual-inductance' },
  { id: 'c6-num-9', text: '(NCERT Ex 6.8) Two adjacent coils have mutual inductance 1.5 H. Current in one coil changes from 0 to 20 A in 0.5 s. Calculate: (a) change in flux linkage with the other coil, (b) induced emf.', category: 'numerical', topicId: '6-7-1-mutual-inductance' },
  { id: 'c6-num-10', text: 'Two long co-axial solenoids have 500 and 1000 turns/m, radii 1 cm (inner) and 3 cm (outer), and length 50 cm. Calculate the mutual inductance (µ₀ = 4π × 10⁻⁷ H/m).', category: 'numerical', topicId: '6-7-1-mutual-inductance' },

  // 6.7.2 Self-Inductance
  { id: 'c6-1m-38', text: 'Define self-inductance. Write its SI unit.', category: '1-mark', topicId: '6-7-2-self-inductance' },
  { id: 'c6-1m-39', text: 'Write the expression for self-induced emf in terms of self-inductance L and rate of change of current.', category: '1-mark', topicId: '6-7-2-self-inductance' },
  { id: 'c6-1m-40', text: 'Why is the self-induced emf also called back emf?', category: '1-mark', topicId: '6-7-2-self-inductance' },
  { id: 'c6-1m-41', text: 'Write the formula for self-inductance of a long solenoid of n turns per unit length, cross-sectional area A, and length l.', category: '1-mark', topicId: '6-7-2-self-inductance' },
  { id: 'c6-1m-42', text: 'How is self-inductance analogous to mass (inertia) in mechanics?', category: '1-mark', topicId: '6-7-2-self-inductance' },
  { id: 'c6-1m-43', text: 'Write the expression for energy stored in an inductor carrying current I.', category: '1-mark', topicId: '6-7-2-self-inductance' },
  { id: 'c6-2m-27', text: 'Derive the expression L = µ₀n²Al for the self-inductance of a long solenoid.', category: '2-mark', topicId: '6-7-2-self-inductance' },
  { id: 'c6-2m-28', text: 'Define self-inductance. Explain why the self-induced emf opposes the change in current. How does this make L analogous to inertia?', category: '2-mark', topicId: '6-7-2-self-inductance' },
  { id: 'c6-2m-29', text: 'Derive the expression for energy stored in an inductor: W = ½LI². Compare it with kinetic energy ½mv².', category: '2-mark', topicId: '6-7-2-self-inductance' },
  { id: 'c6-2m-30', text: 'How does filling the solenoid core with a material of relative permeability µ_r modify its self-inductance? Write the modified formula.', category: '2-mark', topicId: '6-7-2-self-inductance' },
  { id: 'c6-2m-31', text: '(NCERT Ex 6.7) Current in a circuit falls from 5.0 A to 0.0 A in 0.1 s. An average emf of 200 V is induced. Estimate the self-inductance.', category: '2-mark', topicId: '6-7-2-self-inductance' },
  { id: 'c6-3m-6', text: '(a) Define self-inductance and derive L = µ₀n²Al for a solenoid. (b) Derive the expression for energy stored in the inductor: W = ½LI². (c) Obtain the expression for magnetic energy per unit volume.', category: '3-mark', topicId: '6-7-2-self-inductance' },
  { id: 'c6-3m-7', text: '(NCERT Ex 6.9) (a) Obtain the expression for magnetic energy stored in a solenoid in terms of B, A, and l. (b) Compare it with electrostatic energy stored in a capacitor.', category: '3-mark', topicId: '6-7-2-self-inductance' },
  { id: 'c6-5m-4', text: '(a) Define self-inductance and derive its expression for a long solenoid. (b) Explain back emf and energy storage in an inductor. (c) A solenoid of 500 turns, cross-section 4 cm², and length 50 cm has a core of relative permeability 400. Find the self-inductance and the energy stored when current is 2 A.', category: '5-mark', topicId: '6-7-2-self-inductance' },
  { id: 'c6-num-11', text: 'A solenoid has 1000 turns, length 0.5 m, and cross-sectional area 5 × 10⁻⁴ m². Calculate its self-inductance. (µ₀ = 4π × 10⁻⁷ H/m)', category: 'numerical', topicId: '6-7-2-self-inductance' },
  { id: 'c6-num-12', text: 'An inductor of self-inductance 2 H carries a current of 3 A. Find the energy stored in it. If the current is doubled, by what factor does the energy change?', category: 'numerical', topicId: '6-7-2-self-inductance' },
  { id: 'c6-num-13', text: 'The current through an inductor of 0.5 H changes at a rate of 4 A/s. Find the magnitude of the back emf induced.', category: 'numerical', topicId: '6-7-2-self-inductance' },

  // 6.8 AC Generator
  { id: 'c6-1m-44', text: 'What does an AC generator convert?', category: '1-mark', topicId: '6-8-ac-generator' },
  { id: 'c6-1m-45', text: 'Who is credited with the development of the AC generator?', category: '1-mark', topicId: '6-8-ac-generator' },
  { id: 'c6-1m-46', text: 'Name the basic components of an AC generator.', category: '1-mark', topicId: '6-8-ac-generator' },
  { id: 'c6-1m-47', text: 'Write the expression for the instantaneous emf produced by a rotating coil in a uniform magnetic field.', category: '1-mark', topicId: '6-8-ac-generator' },
  { id: 'c6-1m-48', text: 'What is the peak emf (ε₀) of an AC generator in terms of N, B, A, and ω?', category: '1-mark', topicId: '6-8-ac-generator' },
  { id: 'c6-1m-49', text: 'At what orientation of the coil with respect to the field is the induced emf maximum? When is it zero?', category: '1-mark', topicId: '6-8-ac-generator' },
  { id: 'c6-1m-50', text: 'What is the frequency of AC in India? In USA?', category: '1-mark', topicId: '6-8-ac-generator' },
  { id: 'c6-2m-32', text: 'Describe the principle of an AC generator. How does the rotation of the coil produce an alternating emf?', category: '2-mark', topicId: '6-8-ac-generator' },
  { id: 'c6-2m-33', text: 'Derive the expression ε = NBAω sin ωt for the emf generated by a coil rotating in a uniform magnetic field.', category: '2-mark', topicId: '6-8-ac-generator' },
  { id: 'c6-2m-34', text: 'Name three types of commercial generators and state the energy source for each.', category: '2-mark', topicId: '6-8-ac-generator' },
  { id: 'c6-2m-35', text: 'Explain the role of slip rings and brushes in an AC generator. What is the function of the armature?', category: '2-mark', topicId: '6-8-ac-generator' },
  { id: 'c6-2m-36', text: 'Compare the AC generator in terms of energy conversion with the motor. In most commercial generators, which part rotates — the coil or the magnet? Why?', category: '2-mark', topicId: '6-8-ac-generator' },
  { id: 'c6-3m-8', text: 'With the help of a labelled diagram, explain the construction and working principle of an AC generator. Derive the expression for the instantaneous emf generated.', category: '3-mark', topicId: '6-8-ac-generator' },
  { id: 'c6-3m-9', text: 'A coil of N turns and area A rotates with angular velocity ω in a uniform magnetic field B. (a) Write the expression for flux at time t. (b) Derive the emf expression. (c) Sketch the variation of emf with time showing one complete cycle.', category: '3-mark', topicId: '6-8-ac-generator' },
  { id: 'c6-5m-5', text: '(a) Draw a labelled diagram of an AC generator. (b) Derive the expression for emf: ε = ε₀ sin ωt, explaining when emf is maximum and zero. (c) A coil of 100 turns and area 0.05 m² rotates at 50 Hz in a uniform field of 0.3 T. Calculate the peak emf.', category: '5-mark', topicId: '6-8-ac-generator' },
  { id: 'c6-num-14', text: '(NCERT Ex 6.10) Kamla peddles a bicycle. The pedals are attached to a 100-turn coil of area 0.10 m². The coil rotates at 0.5 rev/s in a field of 0.01 T. Find the maximum voltage generated.', category: 'numerical', topicId: '6-8-ac-generator' },
  { id: 'c6-num-15', text: 'An AC generator has a coil of 200 turns, area 0.04 m², rotating at 50 rev/s in a field of 0.5 T. Calculate: (a) peak emf, (b) emf at t = 0.005 s.', category: 'numerical', topicId: '6-8-ac-generator' },
  { id: 'c6-num-16', text: 'A generator produces a peak emf of 220 V when the coil rotates at 50 Hz. If the number of turns is 100 and the area is 0.04 m², find the magnetic field strength.', category: 'numerical', topicId: '6-8-ac-generator' },

  // NCERT Textbook Exercise Questions
  { id: 'c6-ncert-1', text: '(Ex 6.1) Predict the direction of induced current in situations (a) to (f) described by Fig. 6.15 of NCERT.', category: '3-mark', topicId: '6-5-lenz-law' },
  { id: 'c6-ncert-2', text: "(Ex 6.2) Use Lenz's law to determine the direction of induced current in: (a) a wire of irregular shape turning into a circular shape; (b) a circular loop being deformed into a narrow straight wire.", category: '2-mark', topicId: '6-5-lenz-law' },
  { id: 'c6-ncert-3', text: '(Ex 6.3) A long solenoid with 15 turns/cm has a small loop of area 2.0 cm² placed inside, normal to its axis. Current changes steadily from 2.0 A to 4.0 A in 0.1 s. Find the induced emf.', category: 'numerical', topicId: '6-4-faradays-law' },
  { id: 'c6-ncert-4', text: '(Ex 6.4) A rectangular wire loop 8 cm × 2 cm with a small cut moves out of a uniform field of 0.3 T at 1 cm/s normal to (a) the longer side, (b) the shorter side. Find the emf across the cut and how long it lasts.', category: 'numerical', topicId: '6-6-motional-emf' },
  { id: 'c6-ncert-5', text: '(Ex 6.5) A 1.0 m metallic rod rotates at 400 rad/s about an axis through one end, in contact with a metallic ring. A uniform field of 0.5 T is parallel to the axis. Calculate the emf between centre and ring.', category: 'numerical', topicId: '6-6-motional-emf' },
  { id: 'c6-ncert-6', text: "(Ex 6.6) A horizontal wire 10 m long falls at 5.0 m/s. Earth's horizontal field = 0.30 × 10⁻⁴ Wb/m². (a) Instantaneous emf; (b) direction of emf; (c) which end is at higher potential?", category: 'numerical', topicId: '6-6-motional-emf' },
  { id: 'c6-ncert-7', text: '(Ex 6.7) Current falls from 5.0 A to 0.0 A in 0.1 s. Average induced emf = 200 V. Estimate self-inductance.', category: 'numerical', topicId: '6-7-2-self-inductance' },
  { id: 'c6-ncert-8', text: '(Ex 6.8) Adjacent coils have mutual inductance 1.5 H. Current changes from 0 to 20 A in 0.5 s. What is the change in flux linkage with the other coil?', category: 'numerical', topicId: '6-7-1-mutual-inductance' },

  // Board Pattern Questions
  { id: 'c6-board-1', text: "(Board) State Faraday's law of electromagnetic induction.", category: '1-mark', topicId: '6-4-faradays-law' },
  { id: 'c6-board-2', text: '(Board) Define self-inductance. Write its SI unit.', category: '1-mark', topicId: '6-7-2-self-inductance' },
  { id: 'c6-board-3', text: "(Board) Why is the self-induced emf called 'back emf'?", category: '1-mark', topicId: '6-7-2-self-inductance' },
  { id: 'c6-board-4', text: '(Board) What is the SI unit of magnetic flux? Write its equivalent in tesla.', category: '1-mark', topicId: '6-3-magnetic-flux' },
  { id: 'c6-board-5', text: '(Board) A coil of N turns is placed in a changing magnetic field. Write the expression for induced emf.', category: '1-mark', topicId: '6-4-faradays-law' },
  { id: 'c6-board-6', text: "(Board) State Lenz's law and show that it is consistent with the law of conservation of energy.", category: '2-mark', topicId: '6-5-lenz-law' },
  { id: 'c6-board-7', text: "(Board) Derive the expression for motional emf ε = Blv using Faraday's law.", category: '2-mark', topicId: '6-6-motional-emf' },
  { id: 'c6-board-8', text: '(Board) A solenoid of 200 turns, area 4 cm², and length 20 cm is connected to a galvanometer. A magnet is moved towards it. If flux changes from 0.02 Wb to 0.06 Wb in 0.02 s, find the induced emf and state the direction.', category: '2-mark', topicId: '6-4-faradays-law' },
  { id: 'c6-board-9', text: '(Board) Explain the analogy between self-inductance and mass (inertia). Write the expression for energy stored in an inductor.', category: '2-mark', topicId: '6-7-2-self-inductance' },
  { id: 'c6-board-10', text: '(Board) Derive the expression for self-inductance of a long solenoid. How is it modified when a material of relative permeability µ_r fills the core?', category: '3-mark', topicId: '6-7-2-self-inductance' },
  { id: 'c6-board-11', text: '(Board) With a labelled diagram, describe the working of an AC generator. Derive ε = NBA ω sin ωt.', category: '3-mark', topicId: '6-8-ac-generator' },
  { id: 'c6-board-12', text: '(Board) Define mutual inductance. Derive M = µ₀n₁n₂πr₁²l for two co-axial solenoids.', category: '3-mark', topicId: '6-7-1-mutual-inductance' },
  { id: 'c6-board-13', text: "(Board) (a) State Faraday's law and Lenz's law. (b) Describe Faraday's three experiments and their common conclusion. (c) A square coil of 200 turns, side 5 cm, rotates at 50 Hz in a field of 0.2 T. Find peak emf and emf at t = 1/400 s.", category: '5-mark', topicId: '6-4-faradays-law' },
  { id: 'c6-board-14', text: '(Board) (a) Define self-inductance and mutual inductance. (b) Derive expressions for both for a solenoid/coil system. (c) A solenoid of 500 turns/m, cross-section 4 × 10⁻⁴ m², and length 1 m has µ_r = 500. Calculate L and energy stored at I = 5 A.', category: '5-mark', topicId: '6-7-2-self-inductance' },

  // Assertion-Reason Questions
  { id: 'c6-ar-1', text: "Assertion: The induced emf opposes the change in flux. Reason: This is a statement of Lenz's law.", category: 'assertion-reason', topicId: '6-5-lenz-law' },
  { id: 'c6-ar-2', text: 'Assertion: Self-inductance is called electrical inertia. Reason: Self-inductance opposes the change in current through a circuit.', category: 'assertion-reason', topicId: '6-7-2-self-inductance' },
  { id: 'c6-ar-3', text: 'Assertion: An AC generator converts mechanical energy to electrical energy. Reason: The working of AC generator is based on electromagnetic induction.', category: 'assertion-reason', topicId: '6-8-ac-generator' },
  { id: 'c6-ar-4', text: 'Assertion: A moving conductor in a magnetic field develops an emf across its ends. Reason: The Lorentz force on free electrons causes charge separation.', category: 'assertion-reason', topicId: '6-6-motional-emf' },
  { id: 'c6-ar-5', text: 'Assertion: Mutual inductance M₁₂ = M₂₁ for two coils. Reason: Mutual inductance depends on the geometry and relative positioning of the coils.', category: 'assertion-reason', topicId: '6-7-1-mutual-inductance' },

  // Case Study Questions
  { id: 'c6-case-1', text: 'Case Study: A student performs an experiment with a coil connected to a galvanometer. She moves a bar magnet towards and away from the coil at different speeds. (a) Why does the galvanometer show zero deflection when the magnet is stationary? (b) How does the deflection change when she doubles the speed of the magnet? (c) What happens to the deflection if she uses a stronger magnet? (d) If she reverses the direction of motion, what change will she observe?', category: 'case-study', topicId: '6-2-faraday-experiments' },
  { id: 'c6-case-2', text: 'Case Study: An AC generator has a coil of 500 turns with area 0.02 m², rotating at 3000 rpm in a magnetic field of 0.4 T. (a) Calculate the angular frequency of rotation. (b) Find the peak emf generated. (c) Write the expression for instantaneous emf. (d) At what time after starting from θ = 0 will the emf be maximum?', category: 'case-study', topicId: '6-8-ac-generator' },

  // HOTS Questions
  { id: 'c6-hots-1', text: "If Lenz's law were not true and the induced current aided the change in flux, explain how this would violate the law of conservation of energy.", category: 'hots', topicId: '6-5-lenz-law' },
  { id: 'c6-hots-2', text: 'A copper ring is held horizontally and a bar magnet is dropped vertically through it. Explain why the magnet falls slower than if there were no ring.', category: 'hots', topicId: '6-5-lenz-law' },
  { id: 'c6-hots-3', text: 'Why does an inductor act like a short circuit for DC but offers opposition to AC? Explain using the concept of self-inductance.', category: 'hots', topicId: '6-7-2-self-inductance' },
];

// Chapter 7: Alternating Current - Question Bank
const chapter7Questions: Question[] = [
  // 7.1 Introduction
  { id: 'c7-1m-1', text: 'What is alternating current (AC)?', category: '1-mark', topicId: '7-1-introduction' },
  { id: 'c7-1m-2', text: 'Why is AC preferred over DC for power transmission over long distances?', category: '1-mark', topicId: '7-1-introduction' },
  { id: 'c7-1m-3', text: 'What device is used to change AC voltage from one value to another?', category: '1-mark', topicId: '7-1-introduction' },
  { id: 'c7-1m-4', text: 'What is the typical frequency of AC supply in India?', category: '1-mark', topicId: '7-1-introduction' },
  { id: 'c7-1m-5', text: 'Name one application that exploits the special properties of AC circuits.', category: '1-mark', topicId: '7-1-introduction' },
  { id: 'c7-2m-1', text: 'Give two reasons why AC voltage is preferred over DC voltage for transmission and distribution of electrical energy.', category: '2-mark', topicId: '7-1-introduction' },
  { id: 'c7-2m-2', text: 'What is the main advantage of using transformers in AC power distribution? How does this affect long-distance power transmission?', category: '2-mark', topicId: '7-1-introduction' },

  // 7.2 AC Voltage Applied to a Resistor
  { id: 'c7-1m-6', text: 'Write the expression for AC voltage applied to a resistor.', category: '1-mark', topicId: '7-2-ac-resistor' },
  { id: 'c7-1m-7', text: 'What is the phase relationship between voltage and current in a purely resistive AC circuit?', category: '1-mark', topicId: '7-2-ac-resistor' },
  { id: 'c7-1m-8', text: 'Write the expression for instantaneous current in a resistor connected to an AC source v = v_m sin ωt.', category: '1-mark', topicId: '7-2-ac-resistor' },
  { id: 'c7-1m-9', text: 'Define root mean square (rms) value of current. Write its relation to peak current.', category: '1-mark', topicId: '7-2-ac-resistor' },
  { id: 'c7-1m-10', text: 'What is the rms voltage? Write the relation between rms voltage V and peak voltage v_m.', category: '1-mark', topicId: '7-2-ac-resistor' },
  { id: 'c7-1m-11', text: 'If the rms value of AC voltage is 220 V, what is its peak voltage?', category: '1-mark', topicId: '7-2-ac-resistor' },
  { id: 'c7-2m-3', text: 'Derive the expression for current in a resistor R connected to an AC source v = v_m sin ωt. Show that voltage and current are in phase.', category: '2-mark', topicId: '7-2-ac-resistor' },
  { id: 'c7-2m-4', text: 'Show that the average power dissipated in a resistor over a complete cycle is P = I²R, where I is the rms current.', category: '2-mark', topicId: '7-2-ac-resistor' },
  { id: 'c7-2m-5', text: 'Why is the average current over one complete cycle zero, but the average power dissipated is not zero? Explain.', category: '2-mark', topicId: '7-2-ac-resistor' },
  { id: 'c7-3m-1', text: 'Derive the expression for average power dissipated in a resistor connected to an AC source. Introduce the concept of rms current and voltage.', category: '3-mark', topicId: '7-2-ac-resistor' },
  { id: 'c7-num-1', text: '(NCERT Ex 7.1) A 100 Ω resistor is connected to a 220 V, 50 Hz AC supply. (a) What is the rms value of current in the circuit? (b) What is the net power consumed over a full cycle?', category: 'numerical', topicId: '7-2-ac-resistor' },
  { id: 'c7-num-2', text: '(NCERT Ex 7.2) (a) The peak voltage of an AC supply is 300 V. What is the rms voltage? (b) The rms value of current in an AC circuit is 10 A. What is the peak current?', category: 'numerical', topicId: '7-2-ac-resistor' },
  { id: 'c7-num-3', text: 'A light bulb is rated at 100 W for a 220 V supply. Find (a) the resistance of the bulb, (b) the peak voltage of the source, and (c) the rms current through the bulb.', category: 'numerical', topicId: '7-2-ac-resistor' },

  // 7.3 Representation of AC Current and Voltage by Rotating Vectors — Phasors
  { id: 'c7-1m-12', text: 'What is a phasor?', category: '1-mark', topicId: '7-3-phasors' },
  { id: 'c7-1m-13', text: 'What does the magnitude of a phasor represent?', category: '1-mark', topicId: '7-3-phasors' },
  { id: 'c7-1m-14', text: 'In a phasor diagram, what do the vertical components of voltage and current phasors represent?', category: '1-mark', topicId: '7-3-phasors' },
  { id: 'c7-1m-15', text: 'What is the phase angle between current and voltage phasors in a purely resistive AC circuit?', category: '1-mark', topicId: '7-3-phasors' },
  { id: 'c7-2m-6', text: 'Explain the concept of phasors. How do they help in analyzing AC circuits?', category: '2-mark', topicId: '7-3-phasors' },
  { id: 'c7-2m-7', text: 'Draw the phasor diagram for voltage and current in a purely resistive circuit. What is the phase relationship between them?', category: '2-mark', topicId: '7-3-phasors' },
  { id: 'c7-2m-8', text: 'Are phasors vectors? If they are not vectors, why are they represented as rotating vectors?', category: '2-mark', topicId: '7-3-phasors' },

  // 7.4 AC Voltage Applied to an Inductor
  { id: 'c7-1m-16', text: 'Define inductive reactance. Write its SI unit.', category: '1-mark', topicId: '7-4-ac-inductor' },
  { id: 'c7-1m-17', text: 'Write the expression for inductive reactance X_L in terms of angular frequency ω and inductance L.', category: '1-mark', topicId: '7-4-ac-inductor' },
  { id: 'c7-1m-18', text: 'What is the phase relationship between voltage and current in a purely inductive AC circuit?', category: '1-mark', topicId: '7-4-ac-inductor' },
  { id: 'c7-1m-19', text: 'What is the average power consumed by an ideal inductor over a complete cycle?', category: '1-mark', topicId: '7-4-ac-inductor' },
  { id: 'c7-1m-20', text: "Why is the current in a purely inductive circuit called 'wattless current'?", category: '1-mark', topicId: '7-4-ac-inductor' },
  { id: 'c7-2m-9', text: 'Derive the expression for current in a pure inductor connected to an AC source v = v_m sin ωt. Show that current lags voltage by π/2.', category: '2-mark', topicId: '7-4-ac-inductor' },
  { id: 'c7-2m-10', text: 'Draw the phasor diagram and the wave diagram showing variation of v and i with ωt for a purely inductive circuit.', category: '2-mark', topicId: '7-4-ac-inductor' },
  { id: 'c7-2m-11', text: 'Show that the average power supplied to an inductor over one complete cycle is zero.', category: '2-mark', topicId: '7-4-ac-inductor' },
  { id: 'c7-2m-12', text: 'How does inductive reactance depend on (a) frequency, and (b) inductance? Compare it with resistance.', category: '2-mark', topicId: '7-4-ac-inductor' },
  { id: 'c7-3m-2', text: 'An AC source v = v_m sin ωt is connected to a pure inductor L. (a) Derive the expression for current. (b) Define inductive reactance. (c) Prove that average power is zero.', category: '3-mark', topicId: '7-4-ac-inductor' },
  { id: 'c7-num-4', text: '(NCERT Ex 7.3) A 44 mH inductor is connected to 220 V, 50 Hz AC supply. Determine the rms value of the current in the circuit.', category: 'numerical', topicId: '7-4-ac-inductor' },
  { id: 'c7-num-5', text: 'A pure inductor of 25.0 mH is connected to a source of 220 V. Find the inductive reactance and rms current in the circuit if the frequency of the source is 50 Hz.', category: 'numerical', topicId: '7-4-ac-inductor' },
  { id: 'c7-num-6', text: 'Calculate the inductive reactance of an inductor of 0.5 H at frequencies of (a) 50 Hz, and (b) 100 Hz.', category: 'numerical', topicId: '7-4-ac-inductor' },

  // 7.5 AC Voltage Applied to a Capacitor
  { id: 'c7-1m-21', text: 'Define capacitive reactance. Write its SI unit.', category: '1-mark', topicId: '7-5-ac-capacitor' },
  { id: 'c7-1m-22', text: 'Write the expression for capacitive reactance X_C in terms of angular frequency ω and capacitance C.', category: '1-mark', topicId: '7-5-ac-capacitor' },
  { id: 'c7-1m-23', text: 'What is the phase relationship between voltage and current in a purely capacitive AC circuit?', category: '1-mark', topicId: '7-5-ac-capacitor' },
  { id: 'c7-1m-24', text: 'What is the average power consumed by an ideal capacitor over a complete cycle?', category: '1-mark', topicId: '7-5-ac-capacitor' },
  { id: 'c7-1m-25', text: 'How does capacitive reactance vary with (a) frequency, and (b) capacitance?', category: '1-mark', topicId: '7-5-ac-capacitor' },
  { id: 'c7-2m-13', text: 'Derive the expression for current in a pure capacitor connected to an AC source v = v_m sin ωt. Show that current leads voltage by π/2.', category: '2-mark', topicId: '7-5-ac-capacitor' },
  { id: 'c7-2m-14', text: 'Draw the phasor diagram and the wave diagram showing variation of v and i with ωt for a purely capacitive circuit.', category: '2-mark', topicId: '7-5-ac-capacitor' },
  { id: 'c7-2m-15', text: 'Show that the average power supplied to a capacitor over one complete cycle is zero.', category: '2-mark', topicId: '7-5-ac-capacitor' },
  { id: 'c7-2m-16', text: 'A lamp is connected in series with a capacitor. Predict your observations for DC and AC connections. What happens if the capacitance is reduced?', category: '2-mark', topicId: '7-5-ac-capacitor' },
  { id: 'c7-3m-3', text: 'An AC source v = v_m sin ωt is connected to a pure capacitor C. (a) Derive the expression for current. (b) Define capacitive reactance. (c) Prove that average power is zero.', category: '3-mark', topicId: '7-5-ac-capacitor' },
  { id: 'c7-num-7', text: '(NCERT Ex 7.4) A 60 µF capacitor is connected to a 110 V, 60 Hz AC supply. Determine the rms value of the current in the circuit.', category: 'numerical', topicId: '7-5-ac-capacitor' },
  { id: 'c7-num-8', text: '(NCERT Ex 7.5) In Exercises 7.3 and 7.4, what is the net power absorbed by each circuit over a complete cycle? Explain your answer.', category: 'numerical', topicId: '7-5-ac-capacitor' },
  { id: 'c7-num-9', text: 'A 15.0 µF capacitor is connected to a 220 V, 50 Hz source. Find the capacitive reactance and the current (rms and peak) in the circuit. If the frequency is doubled, what happens to the capacitive reactance and the current?', category: 'numerical', topicId: '7-5-ac-capacitor' },
  { id: 'c7-num-10', text: '(NCERT Ex 7.6) A charged 30 µF capacitor is connected to a 27 mH inductor. What is the angular frequency of free oscillations of the circuit?', category: 'numerical', topicId: '7-5-ac-capacitor' },

  // 7.6 AC Voltage Applied to a Series LCR Circuit
  { id: 'c7-1m-26', text: 'Define impedance of an AC circuit. Write its SI unit.', category: '1-mark', topicId: '7-6-lcr-circuit' },
  { id: 'c7-1m-27', text: 'Write the expression for impedance Z of a series LCR circuit.', category: '1-mark', topicId: '7-6-lcr-circuit' },
  { id: 'c7-1m-28', text: 'What is the phase angle φ in a series LCR circuit? Write the expression for tan φ.', category: '1-mark', topicId: '7-6-lcr-circuit' },
  { id: 'c7-1m-29', text: 'Under what condition is the circuit predominantly capacitive? What is the sign of φ?', category: '1-mark', topicId: '7-6-lcr-circuit' },
  { id: 'c7-1m-30', text: 'Under what condition is the circuit predominantly inductive? What is the sign of φ?', category: '1-mark', topicId: '7-6-lcr-circuit' },

  // 7.6.1 Phasor-diagram Solution
  { id: 'c7-2m-17', text: 'Draw the phasor diagram for a series LCR circuit connected to an AC source. Show the relationship between V_R, V_L, V_C, and V.', category: '2-mark', topicId: '7-6-1-phasor-solution' },
  { id: 'c7-2m-18', text: 'Derive the expression for impedance Z = √[R² + (X_C - X_L)²] using the phasor diagram method.', category: '2-mark', topicId: '7-6-1-phasor-solution' },
  { id: 'c7-2m-19', text: 'Derive the expression for phase angle: tan φ = (X_C - X_L)/R for a series LCR circuit.', category: '2-mark', topicId: '7-6-1-phasor-solution' },
  { id: 'c7-2m-20', text: 'Draw the impedance diagram for a series LCR circuit. What does it represent?', category: '2-mark', topicId: '7-6-1-phasor-solution' },
  { id: 'c7-3m-4', text: 'For a series LCR circuit driven by an AC source v = v_m sin ωt: (a) Draw the phasor diagram. (b) Derive expressions for impedance and phase angle. (c) Write the expression for current amplitude.', category: '3-mark', topicId: '7-6-1-phasor-solution' },
  { id: 'c7-num-11', text: '(NCERT Ex 7.6) A resistor of 200 Ω and a capacitor of 15.0 µF are connected in series to a 220 V, 50 Hz AC source. (a) Calculate the current in the circuit. (b) Calculate the voltage (rms) across the resistor and the capacitor. Is the algebraic sum of these voltages more than the source voltage? If yes, resolve the paradox.', category: 'numerical', topicId: '7-6-1-phasor-solution' },

  // 7.6.2 Resonance
  { id: 'c7-1m-31', text: 'What is resonance in a series LCR circuit?', category: '1-mark', topicId: '7-6-2-resonance' },
  { id: 'c7-1m-32', text: 'Write the expression for resonant frequency ω₀ of a series LCR circuit.', category: '1-mark', topicId: '7-6-2-resonance' },
  { id: 'c7-1m-33', text: 'What is the value of impedance at resonance?', category: '1-mark', topicId: '7-6-2-resonance' },
  { id: 'c7-1m-34', text: 'What is the current amplitude at resonance?', category: '1-mark', topicId: '7-6-2-resonance' },
  { id: 'c7-1m-35', text: 'Why can resonance not occur in an RL or RC circuit?', category: '1-mark', topicId: '7-6-2-resonance' },
  { id: 'c7-2m-21', text: 'Derive the expression for resonant angular frequency ω₀ = 1/√LC for a series LCR circuit.', category: '2-mark', topicId: '7-6-2-resonance' },
  { id: 'c7-2m-22', text: 'What happens to current amplitude at resonance? Draw a graph showing variation of current amplitude with frequency.', category: '2-mark', topicId: '7-6-2-resonance' },
  { id: 'c7-2m-23', text: 'How is resonance used in tuning a radio to a particular station? Explain briefly.', category: '2-mark', topicId: '7-6-2-resonance' },
  { id: 'c7-2m-24', text: 'What is the role of resistance R in determining the sharpness of resonance? Explain with reference to the resonance curve.', category: '2-mark', topicId: '7-6-2-resonance' },
  { id: 'c7-3m-5', text: 'Explain the phenomenon of resonance in a series LCR circuit. (a) Derive the condition for resonance. (b) Draw the resonance curve. (c) Give one application.', category: '3-mark', topicId: '7-6-2-resonance' },
  { id: 'c7-num-12', text: '(NCERT Ex 7.7) A series LCR circuit with R = 20 Ω, L = 1.5 H and C = 35 µF is connected to a variable-frequency 200 V AC supply. When the frequency of the supply equals the natural frequency of the circuit, what is the average power transferred to the circuit in one complete cycle?', category: 'numerical', topicId: '7-6-2-resonance' },
  { id: 'c7-num-13', text: '(NCERT Ex 7.8) Figure shows a series LCR circuit connected to a variable frequency 230 V source. L = 5.0 H, C = 80 µF, R = 40 Ω. (a) Determine the source frequency which drives the circuit in resonance. (b) Obtain the impedance of the circuit and the amplitude of current at the resonating frequency. (c) Determine the rms potential drops across the three elements of the circuit.', category: 'numerical', topicId: '7-6-2-resonance' },
  { id: 'c7-2m-25', text: 'At an airport, a person is made to walk through the doorway of a metal detector. On what principle does this detector work? Explain.', category: '2-mark', topicId: '7-6-2-resonance' },

  // 7.7 Power in AC Circuit: The Power Factor
  { id: 'c7-1m-36', text: 'Define power factor in an AC circuit.', category: '1-mark', topicId: '7-7-power-factor' },
  { id: 'c7-1m-37', text: 'Write the expression for average power in an AC circuit in terms of rms voltage V, rms current I, and power factor cos φ.', category: '1-mark', topicId: '7-7-power-factor' },
  { id: 'c7-1m-38', text: 'What is the power factor in a purely resistive circuit?', category: '1-mark', topicId: '7-7-power-factor' },
  { id: 'c7-1m-39', text: 'What is the power factor in a purely inductive or purely capacitive circuit?', category: '1-mark', topicId: '7-7-power-factor' },
  { id: 'c7-1m-40', text: 'What is wattless current? In which type of circuit does it flow?', category: '1-mark', topicId: '7-7-power-factor' },
  { id: 'c7-1m-41', text: 'What is the power factor at resonance in a series LCR circuit?', category: '1-mark', topicId: '7-7-power-factor' },
  { id: 'c7-2m-26', text: 'Derive the expression for average power P = VI cos φ in an AC circuit.', category: '2-mark', topicId: '7-7-power-factor' },
  { id: 'c7-2m-27', text: 'Explain why no power is dissipated in a purely inductive or purely capacitive circuit even though current flows.', category: '2-mark', topicId: '7-7-power-factor' },
  { id: 'c7-2m-28', text: 'Show that P = I²Z cos φ for an AC circuit. What is the significance of power factor?', category: '2-mark', topicId: '7-7-power-factor' },
  { id: 'c7-2m-29', text: 'For circuits used for transporting electric power, why does a low power factor imply large power loss in transmission?', category: '2-mark', topicId: '7-7-power-factor' },
  { id: 'c7-2m-30', text: 'How can power factor be improved by using a capacitor of appropriate capacitance in the circuit? Explain with phasor diagram.', category: '2-mark', topicId: '7-7-power-factor' },
  { id: 'c7-3m-6', text: '(a) Define power factor. (b) Derive the expression for average power in a series LCR circuit. (c) What is the power dissipated at resonance?', category: '3-mark', topicId: '7-7-power-factor' },
  { id: 'c7-num-14', text: 'A sinusoidal voltage of peak value 283 V and frequency 50 Hz is applied to a series LCR circuit in which R = 3 Ω, L = 25.48 mH, and C = 796 µF. Find (a) the impedance of the circuit, (b) the phase difference between voltage and current, (c) the power dissipated in the circuit, and (d) the power factor.', category: 'numerical', topicId: '7-7-power-factor' },
  { id: 'c7-num-15', text: 'Suppose the frequency of the source in the previous example can be varied. (a) What is the frequency of the source at which resonance occurs? (b) Calculate the impedance, the current, and the power dissipated at the resonant condition.', category: 'numerical', topicId: '7-7-power-factor' },

  // 7.8 Transformers
  { id: 'c7-1m-42', text: 'What is a transformer?', category: '1-mark', topicId: '7-8-transformers' },
  { id: 'c7-1m-43', text: 'On what principle does a transformer work?', category: '1-mark', topicId: '7-8-transformers' },
  { id: 'c7-1m-44', text: 'Name the two coils in a transformer.', category: '1-mark', topicId: '7-8-transformers' },
  { id: 'c7-1m-45', text: 'What is a step-up transformer?', category: '1-mark', topicId: '7-8-transformers' },
  { id: 'c7-1m-46', text: 'What is a step-down transformer?', category: '1-mark', topicId: '7-8-transformers' },
  { id: 'c7-1m-47', text: 'Write the relation between primary and secondary voltages in a transformer.', category: '1-mark', topicId: '7-8-transformers' },
  { id: 'c7-1m-48', text: 'Write the relation between primary and secondary currents in an ideal transformer.', category: '1-mark', topicId: '7-8-transformers' },
  { id: 'c7-2m-31', text: 'Derive the relation V_s/V_p = N_s/N_p for an ideal transformer.', category: '2-mark', topicId: '7-8-transformers' },
  { id: 'c7-2m-32', text: 'Show that for an ideal transformer, i_p × v_p = i_s × v_s. What does this equation imply?', category: '2-mark', topicId: '7-8-transformers' },
  { id: 'c7-2m-33', text: 'Why is the core of a transformer made of laminated iron sheets?', category: '2-mark', topicId: '7-8-transformers' },
  { id: 'c7-2m-34', text: 'List any four sources of energy loss in a transformer. How is each minimized?', category: '2-mark', topicId: '7-8-transformers' },
  { id: 'c7-2m-35', text: 'Explain how transformers are used in long-distance transmission of electrical energy.', category: '2-mark', topicId: '7-8-transformers' },
  { id: 'c7-3m-7', text: 'With a labelled diagram, describe the construction and working of a transformer. Derive the relation between input and output voltages.', category: '3-mark', topicId: '7-8-transformers' },
  { id: 'c7-3m-8', text: 'Explain the working principle of a step-up transformer. If a transformer has 100 turns in primary and 200 turns in secondary, what will be the output voltage and current for a 220 V, 10 A input?', category: '3-mark', topicId: '7-8-transformers' },
  { id: 'c7-5m-1', text: "(a) Draw a labelled diagram of a transformer. (b) Derive the transformer equation V_s/V_p = N_s/N_p = i_p/i_s. (c) List four causes of energy loss in a transformer and explain how each is minimized. (d) Why can't transformers be used with DC supply?", category: '5-mark', topicId: '7-8-transformers' },

  // NCERT Textbook Exercise Questions
  { id: 'c7-ncert-1', text: '(Ex 7.1) A 100 Ω resistor is connected to a 220 V, 50 Hz AC supply. (a) What is the rms value of current in the circuit? (b) What is the net power consumed over a full cycle?', category: 'numerical', topicId: '7-2-ac-resistor' },
  { id: 'c7-ncert-2', text: '(Ex 7.2) (a) The peak voltage of an AC supply is 300 V. What is the rms voltage? (b) The rms value of current in an AC circuit is 10 A. What is the peak current?', category: 'numerical', topicId: '7-2-ac-resistor' },
  { id: 'c7-ncert-3', text: '(Ex 7.3) A 44 mH inductor is connected to 220 V, 50 Hz AC supply. Determine the rms value of the current in the circuit.', category: 'numerical', topicId: '7-4-ac-inductor' },
  { id: 'c7-ncert-4', text: '(Ex 7.4) A 60 µF capacitor is connected to a 110 V, 60 Hz AC supply. Determine the rms value of the current in the circuit.', category: 'numerical', topicId: '7-5-ac-capacitor' },
  { id: 'c7-ncert-5', text: '(Ex 7.5) In Exercises 7.3 and 7.4, what is the net power absorbed by each circuit over a complete cycle? Explain your answer.', category: 'numerical', topicId: '7-5-ac-capacitor' },
  { id: 'c7-ncert-6', text: '(Ex 7.6) A charged 30 µF capacitor is connected to a 27 mH inductor. What is the angular frequency of free oscillations of the circuit?', category: 'numerical', topicId: '7-5-ac-capacitor' },
  { id: 'c7-ncert-7', text: '(Ex 7.7) A series LCR circuit with R = 20 Ω, L = 1.5 H and C = 35 µF is connected to a variable-frequency 200 V AC supply. When the frequency of the supply equals the natural frequency of the circuit, what is the average power transferred to the circuit in one complete cycle?', category: 'numerical', topicId: '7-6-2-resonance' },
  { id: 'c7-ncert-8', text: '(Ex 7.8) A series LCR circuit connected to a variable frequency 230 V source with L = 5.0 H, C = 80 µF, R = 40 Ω. Find source frequency at resonance, impedance at resonance, amplitude of current, and rms potential drops across R, L, and C.', category: 'numerical', topicId: '7-6-2-resonance' },

  // Board Pattern Questions
  { id: 'c7-board-1', text: '(Board) Define root mean square (rms) value of alternating current.', category: '1-mark', topicId: '7-2-ac-resistor' },
  { id: 'c7-board-2', text: '(Board) What is the power factor in a purely inductive AC circuit?', category: '1-mark', topicId: '7-7-power-factor' },
  { id: 'c7-board-3', text: '(Board) Write the condition for resonance in a series LCR circuit.', category: '1-mark', topicId: '7-6-2-resonance' },
  { id: 'c7-board-4', text: '(Board) Name the device used to step up or step down AC voltage.', category: '1-mark', topicId: '7-8-transformers' },
  { id: 'c7-board-5', text: '(Board) What is the phase difference between voltage and current in a capacitor connected to AC source?', category: '1-mark', topicId: '7-5-ac-capacitor' },
  { id: 'c7-board-6', text: '(Board) Derive the expression for inductive reactance X_L = ωL.', category: '2-mark', topicId: '7-4-ac-inductor' },
  { id: 'c7-board-7', text: '(Board) Show that no power is dissipated in an ideal inductor or capacitor.', category: '2-mark', topicId: '7-7-power-factor' },
  { id: 'c7-board-8', text: "(Board) Why can't a transformer work on DC? Explain.", category: '2-mark', topicId: '7-8-transformers' },
  { id: 'c7-board-9', text: '(Board) Define impedance. Write its expression for a series LCR circuit.', category: '2-mark', topicId: '7-6-lcr-circuit' },
  { id: 'c7-board-10', text: '(Board) State and explain the principle of a transformer.', category: '2-mark', topicId: '7-8-transformers' },
  { id: 'c7-board-11', text: '(Board) Derive the expression for current in a pure inductor connected to AC source. Draw the phasor diagram.', category: '3-mark', topicId: '7-4-ac-inductor' },
  { id: 'c7-board-12', text: '(Board) Explain resonance in a series LCR circuit. Derive the expression for resonant frequency.', category: '3-mark', topicId: '7-6-2-resonance' },
  { id: 'c7-board-13', text: '(Board) Derive the expression for average power in an AC circuit. Define power factor and wattless current.', category: '3-mark', topicId: '7-7-power-factor' },
  { id: 'c7-board-14', text: '(Board) With a diagram, explain the construction and working of a transformer. Write the transformer equation.', category: '3-mark', topicId: '7-8-transformers' },
  { id: 'c7-board-15', text: '(Board) (a) Define inductive reactance and capacitive reactance. (b) Derive expressions for current in pure inductor and pure capacitor connected to AC source. (c) Draw phasor diagrams for both cases. (d) Show that average power is zero in both cases.', category: '5-mark', topicId: '7-4-ac-inductor' },
  { id: 'c7-board-16', text: '(Board) (a) Define impedance and power factor. (b) Derive the expression for impedance and phase angle in a series LCR circuit using phasor diagram. (c) Explain resonance and derive the resonant frequency. (d) A series LCR circuit has R = 20 Ω, L = 1 H, C = 50 µF connected to 220 V, 50 Hz supply. Find impedance, current, and power factor.', category: '5-mark', topicId: '7-6-1-phasor-solution' },
  { id: 'c7-board-17', text: '(Board) (a) State the principle of a transformer. (b) Derive the relation between primary and secondary voltages and currents. (c) Explain four types of energy losses in a transformer. (d) Explain how transformers are used in long-distance power transmission.', category: '5-mark', topicId: '7-8-transformers' },

  // Assertion-Reason Questions
  { id: 'c7-ar-1', text: 'Assertion: In a purely inductive AC circuit, current lags voltage by 90°. Reason: The self-induced emf opposes the change in current.', category: 'assertion-reason', topicId: '7-4-ac-inductor' },
  { id: 'c7-ar-2', text: 'Assertion: In a purely capacitive AC circuit, current leads voltage by 90°. Reason: The capacitor stores energy in the electric field.', category: 'assertion-reason', topicId: '7-5-ac-capacitor' },
  { id: 'c7-ar-3', text: 'Assertion: At resonance, the impedance of a series LCR circuit is minimum. Reason: At resonance, X_L = X_C.', category: 'assertion-reason', topicId: '7-6-2-resonance' },
  { id: 'c7-ar-4', text: 'Assertion: A transformer cannot work on DC. Reason: DC does not produce a changing magnetic flux.', category: 'assertion-reason', topicId: '7-8-transformers' },
  { id: 'c7-ar-5', text: 'Assertion: Power factor of an AC circuit can have values from 0 to 1. Reason: Power factor is the cosine of the phase angle between voltage and current.', category: 'assertion-reason', topicId: '7-7-power-factor' },

  // Case Study Questions
  { id: 'c7-case-1', text: 'Case Study: A series LCR circuit with R = 100 Ω, L = 0.5 H, and C = 20 µF is connected to a 220 V AC source of variable frequency. (a) Calculate the resonant frequency. (b) What is the impedance at resonance? (c) Find the current at resonance. (d) Calculate the voltage across the inductor at resonance. (e) What is the Q-factor of the circuit?', category: 'case-study', topicId: '7-6-2-resonance' },
  { id: 'c7-case-2', text: 'Case Study: A power station generates 10 MW at 10 kV. The power is transmitted through cables of total resistance 10 Ω. (a) Calculate the power loss if transmitted at 10 kV. (b) A step-up transformer increases the voltage to 100 kV. Calculate the new power loss. (c) By what factor is the power loss reduced? (d) What is the efficiency improvement?', category: 'case-study', topicId: '7-8-transformers' },

  // HOTS Questions
  { id: 'c7-hots-1', text: 'In a series LCR circuit, the voltage across the capacitor can be greater than the source voltage. How is this possible without violating energy conservation?', category: 'hots', topicId: '7-6-1-phasor-solution' },
  { id: 'c7-hots-2', text: 'Why is the power factor of most industrial loads (containing motors) lagging, and how can it be improved using capacitors?', category: 'hots', topicId: '7-7-power-factor' },
  { id: 'c7-hots-3', text: 'A choke coil is preferred over a resistor to reduce current in AC circuits. Explain why, considering energy dissipation.', category: 'hots', topicId: '7-4-ac-inductor' },
];

// Chapter 8: Electromagnetic Waves - Question Bank
const chapter8Questions: Question[] = [
  // 8.1 Introduction
  { id: 'c8-1m-1', text: "Who formulated the set of equations involving electric and magnetic fields known as Maxwell's equations?", category: '1-mark', topicId: '8-1-introduction' },
  { id: 'c8-1m-2', text: "What was Maxwell's most important prediction from his equations?", category: '1-mark', topicId: '8-1-introduction' },
  { id: 'c8-1m-3', text: 'Who experimentally demonstrated the existence of electromagnetic waves and in which year?', category: '1-mark', topicId: '8-1-introduction' },
  { id: 'c8-1m-4', text: 'What is the speed of electromagnetic waves in vacuum?', category: '1-mark', topicId: '8-1-introduction' },
  { id: 'c8-1m-5', text: 'Name the scientist whose work led to the revolution in communication using electromagnetic waves.', category: '1-mark', topicId: '8-1-introduction' },
  { id: 'c8-1m-6', text: "What conclusion did Maxwell's work lead to about the nature of light?", category: '1-mark', topicId: '8-1-introduction' },
  { id: 'c8-2m-1', text: "What are Maxwell's equations? What is their significance in electromagnetism?", category: '2-mark', topicId: '8-1-introduction' },
  { id: 'c8-2m-2', text: 'How did Maxwell unify the domains of electricity, magnetism, and light? State the key conclusion.', category: '2-mark', topicId: '8-1-introduction' },
  { id: 'c8-2m-3', text: "What was the inconsistency that Maxwell noticed in Ampere's circuital law? How did he resolve it?", category: '2-mark', topicId: '8-1-introduction' },

  // 8.2 Displacement Current
  { id: 'c8-1m-7', text: 'Define displacement current.', category: '1-mark', topicId: '8-2-displacement-current' },
  { id: 'c8-1m-8', text: 'Write the expression for displacement current.', category: '1-mark', topicId: '8-2-displacement-current' },
  { id: 'c8-1m-9', text: 'What is conduction current?', category: '1-mark', topicId: '8-2-displacement-current' },
  { id: 'c8-1m-10', text: 'Write the modified Ampere circuital law (Ampere-Maxwell law).', category: '1-mark', topicId: '8-2-displacement-current' },
  { id: 'c8-1m-11', text: 'What is the source of displacement current?', category: '1-mark', topicId: '8-2-displacement-current' },
  { id: 'c8-1m-12', text: 'Is there any conduction current between the plates of a charging capacitor? Explain.', category: '1-mark', topicId: '8-2-displacement-current' },
  { id: 'c8-2m-4', text: "Using a parallel plate capacitor, explain the need for displacement current. Why was the original Ampere's circuital law inconsistent?", category: '2-mark', topicId: '8-2-displacement-current' },
  { id: 'c8-2m-5', text: 'Derive the expression for displacement current i_d = ε₀(dΦ_E/dt) for a charging capacitor.', category: '2-mark', topicId: '8-2-displacement-current' },
  { id: 'c8-2m-6', text: 'Write the generalized Ampere-Maxwell law. Explain the significance of each term.', category: '2-mark', topicId: '8-2-displacement-current' },
  { id: 'c8-2m-7', text: 'Show that the total current (conduction + displacement) has the same value for all surfaces with the same boundary.', category: '2-mark', topicId: '8-2-displacement-current' },
  { id: 'c8-2m-8', text: 'How does the introduction of displacement current make the laws of electricity and magnetism more symmetrical?', category: '2-mark', topicId: '8-2-displacement-current' },
  { id: 'c8-3m-1', text: "Explain with suitable diagrams how Maxwell resolved the inconsistency in Ampere's circuital law by introducing displacement current. Derive the expression for displacement current.", category: '3-mark', topicId: '8-2-displacement-current' },
  { id: 'c8-3m-2', text: "State and explain the four Maxwell's equations in vacuum. What is the physical significance of each equation?", category: '3-mark', topicId: '8-2-displacement-current' },
  { id: 'c8-5m-1', text: '(a) What is displacement current? Why was it introduced by Maxwell? (b) Derive the expression for displacement current. (c) Write the Ampere-Maxwell law. (d) How did the concept of displacement current lead to the prediction of electromagnetic waves?', category: '5-mark', topicId: '8-2-displacement-current' },
  { id: 'c8-num-1', text: '(NCERT Ex 8.1) A capacitor made of two circular plates each of radius 12 cm, separated by 5.0 cm is being charged by a constant current of 0.15 A. (a) Calculate the capacitance and the rate of change of potential difference between the plates. (b) Obtain the displacement current across the plates. (c) Is Kirchhoffs first rule valid at each plate of the capacitor? Explain.', category: 'numerical', topicId: '8-2-displacement-current' },
  { id: 'c8-num-2', text: '(NCERT Ex 8.2) A parallel plate capacitor with circular plates of radius R = 6.0 cm has capacitance C = 100 pF and is connected to a 230 V AC supply with angular frequency 300 rad/s. (a) What is the rms value of the conduction current? (b) Is the conduction current equal to the displacement current? (c) Determine the amplitude of B at a point 3.0 cm from the axis between the plates.', category: 'numerical', topicId: '8-2-displacement-current' },

  // 8.3 Electromagnetic Waves
  { id: 'c8-1m-13', text: 'What is the source of electromagnetic waves?', category: '1-mark', topicId: '8-3-em-waves' },

  // 8.3.1 Sources of Electromagnetic Waves
  { id: 'c8-1m-14', text: 'Can a stationary charge produce electromagnetic waves? Explain.', category: '1-mark', topicId: '8-3-1-sources' },
  { id: 'c8-1m-15', text: 'Can a charge moving with uniform velocity produce electromagnetic waves? Explain.', category: '1-mark', topicId: '8-3-1-sources' },
  { id: 'c8-1m-16', text: 'What is the basic source of electromagnetic waves?', category: '1-mark', topicId: '8-3-1-sources' },
  { id: 'c8-1m-17', text: 'What is the relationship between the frequency of oscillation of a charge and the frequency of the electromagnetic wave produced?', category: '1-mark', topicId: '8-3-1-sources' },
  { id: 'c8-2m-9', text: 'Explain how accelerated charges produce electromagnetic waves.', category: '2-mark', topicId: '8-3-1-sources' },
  { id: 'c8-2m-10', text: 'Why couldn\'t the prediction that light is an electromagnetic wave be easily tested by setting up an AC circuit?', category: '2-mark', topicId: '8-3-1-sources' },
  { id: 'c8-2m-11', text: 'Name two scientists who produced electromagnetic waves in the laboratory after Hertz. What were their contributions?', category: '2-mark', topicId: '8-3-1-sources' },

  // 8.3.2 Nature of Electromagnetic Waves
  { id: 'c8-1m-18', text: 'What is the nature of electromagnetic waves? Are they transverse or longitudinal?', category: '1-mark', topicId: '8-3-2-nature' },
  { id: 'c8-1m-19', text: 'In an electromagnetic wave, what is the relationship between E, B, and the direction of propagation?', category: '1-mark', topicId: '8-3-2-nature' },
  { id: 'c8-1m-20', text: 'Write the expression for the speed of electromagnetic waves in vacuum in terms of μ₀ and ε₀.', category: '1-mark', topicId: '8-3-2-nature' },
  { id: 'c8-1m-21', text: 'Write the relation between E₀ and B₀ in an electromagnetic wave.', category: '1-mark', topicId: '8-3-2-nature' },
  { id: 'c8-1m-22', text: 'Do electromagnetic waves require a material medium for propagation?', category: '1-mark', topicId: '8-3-2-nature' },
  { id: 'c8-1m-23', text: 'Write the expression for speed of electromagnetic waves in a material medium.', category: '1-mark', topicId: '8-3-2-nature' },
  { id: 'c8-1m-24', text: 'What is the wavelength of yellow light if its frequency is approximately 6 × 10¹⁴ Hz?', category: '1-mark', topicId: '8-3-2-nature' },
  { id: 'c8-2m-12', text: 'Show that the electric and magnetic fields in an electromagnetic wave are perpendicular to each other and to the direction of propagation.', category: '2-mark', topicId: '8-3-2-nature' },
  { id: 'c8-2m-13', text: 'Write the equations for E and B fields in a plane electromagnetic wave propagating along the z-direction.', category: '2-mark', topicId: '8-3-2-nature' },
  { id: 'c8-2m-14', text: 'Derive the relation c = 1/√(μ₀ε₀) for the speed of electromagnetic waves in vacuum.', category: '2-mark', topicId: '8-3-2-nature' },
  { id: 'c8-2m-15', text: 'How does the speed of electromagnetic waves in a medium depend on its permittivity and permeability?', category: '2-mark', topicId: '8-3-2-nature' },
  { id: 'c8-2m-16', text: 'Why is the velocity of electromagnetic waves in vacuum considered a fundamental constant? How is it used to define a standard of length?', category: '2-mark', topicId: '8-3-2-nature' },
  { id: 'c8-3m-3', text: 'Describe the nature of electromagnetic waves. Write the expressions for E and B fields for a wave propagating along the z-axis. Show that E₀/B₀ = c.', category: '3-mark', topicId: '8-3-2-nature' },
  { id: 'c8-3m-4', text: 'State the properties of electromagnetic waves. How do electromagnetic waves carry energy?', category: '3-mark', topicId: '8-3-2-nature' },
  { id: 'c8-num-3', text: '(NCERT Ex 8.1) A plane electromagnetic wave of frequency 25 MHz travels in free space along the x-direction. At a particular point in space and time, E = 6.3 ĵ V/m. What is B at this point?', category: 'numerical', topicId: '8-3-2-nature' },
  { id: 'c8-num-4', text: '(NCERT Ex 8.2) The magnetic field in a plane electromagnetic wave is given by B_y = (2 × 10⁻⁷) T sin (0.5×10³x + 1.5×10¹¹t). (a) What is the wavelength and frequency of the wave? (b) Write an expression for the electric field.', category: 'numerical', topicId: '8-3-2-nature' },
  { id: 'c8-num-5', text: '(NCERT Ex 8.7) The amplitude of the magnetic field part of a harmonic electromagnetic wave in vacuum is B₀ = 510 nT. What is the amplitude of the electric field part of the wave?', category: 'numerical', topicId: '8-3-2-nature' },
  { id: 'c8-num-6', text: '(NCERT Ex 8.8) Suppose that the electric field amplitude of an electromagnetic wave is E₀ = 120 N/C and its frequency is ν = 50.0 MHz. (a) Determine B₀, ω, k, and λ. (b) Find expressions for E and B.', category: 'numerical', topicId: '8-3-2-nature' },

  // 8.4 Electromagnetic Spectrum
  { id: 'c8-1m-25', text: 'What is the electromagnetic spectrum?', category: '1-mark', topicId: '8-4-em-spectrum' },
  { id: 'c8-1m-26', text: 'Arrange the following in order of increasing wavelength: X-rays, microwaves, gamma rays, radio waves, visible light.', category: '1-mark', topicId: '8-4-em-spectrum' },
  { id: 'c8-1m-27', text: 'Arrange the following in order of increasing frequency: infrared, ultraviolet, microwaves, gamma rays.', category: '1-mark', topicId: '8-4-em-spectrum' },
  { id: 'c8-1m-28', text: 'What is the wavelength range of visible light?', category: '1-mark', topicId: '8-4-em-spectrum' },
  { id: 'c8-1m-29', text: 'What is common to all types of electromagnetic waves?', category: '1-mark', topicId: '8-4-em-spectrum' },
  { id: 'c8-1m-30', text: 'Is there a sharp boundary between different regions of the electromagnetic spectrum?', category: '1-mark', topicId: '8-4-em-spectrum' },
  { id: 'c8-2m-17', text: 'What is the basis for the classification of different types of electromagnetic waves in the spectrum?', category: '2-mark', topicId: '8-4-em-spectrum' },
  { id: 'c8-2m-18', text: 'Name the electromagnetic waves having the (a) shortest wavelength, and (b) longest wavelength in the electromagnetic spectrum.', category: '2-mark', topicId: '8-4-em-spectrum' },
  { id: 'c8-2m-19', text: '(NCERT Ex 8.3) What physical quantity is the same for X-rays of wavelength 10⁻¹⁰ m, red light of wavelength 6800 Å, and radio waves of wavelength 500 m?', category: '2-mark', topicId: '8-4-em-spectrum' },
  { id: 'c8-2m-20', text: '(NCERT Ex 8.4) A plane electromagnetic wave travels in vacuum along the z-direction. What can you say about the directions of its electric and magnetic field vectors? If the frequency of the wave is 30 MHz, what is its wavelength?', category: '2-mark', topicId: '8-4-em-spectrum' },
  { id: 'c8-3m-5', text: 'Draw a schematic diagram of the electromagnetic spectrum showing the approximate frequency and wavelength ranges of different types of electromagnetic waves.', category: '3-mark', topicId: '8-4-em-spectrum' },

  // 8.4.1 Radio Waves
  { id: 'c8-1m-31', text: 'How are radio waves produced?', category: '1-mark', topicId: '8-4-1-radio-waves' },
  { id: 'c8-1m-32', text: 'What is the frequency range of radio waves?', category: '1-mark', topicId: '8-4-1-radio-waves' },
  { id: 'c8-1m-33', text: 'What is the frequency range of the AM radio band?', category: '1-mark', topicId: '8-4-1-radio-waves' },
  { id: 'c8-1m-34', text: 'What is the frequency range of the FM radio band?', category: '1-mark', topicId: '8-4-1-radio-waves' },
  { id: 'c8-1m-35', text: 'What frequency band do cellular phones use?', category: '1-mark', topicId: '8-4-1-radio-waves' },
  { id: 'c8-2m-21', text: 'Describe the production and uses of radio waves. Give the frequency ranges for AM, FM, and TV waves.', category: '2-mark', topicId: '8-4-1-radio-waves' },
  { id: 'c8-num-7', text: '(NCERT Ex 8.5) A radio can tune in to any station in the 7.5 MHz to 12 MHz band. What is the corresponding wavelength band?', category: 'numerical', topicId: '8-4-1-radio-waves' },
  { id: 'c8-num-8', text: '(NCERT Ex 8.6) A charged particle oscillates about its mean equilibrium position with a frequency of 10⁹ Hz. What is the frequency of the electromagnetic waves produced by the oscillator?', category: 'numerical', topicId: '8-4-1-radio-waves' },

  // 8.4.2 Microwaves
  { id: 'c8-1m-36', text: 'What are microwaves?', category: '1-mark', topicId: '8-4-2-microwaves' },
  { id: 'c8-1m-37', text: 'Name the devices used to produce microwaves.', category: '1-mark', topicId: '8-4-2-microwaves' },
  { id: 'c8-1m-38', text: 'Why are microwaves used in radar systems?', category: '1-mark', topicId: '8-4-2-microwaves' },
  { id: 'c8-1m-39', text: 'What is the principle of microwave oven?', category: '1-mark', topicId: '8-4-2-microwaves' },
  { id: 'c8-2m-22', text: 'Explain how a microwave oven works. Why is the frequency of microwaves selected to match the resonant frequency of water molecules?', category: '2-mark', topicId: '8-4-2-microwaves' },
  { id: 'c8-2m-23', text: 'List three applications of microwaves.', category: '2-mark', topicId: '8-4-2-microwaves' },

  // 8.4.3 Infrared Waves
  { id: 'c8-1m-40', text: 'How are infrared waves produced?', category: '1-mark', topicId: '8-4-3-infrared' },
  { id: 'c8-1m-41', text: 'Why are infrared waves sometimes called heat waves?', category: '1-mark', topicId: '8-4-3-infrared' },
  { id: 'c8-1m-42', text: 'What is the greenhouse effect?', category: '1-mark', topicId: '8-4-3-infrared' },
  { id: 'c8-1m-43', text: 'Name two gases responsible for the greenhouse effect.', category: '1-mark', topicId: '8-4-3-infrared' },
  { id: 'c8-2m-24', text: 'Explain the production, properties, and applications of infrared waves.', category: '2-mark', topicId: '8-4-3-infrared' },
  { id: 'c8-2m-25', text: "Explain how infrared radiation plays a role in maintaining the Earth's warmth through the greenhouse effect.", category: '2-mark', topicId: '8-4-3-infrared' },
  { id: 'c8-2m-26', text: 'Why are infrared detectors used in Earth satellites?', category: '2-mark', topicId: '8-4-3-infrared' },

  // 8.4.4 Visible Rays
  { id: 'c8-1m-44', text: 'What is the frequency range of visible light?', category: '1-mark', topicId: '8-4-4-visible' },
  { id: 'c8-1m-45', text: 'What is the wavelength range of visible light?', category: '1-mark', topicId: '8-4-4-visible' },
  { id: 'c8-1m-46', text: 'Name the colours of visible light in order of increasing wavelength.', category: '1-mark', topicId: '8-4-4-visible' },
  { id: 'c8-2m-27', text: 'Why is visible light the most familiar form of electromagnetic waves? Why are our eyes sensitive to this range?', category: '2-mark', topicId: '8-4-4-visible' },
  { id: 'c8-2m-28', text: 'Different animals are sensitive to different ranges of wavelengths. Give examples.', category: '2-mark', topicId: '8-4-4-visible' },

  // 8.4.5 Ultraviolet Rays
  { id: 'c8-1m-47', text: 'What is the wavelength range of ultraviolet radiation?', category: '1-mark', topicId: '8-4-5-ultraviolet' },
  { id: 'c8-1m-48', text: 'How is ultraviolet radiation produced?', category: '1-mark', topicId: '8-4-5-ultraviolet' },
  { id: 'c8-1m-49', text: 'What is the role of the ozone layer in the atmosphere?', category: '1-mark', topicId: '8-4-5-ultraviolet' },
  { id: 'c8-1m-50', text: "Why can't we get tanned or sunburnt through glass windows?", category: '1-mark', topicId: '8-4-5-ultraviolet' },
  { id: 'c8-2m-29', text: 'Describe the sources, properties, and applications of ultraviolet radiation.', category: '2-mark', topicId: '8-4-5-ultraviolet' },
  { id: 'c8-2m-30', text: 'What are the harmful effects of UV radiation? How can we protect ourselves from it?', category: '2-mark', topicId: '8-4-5-ultraviolet' },
  { id: 'c8-2m-31', text: 'Why is the depletion of the ozone layer by CFCs a matter of international concern?', category: '2-mark', topicId: '8-4-5-ultraviolet' },
  { id: 'c8-2m-32', text: 'How is UV radiation used in LASIK eye surgery?', category: '2-mark', topicId: '8-4-5-ultraviolet' },

  // 8.4.6 X-rays
  { id: 'c8-1m-51', text: 'What is the wavelength range of X-rays?', category: '1-mark', topicId: '8-4-6-xrays' },
  { id: 'c8-1m-52', text: 'How are X-rays produced?', category: '1-mark', topicId: '8-4-6-xrays' },
  { id: 'c8-1m-53', text: 'Name two applications of X-rays in medicine.', category: '1-mark', topicId: '8-4-6-xrays' },
  { id: 'c8-2m-33', text: 'Describe the production, properties, and applications of X-rays.', category: '2-mark', topicId: '8-4-6-xrays' },
  { id: 'c8-2m-34', text: 'Why must care be taken to avoid unnecessary or over-exposure to X-rays?', category: '2-mark', topicId: '8-4-6-xrays' },

  // 8.4.7 Gamma Rays
  { id: 'c8-1m-54', text: 'What is the wavelength range of gamma rays?', category: '1-mark', topicId: '8-4-7-gamma' },
  { id: 'c8-1m-55', text: 'How are gamma rays produced?', category: '1-mark', topicId: '8-4-7-gamma' },
  { id: 'c8-1m-56', text: 'Name one application of gamma rays in medicine.', category: '1-mark', topicId: '8-4-7-gamma' },
  { id: 'c8-2m-35', text: 'Describe the production and properties of gamma rays. How are they used in medicine?', category: '2-mark', topicId: '8-4-7-gamma' },
  { id: 'c8-2m-36', text: 'Compare gamma rays with X-rays in terms of their wavelength, production, and applications.', category: '2-mark', topicId: '8-4-7-gamma' },

  // Comprehensive Questions on Electromagnetic Spectrum
  { id: 'c8-3m-6', text: 'Name the part of the electromagnetic spectrum which (a) is used in radar systems, (b) is used in treatment of cancer, (c) is absorbed by the ozone layer, (d) is used in remote controls.', category: '3-mark', topicId: '8-4-em-spectrum' },
  { id: 'c8-3m-7', text: 'Prepare a table showing different types of electromagnetic waves, their wavelength range, production method, and one application of each.', category: '3-mark', topicId: '8-4-em-spectrum' },
  { id: 'c8-3m-8', text: 'Identify the electromagnetic waves whose wavelengths vary as: (a) 10⁻¹² m to 10⁻⁸ m, (b) 10⁻³ m to 10⁻¹ m, (c) 4 × 10⁻⁷ m to 7 × 10⁻⁷ m. Write one use of each.', category: '3-mark', topicId: '8-4-em-spectrum' },
  { id: 'c8-5m-2', text: '(a) Draw a labelled diagram of the electromagnetic spectrum. (b) Name any three types of electromagnetic waves and for each state: (i) frequency range, (ii) source of production, (iii) one use. (c) What property is common to all electromagnetic waves?', category: '5-mark', topicId: '8-4-em-spectrum' },
  { id: 'c8-5m-3', text: '(a) Describe the electromagnetic spectrum from gamma rays to radio waves. (b) State one use of each type of electromagnetic wave. (c) Why do different electromagnetic waves differ in their properties despite traveling at the same speed in vacuum?', category: '5-mark', topicId: '8-4-em-spectrum' },

  // NCERT Textbook Exercise Questions
  { id: 'c8-ncert-1', text: '(Ex 8.1) A capacitor made of two circular plates each of radius 12 cm, and separated by 5.0 cm is being charged by a constant current of 0.15 A. (a) Calculate the capacitance and the rate of change of potential difference between the plates. (b) Obtain the displacement current across the plates. (c) Is Kirchhoffs first rule valid at each plate of the capacitor?', category: 'numerical', topicId: '8-2-displacement-current' },
  { id: 'c8-ncert-2', text: '(Ex 8.2) A parallel plate capacitor with circular plates each of radius R = 6.0 cm has a capacitance C = 100 pF. It is connected to a 230 V AC supply with angular frequency 300 rad/s. (a) What is the rms value of the conduction current? (b) Is the conduction current equal to the displacement current? (c) Determine the amplitude of B at a point 3.0 cm from the axis between the plates.', category: 'numerical', topicId: '8-2-displacement-current' },
  { id: 'c8-ncert-3', text: '(Ex 8.3) What physical quantity is the same for X-rays of wavelength 10⁻¹⁰ m, red light of wavelength 6800 Å and radiowaves of wavelength 500 m?', category: '2-mark', topicId: '8-4-em-spectrum' },
  { id: 'c8-ncert-4', text: '(Ex 8.4) A plane electromagnetic wave travels in vacuum along z-direction. What can you say about the directions of its electric and magnetic field vectors? If the frequency of the wave is 30 MHz, what is its wavelength?', category: '2-mark', topicId: '8-3-2-nature' },
  { id: 'c8-ncert-5', text: '(Ex 8.5) A radio can tune in to any station in the 7.5 MHz to 12 MHz band. What is the corresponding wavelength band?', category: 'numerical', topicId: '8-4-1-radio-waves' },
  { id: 'c8-ncert-6', text: '(Ex 8.6) A charged particle oscillates about its mean equilibrium position with a frequency of 10⁹ Hz. What is the frequency of the electromagnetic waves produced by the oscillator?', category: '1-mark', topicId: '8-3-1-sources' },
  { id: 'c8-ncert-7', text: '(Ex 8.7) The amplitude of the magnetic field part of a harmonic electromagnetic wave in vacuum is B₀ = 510 nT. What is the amplitude of the electric field part of the wave?', category: 'numerical', topicId: '8-3-2-nature' },
  { id: 'c8-ncert-8', text: '(Ex 8.8) Suppose that the electric field amplitude of an electromagnetic wave is E₀ = 120 N/C and that its frequency is ν = 50.0 MHz. (a) Determine B₀, ω, k, and λ. (b) Find expressions for E and B.', category: 'numerical', topicId: '8-3-2-nature' },
  { id: 'c8-ncert-9', text: '(Ex 8.9) The terminology of different parts of the electromagnetic spectrum is given in the text. Use the formula E = hν and obtain the photon energy in units of eV for different parts of the electromagnetic spectrum.', category: '3-mark', topicId: '8-4-em-spectrum' },
  { id: 'c8-ncert-10', text: '(Ex 8.10) In a plane electromagnetic wave, the electric field oscillates sinusoidally at a frequency of 2.0 × 10¹⁰ Hz and amplitude 48 V/m. (a) What is the wavelength of the wave? (b) What is the amplitude of the oscillating magnetic field? (c) Show that the average energy density of the E field equals the average energy density of the B field.', category: 'numerical', topicId: '8-3-2-nature' },

  // Board Pattern Questions
  { id: 'c8-board-1', text: '(Board) What is displacement current?', category: '1-mark', topicId: '8-2-displacement-current' },
  { id: 'c8-board-2', text: '(Board) Write the expression for the speed of electromagnetic waves in vacuum.', category: '1-mark', topicId: '8-3-2-nature' },
  { id: 'c8-board-3', text: '(Board) Name the electromagnetic radiation used for viewing objects through haze and fog.', category: '1-mark', topicId: '8-4-3-infrared' },
  { id: 'c8-board-4', text: '(Board) Which part of the electromagnetic spectrum has the largest penetrating power?', category: '1-mark', topicId: '8-4-7-gamma' },
  { id: 'c8-board-5', text: '(Board) What is the source of electromagnetic waves?', category: '1-mark', topicId: '8-3-1-sources' },
  { id: 'c8-board-6', text: '(Board) Name the electromagnetic waves used for satellite communication.', category: '1-mark', topicId: '8-4-2-microwaves' },
  { id: 'c8-board-7', text: '(Board) In which direction do the electric and magnetic field vectors oscillate in an electromagnetic wave propagating along the z-axis?', category: '1-mark', topicId: '8-3-2-nature' },
  { id: 'c8-board-8', text: '(Board) State two properties of electromagnetic waves.', category: '2-mark', topicId: '8-3-2-nature' },
  { id: 'c8-board-9', text: "(Board) Write Maxwell's modification of Ampere's circuital law. Explain the significance of the additional term.", category: '2-mark', topicId: '8-2-displacement-current' },
  { id: 'c8-board-10', text: '(Board) Name the electromagnetic waves: (a) used in radar systems, (b) used for killing germs in water purifiers.', category: '2-mark', topicId: '8-4-em-spectrum' },
  { id: 'c8-board-11', text: '(Board) Why is the ozone layer important for life on Earth?', category: '2-mark', topicId: '8-4-5-ultraviolet' },
  { id: 'c8-board-12', text: '(Board) How are infrared waves detected? Give two applications.', category: '2-mark', topicId: '8-4-3-infrared' },
  { id: 'c8-board-13', text: '(Board) An electromagnetic wave of wavelength λ travels in vacuum with velocity c. Find its angular frequency and wave number.', category: '2-mark', topicId: '8-3-2-nature' },
  { id: 'c8-board-14', text: '(Board) Explain the concept of displacement current. Write the expression for it and explain its physical significance.', category: '3-mark', topicId: '8-2-displacement-current' },
  { id: 'c8-board-15', text: '(Board) State the characteristics of electromagnetic waves. Write the relation between the amplitudes of electric and magnetic field vectors.', category: '3-mark', topicId: '8-3-2-nature' },
  { id: 'c8-board-16', text: '(Board) Name the electromagnetic waves: (a) produced by the oscillation of charges in antenna, (b) used to treat cancer, (c) used in night vision devices. Write one property of each.', category: '3-mark', topicId: '8-4-em-spectrum' },
  { id: 'c8-board-17', text: '(Board) Write the names of electromagnetic waves in increasing order of their wavelength. Name the electromagnetic waves having the smallest and largest wavelengths.', category: '3-mark', topicId: '8-4-em-spectrum' },
  { id: 'c8-board-18', text: "(Board) (a) What is displacement current? Why is it needed? (b) Write Maxwell's equations in vacuum. (c) Show that electromagnetic waves are transverse in nature. (d) Derive the expression for the velocity of electromagnetic waves in terms of μ₀ and ε₀.", category: '5-mark', topicId: '8-2-displacement-current' },
  { id: 'c8-board-19', text: '(Board) (a) Draw a schematic diagram of the electromagnetic spectrum. (b) Write the wavelength range, one source, and one detector for: (i) microwaves, (ii) infrared waves, (iii) ultraviolet rays, (iv) gamma rays. (c) Which electromagnetic wave is used in RADAR? Why?', category: '5-mark', topicId: '8-4-em-spectrum' },
  { id: 'c8-board-20', text: '(Board) (a) Write the properties of electromagnetic waves. (b) An electromagnetic wave of frequency 1 × 10¹⁴ Hz propagates in the positive z-direction. At a certain point and time, E = 4 ĵ V/m. Find: (i) the wavelength, (ii) the magnetic field B at that point, (iii) write the expression for the variation of E and B with space and time.', category: '5-mark', topicId: '8-3-2-nature' },

  // Assertion-Reason Questions
  { id: 'c8-ar-1', text: 'Assertion: Electromagnetic waves are transverse in nature. Reason: The electric and magnetic field vectors are perpendicular to each other and to the direction of propagation.', category: 'assertion-reason', topicId: '8-3-2-nature' },
  { id: 'c8-ar-2', text: 'Assertion: Displacement current exists between the plates of a charging capacitor. Reason: There is a changing electric field between the plates.', category: 'assertion-reason', topicId: '8-2-displacement-current' },
  { id: 'c8-ar-3', text: 'Assertion: Gamma rays have the highest penetrating power among all electromagnetic waves. Reason: Gamma rays have the shortest wavelength and highest frequency.', category: 'assertion-reason', topicId: '8-4-7-gamma' },
  { id: 'c8-ar-4', text: 'Assertion: Infrared waves are used in night vision devices. Reason: All bodies emit infrared radiation at normal temperatures.', category: 'assertion-reason', topicId: '8-4-3-infrared' },
  { id: 'c8-ar-5', text: 'Assertion: The ozone layer protects us from harmful UV radiation. Reason: Ozone absorbs UV radiation from the Sun.', category: 'assertion-reason', topicId: '8-4-5-ultraviolet' },

  // Case Study Questions
  { id: 'c8-case-1', text: 'Case Study: A parallel plate capacitor with circular plates of radius 10 cm is being charged by a current of 0.2 A. The plates are separated by 2 cm. (a) Calculate the rate of change of electric field between the plates. (b) Find the displacement current. (c) What is the magnetic field at a distance of 5 cm from the axis? (d) How does this magnetic field compare with that at the edge of the capacitor?', category: 'case-study', topicId: '8-2-displacement-current' },
  { id: 'c8-case-2', text: 'Case Study: An electromagnetic wave has the electric field E = 100 sin(2π × 10⁸ t - 2πx/3) V/m. (a) Identify the direction of propagation. (b) Calculate the wavelength and frequency. (c) Find the amplitude and expression for the magnetic field. (d) Calculate the speed of the wave and verify it equals c.', category: 'case-study', topicId: '8-3-2-nature' },

  // HOTS Questions
  { id: 'c8-hots-1', text: 'Why does the introduction of displacement current restore symmetry between electric and magnetic fields in Maxwell\'s equations?', category: 'hots', topicId: '8-2-displacement-current' },
  { id: 'c8-hots-2', text: 'If electromagnetic waves do not require a medium, how can they transfer energy through vacuum?', category: 'hots', topicId: '8-3-2-nature' },
  { id: 'c8-hots-3', text: 'Why do different electromagnetic waves have different biological effects despite being the same type of wave traveling at the same speed?', category: 'hots', topicId: '8-4-em-spectrum' },
];

// Export the question banks
export const physicsQuestionBanks: ChapterQuestionBank[] = [
  {
    chapterId: 'ch1-electric-charges-fields',
    questions: chapter1Questions,
  },
  {
    chapterId: 'ch2-electrostatic-potential',
    questions: chapter2Questions,
  },
  {
    chapterId: 'current-electricity',
    questions: chapter3Questions,
  },
  {
    chapterId: 'moving-charges-magnetism',
    questions: chapter4Questions,
  },
  {
    chapterId: 'magnetism-matter',
    questions: chapter5Questions,
  },
  {
    chapterId: 'electromagnetic-induction',
    questions: chapter6Questions,
  },
  {
    chapterId: 'alternating-current',
    questions: chapter7Questions,
  },
  {
    chapterId: 'em-waves',
    questions: chapter8Questions,
  },
];

// Helper function to get questions for a specific chapter
export function getChapterQuestions(chapterId: string): Question[] {
  const bank = physicsQuestionBanks.find(b => b.chapterId === chapterId);
  return bank?.questions || [];
}

// Helper function to get questions by category
export function getQuestionsByCategory(chapterId: string, category: string): Question[] {
  const questions = getChapterQuestions(chapterId);
  return questions.filter(q => q.category === category);
}

// Helper function to get questions by topic
export function getQuestionsByTopic(chapterId: string, topicId: string): Question[] {
  const questions = getChapterQuestions(chapterId);
  return questions.filter(q => q.topicId === topicId);
}
