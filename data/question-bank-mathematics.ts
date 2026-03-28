import { ChapterQuestionBank, Question } from '@/lib/types';

// Chapter 1: Relations and Functions - Question Bank
const chapter1Questions: Question[] = [
  // 1.1 Introduction
  { id: 'math1-1m-1', text: 'What is a relation R from set A to set B? How is it related to the Cartesian product A × B?', category: '1-mark', topicId: '1-1-introduction' },
  { id: 'math1-1m-2', text: 'If A = {1, 2} and B = {a, b}, write any two relations from A to B.', category: '1-mark', topicId: '1-1-introduction' },
  { id: 'math1-1m-3', text: 'Define domain, co-domain and range of a relation. Give one example of each.', category: '1-mark', topicId: '1-1-introduction' },
  { id: 'math1-1m-4', text: 'State the difference between a relation and a function. Give one example where a relation is NOT a function.', category: '1-mark', topicId: '1-1-introduction' },
  { id: 'math1-2m-1', text: 'Let A = {1, 2, 3} and B = {2, 4, 6}. Define a relation R from A to B given by R = {(a, b) : b = 2a}. Find the domain and range of R.', category: '2-mark', topicId: '1-1-introduction' },
  { id: 'math1-2m-2', text: 'A relation R in a set A is defined as R = {(a, b) : a is a factor of b}. If A = {1, 2, 3, 4, 6}, list the elements of R. Is (6, 2) ∈ R?', category: '2-mark', topicId: '1-1-introduction' },

  // 1.2.1 Empty and Universal Relations
  { id: 'math1-1m-5', text: 'Define empty relation and universal relation. Give one example of each.', category: '1-mark', topicId: '1-2-1-empty-universal' },
  { id: 'math1-1m-6', text: 'Why are both the empty relation and the universal relation called trivial relations?', category: '1-mark', topicId: '1-2-1-empty-universal' },
  { id: 'math1-1m-7', text: 'Let A = {1, 2, 3}. Write down the empty relation and the universal relation on A.', category: '1-mark', topicId: '1-2-1-empty-universal' },
  { id: 'math1-2m-3', text: 'Let A be the set of all students in a school. Is the relation R = {(a,b) : a is a brother of b} the empty relation on A? What if A is the set of students in a girls\' school? Justify.', category: '2-mark', topicId: '1-2-1-empty-universal' },
  { id: 'math1-2m-4', text: 'Let A = {1, 2, 3, 4}. Show that R = {(a, b) : |a − b| ≥ 0} is the universal relation on A.', category: '2-mark', topicId: '1-2-1-empty-universal' },

  // 1.2.2 Reflexive, Symmetric and Transitive Relations
  { id: 'math1-1m-8', text: 'Define a reflexive relation. Give one example of a relation that is reflexive.', category: '1-mark', topicId: '1-2-2-reflexive-symmetric-transitive' },
  { id: 'math1-1m-9', text: 'Define a symmetric relation. Give one example.', category: '1-mark', topicId: '1-2-2-reflexive-symmetric-transitive' },
  { id: 'math1-1m-10', text: 'Define a transitive relation. Give one example.', category: '1-mark', topicId: '1-2-2-reflexive-symmetric-transitive' },
  { id: 'math1-1m-11', text: 'Is the relation R = {(1,1), (2,2), (3,3), (1,2)} in A = {1,2,3} reflexive? Symmetric? Give reasons.', category: '1-mark', topicId: '1-2-2-reflexive-symmetric-transitive' },
  { id: 'math1-1m-12', text: 'Let R be the relation in set N given by R = {(a, b) : a = b − 2, b > 6}. Choose the correct answer:\n(A) (2, 4) ∈ R\n(B) (3, 8) ∈ R\n(C) (6, 8) ∈ R\n(D) (8, 7) ∈ R', category: '1-mark', topicId: '1-2-2-reflexive-symmetric-transitive' },
  { id: 'math1-2m-5', text: 'Check whether the relation R in R (real numbers) defined as R = {(a, b) : a ≤ b²} is reflexive, symmetric or transitive.', category: '2-mark', topicId: '1-2-2-reflexive-symmetric-transitive' },
  { id: 'math1-2m-6', text: 'Check whether the relation R defined in the set {1, 2, 3, 4, 5, 6} as R = {(a, b) : b = a + 1} is reflexive, symmetric or transitive.', category: '2-mark', topicId: '1-2-2-reflexive-symmetric-transitive' },
  { id: 'math1-2m-7', text: 'Show that the relation R in R defined as R = {(a, b) : a ≤ b} is reflexive and transitive but not symmetric.', category: '2-mark', topicId: '1-2-2-reflexive-symmetric-transitive' },
  { id: 'math1-3m-1', text: 'Determine whether each of the following relations is reflexive, symmetric and transitive:\n(i) R in A = {1, 2, ..., 13, 14} defined as R = {(x, y) : 3x − y = 0}\n(ii) R in N defined as R = {(x, y) : y = x + 5 and x < 4}\n(iii) R in A = {1, 2, 3, 4, 5, 6} as R = {(x, y) : y is divisible by x}\n(iv) R in Z defined as R = {(x, y) : x − y is an integer}', category: '3-mark', topicId: '1-2-2-reflexive-symmetric-transitive' },
  { id: 'math1-3m-2', text: 'Show that the relation R in the set {1, 2, 3} given by R = {(1,1),(2,2),(3,3),(1,2),(2,3)} is reflexive but neither symmetric nor transitive.', category: '3-mark', topicId: '1-2-2-reflexive-symmetric-transitive' },
  { id: 'math1-3m-3', text: 'Give an example of a relation on a set that is:\n(i) Symmetric but neither reflexive nor transitive\n(ii) Transitive but neither reflexive nor symmetric\n(iii) Reflexive and symmetric but not transitive\n(iv) Reflexive and transitive but not symmetric\n(v) Symmetric and transitive but not reflexive', category: '3-mark', topicId: '1-2-2-reflexive-symmetric-transitive' },

  // 1.2.3 Equivalence Relations and Equivalence Classes
  { id: 'math1-1m-13', text: 'Define an equivalence relation. What three properties must it satisfy?', category: '1-mark', topicId: '1-2-3-equivalence-relations' },
  { id: 'math1-1m-14', text: 'Let R be the relation in set {1, 2, 3, 4} given by R = {(1,2),(2,2),(1,1),(4,4),(1,3),(3,3),(3,2)}. Choose the correct answer:\n(A) R is reflexive and symmetric but not transitive\n(B) R is reflexive and transitive but not symmetric\n(C) R is symmetric and transitive but not reflexive\n(D) R is an equivalence relation', category: '1-mark', topicId: '1-2-3-equivalence-relations' },
  { id: 'math1-2m-8', text: 'Show that the relation R in the set {1, 2, 3} given by R = {(1,2),(2,1)} is symmetric but neither reflexive nor transitive.', category: '2-mark', topicId: '1-2-3-equivalence-relations' },
  { id: 'math1-2m-9', text: 'Show that the relation R in the set A of all books in a library, given by R = {(x, y) : x and y have the same number of pages}, is an equivalence relation.', category: '2-mark', topicId: '1-2-3-equivalence-relations' },
  { id: 'math1-3m-4', text: 'Let T be the set of all triangles in a plane. Show that the relation R = {(T₁, T₂) : T₁ is congruent to T₂} is an equivalence relation.', category: '3-mark', topicId: '1-2-3-equivalence-relations' },
  { id: 'math1-3m-5', text: 'Show that the relation R in the set Z of integers given by R = {(a, b) : 2 divides a − b} is an equivalence relation.', category: '3-mark', topicId: '1-2-3-equivalence-relations' },
  { id: 'math1-3m-6', text: 'Let R be the relation defined in A = {1,2,3,4,5,6,7} by R = {(a,b) : both a and b are either odd or even}. Show that R is an equivalence relation. Further show that all elements of {1,3,5,7} are related to each other and all elements of {2,4,6} are related to each other, but no element of {1,3,5,7} is related to any element of {2,4,6}.', category: '3-mark', topicId: '1-2-3-equivalence-relations' },
  { id: 'math1-3m-7', text: 'Show that each of the following relations R in the set A = {x ∈ Z : 0 ≤ x ≤ 12} is an equivalence relation. Find the set of all elements related to 1 in each case:\n(i) R = {(a, b) : |a − b| is a multiple of 4}\n(ii) R = {(a, b) : a = b}', category: '3-mark', topicId: '1-2-3-equivalence-relations' },
  { id: 'math1-5m-1', text: 'Show that the relation R defined in the set A of all triangles as R = {(T₁, T₂) : T₁ is similar to T₂} is an equivalence relation. Consider right angle triangles T₁ (sides 3, 4, 5), T₂ (sides 5, 12, 13) and T₃ (sides 6, 8, 10). Which triangles are related?', category: '5-mark', topicId: '1-2-3-equivalence-relations' },
  { id: 'math1-5m-2', text: 'Let L be the set of all lines in XY plane. Show that the relation R = {(L₁, L₂) : L₁ is parallel to L₂} is an equivalence relation. Find the set of all lines related to y = 2x + 4.', category: '5-mark', topicId: '1-2-3-equivalence-relations' },
  { id: 'math1-5m-3', text: 'Show that the relation R in the set A of points in a plane given by R = {(P, Q) : distance of P from origin equals distance of Q from origin} is an equivalence relation. What is the set of all points related to a point P ≠ (0,0)?', category: '5-mark', topicId: '1-2-3-equivalence-relations' },
  { id: 'math1-5m-4', text: 'If R₁ and R₂ are equivalence relations in a set A, show that R₁ ∩ R₂ is also an equivalence relation.', category: '5-mark', topicId: '1-2-3-equivalence-relations' },
  { id: 'math1-5m-5', text: 'Let A = {1,2,3}. Show that the number of equivalence relations containing (1,2) and (2,1) is two.', category: '5-mark', topicId: '1-2-3-equivalence-relations' },

  // Assertion-Reason for Relations
  { id: 'math1-ar-1', text: 'Assertion (A): The relation R = {(a, b) : a and b are born in the same city} defined on the set of all persons is an equivalence relation.\nReason (R): R is reflexive (every person is born in the same city as themselves), symmetric, and transitive.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) Both A and R are false', category: 'assertion-reason', topicId: '1-2-3-equivalence-relations' },
  { id: 'math1-ar-2', text: 'Assertion (A): The relation R = {(x, y) : x − y is divisible by 5} on Z is an equivalence relation.\nReason (R): Every relation defined by divisibility is automatically an equivalence relation.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) Both A and R are false', category: 'assertion-reason', topicId: '1-2-3-equivalence-relations' },

  // 1.3.1 One-One (Injective) Functions
  { id: 'math1-1m-15', text: 'Define a one-one (injective) function f : X → Y.', category: '1-mark', topicId: '1-3-1-one-one-functions' },
  { id: 'math1-1m-16', text: 'Is the function f : N → N given by f(x) = x² one-one? Give reason.', category: '1-mark', topicId: '1-3-1-one-one-functions' },
  { id: 'math1-1m-17', text: 'Show by example that f : R → R defined by f(x) = x² is NOT one-one.', category: '1-mark', topicId: '1-3-1-one-one-functions' },
  { id: 'math1-1m-18', text: 'Let f : R → R be defined as f(x) = x⁴. Choose the correct answer:\n(A) f is one-one onto\n(B) f is many-one onto\n(C) f is one-one but not onto\n(D) f is neither one-one nor onto', category: '1-mark', topicId: '1-3-1-one-one-functions' },
  { id: 'math1-2m-10', text: 'Show that the function f : N → N given by f(x) = 2x is one-one but not onto.', category: '2-mark', topicId: '1-3-1-one-one-functions' },
  { id: 'math1-2m-11', text: 'Let A = {1,2,3}, B = {4,5,6,7} and f = {(1,4),(2,5),(3,6)}. Show that f is one-one.', category: '2-mark', topicId: '1-3-1-one-one-functions' },
  { id: 'math1-2m-12', text: 'Prove that the function f : R → R, given by f(x) = 2x, is one-one and onto.', category: '2-mark', topicId: '1-3-1-one-one-functions' },

  // 1.3.2 Onto (Surjective) Functions
  { id: 'math1-1m-19', text: 'Define an onto (surjective) function f : X → Y. When does f : X → Y fail to be onto?', category: '1-mark', topicId: '1-3-2-onto-functions' },
  { id: 'math1-1m-20', text: 'Is f : N → N defined by f(1) = f(2) = 1 and f(x) = x − 1 for x > 2, onto? Give reason.', category: '1-mark', topicId: '1-3-2-onto-functions' },
  { id: 'math1-2m-13', text: 'Show that f : N → N given by f(1) = f(2) = 1 and f(x) = x − 1 for every x > 2 is onto but NOT one-one.', category: '2-mark', topicId: '1-3-2-onto-functions' },
  { id: 'math1-2m-14', text: 'Show that the function f : R → R defined as f(x) = x² is neither one-one nor onto.', category: '2-mark', topicId: '1-3-2-onto-functions' },
  { id: 'math1-2m-15', text: 'Let A be the set of all 50 students of Class X. Let f : A → N be f(x) = roll number of student x. Show that f is one-one but not onto.', category: '2-mark', topicId: '1-3-2-onto-functions' },

  // 1.3.3 Bijective Functions
  { id: 'math1-1m-21', text: 'Define a bijective function. State the condition required.', category: '1-mark', topicId: '1-3-3-bijective-functions' },
  { id: 'math1-1m-22', text: 'Let f : R → R be defined as f(x) = 3x. Choose the correct answer:\n(A) f is one-one onto\n(B) f is many-one onto\n(C) f is one-one but not onto\n(D) f is neither one-one nor onto', category: '1-mark', topicId: '1-3-3-bijective-functions' },
  { id: 'math1-2m-16', text: 'Show that f : N → N given by f(x) = x+1 if x is odd, and f(x) = x−1 if x is even, is both one-one and onto.', category: '2-mark', topicId: '1-3-3-bijective-functions' },
  { id: 'math1-2m-17', text: 'Let A and B be sets. Show that f : A×B → B×A defined by f(a, b) = (b, a) is bijective.', category: '2-mark', topicId: '1-3-3-bijective-functions' },
  { id: 'math1-2m-18', text: 'In each case, state whether the function is one-one, onto, or bijective. Justify:\n(i) f : R → R defined by f(x) = 3 − 4x\n(ii) f : R → R defined by f(x) = 1 + x²', category: '2-mark', topicId: '1-3-3-bijective-functions' },
  { id: 'math1-3m-8', text: 'Check the injectivity and surjectivity of the following functions:\n(i) f : N → N given by f(x) = x²\n(ii) f : Z → Z given by f(x) = x²\n(iii) f : R → R given by f(x) = x²\n(iv) f : N → N given by f(x) = x³\n(v) f : Z → Z given by f(x) = x³', category: '3-mark', topicId: '1-3-3-bijective-functions' },
  { id: 'math1-3m-9', text: 'Show that an onto function f : {1,2,3} → {1,2,3} is always one-one. Also show that a one-one function f : {1,2,3} → {1,2,3} must be onto.', category: '3-mark', topicId: '1-3-3-bijective-functions' },
  { id: 'math1-3m-10', text: 'Let A = R−{3} and B = R−{1}. Consider f : A → B defined by f(x) = (x−2)/(x−3). Is f one-one and onto? Justify.', category: '3-mark', topicId: '1-3-3-bijective-functions' },
  { id: 'math1-5m-6', text: 'Prove that the Greatest Integer Function f : R → R, given by f(x) = [x], is neither one-one nor onto. (Here [x] denotes the greatest integer less than or equal to x.)', category: '5-mark', topicId: '1-3-3-bijective-functions' },
  { id: 'math1-5m-7', text: 'Show that the Modulus Function f : R → R, given by f(x) = |x|, is neither one-one nor onto.', category: '5-mark', topicId: '1-3-3-bijective-functions' },
  { id: 'math1-5m-8', text: 'Show that the Signum Function f : R → R, given by f(x) = 1 if x > 0, f(x) = 0 if x = 0, f(x) = −1 if x < 0, is neither one-one nor onto.', category: '5-mark', topicId: '1-3-3-bijective-functions' },
  { id: 'math1-5m-9', text: 'Show that the function f : R → {x ∈ R : −1 < x < 1} defined by f(x) = x/(1+|x|), x ∈ R, is one-one and onto.', category: '5-mark', topicId: '1-3-3-bijective-functions' },
  { id: 'math1-5m-10', text: 'Find the number of all one-one functions from set A = {1, 2, 3} to itself. Justify.', category: '5-mark', topicId: '1-3-3-bijective-functions' },

  // Assertion-Reason for Functions
  { id: 'math1-ar-3', text: 'Assertion (A): The function f : R → R defined by f(x) = 2x + 3 is bijective.\nReason (R): f is one-one since f(x₁) = f(x₂) ⟹ x₁ = x₂, and onto since for every y ∈ R, x = (y−3)/2 ∈ R such that f(x) = y.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) Both A and R are false', category: 'assertion-reason', topicId: '1-3-3-bijective-functions' },
  { id: 'math1-ar-4', text: 'Assertion (A): For a finite set X, a one-one function f : X → X is necessarily onto.\nReason (R): For an infinite set, a one-one function need not be onto.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) Both A and R are false', category: 'assertion-reason', topicId: '1-3-3-bijective-functions' },

  // 1.4.1 Composition of Functions
  { id: 'math1-1m-23', text: 'Define composition of two functions f : A → B and g : B → C. Write the expression for gof(x).', category: '1-mark', topicId: '1-4-1-composition' },
  { id: 'math1-1m-24', text: 'If f(x) = 2x and g(x) = x + 3, find gof(2) and fog(2). Are they equal?', category: '1-mark', topicId: '1-4-1-composition' },
  { id: 'math1-1m-25', text: 'Is composition of functions commutative? Give an example to justify.', category: '1-mark', topicId: '1-4-1-composition' },
  { id: 'math1-2m-19', text: 'Let f : {2,3,4,5} → {3,4,5,9} and g : {3,4,5,9} → {7,11,15} be functions defined as f(2)=3, f(3)=4, f(4)=f(5)=5 and g(3)=g(4)=7, g(5)=g(9)=11. Find gof.', category: '2-mark', topicId: '1-4-1-composition' },
  { id: 'math1-2m-20', text: 'Find gof and fog, if f : R → R and g : R → R are given by f(x) = cos x and g(x) = 3x². Show that gof ≠ fog.', category: '2-mark', topicId: '1-4-1-composition' },
  { id: 'math1-2m-21', text: 'Let f : N → N be defined by f(n) = (n+1)/2 if n is odd, and f(n) = n/2 if n is even. State whether f is bijective. Justify.', category: '2-mark', topicId: '1-4-1-composition' },
  { id: 'math1-3m-11', text: 'Let A = {−1, 0, 1, 2}, B = {−4, −2, 0, 2} and f, g : A → B defined by f(x) = x² − x and g(x) = 2|x − 1/2| − 1, x ∈ A. Are f and g equal? Justify.', category: '3-mark', topicId: '1-4-1-composition' },
  { id: 'math1-3m-12', text: 'Consider the identity function Iₙ : N → N defined as Iₙ(x) = x ∀ x ∈ N. Show that although Iₙ is onto, Iₙ + Iₙ : N → N defined as (Iₙ + Iₙ)(x) = 2x is NOT onto.', category: '3-mark', topicId: '1-4-1-composition' },
  { id: 'math1-3m-13', text: 'Consider f : [0, π/2] → R defined by f(x) = sin x and g : [0, π/2] → R defined by g(x) = cos x. Show that f and g are one-one, but f + g is NOT one-one.', category: '3-mark', topicId: '1-4-1-composition' },

  // 1.4.2 Invertible Functions
  { id: 'math1-1m-26', text: 'Define an invertible function f : X → Y. What is the notation used for its inverse?', category: '1-mark', topicId: '1-4-2-invertible' },
  { id: 'math1-1m-27', text: 'What is the condition for a function f : X → Y to be invertible?', category: '1-mark', topicId: '1-4-2-invertible' },
  { id: 'math1-1m-28', text: 'If f : R → R is given by f(x) = (3 − x³)^(1/3), find fof(x).', category: '1-mark', topicId: '1-4-2-invertible' },
  { id: 'math1-2m-22', text: 'Show that the function f : R* → R* defined by f(x) = 1/x is one-one and onto. (R* is the set of all non-zero real numbers.)', category: '2-mark', topicId: '1-4-2-invertible' },
  { id: 'math1-2m-23', text: 'Let f : N → Y be defined as f(x) = 4x + 3, where Y = {y ∈ N : y = 4x + 3 for some x ∈ N}. Show that f is invertible. Find the inverse.', category: '2-mark', topicId: '1-4-2-invertible' },
  { id: 'math1-3m-14', text: 'Let f : R → R be defined by f(x) = 10x + 7. Find the function g : R → R such that gof = fog = Iᴿ.', category: '3-mark', topicId: '1-4-2-invertible' },
  { id: 'math1-3m-15', text: 'Show that f : [−1, 1] → R given by f(x) = x/(x+2) is one-one. Find the inverse of f : [−1,1] → Range of f.', category: '3-mark', topicId: '1-4-2-invertible' },
  { id: 'math1-3m-16', text: 'Consider f : R⁺ → [−5, ∞) given by f(x) = 9x² + 6x − 5. Show that f is invertible with inverse f⁻¹(y) = (√(y+6) − 1)/3.', category: '3-mark', topicId: '1-4-2-invertible' },
  { id: 'math1-5m-11', text: 'Let f : W → W be defined as f(n) = n−1 if n is odd, and f(n) = n+1 if n is even. Show that f is invertible. Find the inverse of f. (W = set of whole numbers.)', category: '5-mark', topicId: '1-4-2-invertible' },
  { id: 'math1-5m-12', text: 'Let f : N → R be defined as f(x) = 4x² + 12x + 15. Show that f : N → Range of f is invertible. Find the inverse.', category: '5-mark', topicId: '1-4-2-invertible' },
  { id: 'math1-5m-13', text: 'Let A = R−{2} and B = R−{1}. Consider the function f : A → B defined by f(x) = (x−1)/(x−2). Show that f is one-one and onto. Find f⁻¹.', category: '5-mark', topicId: '1-4-2-invertible' },

  // Assertion-Reason for Invertible
  { id: 'math1-ar-5', text: 'Assertion (A): If f : X → Y and g : Y → X satisfy gof = Iₓ and fog = Iᵧ, then g = f⁻¹.\nReason (R): A function is invertible if and only if it is bijective.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) Both A and R are false', category: 'assertion-reason', topicId: '1-4-2-invertible' },

  // Case Study Questions
  { id: 'math1-case-1', text: 'Case Study: Students and their Roll Numbers\nIn a school, let A be the set of 50 students of Class XII. A function f : A → N is defined by f(x) = roll number of the student x. Two students cannot have the same roll number. The roll numbers assigned are 1 to 50. Ravi, the class monitor, also defines a relation R on A by R = {(a, b) : a and b have the same grade in Mathematics}.\n(i) Is f one-one? Give reason.\n(ii) Is f onto? Give reason.\n(iii) Is the relation R reflexive and symmetric?\n(iv) Is R an equivalence relation? What are the equivalence classes of R?', category: 'case-study', topicId: '1-3-3-bijective-functions' },
  { id: 'math1-case-2', text: 'Case Study: City Planning and Parallel Roads\nA city planner is designing a road network. Let L be the set of all straight roads in a city. He defines a relation R₁ on L as: (l₁, l₂) ∈ R₁ if road l₁ is parallel to road l₂, and a relation R₂ as: (l₁, l₂) ∈ R₂ if road l₁ is perpendicular to road l₂. He also assigns a unique route code f(l) to each road l ∈ L such that no two roads get the same code.\n(i) Is R₁ an equivalence relation? Justify briefly.\n(ii) Show that R₂ is symmetric but NOT reflexive.\n(iii) If f is one-one and L has n roads, will the range of f necessarily be all of N?\n(iv) What is the equivalence class of a road l under relation R₁?', category: 'case-study', topicId: '1-2-3-equivalence-relations' },
  { id: 'math1-case-3', text: 'Case Study: Coding Function in Communication\nIn a secure communication system, messages are encoded using a function f : A → B, where A = {a, b, c, ..., z} (26 letters) and B = {1, 2, ..., 100}. The encoding function is defined as f(x) = position of x in the alphabet + 10 (so f(a) = 11, f(b) = 12, ..., f(z) = 36). A second encoding g : B → B is defined as g(n) = 2n.\n(i) Is f one-one? Is it onto? Give reasons.\n(ii) Is g one-one? Is it onto? Give reasons.\n(iii) Find gof(a) and gof(z).\n(iv) Is the composite function gof invertible? Justify.', category: 'case-study', topicId: '1-4-1-composition' },

  // Long Answer / HOTS Questions
  { id: 'math1-5m-14', text: '(a) With the help of an example, explain what an equivalence relation is. Define equivalence class.\n(b) Let A = {1, 2, 3}. Show that the number of relations containing (1, 2) and (2, 3) which are reflexive and transitive but NOT symmetric is THREE.', category: '5-mark', topicId: '1-2-3-equivalence-relations' },
  { id: 'math1-5m-15', text: '(a) Let R be a relation on the set A of ordered pairs of positive integers defined by (x, y) R (u, v) if and only if xv = yu. Show that R is an equivalence relation.\n(b) Let X = {1,2,3,4,5,6,7,8,9}. Let R₁ = {(x,y) : x−y is divisible by 3} and R₂ = {(x,y) : {x,y} ⊂ {1,4,7} or {x,y} ⊂ {2,5,8} or {x,y} ⊂ {3,6,9}}. Show that R₁ = R₂.', category: '5-mark', topicId: '1-2-3-equivalence-relations' },
  { id: 'math1-5m-16', text: '(a) Show that the function f : R → R given by f(x) = x³ is injective.\n(b) Let f : X → Y be a function. Define a relation R in X given by R = {(a,b) : f(a) = f(b)}. Examine whether R is an equivalence relation or not.', category: '5-mark', topicId: '1-3-1-one-one-functions' },
  { id: 'math1-5m-17', text: 'Given a non-empty set X, consider P(X) which is the set of all subsets of X. Define the relation R in P(X) as: For subsets A, B in P(X), ARB if and only if A ⊂ B. Is R an equivalence relation on P(X)? Justify your answer fully.', category: '5-mark', topicId: '1-2-3-equivalence-relations' },
  { id: 'math1-5m-18', text: 'Consider f : R⁺ → [4, ∞) given by f(x) = x² + 4. Show that f is invertible with the inverse f⁻¹(y) = √(y − 4). Also verify that f⁻¹of(x) = x and fof⁻¹(y) = y.', category: '5-mark', topicId: '1-4-2-invertible' },
  { id: 'math1-5m-19', text: 'Find the number of all onto functions from the set {1, 2, 3, ..., n} to itself. Justify your answer by considering the case n = 3 explicitly, listing all such functions.', category: '5-mark', topicId: '1-3-2-onto-functions' },

  // HOTS Questions
  { id: 'math1-hots-1', text: 'If f : A → B and g : B → C are both one-one, prove that gof : A → C is also one-one.', category: 'hots', topicId: '1-4-1-composition' },
  { id: 'math1-hots-2', text: 'If f : A → B and g : B → C are both onto, prove that gof : A → C is also onto.', category: 'hots', topicId: '1-4-1-composition' },
  { id: 'math1-hots-3', text: 'If gof is one-one, must f be one-one? Must g be one-one? Prove or give a counterexample for each.', category: 'hots', topicId: '1-4-1-composition' },
  { id: 'math1-hots-4', text: 'If gof is onto, must g be onto? Must f be onto? Prove or give a counterexample for each.', category: 'hots', topicId: '1-4-1-composition' },
  { id: 'math1-hots-5', text: 'Show that if f : A → B and g : B → A are functions such that gof = Iₐ, then f is one-one and g is onto.', category: 'hots', topicId: '1-4-2-invertible' },
  { id: 'math1-hots-6', text: 'Let A = {1,2,3}. Then find the number of relations containing (1,2) and (1,3) which are reflexive and symmetric but NOT transitive.', category: 'hots', topicId: '1-2-2-reflexive-symmetric-transitive' },
];

// Chapter 2: Inverse Trigonometric Functions - Question Bank
const chapter2Questions: Question[] = [
  // 2.1 Introduction
  { id: 'math2-1m-1', text: 'What is an inverse trigonometric function? Give one example.', category: '1-mark', topicId: '2-1-introduction' },
  { id: 'math2-1m-2', text: 'Differentiate between sin⁻¹x and (sin x)⁻¹.', category: '1-mark', topicId: '2-1-introduction' },
  { id: 'math2-1m-3', text: 'What is meant by the principal value branch of an inverse trigonometric function?', category: '1-mark', topicId: '2-1-introduction' },

  // 2.2 Basic Concepts
  { id: 'math2-1m-4', text: 'Write the domain and range of sin⁻¹x (principal value branch).', category: '1-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-1m-5', text: 'Write the domain and range of cos⁻¹x (principal value branch).', category: '1-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-1m-6', text: 'Write the domain and range of tan⁻¹x (principal value branch).', category: '1-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-1m-7', text: 'What is the principal value of sin⁻¹(1/2)?', category: '1-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-1m-8', text: 'What is the principal value of cos⁻¹(√3/2)?', category: '1-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-1m-9', text: 'What is the principal value of tan⁻¹(1)?', category: '1-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-1m-10', text: 'Why is sin⁻¹x not defined for |x| > 1?', category: '1-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-2m-1', text: 'Find the principal value of sin⁻¹(−1/2).', category: '2-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-2m-2', text: 'Find the principal value of cos⁻¹(−1/2).', category: '2-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-2m-3', text: 'Find the principal value of tan⁻¹(−√3).', category: '2-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-2m-4', text: 'Find the principal value of cot⁻¹(−1/√3).', category: '2-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-2m-5', text: 'Find the principal value of sec⁻¹(2/√3).', category: '2-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-2m-6', text: 'Find the principal value of cosec⁻¹(−√2).', category: '2-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-2m-7', text: 'Find the value of tan⁻¹(1) + cos⁻¹(−1/2) + sin⁻¹(−1/2).', category: '2-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-2m-8', text: 'Find the value of cos⁻¹(1/2) + 2 sin⁻¹(1/2).', category: '2-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-2m-9', text: 'If sin⁻¹x = y, then what are the possible values of y?', category: '2-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-2m-10', text: 'Explain why the domain of sin⁻¹x is restricted to [−1, 1].', category: '2-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-3m-1', text: 'Find the value of tan⁻¹√3 − sec⁻¹(−2). Show all steps.', category: '3-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-3m-2', text: 'Find the value of sin⁻¹(sin 2π/3). Explain why sin⁻¹(sin x) ≠ x in this case.', category: '3-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-3m-3', text: 'Find the value of cos⁻¹(cos 7π/6). Justify your answer.', category: '3-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-3m-4', text: 'Find the value of tan⁻¹(tan 3π/4). Show the working.', category: '3-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-3m-5', text: 'Explain with the help of a graph how the inverse of the sine function is defined by restricting its domain to [−π/2, π/2].', category: '3-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-5m-1', text: 'Define inverse trigonometric functions. Give the domain and range (principal value branches) of all six inverse trigonometric functions in tabular form.', category: '5-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-5m-2', text: 'Draw the graphs of y = sin x and y = sin⁻¹x on the same axes. Explain how the graph of y = sin⁻¹x is obtained from y = sin x by reflection about the line y = x.', category: '5-mark', topicId: '2-2-basic-concepts' },

  // 2.2.1 Domain and Range
  { id: 'math2-1m-11', text: 'Write the domain of cosec⁻¹x.', category: '1-mark', topicId: '2-2-1-domain-range' },
  { id: 'math2-1m-12', text: 'Write the range of sec⁻¹x (principal value branch).', category: '1-mark', topicId: '2-2-1-domain-range' },
  { id: 'math2-1m-13', text: 'Write the domain of cot⁻¹x.', category: '1-mark', topicId: '2-2-1-domain-range' },
  { id: 'math2-1m-14', text: 'Why is the value x = 0 excluded from the range of cosec⁻¹x?', category: '1-mark', topicId: '2-2-1-domain-range' },
  { id: 'math2-1m-15', text: 'For what values of x is tan⁻¹x defined?', category: '1-mark', topicId: '2-2-1-domain-range' },
  { id: 'math2-2m-11', text: 'Explain why the range of sin⁻¹x is [−π/2, π/2] and not [0, π].', category: '2-mark', topicId: '2-2-1-domain-range' },
  { id: 'math2-2m-12', text: 'Why is the range of cos⁻¹x different from that of sin⁻¹x even though both have the same domain?', category: '2-mark', topicId: '2-2-1-domain-range' },
  { id: 'math2-2m-13', text: 'The domain of sec⁻¹x is R − (−1, 1). Explain why values between −1 and 1 are excluded.', category: '2-mark', topicId: '2-2-1-domain-range' },
  { id: 'math2-2m-14', text: 'Why is π/2 excluded from the range of sec⁻¹x?', category: '2-mark', topicId: '2-2-1-domain-range' },
  { id: 'math2-3m-6', text: 'Explain the concept of restricting the domain of trigonometric functions to make them one-one and onto. Give an example using the cosine function.', category: '3-mark', topicId: '2-2-1-domain-range' },
  { id: 'math2-3m-7', text: 'Compare the domains and ranges of tan⁻¹x and cot⁻¹x. Why are their ranges different even though both have the same domain?', category: '3-mark', topicId: '2-2-1-domain-range' },

  // 2.2.2 Graphs
  { id: 'math2-2m-15', text: 'Sketch the graph of y = sin⁻¹x. Mark the principal value branch clearly.', category: '2-mark', topicId: '2-2-2-graphs' },
  { id: 'math2-2m-16', text: 'Sketch the graph of y = cos⁻¹x and indicate its domain and range.', category: '2-mark', topicId: '2-2-2-graphs' },
  { id: 'math2-2m-17', text: 'Sketch the graph of y = tan⁻¹x showing the horizontal asymptotes.', category: '2-mark', topicId: '2-2-2-graphs' },
  { id: 'math2-3m-8', text: 'Draw the graphs of y = sin x (restricted to [−π/2, π/2]) and y = sin⁻¹x. Explain how they are reflections of each other about y = x.', category: '3-mark', topicId: '2-2-2-graphs' },
  { id: 'math2-3m-9', text: 'Draw the graph of y = cosec⁻¹x. Explain why there is a discontinuity at the origin.', category: '3-mark', topicId: '2-2-2-graphs' },
  { id: 'math2-3m-10', text: 'Draw the graphs of y = cot x and y = cot⁻¹x. Show the principal value branch of cot⁻¹x.', category: '3-mark', topicId: '2-2-2-graphs' },

  // 2.3 Properties
  { id: 'math2-1m-16', text: 'Write the value of sin(sin⁻¹x) for x ∈ [−1, 1].', category: '1-mark', topicId: '2-3-properties' },
  { id: 'math2-1m-17', text: 'Write the value of sin⁻¹(sin x) for x ∈ [−π/2, π/2].', category: '1-mark', topicId: '2-3-properties' },
  { id: 'math2-1m-18', text: 'Write the value of cos(cos⁻¹x) for x ∈ [−1, 1].', category: '1-mark', topicId: '2-3-properties' },
  { id: 'math2-1m-19', text: 'Write the value of tan⁻¹(tan x) for x ∈ (−π/2, π/2).', category: '1-mark', topicId: '2-3-properties' },
  { id: 'math2-2m-18', text: 'Prove that sin⁻¹(−x) = −sin⁻¹x for x ∈ [−1, 1].', category: '2-mark', topicId: '2-3-properties' },
  { id: 'math2-2m-19', text: 'Prove that cos⁻¹(−x) = π − cos⁻¹x for x ∈ [−1, 1].', category: '2-mark', topicId: '2-3-properties' },
  { id: 'math2-2m-20', text: 'Prove that tan⁻¹(−x) = −tan⁻¹x for x ∈ R.', category: '2-mark', topicId: '2-3-properties' },
  { id: 'math2-2m-21', text: 'Prove that sin⁻¹x + cos⁻¹x = π/2 for x ∈ [−1, 1].', category: '2-mark', topicId: '2-3-properties' },
  { id: 'math2-2m-22', text: 'Prove that tan⁻¹x + cot⁻¹x = π/2 for x ∈ R.', category: '2-mark', topicId: '2-3-properties' },
  { id: 'math2-2m-23', text: 'Prove that sec⁻¹x + cosec⁻¹x = π/2 for |x| ≥ 1.', category: '2-mark', topicId: '2-3-properties' },
  { id: 'math2-3m-11', text: 'Show that sin⁻¹(2x√(1−x²)) = 2 sin⁻¹x for −1/√2 ≤ x ≤ 1/√2.', category: '3-mark', topicId: '2-3-properties' },
  { id: 'math2-3m-12', text: 'Show that sin⁻¹(2x√(1−x²)) = 2 cos⁻¹x for 1/√2 ≤ x ≤ 1.', category: '3-mark', topicId: '2-3-properties' },
  { id: 'math2-3m-13', text: 'Prove that 3 sin⁻¹x = sin⁻¹(3x − 4x³) for x ∈ [−1/2, 1/2].', category: '3-mark', topicId: '2-3-properties' },
  { id: 'math2-3m-14', text: 'Prove that 3 cos⁻¹x = cos⁻¹(4x³ − 3x) for x ∈ [1/2, 1].', category: '3-mark', topicId: '2-3-properties' },
  { id: 'math2-3m-15', text: 'Simplify: tan⁻¹[(√(1+x²) − 1)/x] for x ≠ 0.', category: '3-mark', topicId: '2-3-properties' },
  { id: 'math2-3m-16', text: 'Simplify: tan⁻¹[√((1−cos x)/(1+cos x))] for 0 < x < π.', category: '3-mark', topicId: '2-3-properties' },
  { id: 'math2-3m-17', text: 'Simplify: tan⁻¹[(cos x − sin x)/(cos x + sin x)] for −π/4 < x < 3π/4.', category: '3-mark', topicId: '2-3-properties' },
  { id: 'math2-3m-18', text: 'Simplify: tan⁻¹[x/√(a² − x²)] for |x| < a.', category: '3-mark', topicId: '2-3-properties' },
  { id: 'math2-3m-19', text: 'Simplify: tan⁻¹[(3a²x − x³)/(a³ − 3ax²)] for a > 0 and −a/√3 < x < a/√3.', category: '3-mark', topicId: '2-3-properties' },
  { id: 'math2-3m-20', text: 'Write cot⁻¹(1/√(x²−1)) for x > 1 in the simplest form.', category: '3-mark', topicId: '2-3-properties' },
  { id: 'math2-3m-21', text: 'Express tan⁻¹[(cos x)/(1 − sin x)] in simplest form for −3π/2 < x < π/2.', category: '3-mark', topicId: '2-3-properties' },
  { id: 'math2-5m-3', text: 'State and prove all the fundamental identities of inverse trigonometric functions involving: (a) sin⁻¹(−x), cos⁻¹(−x), tan⁻¹(−x) (b) sin⁻¹x + cos⁻¹x = π/2.', category: '5-mark', topicId: '2-3-properties' },
  { id: 'math2-5m-4', text: 'Derive the expressions: (a) sin⁻¹(2x√(1−x²)) = 2sin⁻¹x (b) sin⁻¹(2x√(1−x²)) = 2cos⁻¹x. State the conditions on x for each.', category: '5-mark', topicId: '2-3-properties' },

  // 2.3.1 Principal Value Branch
  { id: 'math2-1m-20', text: 'What is meant by the principal value of an inverse trigonometric function?', category: '1-mark', topicId: '2-3-1-principal-value' },
  { id: 'math2-1m-21', text: 'Why is the principal value branch of sin⁻¹x chosen as [−π/2, π/2] and not some other interval?', category: '1-mark', topicId: '2-3-1-principal-value' },
  { id: 'math2-1m-22', text: 'The principal value of cosec⁻¹(−2) is equal to what?', category: '1-mark', topicId: '2-3-1-principal-value' },
  { id: 'math2-2m-24', text: 'Find the principal value of sin⁻¹(sin 3π/5).', category: '2-mark', topicId: '2-3-1-principal-value' },
  { id: 'math2-2m-25', text: 'Find the principal value of cos⁻¹(cos 13π/6).', category: '2-mark', topicId: '2-3-1-principal-value' },
  { id: 'math2-2m-26', text: 'Find the principal value of tan⁻¹(tan 7π/6).', category: '2-mark', topicId: '2-3-1-principal-value' },
  { id: 'math2-3m-22', text: 'Find the value of: tan⁻¹[2 cos(2 sin⁻¹(1/2))].', category: '3-mark', topicId: '2-3-1-principal-value' },
  { id: 'math2-3m-23', text: 'Find the value of: (1/2) tan[sin⁻¹(2x/(1+x²)) + cos⁻¹((1−y²)/(1+y²))] for |x| < 1, y > 0 and xy < 1.', category: '3-mark', topicId: '2-3-1-principal-value' },
  { id: 'math2-3m-24', text: 'Find the value of: tan(sin⁻¹(3/5) + cot⁻¹(3/2)).', category: '3-mark', topicId: '2-3-1-principal-value' },

  // 2.3.2 Properties and Identities
  { id: 'math2-2m-27', text: 'Find the value of cos⁻¹(cos 13π/6).', category: '2-mark', topicId: '2-3-2-identities' },
  { id: 'math2-2m-28', text: 'Find the value of tan⁻¹(tan 7π/6).', category: '2-mark', topicId: '2-3-2-identities' },
  { id: 'math2-3m-25', text: 'Prove that 2 sin⁻¹(3/5) = tan⁻¹(24/7).', category: '3-mark', topicId: '2-3-2-identities' },
  { id: 'math2-3m-26', text: 'Prove that sin⁻¹(8/17) + sin⁻¹(3/5) = tan⁻¹(77/36).', category: '3-mark', topicId: '2-3-2-identities' },
  { id: 'math2-3m-27', text: 'Prove that cos⁻¹(4/5) + cos⁻¹(12/13) = cos⁻¹(33/65).', category: '3-mark', topicId: '2-3-2-identities' },
  { id: 'math2-3m-28', text: 'Prove that cos⁻¹(12/13) + sin⁻¹(3/5) = sin⁻¹(56/65).', category: '3-mark', topicId: '2-3-2-identities' },
  { id: 'math2-3m-29', text: 'Prove that tan⁻¹(63/16) = sin⁻¹(5/13) + cos⁻¹(3/5).', category: '3-mark', topicId: '2-3-2-identities' },
  { id: 'math2-3m-30', text: 'Prove that tan⁻¹√x = (1/2) cos⁻¹[(1−x)/(1+x)] for x ∈ [0, 1].', category: '3-mark', topicId: '2-3-2-identities' },
  { id: 'math2-3m-31', text: 'Prove that cot⁻¹[(√(1+sin x) + √(1−sin x))/(√(1+sin x) − √(1−sin x))] = x/2 for x ∈ (0, π/4).', category: '3-mark', topicId: '2-3-2-identities' },
  { id: 'math2-3m-32', text: 'Prove that tan⁻¹[(√(1+x) − √(1−x))/(√(1+x) + √(1−x))] = π/4 − (1/2)cos⁻¹x for −1/√2 ≤ x ≤ 1.', category: '3-mark', topicId: '2-3-2-identities' },
  { id: 'math2-3m-33', text: 'Solve: 2 tan⁻¹(cos x) = tan⁻¹(2 cosec x).', category: '3-mark', topicId: '2-3-2-identities' },
  { id: 'math2-3m-34', text: 'Solve: tan⁻¹[(1−x)/(1+x)] = (1/2) tan⁻¹x for x > 0.', category: '3-mark', topicId: '2-3-2-identities' },
  { id: 'math2-5m-5', text: 'Prove the following identities and state the conditions on x: (a) 2 sin⁻¹(3/5) = tan⁻¹(24/7) (b) cos⁻¹(4/5) + cos⁻¹(12/13) = cos⁻¹(33/65) (c) tan⁻¹(63/16) = sin⁻¹(5/13) + cos⁻¹(3/5).', category: '5-mark', topicId: '2-3-2-identities' },

  // MCQs
  { id: 'math2-mcq-1', text: 'If sin⁻¹x = y, then:\n(A) 0 ≤ y ≤ π\n(B) −π/2 ≤ y ≤ π/2\n(C) 0 < y < π\n(D) −π/2 < y < π/2', category: '1-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-mcq-2', text: 'tan⁻¹√3 − sec⁻¹(−2) is equal to:\n(A) π\n(B) −π/3\n(C) π/3\n(D) 2π/3', category: '1-mark', topicId: '2-2-basic-concepts' },
  { id: 'math2-mcq-3', text: 'cos⁻¹(cos 7π/6) is equal to:\n(A) 7π/6\n(B) 5π/6\n(C) π/3\n(D) π/6', category: '1-mark', topicId: '2-3-1-principal-value' },
  { id: 'math2-mcq-4', text: 'sin(π/3 − sin⁻¹(−1/2)) is equal to:\n(A) 1/2\n(B) 1/3\n(C) 1/4\n(D) 1', category: '1-mark', topicId: '2-3-properties' },
  { id: 'math2-mcq-5', text: 'tan⁻¹√3 − cot⁻¹(−√3) is equal to:\n(A) π\n(B) −π/2\n(C) 0\n(D) 2√3', category: '1-mark', topicId: '2-3-properties' },
  { id: 'math2-mcq-6', text: 'sin⁻¹(1 − x) − 2 sin⁻¹x = π/2, then x is equal to:\n(A) 0, 1/2\n(B) 1, 1/2\n(C) 0\n(D) 1/2', category: '1-mark', topicId: '2-3-2-identities' },
  { id: 'math2-mcq-7', text: 'The value of sin⁻¹(cos(53π/5)) is:\n(A) 3π/5\n(B) −3π/10\n(C) π/10\n(D) −7π/5', category: '1-mark', topicId: '2-3-1-principal-value' },
  { id: 'math2-mcq-8', text: 'If tan⁻¹x + tan⁻¹y = 4π/5, then cot⁻¹x + cot⁻¹y equals:\n(A) π/5\n(B) 2π/5\n(C) 3π/5\n(D) π', category: '1-mark', topicId: '2-3-properties' },
  { id: 'math2-mcq-9', text: 'The domain of sin⁻¹(2x) is:\n(A) [0, 1]\n(B) [−1, 1]\n(C) [−1/2, 1/2]\n(D) [−2, 2]', category: '1-mark', topicId: '2-2-1-domain-range' },
  { id: 'math2-mcq-10', text: 'If α ≤ 2 sin⁻¹x + cos⁻¹x ≤ β, then:\n(A) α = −π/2, β = π/2\n(B) α = 0, β = π\n(C) α = −π/2, β = 3π/2\n(D) α = 0, β = 2π', category: '1-mark', topicId: '2-3-properties' },

  // Assertion-Reason
  { id: 'math2-ar-1', text: 'Assertion (A): The principal value of sin⁻¹(sin 5π/6) is 5π/6.\nReason (R): sin⁻¹(sin x) = x for all x.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) Both A and R are false', category: 'assertion-reason', topicId: '2-3-1-principal-value' },
  { id: 'math2-ar-2', text: 'Assertion (A): tan⁻¹(1) + tan⁻¹(2) + tan⁻¹(3) = π.\nReason (R): tan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1−xy)) when xy < 1.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) Both A and R are false', category: 'assertion-reason', topicId: '2-3-2-identities' },
  { id: 'math2-ar-3', text: 'Assertion (A): sin⁻¹x + cos⁻¹x = π/2 for all x ∈ [−1, 1].\nReason (R): sin⁻¹x and cos⁻¹x are complementary functions.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) Both A and R are false', category: 'assertion-reason', topicId: '2-3-properties' },

  // Case Study
  { id: 'math2-case-1', text: 'Case Study: An architect is designing a wheelchair ramp. The ramp rises 1 meter for every 12 meters of horizontal distance.\n\n(i) Calculate the angle of inclination of the ramp using an inverse trigonometric function.\n(ii) If the ramp angle is sin⁻¹(1/12), express this angle in terms of tan⁻¹.\n(iii) Two ramps have angles sin⁻¹(3/5) and cos⁻¹(4/5). Are they the same ramp? Justify.\n(iv) The architect needs to verify that sin⁻¹(3/5) + sin⁻¹(4/5) = π/2. Is this statement true? Prove or disprove.', category: 'case-study', topicId: '2-3-2-identities' },

  // HOTS
  { id: 'math2-hots-1', text: 'If sin⁻¹x + sin⁻¹y + sin⁻¹z = 3π/2, find the value of x + y + z.', category: 'hots', topicId: '2-3-properties' },
  { id: 'math2-hots-2', text: 'Find all values of x satisfying: sin⁻¹x + sin⁻¹(1−x) = cos⁻¹x.', category: 'hots', topicId: '2-3-2-identities' },
  { id: 'math2-hots-3', text: 'If cos⁻¹(x/a) + cos⁻¹(y/b) = α, prove that x²/a² − 2xy cosα/(ab) + y²/b² = sin²α.', category: 'hots', topicId: '2-3-2-identities' },
  { id: 'math2-hots-4', text: 'Prove that: tan⁻¹(1/2) + tan⁻¹(1/5) + tan⁻¹(1/8) = π/4.', category: 'hots', topicId: '2-3-2-identities' },
  { id: 'math2-hots-5', text: 'If tan⁻¹a + tan⁻¹b + tan⁻¹c = π, prove that a + b + c = abc.', category: 'hots', topicId: '2-3-2-identities' },
  { id: 'math2-hots-6', text: 'Find the value of Σ tan⁻¹(1/(1+n+n²)) for n = 1 to ∞. [Hint: Use tan⁻¹(n+1) − tan⁻¹n]', category: 'hots', topicId: '2-3-2-identities' },
  { id: 'math2-hots-7', text: 'The value of cos(2 cos⁻¹x + sin⁻¹x) at x = 1/5 is equal to what? Show that the answer is −2√6/5.', category: 'hots', topicId: '2-3-properties' },
  { id: 'math2-hots-8', text: 'If tan⁻¹x + tan⁻¹y + tan⁻¹z = π/2, prove that xy + yz + zx = 1.', category: 'hots', topicId: '2-3-2-identities' },
  { id: 'math2-hots-9', text: 'Solve for x: sin⁻¹(6x) + sin⁻¹(6√3 x) = −π/2.', category: 'hots', topicId: '2-3-2-identities' },
  { id: 'math2-hots-10', text: 'If sin⁻¹(x/5) + cosec⁻¹(5/4) = π/2, then find the value of x.', category: 'hots', topicId: '2-3-2-identities' },
];

// Chapter 3: Matrices - Question Bank
const chapter3Questions: Question[] = [
  // 3.1-3.2 Introduction and Matrix
  { id: 'math3-1m-1', text: 'Define a matrix. What are its elements called?', category: '1-mark', topicId: '3-1-introduction' },
  { id: 'math3-1m-2', text: 'What is meant by the order of a matrix? Give an example.', category: '1-mark', topicId: '3-1-introduction' },
  { id: 'math3-1m-3', text: 'If a matrix has m rows and n columns, how many elements does it have?', category: '1-mark', topicId: '3-1-introduction' },
  { id: 'math3-1m-4', text: 'In the matrix A = [aᵢⱼ], what does the notation aᵢⱼ represent?', category: '1-mark', topicId: '3-1-introduction' },
  { id: 'math3-1m-5', text: 'Write a 2 × 3 matrix whose elements are all 1.', category: '1-mark', topicId: '3-1-introduction' },
  { id: 'math3-2m-1', text: 'If a matrix has 8 elements, what are the possible orders it can have?', category: '2-mark', topicId: '3-1-introduction' },
  { id: 'math3-2m-2', text: 'If a matrix has 18 elements, what are the possible orders it can have? What if it has 5 elements?', category: '2-mark', topicId: '3-1-introduction' },
  { id: 'math3-2m-3', text: 'Construct a 2 × 2 matrix A = [aᵢⱼ] whose elements are given by aᵢⱼ = (i + j)²/2.', category: '2-mark', topicId: '3-1-introduction' },
  { id: 'math3-2m-4', text: 'Construct a 2 × 2 matrix A = [aᵢⱼ] whose elements are given by aᵢⱼ = i/j.', category: '2-mark', topicId: '3-1-introduction' },
  { id: 'math3-3m-1', text: 'Construct a 3 × 2 matrix whose elements are given by aᵢⱼ = (1/2)|i − 3j|.', category: '3-mark', topicId: '3-1-introduction' },
  { id: 'math3-3m-2', text: 'Construct a 3 × 4 matrix whose elements are given by aᵢⱼ = (1/2)|−3i + j|.', category: '3-mark', topicId: '3-1-introduction' },
  { id: 'math3-3m-3', text: 'A manufacturing firm produces three products A, B, C. Their sales in two cities are given below. Represent this data as a 2 × 3 matrix:\nCity I: 30 units of A, 25 units of B, 40 units of C\nCity II: 45 units of A, 35 units of B, 20 units of C', category: '3-mark', topicId: '3-1-introduction' },
  { id: 'math3-5m-1', text: '(a) Define a matrix with an example. (b) Explain rows, columns, and order of a matrix. (c) If a matrix has 24 elements, list all possible orders. (d) For the matrix A = [aᵢⱼ]₃ₓ₄, write elements a₁₃, a₂₁, a₃₄, a₂₃.', category: '5-mark', topicId: '3-1-introduction' },

  // 3.3 Types of Matrices
  { id: 'math3-1m-6', text: 'Define a row matrix. Give an example.', category: '1-mark', topicId: '3-3-types' },
  { id: 'math3-1m-7', text: 'Define a column matrix. Give an example.', category: '1-mark', topicId: '3-3-types' },
  { id: 'math3-1m-8', text: 'What is a square matrix? When is an m × n matrix called a square matrix?', category: '1-mark', topicId: '3-3-types' },
  { id: 'math3-1m-9', text: 'Define a diagonal matrix. Give an example of a 3 × 3 diagonal matrix.', category: '1-mark', topicId: '3-3-types' },
  { id: 'math3-1m-10', text: 'What is a scalar matrix? How is it related to a diagonal matrix?', category: '1-mark', topicId: '3-3-types' },
  { id: 'math3-1m-11', text: 'Define an identity matrix. Write I₂ and I₃.', category: '1-mark', topicId: '3-3-types' },
  { id: 'math3-1m-12', text: 'What is a zero matrix (null matrix)? Write O₂ₓ₃.', category: '1-mark', topicId: '3-3-types' },
  { id: 'math3-1m-13', text: 'What are the diagonal elements of a 3 × 3 square matrix A = [aᵢⱼ]?', category: '1-mark', topicId: '3-3-types' },
  { id: 'math3-2m-5', text: 'Differentiate between a scalar matrix and an identity matrix with examples.', category: '2-mark', topicId: '3-3-types' },
  { id: 'math3-2m-6', text: 'Give one example each of: (i) a 3 × 1 column matrix (ii) a 1 × 4 row matrix (iii) a 2 × 2 diagonal matrix.', category: '2-mark', topicId: '3-3-types' },
  { id: 'math3-2m-7', text: 'If A = [aᵢⱼ]ₘₓₙ is a square matrix, what can you say about m and n? Identify the diagonal elements if order is 3.', category: '2-mark', topicId: '3-3-types' },
  { id: 'math3-2m-8', text: 'Show that every identity matrix is a scalar matrix but the converse is not always true.', category: '2-mark', topicId: '3-3-types' },
  { id: 'math3-3m-4', text: 'Define and give one example of each: (a) Row matrix (b) Column matrix (c) Square matrix (d) Diagonal matrix (e) Scalar matrix (f) Identity matrix (g) Zero matrix.', category: '3-mark', topicId: '3-3-types' },
  { id: 'math3-3m-5', text: 'For the matrix A = [[2, 5, 19, −7], [35, −2, 5/2, 12], [√3, 1, −5, 17]], write: (i) The order of the matrix (ii) The number of elements (iii) The elements a₁₃, a₂₁, a₃₃, a₂₄.', category: '3-mark', topicId: '3-3-types' },

  // 3.3.1 Equality of Matrices
  { id: 'math3-1m-14', text: 'When are two matrices said to be equal?', category: '1-mark', topicId: '3-3-1-equality' },
  { id: 'math3-1m-15', text: 'Can [[2, 3], [0, 1]] and [[3, 2], [0, 1]] be equal matrices? Why?', category: '1-mark', topicId: '3-3-1-equality' },
  { id: 'math3-2m-9', text: 'If [[x, y], [z, a]] = [[−1.5, 0], [2, √6]], find the values of x, y, z, and a.', category: '2-mark', topicId: '3-3-1-equality' },
  { id: 'math3-2m-10', text: 'Find the values of x and y if 2[[x, 5], [7, y−3]] + [[3, −4], [1, 2]] = [[7, 6], [15, 14]].', category: '2-mark', topicId: '3-3-1-equality' },
  { id: 'math3-3m-6', text: 'If [[x+3, z+4, 2y−7], [−6, a−1, 0], [b−3, −21, 0]] = [[0, 6, 3y−2], [−6, −3, 2c+2], [2b+4, −21, 0]], find the values of a, b, c, x, y and z.', category: '3-mark', topicId: '3-3-1-equality' },
  { id: 'math3-3m-7', text: 'Find the values of a, b, c and d from the equation: [[2a+b, a−2b], [5c−d, 4c+3d]] = [[4, −3], [11, 24]].', category: '3-mark', topicId: '3-3-1-equality' },

  // 3.4 Operations on Matrices (Addition, Scalar Multiplication)
  { id: 'math3-1m-16', text: 'When is the addition of two matrices defined?', category: '1-mark', topicId: '3-4-operations' },
  { id: 'math3-1m-17', text: 'If A and B are matrices of order 2 × 3, what is the order of A + B?', category: '1-mark', topicId: '3-4-operations' },
  { id: 'math3-1m-18', text: 'If A = [[1, 2], [3, 4]], find 3A.', category: '1-mark', topicId: '3-4-operations' },
  { id: 'math3-1m-19', text: 'What is the negative of a matrix? Define −A in terms of A.', category: '1-mark', topicId: '3-4-operations' },
  { id: 'math3-1m-20', text: 'State the commutative law for matrix addition.', category: '1-mark', topicId: '3-4-operations' },
  { id: 'math3-1m-21', text: 'What is the additive identity for matrices?', category: '1-mark', topicId: '3-4-operations' },
  { id: 'math3-1m-22', text: 'What is the additive inverse of a matrix A?', category: '1-mark', topicId: '3-4-operations' },
  { id: 'math3-2m-11', text: 'If A = [[√3, 1, −1], [2, 3, 0]] and B = [[2, √5, 1], [−2, 3, 1/2]], find A + B.', category: '2-mark', topicId: '3-4-operations' },
  { id: 'math3-2m-12', text: 'Compute: [[a, b], [−b, a]] + [[a, b], [b, a]].', category: '2-mark', topicId: '3-4-operations' },
  { id: 'math3-2m-13', text: 'If A = [[1, 2, 3], [2, 3, 1]] and B = [[3, −1, 3], [−1, 0, 2]], find 2A − B.', category: '2-mark', topicId: '3-4-operations' },
  { id: 'math3-2m-14', text: 'If [[x, 5], [7, y−3]] + [[3, −4], [1, 2]] = [[7, 6], [15, 14]], find the values of x and y.', category: '2-mark', topicId: '3-4-operations' },
  { id: 'math3-2m-15', text: 'State and verify the associative law of matrix addition with suitable example.', category: '2-mark', topicId: '3-4-operations' },
  { id: 'math3-2m-16', text: 'Verify that k(A + B) = kA + kB for k = 2, A = [[1, 2], [3, 4]] and B = [[0, 1], [2, 1]].', category: '2-mark', topicId: '3-4-operations' },
  { id: 'math3-3m-8', text: 'If A = [[8, 0], [4, −2], [3, 6]] and B = [[2, −2], [4, 2], [−5, 1]], find the matrix X such that 2A + 3X = 5B.', category: '3-mark', topicId: '3-4-operations' },
  { id: 'math3-3m-9', text: 'Find X and Y if X + Y = [[5, 2], [0, 9]] and X − Y = [[3, 6], [0, −1]].', category: '3-mark', topicId: '3-4-operations' },
  { id: 'math3-3m-10', text: 'Find X and Y if 2X + 3Y = [[2, 3], [4, 0]] and 3X + 2Y = [[2, −2], [−1, 5]].', category: '3-mark', topicId: '3-4-operations' },
  { id: 'math3-3m-11', text: 'State all properties of matrix addition and scalar multiplication of matrices.', category: '3-mark', topicId: '3-4-operations' },

  // 3.4.5 Multiplication of Matrices
  { id: 'math3-1m-23', text: 'When is the product AB of two matrices A and B defined?', category: '1-mark', topicId: '3-4-5-multiplication' },
  { id: 'math3-1m-24', text: 'If A is a 2 × 3 matrix and B is a 3 × 4 matrix, what is the order of AB?', category: '1-mark', topicId: '3-4-5-multiplication' },
  { id: 'math3-1m-25', text: 'Is matrix multiplication commutative? Justify.', category: '1-mark', topicId: '3-4-5-multiplication' },
  { id: 'math3-2m-17', text: 'If A = [[6, 9], [2, 3]] and B = [[2, 6, 0], [7, 9, 8]], find AB.', category: '2-mark', topicId: '3-4-5-multiplication' },
  { id: 'math3-2m-18', text: 'If A = [[0, −1], [0, 2]] and B = [[3, 5], [0, 0]], find AB. Is AB = O implies A = O or B = O?', category: '2-mark', topicId: '3-4-5-multiplication' },
  { id: 'math3-2m-19', text: 'If A = [[1, 0], [0, −1]] and B = [[0, 1], [1, 0]], find AB and BA. Are they equal?', category: '2-mark', topicId: '3-4-5-multiplication' },
  { id: 'math3-3m-12', text: 'If A = [[1, −2, 3], [−4, 2, 5]] and B = [[2, 3], [4, 5], [2, 1]], find AB and BA. Show that AB ≠ BA.', category: '3-mark', topicId: '3-4-5-multiplication' },
  { id: 'math3-3m-13', text: 'Find AB if A = [[1, −2], [2, 3]] and B = [[1, 2, 3], [2, 3, 1]]. Can you find BA? Why or why not?', category: '3-mark', topicId: '3-4-5-multiplication' },
  { id: 'math3-3m-14', text: 'Compute the indicated products: [[2, 3, 4], [3, 4, 5], [4, 5, 6]] × [[1, −3, 5], [0, 2, 4], [3, 0, 5]].', category: '3-mark', topicId: '3-4-5-multiplication' },
  { id: 'math3-5m-2', text: 'If A = [[1, 1, −1], [2, 0, 3], [3, −1, 2]], B = [[1, 3], [0, 2], [−1, 4]], C = [[1, 2, 3, −4], [2, 0, −2, 1]], find A(BC), (AB)C and show that (AB)C = A(BC).', category: '5-mark', topicId: '3-4-5-multiplication' },
  { id: 'math3-5m-3', text: 'If A = [[0, 6, 7], [−6, 0, 8], [7, −8, 0]], B = [[0, 1, 1], [1, 0, 2], [1, 2, 0]], C = [[2], [−2], [3]], calculate AC, BC and (A + B)C. Verify that (A + B)C = AC + BC.', category: '5-mark', topicId: '3-4-5-multiplication' },
  { id: 'math3-5m-4', text: 'If A = [[1, 2, 3], [3, −2, 1], [4, 2, 1]], then show that A³ − 23A − 40I = O.', category: '5-mark', topicId: '3-4-5-multiplication' },
  { id: 'math3-case-1', text: 'Case Study: In a legislative assembly election, a political group hired a public relations firm to promote its candidate in three ways: telephone, house calls, and letters. The cost per contact (in paise) is given as: Telephone = 40, House call = 100, Letter = 50. The number of contacts made in two cities X and Y is: City X: 1000 telephone, 500 house calls, 5000 letters; City Y: 3000 telephone, 1000 house calls, 10000 letters. Find the total amount spent by the group in the two cities using matrix multiplication.', category: 'case-study', topicId: '3-4-5-multiplication' },
  { id: 'math3-case-2', text: 'Case Study: Two farmers Ramkishan and Gurcharan Singh cultivate three varieties of rice: Basmati, Permal and Naura. Their September sales (in ₹) are: Ramkishan: 10000 (Basmati), 20000 (Permal), 30000 (Naura); Gurcharan: 50000, 30000, 10000. October sales: Ramkishan: 5000, 10000, 6000; Gurcharan: 20000, 10000, 10000. Find (a) combined sales in Sept and Oct (b) decrease in sales (c) if 2% profit, compute profit for each farmer and variety in October.', category: 'case-study', topicId: '3-4-5-multiplication' },

  // 3.4.6 Properties of Matrix Multiplication
  { id: 'math3-1m-26', text: 'State the associative law for matrix multiplication.', category: '1-mark', topicId: '3-4-6-properties' },
  { id: 'math3-1m-27', text: 'What is the multiplicative identity for square matrices of order n?', category: '1-mark', topicId: '3-4-6-properties' },
  { id: 'math3-1m-28', text: 'If AB = O, does it mean A = O or B = O? Justify.', category: '1-mark', topicId: '3-4-6-properties' },
  { id: 'math3-2m-20', text: 'State the distributive laws for matrix multiplication.', category: '2-mark', topicId: '3-4-6-properties' },
  { id: 'math3-2m-21', text: 'Show that for diagonal matrices of the same order, multiplication is commutative.', category: '2-mark', topicId: '3-4-6-properties' },
  { id: 'math3-2m-22', text: 'If A = [[3, −2], [4, −2]] and I = [[1, 0], [0, 1]], find k so that A² = kA − 2I.', category: '2-mark', topicId: '3-4-6-properties' },
  { id: 'math3-3m-15', text: 'Verify that A(B + C) = AB + AC for matrices A = [[1, 2], [3, 4]], B = [[1, 0], [0, 1]], C = [[1, 1], [1, 1]].', category: '3-mark', topicId: '3-4-6-properties' },
  { id: 'math3-3m-16', text: 'If A = [[3, 1], [−1, 2]], show that A² − 5A + 7I = O.', category: '3-mark', topicId: '3-4-6-properties' },
  { id: 'math3-5m-5', text: 'If A = [[1, 0, 2], [0, 2, 1], [2, 0, 3]], prove that A³ − 6A² + 7A + 2I = O.', category: '5-mark', topicId: '3-4-6-properties' },
  { id: 'math3-5m-6', text: 'If A = [[2, 0, 1], [2, 1, 3], [1, −1, 0]], find A² − 5A + 6I.', category: '5-mark', topicId: '3-4-6-properties' },

  // 3.5 Transpose of a Matrix
  { id: 'math3-1m-29', text: 'Define the transpose of a matrix. How is it denoted?', category: '1-mark', topicId: '3-5-transpose' },
  { id: 'math3-1m-30', text: 'If A is a 3 × 4 matrix, what is the order of A′?', category: '1-mark', topicId: '3-5-transpose' },
  { id: 'math3-1m-31', text: 'Find the transpose of [[5], [1/2], [−1]].', category: '1-mark', topicId: '3-5-transpose' },
  { id: 'math3-1m-32', text: 'State the property (A′)′ = ?', category: '1-mark', topicId: '3-5-transpose' },
  { id: 'math3-1m-33', text: 'State the property (kA)′ = ?', category: '1-mark', topicId: '3-5-transpose' },
  { id: 'math3-1m-34', text: 'State the property (A + B)′ = ?', category: '1-mark', topicId: '3-5-transpose' },
  { id: 'math3-1m-35', text: 'State the property (AB)′ = ?', category: '1-mark', topicId: '3-5-transpose' },
  { id: 'math3-2m-23', text: 'Find the transpose of the matrix [[−1, 5, 6], [√3, 5, 6], [2, 3, −1]].', category: '2-mark', topicId: '3-5-transpose' },
  { id: 'math3-2m-24', text: 'If A = [[1, −1], [2, 3]], verify that (A′)′ = A.', category: '2-mark', topicId: '3-5-transpose' },
  { id: 'math3-2m-25', text: 'If A = [[3, √3, 2], [4, 2, 0]] and B = [[2, −1, 2], [1, 2, 4]], verify that (A + B)′ = A′ + B′.', category: '2-mark', topicId: '3-5-transpose' },
  { id: 'math3-2m-26', text: 'If A′ = [[−2, 3], [1, 2]] and B = [[−1, 0], [1, 2]], find (A + 2B)′.', category: '2-mark', topicId: '3-5-transpose' },
  { id: 'math3-3m-17', text: 'If A = [[−1, 2, 3], [5, 7, 9], [−2, 1, 1]] and B = [[−4, 1, −5], [1, 2, 0], [1, 3, 1]], verify that (A + B)′ = A′ + B′ and (A − B)′ = A′ − B′.', category: '3-mark', topicId: '3-5-transpose' },
  { id: 'math3-3m-18', text: 'For the matrices A = [[1], [−4], [3]] and B = [−1, 2, 1], verify that (AB)′ = B′A′.', category: '3-mark', topicId: '3-5-transpose' },
  { id: 'math3-3m-19', text: 'If A = [[−2], [4], [5]] and B = [1, 3, −6], verify that (AB)′ = B′A′.', category: '3-mark', topicId: '3-5-transpose' },

  // 3.6 Symmetric and Skew Symmetric Matrices
  { id: 'math3-1m-36', text: 'Define a symmetric matrix. Give an example.', category: '1-mark', topicId: '3-6-symmetric' },
  { id: 'math3-1m-37', text: 'Define a skew symmetric matrix. Give an example.', category: '1-mark', topicId: '3-6-symmetric' },
  { id: 'math3-1m-38', text: 'What are the diagonal elements of a skew symmetric matrix? Why?', category: '1-mark', topicId: '3-6-symmetric' },
  { id: 'math3-1m-39', text: 'If A′ = A, what type of matrix is A?', category: '1-mark', topicId: '3-6-symmetric' },
  { id: 'math3-1m-40', text: 'If A′ = −A, what type of matrix is A?', category: '1-mark', topicId: '3-6-symmetric' },
  { id: 'math3-2m-27', text: 'Show that the matrix [[1, −1, 5], [−1, 2, 1], [5, 1, 3]] is a symmetric matrix.', category: '2-mark', topicId: '3-6-symmetric' },
  { id: 'math3-2m-28', text: 'Show that the matrix [[0, 1, −1], [−1, 0, 1], [1, −1, 0]] is a skew symmetric matrix.', category: '2-mark', topicId: '3-6-symmetric' },
  { id: 'math3-2m-29', text: 'For the matrix A = [[1, 5], [6, 7]], verify that (A + A′) is symmetric and (A − A′) is skew symmetric.', category: '2-mark', topicId: '3-6-symmetric' },
  { id: 'math3-3m-20', text: 'Prove that for any square matrix A with real entries, A + A′ is a symmetric matrix and A − A′ is a skew symmetric matrix.', category: '3-mark', topicId: '3-6-symmetric' },
  { id: 'math3-3m-21', text: 'Find (1/2)(A + A′) and (1/2)(A − A′) when A = [[0, a, b], [−a, 0, c], [−b, −c, 0]].', category: '3-mark', topicId: '3-6-symmetric' },
  { id: 'math3-3m-22', text: 'Express the matrix [[3, 5], [1, −1]] as the sum of a symmetric and a skew symmetric matrix.', category: '3-mark', topicId: '3-6-symmetric' },
  { id: 'math3-3m-23', text: 'Express the matrix [[1, 5], [−1, 2]] as the sum of a symmetric and a skew symmetric matrix.', category: '3-mark', topicId: '3-6-symmetric' },
  { id: 'math3-5m-7', text: 'Prove that any square matrix can be expressed as the sum of a symmetric and a skew symmetric matrix. Express B = [[2, −2, −4], [−1, 3, 4], [1, −2, −3]] as the sum of a symmetric and a skew symmetric matrix.', category: '5-mark', topicId: '3-6-symmetric' },
  { id: 'math3-5m-8', text: 'Express the matrix [[6, −2, 2], [−2, 3, −1], [2, −1, 3]] as the sum of a symmetric and a skew symmetric matrix.', category: '5-mark', topicId: '3-6-symmetric' },
  { id: 'math3-5m-9', text: 'Express the matrix [[3, 3, −1], [−2, −2, 1], [−4, −5, 2]] as the sum of a symmetric and a skew symmetric matrix.', category: '5-mark', topicId: '3-6-symmetric' },
  { id: 'math3-5m-10', text: 'If A and B are symmetric matrices of the same order, prove that AB is symmetric if and only if AB = BA.', category: '5-mark', topicId: '3-6-symmetric' },
  { id: 'math3-5m-11', text: 'If A and B are symmetric matrices, prove that AB − BA is a skew symmetric matrix.', category: '5-mark', topicId: '3-6-symmetric' },

  // 3.7 Invertible Matrices
  { id: 'math3-1m-41', text: 'When is a square matrix A said to be invertible?', category: '1-mark', topicId: '3-7-invertible' },
  { id: 'math3-1m-42', text: 'What is the inverse of a matrix? How is it denoted?', category: '1-mark', topicId: '3-7-invertible' },
  { id: 'math3-1m-43', text: 'State the property (AB)⁻¹ = ?', category: '1-mark', topicId: '3-7-invertible' },
  { id: 'math3-1m-44', text: 'If A is invertible, is A⁻¹ unique? Justify.', category: '1-mark', topicId: '3-7-invertible' },
  { id: 'math3-2m-30', text: 'If A = [[2, 3], [1, 2]], show that A⁻¹ = [[2, −3], [−1, 2]] by verifying AA⁻¹ = I.', category: '2-mark', topicId: '3-7-invertible' },
  { id: 'math3-2m-31', text: 'If A = [[1, 2], [2, 1]], find A⁻¹ and verify that AA⁻¹ = I.', category: '2-mark', topicId: '3-7-invertible' },
  { id: 'math3-3m-24', text: 'If A = [[1, 2, 3], [0, 1, 4], [5, 6, 0]], verify that (A⁻¹)⁻¹ = A (given A⁻¹).', category: '3-mark', topicId: '3-7-invertible' },

  // MCQs
  { id: 'math3-mcq-1', text: 'If A, B are square matrices of the same order and AB = A and BA = B, then:\n(A) A² = A and B² = B\n(B) A² = A and B² ≠ B\n(C) A² ≠ A and B² = B\n(D) A² ≠ A and B² ≠ B', category: '1-mark', topicId: '3-4-5-multiplication' },
  { id: 'math3-mcq-2', text: 'If a matrix has 13 elements, what are possible orders?\n(A) 13 × 1, 1 × 13\n(B) 13 × 1, 1 × 13, 13 × 13\n(C) 1 × 1\n(D) 13 × 13 only', category: '1-mark', topicId: '3-1-introduction' },
  { id: 'math3-mcq-3', text: 'If A and B are two matrices of the order 3 × m and 3 × n, respectively, and m = n, then the order of matrix (5A − 2B) is:\n(A) m × 3\n(B) 3 × 3\n(C) m × n\n(D) 3 × n', category: '1-mark', topicId: '3-4-operations' },
  { id: 'math3-mcq-4', text: 'If A = [[0, 1], [1, 0]], then A² equals:\n(A) [[0, 1], [1, 0]]\n(B) [[1, 0], [1, 0]]\n(C) [[0, 1], [0, 1]]\n(D) [[1, 0], [0, 1]]', category: '1-mark', topicId: '3-4-5-multiplication' },
  { id: 'math3-mcq-5', text: 'If A is a square matrix such that A² = I, then (A − I)³ + (A + I)³ − 7A is equal to:\n(A) A\n(B) I − A\n(C) I + A\n(D) 3A', category: '1-mark', topicId: '3-4-6-properties' },
  { id: 'math3-mcq-6', text: 'If A is a skew symmetric matrix, then A² is:\n(A) Skew symmetric\n(B) Symmetric\n(C) Neither symmetric nor skew symmetric\n(D) Cannot be determined', category: '1-mark', topicId: '3-6-symmetric' },
  { id: 'math3-mcq-7', text: 'If A = [[cosα, sinα], [−sinα, cosα]], then A + A′ = I, if the value of α is:\n(A) π/6\n(B) π/3\n(C) π\n(D) 3π/2', category: '1-mark', topicId: '3-5-transpose' },
  { id: 'math3-mcq-8', text: 'Matrices A and B are inverse of each other only when:\n(A) AB = BA\n(B) AB = BA = 0\n(C) AB = 0, BA = I\n(D) AB = BA = I', category: '1-mark', topicId: '3-7-invertible' },

  // Assertion-Reason
  { id: 'math3-ar-1', text: 'Assertion (A): Matrix multiplication is not commutative in general.\nReason (R): For matrices A and B, AB may not equal BA even when both products exist.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) Both A and R are false', category: 'assertion-reason', topicId: '3-4-5-multiplication' },
  { id: 'math3-ar-2', text: 'Assertion (A): The diagonal elements of a skew symmetric matrix are all zero.\nReason (R): For a skew symmetric matrix A, aᵢᵢ = −aᵢᵢ implies aᵢᵢ = 0.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) Both A and R are false', category: 'assertion-reason', topicId: '3-6-symmetric' },
  { id: 'math3-ar-3', text: 'Assertion (A): If AB = O, then either A = O or B = O.\nReason (R): The product of two non-zero matrices can be a zero matrix.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true', category: 'assertion-reason', topicId: '3-4-6-properties' },

  // Case Study - Cryptography
  { id: 'math3-case-3', text: 'Case Study: Cryptography and Encoding\nMatrices are used in cryptography for encoding and decoding messages. In a simple Hill cipher, letters are assigned numbers (A=1, B=2, ..., Z=26, space=0). A message is converted to a matrix and multiplied by an encoding matrix to create the cipher. To decode, the inverse of the encoding matrix is used.\n\nConsider an encoding matrix E = [[1, 2], [3, 5]]. The encoded message matrix C is obtained as C = E × M, where M is the message matrix. To decode, we compute M = E⁻¹ × C. For this encoding matrix E, E⁻¹ = [[−5, 2], [3, −1]].\n\n(i) Verify that E × E⁻¹ = I for the given encoding matrix E = [[1, 2], [3, 5]] and its inverse.\n(ii) If the message matrix M = [[8], [9]] (representing \'HI\'), find the encoded matrix C = E × M.\n(iii) Given an encoded matrix C = [[13], [34]], decode the message using E⁻¹.\n(iv) Why is it important that the encoding matrix be invertible for this cryptographic system to work?', category: 'case-study', topicId: '3-7-invertible' },

  // HOTS
  { id: 'math3-hots-1', text: 'If A = [[cosθ, sinθ], [−sinθ, cosθ]], prove that Aⁿ = [[cosnθ, sinnθ], [−sinnθ, cosnθ]] for all positive integers n, using mathematical induction.', category: 'hots', topicId: '3-4-5-multiplication' },
  { id: 'math3-hots-2', text: 'Show that the matrix B′AB is symmetric or skew symmetric according as A is symmetric or skew symmetric.', category: 'hots', topicId: '3-6-symmetric' },
  { id: 'math3-hots-3', text: 'Find the values of x, y, z if the matrix A = [[0, 2y, z], [x, y, −z], [x, −y, z]] satisfies A′A = I.', category: 'hots', topicId: '3-5-transpose' },
  { id: 'math3-hots-4', text: 'For what values of x: [1, 2, 1] × [[1, 2, 0], [2, 0, 1], [1, 0, 2]] × [[0], [2], [x]] = O?', category: 'hots', topicId: '3-4-5-multiplication' },
  { id: 'math3-hots-5', text: 'If A = [[0, −tan(α/2)], [tan(α/2), 0]] and I is the identity matrix of order 2, show that I + A = (I − A)[[cosα, −sinα], [sinα, cosα]].', category: 'hots', topicId: '3-4-5-multiplication' },
  { id: 'math3-hots-6', text: 'Let A = [[2, −1], [3, 4]], B = [[5, 2], [7, 4]], C = [[2, 5], [3, 8]]. Find matrix D such that CD − AB = O.', category: 'hots', topicId: '3-4-5-multiplication' },
  { id: 'math3-hots-7', text: 'Find the matrix X so that X × [[1, 2, 3], [4, 5, 6]] = [[−7, −8, −9], [2, 4, 6]].', category: 'hots', topicId: '3-4-5-multiplication' },
  { id: 'math3-hots-8', text: 'If F(x) = [[cosx, −sinx, 0], [sinx, cosx, 0], [0, 0, 1]], show that F(x)·F(y) = F(x + y).', category: 'hots', topicId: '3-4-5-multiplication' },
  { id: 'math3-hots-9', text: 'Show that: [[5, −1], [6, 7]] × [[2, 1], [3, 4]] ≠ [[2, 1], [3, 4]] × [[5, −1], [6, 7]].', category: 'hots', topicId: '3-4-5-multiplication' },
  { id: 'math3-hots-10', text: 'Find x if [x, −5, −1] × [[1, 0, 2], [0, 2, 1], [2, 0, 3]] × [[x], [4], [1]] = O.', category: 'hots', topicId: '3-4-5-multiplication' },
  { id: 'math3-hots-11', text: 'A trust fund has ₹30,000 that must be invested in two different types of bonds. The first bond pays 5% interest per year, and the second bond pays 7% interest per year. Using matrix multiplication, determine how to divide ₹30,000 among the two types of bonds if the trust fund must obtain an annual total interest of (a) ₹1800 (b) ₹2000.', category: 'hots', topicId: '3-4-5-multiplication' },
  { id: 'math3-hots-12', text: 'The bookshop of a particular school has 10 dozen chemistry books, 8 dozen physics books, 10 dozen economics books. Their selling prices are ₹80, ₹60 and ₹40 each respectively. Find the total amount the bookshop will receive from selling all the books using matrix algebra.', category: 'hots', topicId: '3-4-5-multiplication' },
];

// Chapter 4: Determinants - Question Bank
const chapter4Questions: Question[] = [
  // 4.1-4.2 Introduction and Determinant
  { id: 'math4-1m-1', text: 'What is a determinant? Can it be associated with any matrix?', category: '1-mark', topicId: '4-1-introduction' },
  { id: 'math4-1m-2', text: 'Write the determinant of a matrix A = [a] of order 1.', category: '1-mark', topicId: '4-1-introduction' },
  { id: 'math4-1m-3', text: 'If A is a 2 × 2 matrix with |A| = 5, what is |−A|?', category: '1-mark', topicId: '4-1-introduction' },
  { id: 'math4-1m-4', text: 'For a 2 × 2 matrix, write the formula for finding its determinant.', category: '1-mark', topicId: '4-1-introduction' },
  { id: 'math4-1m-5', text: 'Evaluate the determinant: |2  4; −1  2|.', category: '1-mark', topicId: '4-1-introduction' },
  { id: 'math4-1m-6', text: 'If |A| denotes the determinant of matrix A, is |A| read as modulus of A? Clarify.', category: '1-mark', topicId: '4-1-introduction' },
  { id: 'math4-2m-1', text: 'Evaluate the determinant: |cos θ  −sin θ; sin θ  cos θ|.', category: '2-mark', topicId: '4-1-introduction' },
  { id: 'math4-2m-2', text: 'Evaluate: |x  x+1; x−1  x|.', category: '2-mark', topicId: '4-1-introduction' },
  { id: 'math4-2m-3', text: 'If A = |1  2; 4  2|, show that |2A| = 4|A|.', category: '2-mark', topicId: '4-1-introduction' },
  { id: 'math4-2m-4', text: 'Find values of x if |3  x; x  1| = |3  2; 4  1|.', category: '2-mark', topicId: '4-1-introduction' },
  { id: 'math4-2m-5', text: 'Evaluate the determinant |x²−x+1  x−1; x+1  x+1|.', category: '2-mark', topicId: '4-1-introduction' },
  { id: 'math4-2m-6', text: 'If |x  2; 18  x| = |6  2; 18  6|, find x.', category: '2-mark', topicId: '4-1-introduction' },
  { id: 'math4-2m-7', text: 'Find values of x if |2  4; 5  1| = |2x  4; 6  x|.', category: '2-mark', topicId: '4-1-introduction' },
  { id: 'math4-3m-1', text: 'If A = |1  0  1; 0  1  2; 0  0  4|, show that |3A| = 27|A|.', category: '3-mark', topicId: '4-1-introduction' },
  { id: 'math4-3m-2', text: 'Evaluate the determinant |3  −1  −2; 0  0  −1; 3  −5  0| by expanding along the row/column with maximum zeros.', category: '3-mark', topicId: '4-1-introduction' },
  { id: 'math4-3m-3', text: 'Evaluate: |0  sin α  −cos α; −sin α  0  sin β; cos α  −sin β  0|.', category: '3-mark', topicId: '4-1-introduction' },
  { id: 'math4-3m-4', text: 'Evaluate the determinant |3  −4  5; 1  1  −2; 2  3  1|.', category: '3-mark', topicId: '4-1-introduction' },
  { id: 'math4-3m-5', text: 'Evaluate |1  1  −2; 2  1  −3; 5  4  −9| and comment on its value.', category: '3-mark', topicId: '4-1-introduction' },
  { id: 'math4-5m-1', text: 'Show that expanding a determinant along any row or column gives the same value. Illustrate with a 3 × 3 determinant by expanding along R₁ and C₁.', category: '5-mark', topicId: '4-1-introduction' },
  { id: 'math4-5m-2', text: 'If A = kB, where A and B are square matrices of order n, prove that |A| = kⁿ|B|. Verify for n = 2 with specific matrices.', category: '5-mark', topicId: '4-1-introduction' },

  // 4.3 Area of a Triangle
  { id: 'math4-1m-7', text: 'Write the formula for finding the area of a triangle using determinants when vertices are (x₁, y₁), (x₂, y₂), and (x₃, y₃).', category: '1-mark', topicId: '4-3-area-triangle' },
  { id: 'math4-1m-8', text: 'Why do we take the absolute value of the determinant when finding area?', category: '1-mark', topicId: '4-3-area-triangle' },
  { id: 'math4-1m-9', text: 'What is the area of a triangle formed by three collinear points?', category: '1-mark', topicId: '4-3-area-triangle' },
  { id: 'math4-2m-8', text: 'Find the area of the triangle with vertices (1, 0), (6, 0), and (4, 3).', category: '2-mark', topicId: '4-3-area-triangle' },
  { id: 'math4-2m-9', text: 'Find the area of the triangle with vertices (2, 7), (1, 1), and (10, 8).', category: '2-mark', topicId: '4-3-area-triangle' },
  { id: 'math4-2m-10', text: 'Using determinants, show that the points A(a, b+c), B(b, c+a), C(c, a+b) are collinear.', category: '2-mark', topicId: '4-3-area-triangle' },
  { id: 'math4-3m-6', text: 'Find the area of the triangle whose vertices are (3, 8), (−4, 2), and (5, 1).', category: '3-mark', topicId: '4-3-area-triangle' },
  { id: 'math4-3m-7', text: 'Find values of k if the area of triangle with vertices (k, 0), (4, 0), (0, 2) is 4 sq. units.', category: '3-mark', topicId: '4-3-area-triangle' },
  { id: 'math4-3m-8', text: 'Find the equation of the line joining A(1, 3) and B(0, 0) using determinants.', category: '3-mark', topicId: '4-3-area-triangle' },
  { id: 'math4-3m-9', text: 'If the area of a triangle with vertices (2, −6), (5, 4), and (k, 4) is 35 sq. units, find k.', category: '3-mark', topicId: '4-3-area-triangle' },
  { id: 'math4-3m-10', text: 'Find the equation of line joining (3, 1) and (9, 3) using determinants.', category: '3-mark', topicId: '4-3-area-triangle' },
  { id: 'math4-3m-11', text: 'Find the area of the triangle with vertices (−2, −3), (3, 2), (−1, −8).', category: '3-mark', topicId: '4-3-area-triangle' },
  { id: 'math4-5m-3', text: 'Find the equation of the line joining A(1, 3) and B(0, 0) using determinants. Also find k if D(k, 0) is a point such that area of triangle ABD is 3 sq. units.', category: '5-mark', topicId: '4-3-area-triangle' },
  { id: 'math4-5m-4', text: 'Using determinants, derive the condition for three points (x₁, y₁), (x₂, y₂), (x₃, y₃) to be collinear.', category: '5-mark', topicId: '4-3-area-triangle' },

  // 4.4 Minors and Cofactors
  { id: 'math4-1m-10', text: 'Define minor of an element aᵢⱼ in a determinant.', category: '1-mark', topicId: '4-4-minors-cofactors' },
  { id: 'math4-1m-11', text: 'Define cofactor of an element aᵢⱼ. How is it related to the minor?', category: '1-mark', topicId: '4-4-minors-cofactors' },
  { id: 'math4-1m-12', text: 'What is the order of the minor of an element in a determinant of order n?', category: '1-mark', topicId: '4-4-minors-cofactors' },
  { id: 'math4-1m-13', text: 'Find the minor M₂₃ of element 6 in the determinant |1  2  3; 4  5  6; 7  8  9|.', category: '1-mark', topicId: '4-4-minors-cofactors' },
  { id: 'math4-2m-11', text: 'Find minors and cofactors of all elements of the determinant |2  −4; 0  3|.', category: '2-mark', topicId: '4-4-minors-cofactors' },
  { id: 'math4-2m-12', text: 'Find minors and cofactors of all elements of the determinant |a  c; b  d|.', category: '2-mark', topicId: '4-4-minors-cofactors' },
  { id: 'math4-2m-13', text: 'If Δ = |a₁₁  a₁₂  a₁₃; a₂₁  a₂₂  a₂₃; a₃₁  a₃₂  a₃₃| and Aᵢⱼ is the cofactor of aᵢⱼ, express Δ using elements of first row and their cofactors.', category: '2-mark', topicId: '4-4-minors-cofactors' },
  { id: 'math4-3m-12', text: 'Find minors and cofactors of elements of the first column of |1  0  0; 0  1  0; 0  0  1|.', category: '3-mark', topicId: '4-4-minors-cofactors' },
  { id: 'math4-3m-13', text: 'Find minors and cofactors of all elements of the determinant |1  0  4; 3  5  −1; 0  1  2|.', category: '3-mark', topicId: '4-4-minors-cofactors' },
  { id: 'math4-3m-14', text: 'Using cofactors of elements of second row, evaluate Δ = |5  3  8; 2  0  1; 1  2  3|.', category: '3-mark', topicId: '4-4-minors-cofactors' },
  { id: 'math4-3m-15', text: 'For the determinant |2  −1  −2; 0  2  −1; 3  −5  0|, find all minors and cofactors.', category: '3-mark', topicId: '4-4-minors-cofactors' },
  { id: 'math4-5m-5', text: 'Find minors and cofactors of all elements of |2  −3  5; 6  0  4; 1  5  −7| and verify that a₁₁A₃₁ + a₁₂A₃₂ + a₁₃A₃₃ = 0.', category: '5-mark', topicId: '4-4-minors-cofactors' },
  { id: 'math4-5m-6', text: 'Using cofactors of elements of third column, evaluate Δ = |1  x  yz; 1  y  zx; 1  z  xy|.', category: '5-mark', topicId: '4-4-minors-cofactors' },

  // 4.5 Adjoint and Inverse of a Matrix
  { id: 'math4-1m-14', text: 'Define adjoint of a square matrix A.', category: '1-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-1m-15', text: 'When is a square matrix A said to be singular?', category: '1-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-1m-16', text: 'When is a square matrix A said to be non-singular?', category: '1-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-1m-17', text: 'State the condition for existence of inverse of a matrix.', category: '1-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-1m-18', text: 'Write the formula for A⁻¹ in terms of adj A and |A|.', category: '1-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-2m-14', text: 'Find adj A for A = |2  3; 1  4|.', category: '2-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-2m-15', text: 'If A is a square matrix of order n, write the relation between A, adj A, and |A|.', category: '2-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-2m-16', text: 'Verify that (adj A)A = |A|I for A = |2  3; −4  −6|.', category: '2-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-2m-17', text: 'If A is an invertible matrix of order 2, what is det(A⁻¹)?', category: '2-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-3m-16', text: 'Find the inverse of the matrix A = |2  −2; 4  3|.', category: '3-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-3m-17', text: 'Find the inverse of A = |−1  5; −3  2|.', category: '3-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-3m-18', text: 'Verify A(adj A) = (adj A)A = |A|I for A = |1  −1  2; 3  0  −2; 1  0  3|.', category: '3-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-3m-19', text: 'If A and B are non-singular matrices of the same order, prove that AB and BA are also non-singular.', category: '3-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-3m-20', text: 'Find the inverse of |1  2  3; 0  2  4; 0  0  5|.', category: '3-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-5m-7', text: 'If A = |1  3  3; 1  4  3; 1  3  4|, verify that A(adj A) = |A|I. Also find A⁻¹.', category: '5-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-5m-8', text: 'If A = |2  3; 1  −4| and B = |1  −2; −1  3|, verify that (AB)⁻¹ = B⁻¹A⁻¹.', category: '5-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-5m-9', text: 'Show that A = |2  3; 1  2| satisfies A² − 4A + I = O. Hence find A⁻¹.', category: '5-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-5m-10', text: 'If A = |3  1; −1  2|, show that A² − 5A + 7I = O. Hence find A⁻¹.', category: '5-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-5m-11', text: 'For A = |3  2; 1  1|, find a and b such that A² + aA + bI = O. Hence find A⁻¹.', category: '5-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-5m-12', text: 'Find the inverse of |2  1  3; 4  −1  0; −7  2  1|.', category: '5-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-5m-13', text: 'Find the inverse of |1  −1  2; 0  2  −3; 3  −2  4|.', category: '5-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-5m-14', text: 'Verify (A⁻¹)⁻¹ = A for A = |1  2  1; 2  3  1; 1  1  5|.', category: '5-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-5m-15', text: 'Verify [adj A]⁻¹ = adj(A⁻¹) for A = |1  2  1; 2  3  1; 1  1  5|.', category: '5-mark', topicId: '4-5-adjoint-inverse' },

  // 4.6 Applications (System of Linear Equations)
  { id: 'math4-1m-19', text: 'What is meant by a consistent system of equations?', category: '1-mark', topicId: '4-6-applications' },
  { id: 'math4-1m-20', text: 'What is meant by an inconsistent system of equations?', category: '1-mark', topicId: '4-6-applications' },
  { id: 'math4-1m-21', text: 'If AX = B is a matrix equation, when does a unique solution exist?', category: '1-mark', topicId: '4-6-applications' },
  { id: 'math4-2m-18', text: 'Write the matrix equation form for the system: 2x + 5y = 1, 3x + 2y = 7.', category: '2-mark', topicId: '4-6-applications' },
  { id: 'math4-2m-19', text: 'For a system AX = B, if |A| = 0 and (adj A)B ≠ O, what can you say about the solution?', category: '2-mark', topicId: '4-6-applications' },
  { id: 'math4-2m-20', text: 'Examine the consistency of: x + 2y = 2, 2x + 3y = 3.', category: '2-mark', topicId: '4-6-applications' },
  { id: 'math4-3m-21', text: 'Solve using matrix method: 2x + 5y = 1, 3x + 2y = 7.', category: '3-mark', topicId: '4-6-applications' },
  { id: 'math4-3m-22', text: 'Examine the consistency of: x + 3y = 5, 2x + 6y = 8.', category: '3-mark', topicId: '4-6-applications' },
  { id: 'math4-3m-23', text: 'Examine the consistency of: 2x − y = 5, x + y = 4.', category: '3-mark', topicId: '4-6-applications' },
  { id: 'math4-3m-24', text: 'Solve using matrix method: 5x + 2y = 4, 7x + 3y = 5.', category: '3-mark', topicId: '4-6-applications' },
  { id: 'math4-3m-25', text: 'Solve: 4x − 3y = 3, 3x − 5y = 7 using matrix method.', category: '3-mark', topicId: '4-6-applications' },
  { id: 'math4-3m-26', text: 'Solve: 5x + 2y = 3, 3x + 2y = 5 using matrix method.', category: '3-mark', topicId: '4-6-applications' },
  { id: 'math4-5m-16', text: 'Solve by matrix method: 3x − 2y + 3z = 8, 2x + y − z = 1, 4x − 3y + 2z = 4.', category: '5-mark', topicId: '4-6-applications' },
  { id: 'math4-5m-17', text: 'Solve: 2x + 3y + 3z = 5, x − 2y + z = −4, 3x − y − 2z = 3 using matrix method.', category: '5-mark', topicId: '4-6-applications' },
  { id: 'math4-5m-18', text: 'Solve: x − y + 2z = 7, 3x + 4y − 5z = −5, 2x − y + 3z = 12 by matrix method.', category: '5-mark', topicId: '4-6-applications' },
  { id: 'math4-5m-19', text: 'Use the product |1  −1  2; 0  2  −3; 3  −2  4||−2  0  1; 9  2  −3; 6  1  −2| to solve: x − y + 2z = 1, 2y − 3z = 1, 3x − 2y + 4z = 2.', category: '5-mark', topicId: '4-6-applications' },
  { id: 'math4-5m-20', text: 'The sum of three numbers is 6. If we multiply the third number by 3 and add the second number to it, we get 11. By adding first and third numbers, we get double of the second number. Represent algebraically and find the numbers using matrix method.', category: '5-mark', topicId: '4-6-applications' },
  { id: 'math4-5m-21', text: 'Solve: 2x + y + z = 1, x − 2y − z = 3/2, 3y − 5z = 9 using matrix method.', category: '5-mark', topicId: '4-6-applications' },
  { id: 'math4-5m-22', text: 'Solve: x − y + z = 4, 2x + y − 3z = 0, x + y + z = 2 using matrix method.', category: '5-mark', topicId: '4-6-applications' },
  { id: 'math4-5m-23', text: 'Examine consistency: x + y + z = 1, 2x + 3y + 2z = 2, ax + ay + 2az = 4.', category: '5-mark', topicId: '4-6-applications' },
  { id: 'math4-5m-24', text: 'Examine consistency: 3x − y − 2z = 2, 2y − z = −1, 3x − 5y = 3.', category: '5-mark', topicId: '4-6-applications' },
  { id: 'math4-5m-25', text: 'Examine consistency: 5x − y + 4z = 5, 2x + 3y + 5z = 2, 5x − 2y + 6z = −1.', category: '5-mark', topicId: '4-6-applications' },

  // MCQs
  { id: 'math4-mcq-1', text: 'If A is a square matrix of order 3 such that |A| = 5, then |adj A| is:\n(A) 5\n(B) 25\n(C) 125\n(D) 625', category: '1-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-mcq-2', text: 'If A = |1  sin θ  1; −sin θ  1  sin θ; −1  −sin θ  1|, where 0 ≤ θ ≤ 2π, then:\n(A) Det(A) = 0\n(B) Det(A) ∈ (2, ∞)\n(C) Det(A) ∈ (2, 4)\n(D) Det(A) ∈ [2, 4]', category: '1-mark', topicId: '4-1-introduction' },
  { id: 'math4-mcq-3', text: 'If A is a 3 × 3 matrix such that |A| = 8, then |3A| equals:\n(A) 8\n(B) 24\n(C) 72\n(D) 216', category: '1-mark', topicId: '4-1-introduction' },
  { id: 'math4-mcq-4', text: 'The value of |cos 15°  sin 15°; sin 75°  cos 75°| is:\n(A) 0\n(B) 1\n(C) −1\n(D) 1/2', category: '1-mark', topicId: '4-1-introduction' },
  { id: 'math4-mcq-5', text: 'If A is an invertible matrix of order n, then |adj A| equals:\n(A) |A|ⁿ\n(B) |A|ⁿ⁻¹\n(C) |A|ⁿ⁺¹\n(D) |A|²', category: '1-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-mcq-6', text: 'If x, y, z are non-zero real numbers, then the inverse of A = |x  0  0; 0  y  0; 0  0  z| is:\n(A) |x⁻¹  0  0; 0  y⁻¹  0; 0  0  z⁻¹|\n(B) xyz|x⁻¹  0  0; 0  y⁻¹  0; 0  0  z⁻¹|\n(C) (1/xyz)|x  0  0; 0  y  0; 0  0  z|\n(D) (1/xyz)|1  0  0; 0  1  0; 0  0  1|', category: '1-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-mcq-7', text: 'If |2x  5; 8  x| = |6  5; 8  3|, then x equals:\n(A) 3\n(B) −3\n(C) ±3\n(D) 0', category: '1-mark', topicId: '4-1-introduction' },
  { id: 'math4-mcq-8', text: 'If A² = I, then A⁻¹ equals:\n(A) A²\n(B) A\n(C) O\n(D) 2A', category: '1-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-mcq-9', text: 'If A is a non-singular matrix of order 3 and |A| = −4, then |adj A| equals:\n(A) −4\n(B) 4\n(C) 16\n(D) −16', category: '1-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-mcq-10', text: 'For a square matrix A, A(adj A) = (adj A)A = ?\n(A) |A|²\n(B) |A|I\n(C) |A|³I\n(D) |A|', category: '1-mark', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-mcq-11', text: 'If Δ = |a₁₁  a₁₂  a₁₃; a₂₁  a₂₂  a₂₃; a₃₁  a₃₂  a₃₃| and Aᵢⱼ is the cofactor of aᵢⱼ, which equals Δ:\n(A) a₁₁A₃₁ + a₁₂A₃₂ + a₁₃A₃₃\n(B) a₁₁A₁₁ + a₁₂A₂₁ + a₁₃A₃₁\n(C) a₂₁A₁₁ + a₂₂A₁₂ + a₂₃A₁₃\n(D) a₁₁A₁₁ + a₂₁A₂₁ + a₃₁A₃₁', category: '1-mark', topicId: '4-4-minors-cofactors' },
  { id: 'math4-mcq-12', text: 'Let A be a non-singular square matrix of order 3 × 3. Then |adj A| equals:\n(A) |A|\n(B) |A|²\n(C) |A|³\n(D) 3|A|', category: '1-mark', topicId: '4-5-adjoint-inverse' },

  // Assertion-Reason
  { id: 'math4-ar-1', text: 'Assertion: Only square matrices have determinants.\nReason: A determinant is a number associated with a matrix.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true', category: 'assertion-reason', topicId: '4-1-introduction' },
  { id: 'math4-ar-2', text: 'Assertion: If all elements of a row (or column) of a determinant are zeros, then the value of the determinant is zero.\nReason: Expanding along that row/column gives products that are all zero.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true', category: 'assertion-reason', topicId: '4-1-introduction' },
  { id: 'math4-ar-3', text: 'Assertion: |AB| = |A||B| for square matrices A and B of the same order.\nReason: The determinant of a product equals the product of determinants.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true', category: 'assertion-reason', topicId: '4-1-introduction' },
  { id: 'math4-ar-4', text: 'Assertion: A singular matrix has no inverse.\nReason: A matrix A is singular if |A| = 0.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true', category: 'assertion-reason', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-ar-5', text: 'Assertion: adj(adj A) = |A|ⁿ⁻²A for a non-singular matrix A of order n.\nReason: |adj A| = |A|ⁿ⁻¹.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true', category: 'assertion-reason', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-ar-6', text: 'Assertion: If three points are collinear, the area of the triangle formed by them is zero.\nReason: The determinant used for area calculation becomes zero for collinear points.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true', category: 'assertion-reason', topicId: '4-3-area-triangle' },
  { id: 'math4-ar-7', text: 'Assertion: (AB)⁻¹ = B⁻¹A⁻¹ for invertible matrices A and B.\nReason: Matrix multiplication is not commutative in general.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true', category: 'assertion-reason', topicId: '4-5-adjoint-inverse' },

  // Case Study 1: Computer Graphics
  { id: 'math4-case-1', text: 'Case Study: Computer Graphics and Transformations\nIn computer graphics, transformations like rotation, scaling, and reflection are performed using matrices. A 2D point (x, y) can be represented as a column vector. When this vector is multiplied by a transformation matrix, we get the transformed point. For example, a rotation matrix R(θ) = |cos θ  −sin θ; sin θ  cos θ| rotates a point by angle θ about the origin. A scaling matrix S = |k₁  0; 0  k₂| scales coordinates by factors k₁ and k₂. The determinant of a transformation matrix tells us about area changes: if |T| = 1, areas are preserved; if |T| = 0, the transformation is singular (projects to a line or point).\n\n(i) Find the determinant of the rotation matrix R(θ) = |cos θ  −sin θ; sin θ  cos θ|. What does this tell you about areas under rotation?\n(ii) A scaling transformation has matrix S = |2  0; 0  3|. By what factor does this transformation change areas?\n(iii) Find the inverse of the rotation matrix R(θ). Verify that R(θ)·R⁻¹(θ) = I.\n(iv) A reflection matrix about the x-axis is M = |1  0; 0  −1|. Find |M| and M⁻¹. Is M = M⁻¹?', category: 'case-study', topicId: '4-5-adjoint-inverse' },

  // Case Study 2: Cryptography
  { id: 'math4-case-2', text: 'Case Study: Cryptography and Encoding Matrices\nThe Hill cipher is a cryptographic technique that uses matrix multiplication for encryption and the matrix inverse for decryption. Letters are converted to numbers (A=0, B=1, ..., Z=25) and grouped into vectors. An encoding matrix E encrypts the message, and the inverse matrix E⁻¹ decrypts it. For the cipher to work, E must be invertible. Consider the encoding matrix E = |1  2; 3  5|. To encode a pair of letters represented as vector P, we compute C = EP (mod 26). To decode, we use P = E⁻¹C (mod 26).\n\n(i) Find the determinant of E = |1  2; 3  5|. Is E invertible?\n(ii) Find the inverse of E = |1  2; 3  5| using adj E.\n(iii) If the message vector P = |7; 4| (representing \'HE\'), find the encoded vector C = EP.\n(iv) Verify that E⁻¹·E = I. Why is this property essential for decryption?', category: 'case-study', topicId: '4-5-adjoint-inverse' },

  // HOTS
  { id: 'math4-hots-1', text: 'Prove that if A is a square matrix such that A² = A, then (I + A)³ − 7A equals:\n(A) A\n(B) I − A\n(C) I\n(D) 3A\nVerify your answer.', category: 'hots', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-hots-2', text: 'If A = |1  a  2; 1  2  5; 2  1  1| is not invertible, find a.', category: 'hots', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-hots-3', text: 'Show that A = |2  −1  1; −1  2  −1; 1  −1  2| satisfies A³ − 6A² + 9A − 4I = O. Hence find A⁻¹.', category: 'hots', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-hots-4', text: 'For A = |1  1  1; 1  2  −3; 2  −1  3|, show that A³ − 6A² + 5A + 11I = O. Hence find A⁻¹.', category: 'hots', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-hots-5', text: 'If A = |−3  −1  1; 15  6  −5; 5  2  −2| and B = |1  2  −2; −1  3  0; 0  −2  1|, find (AB)⁻¹.', category: 'hots', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-hots-6', text: 'Prove that for any square matrix A, |A·(adj A)| = |A|ⁿ where n is the order of A.', category: 'hots', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-hots-7', text: 'If A = |cos α  sin α; −sin α  cos α|, prove that Aⁿ = |cos nα  sin nα; −sin nα  cos nα| by mathematical induction.', category: 'hots', topicId: '4-1-introduction' },
  { id: 'math4-hots-8', text: 'The cost of 4 kg onion, 3 kg wheat, and 2 kg rice is ₹60. The cost of 2 kg onion, 4 kg wheat, and 6 kg rice is ₹90. The cost of 6 kg onion, 2 kg wheat, and 3 kg rice is ₹70. Find the cost of each item per kg using matrix method.', category: 'hots', topicId: '4-6-applications' },
  { id: 'math4-hots-9', text: 'If A⁻¹ = |3  −1  1; −15  6  −5; 5  −2  2| and B = |1  2  −2; −1  3  0; 0  −2  1|, find (AB)⁻¹.', category: 'hots', topicId: '4-5-adjoint-inverse' },
  { id: 'math4-hots-10', text: 'Solve using Cramer\'s rule or matrix method: 2/x + 3/y + 10/z = 4, 4/x − 6/y + 5/z = 1, 6/x + 9/y − 20/z = 2.', category: 'hots', topicId: '4-6-applications' },
  { id: 'math4-hots-11', text: 'Prove that |1  a  a²; 1  b  b²; 1  c  c²| = (a−b)(b−c)(c−a).', category: 'hots', topicId: '4-1-introduction' },
  { id: 'math4-hots-12', text: 'Evaluate |x+y  y  x; y  x+y  x; y  x  x+y| by applying properties of determinants.', category: 'hots', topicId: '4-1-introduction' },
];

// Chapter 5: Continuity and Differentiability - Question Bank
const chapter5Questions: Question[] = [
  // 5.2 Continuity
  { id: 'math5-1m-1', text: 'Define continuity of a function f(x) at a point x = c using limits.', category: '1-mark', topicId: '5-2-continuity' },
  { id: 'math5-1m-2', text: 'State the condition under which a function f(x) is said to be discontinuous at x = c.', category: '1-mark', topicId: '5-2-continuity' },
  { id: 'math5-1m-3', text: 'Is the constant function f(x) = k continuous for all x ∈ ℝ? Give reason.', category: '1-mark', topicId: '5-2-continuity' },
  { id: 'math5-1m-4', text: 'Name the points of discontinuity, if any, of f(x) = [x], where [x] is the greatest integer function.', category: '1-mark', topicId: '5-2-continuity' },
  { id: 'math5-1m-5', text: 'If f(x) = |x|, is f continuous at x = 0? Justify without detailed proof.', category: '1-mark', topicId: '5-2-continuity' },
  { id: 'math5-1m-6', text: 'Write the definition of a function being continuous on a closed interval [a, b].', category: '1-mark', topicId: '5-2-continuity' },
  { id: 'math5-2m-1', text: 'Check the continuity of f(x) = 2x + 3 at x = 1. State each step clearly.', category: '2-mark', topicId: '5-2-continuity' },
  { id: 'math5-2m-2', text: 'Examine whether f(x) = x² is continuous at x = 0.', category: '2-mark', topicId: '5-2-continuity' },
  { id: 'math5-2m-3', text: 'Show that f(x) = |x| is continuous at x = 0 by computing left-hand and right-hand limits.', category: '2-mark', topicId: '5-2-continuity' },
  { id: 'math5-2m-4', text: 'Discuss the continuity of f(x) = 1/x, x ≠ 0 at every point in its domain.', category: '2-mark', topicId: '5-2-continuity' },
  { id: 'math5-2m-5', text: 'Find the point(s) of discontinuity of f(x) = { x + 2, if x ≤ 1 ; x − 2, if x > 1 }.', category: '2-mark', topicId: '5-2-continuity' },
  { id: 'math5-2m-6', text: 'State and apply Theorem: \'If f and g are continuous at c, then f + g is continuous at c.\'', category: '2-mark', topicId: '5-2-continuity' },
  { id: 'math5-3m-1', text: 'Show that the function f given by f(x) = { x³ + 3, x ≠ 0 ; 1, x = 0 } is not continuous at x = 0.', category: '3-mark', topicId: '5-2-continuity' },
  { id: 'math5-3m-2', text: 'Discuss the continuity of f(x) = { x + 2, x ≤ 1 ; x − 2, x > 1 } using left-hand and right-hand limits at x = 1. Identify the point of discontinuity and justify with a graph sketch.', category: '3-mark', topicId: '5-2-continuity' },
  { id: 'math5-3m-3', text: 'Find all points of discontinuity of f(x) = { x + 2, x < 1 ; 0, x = 1 ; x − 2, x > 1 } and justify.', category: '3-mark', topicId: '5-2-continuity' },
  { id: 'math5-3m-4', text: 'Prove that every polynomial function is continuous everywhere on ℝ.', category: '3-mark', topicId: '5-2-continuity' },
  { id: 'math5-3m-5', text: 'Prove that f(x) = sin x is continuous at every real number using the identity sin(c + h) = sin c cos h + cos c sin h.', category: '3-mark', topicId: '5-2-continuity' },
  { id: 'math5-3m-6', text: 'Prove that f(x) = tan x is continuous wherever it is defined, and state the points where it is not defined.', category: '3-mark', topicId: '5-2-continuity' },
  { id: 'math5-5m-1', text: 'Find all points of discontinuity of f(x) = { |x| + 3, x ≤ −3 ; −2x, −3 < x < 3 ; 6x + 2, x ≥ 3 }.', category: '5-mark', topicId: '5-2-continuity' },
  { id: 'math5-5m-2', text: 'Discuss the continuity of the greatest integer function f(x) = [x]. Prove that it is discontinuous at every integer using limits, and continuous at all non-integer points.', category: '5-mark', topicId: '5-2-continuity' },
  { id: 'math5-5m-3', text: 'Discuss the continuity of f(x) = { 2x, x < 0 ; 0, 0 ≤ x ≤ 1 ; 4x, x > 1 } at x = 0 and x = 1.', category: '5-mark', topicId: '5-2-continuity' },
  { id: 'math5-5m-4', text: 'Find the relationship between a and b so that f(x) = { ax + 1, x ≤ 3 ; bx + 3, x > 3 } is continuous at x = 3.', category: '5-mark', topicId: '5-2-continuity' },
  { id: 'math5-5m-5', text: 'For what value of λ is f(x) = { λ(x² − 2x), x ≤ 0 ; 4x + 1, x > 0 } continuous at x = 0? Is the function continuous at x = 1?', category: '5-mark', topicId: '5-2-continuity' },
  { id: 'math5-5m-6', text: 'Find values of a and b so that f(x) = { 5, x ≤ 2 ; ax + b, 2 < x < 10 ; 21, x ≥ 10 } is a continuous function.', category: '5-mark', topicId: '5-2-continuity' },

  // 5.3 Differentiability
  { id: 'math5-1m-7', text: 'Define differentiability of f(x) at a point c using the limit definition.', category: '1-mark', topicId: '5-3-differentiability' },
  { id: 'math5-1m-8', text: 'State the relationship between continuity and differentiability. Is the converse true?', category: '1-mark', topicId: '5-3-differentiability' },
  { id: 'math5-1m-9', text: 'Write the left-hand derivative and right-hand derivative formulae for f at c.', category: '1-mark', topicId: '5-3-differentiability' },
  { id: 'math5-1m-10', text: 'At which point is f(x) = |x| not differentiable? State why.', category: '1-mark', topicId: '5-3-differentiability' },
  { id: 'math5-1m-11', text: 'List the standard derivatives: d/dx(xⁿ), d/dx(sin x), d/dx(cos x), d/dx(tan x).', category: '1-mark', topicId: '5-3-differentiability' },
  { id: 'math5-2m-7', text: 'Prove that f(x) = |x − 1| is not differentiable at x = 1 by computing left-hand and right-hand limits of the derivative.', category: '2-mark', topicId: '5-3-differentiability' },
  { id: 'math5-2m-8', text: 'If f is differentiable at c, prove that f is also continuous at c.', category: '2-mark', topicId: '5-3-differentiability' },
  { id: 'math5-2m-9', text: 'Show that f(x) = [x] (greatest integer function) is not differentiable at x = 1 and x = 2 in (0, 3).', category: '2-mark', topicId: '5-3-differentiability' },
  { id: 'math5-2m-10', text: 'State algebra of derivatives: product rule, quotient rule, with examples.', category: '2-mark', topicId: '5-3-differentiability' },
  { id: 'math5-3m-7', text: 'State and prove: \'Every differentiable function is continuous.\' Also show with an example that the converse is not true.', category: '3-mark', topicId: '5-3-differentiability' },
  { id: 'math5-3m-8', text: 'Find the left-hand and right-hand derivatives of f(x) = |x²| at x = 0. Is f differentiable at x = 0?', category: '3-mark', topicId: '5-3-differentiability' },
  { id: 'math5-3m-9', text: 'Prove that f(x) = |x| is continuous at x = 0 but not differentiable at x = 0.', category: '3-mark', topicId: '5-3-differentiability' },

  // 5.3.1 Chain Rule
  { id: 'math5-1m-12', text: 'State the Chain Rule for differentiation of composite functions f = v ∘ u.', category: '1-mark', topicId: '5-3-1-chain-rule' },
  { id: 'math5-1m-13', text: 'If f(x) = sin(x²), identify the outer and inner functions.', category: '1-mark', topicId: '5-3-1-chain-rule' },
  { id: 'math5-1m-14', text: 'Differentiate sin(x² + 5) w.r.t. x. (1-step chain rule)', category: '1-mark', topicId: '5-3-1-chain-rule' },
  { id: 'math5-1m-15', text: 'Write d/dx [cos(sin x)].', category: '1-mark', topicId: '5-3-1-chain-rule' },
  { id: 'math5-2m-11', text: 'Differentiate the following w.r.t. x using chain rule: (i) sin(ax + b)   (ii) cos(x³)', category: '2-mark', topicId: '5-3-1-chain-rule' },
  { id: 'math5-2m-12', text: 'Differentiate f(x) = sec(tan(√x)) w.r.t. x. Show all steps.', category: '2-mark', topicId: '5-3-1-chain-rule' },
  { id: 'math5-2m-13', text: 'Differentiate 2√(cot(x²)) w.r.t. x.', category: '2-mark', topicId: '5-3-1-chain-rule' },
  { id: 'math5-2m-14', text: 'Differentiate cos(√x) w.r.t. x.', category: '2-mark', topicId: '5-3-1-chain-rule' },
  { id: 'math5-3m-10', text: 'Differentiate f(x) = sin(ax + b) / cos(cx + d) w.r.t. x. Apply chain rule and quotient rule.', category: '3-mark', topicId: '5-3-1-chain-rule' },
  { id: 'math5-3m-11', text: 'Differentiate f(x) = cos(x³) · sin²(x⁵) w.r.t. x.', category: '3-mark', topicId: '5-3-1-chain-rule' },
  { id: 'math5-3m-12', text: 'Find the derivative of (2x + 1)¹⁰⁰ w.r.t. x using chain rule. Explain why direct expansion is impractical.', category: '3-mark', topicId: '5-3-1-chain-rule' },
  { id: 'math5-3m-13', text: 'Extend the chain rule to three composite functions f = (w ∘ u) ∘ v and use it to differentiate f(x) = sin(cos(x²)).', category: '3-mark', topicId: '5-3-1-chain-rule' },
  { id: 'math5-5m-7', text: 'Differentiate f(x) = |1 − x + |x|| for all x ∈ ℝ. Explain which composition of functions is used.', category: '5-mark', topicId: '5-3-1-chain-rule' },
  { id: 'math5-5m-8', text: 'If y = sin(x²), find dy/dx. Then find d²y/dx². Show all working using chain rule.', category: '5-mark', topicId: '5-3-1-chain-rule' },

  // 5.3.2 Implicit Differentiation
  { id: 'math5-1m-16', text: 'What is an implicit function? Give one example.', category: '1-mark', topicId: '5-3-2-implicit' },
  { id: 'math5-1m-17', text: 'Find dy/dx if x − y = π. (Use implicit differentiation.)', category: '1-mark', topicId: '5-3-2-implicit' },
  { id: 'math5-1m-18', text: 'If y + sin y = cos x, write the equation obtained by differentiating both sides w.r.t. x.', category: '1-mark', topicId: '5-3-2-implicit' },
  { id: 'math5-2m-15', text: 'Find dy/dx for 2x + 3y = sin y.', category: '2-mark', topicId: '5-3-2-implicit' },
  { id: 'math5-2m-16', text: 'Find dy/dx for ax + by² = cos y.', category: '2-mark', topicId: '5-3-2-implicit' },
  { id: 'math5-2m-17', text: 'Find dy/dx for x² + xy + y² = 100.', category: '2-mark', topicId: '5-3-2-implicit' },
  { id: 'math5-2m-18', text: 'Find dy/dx for x³ + x²y + xy² + y³ = 81.', category: '2-mark', topicId: '5-3-2-implicit' },
  { id: 'math5-3m-14', text: 'If y + sin y = cos x, find dy/dx and state the values of y for which the result is not valid.', category: '3-mark', topicId: '5-3-2-implicit' },
  { id: 'math5-3m-15', text: 'Find dy/dx for xy + y² = tan x + y.', category: '3-mark', topicId: '5-3-2-implicit' },
  { id: 'math5-3m-16', text: 'Find dy/dx for sin²y + cos xy = κ.', category: '3-mark', topicId: '5-3-2-implicit' },
  { id: 'math5-3m-17', text: 'Find dy/dx for sin²x + cos²y = 1.', category: '3-mark', topicId: '5-3-2-implicit' },
  { id: 'math5-5m-9', text: 'Find dy/dx for x³ + x²y + xy² + y³ = 81. Verify by substituting x = y = r on the curve.', category: '5-mark', topicId: '5-3-2-implicit' },
  { id: 'math5-5m-10', text: 'If y = sin⁻¹(2x / (1 + x²)), find dy/dx for |x| < 1. (Implicit/substitution method.)', category: '5-mark', topicId: '5-3-2-implicit' },

  // 5.3.3 Derivatives of Inverse Trigonometric Functions
  { id: 'math5-1m-19', text: 'Write the derivative of sin⁻¹x. State the domain of the derivative.', category: '1-mark', topicId: '5-3-3-inverse-trig' },
  { id: 'math5-1m-20', text: 'Write the derivative of cos⁻¹x. State the domain.', category: '1-mark', topicId: '5-3-3-inverse-trig' },
  { id: 'math5-1m-21', text: 'Write the derivative of tan⁻¹x. State the domain.', category: '1-mark', topicId: '5-3-3-inverse-trig' },
  { id: 'math5-1m-22', text: 'If y = sin⁻¹(2x / (1 + x²)), is dy/dx = 2/(1 + x²)? Verify using the formula.', category: '1-mark', topicId: '5-3-3-inverse-trig' },
  { id: 'math5-2m-19', text: 'Derive d/dx(sin⁻¹x) = 1/√(1 − x²) using the method of implicit differentiation. State the domain.', category: '2-mark', topicId: '5-3-3-inverse-trig' },
  { id: 'math5-2m-20', text: 'Find dy/dx for y = tan⁻¹((3x − x³)/(1 − 3x²)), −1/√3 < x < 1/√3.', category: '2-mark', topicId: '5-3-3-inverse-trig' },
  { id: 'math5-2m-21', text: 'Find dy/dx for y = cos⁻¹((1 − x²)/(1 + x²)), 0 < x < 1.', category: '2-mark', topicId: '5-3-3-inverse-trig' },
  { id: 'math5-2m-22', text: 'Find dy/dx for y = sin⁻¹((1 − x²)/(1 + x²)), 0 < x < 1.', category: '2-mark', topicId: '5-3-3-inverse-trig' },
  { id: 'math5-3m-18', text: 'Find dy/dx for y = sin⁻¹(2x/(1 + x²)). Identify the substitution to simplify.', category: '3-mark', topicId: '5-3-3-inverse-trig' },
  { id: 'math5-3m-19', text: 'Find dy/dx for y = cos⁻¹(2x/(1 + x²)), −1 < x < 1.', category: '3-mark', topicId: '5-3-3-inverse-trig' },
  { id: 'math5-3m-20', text: 'Find dy/dx for y = sin⁻¹(2x√(1 − x²)), −1/√2 < x < 1/√2.', category: '3-mark', topicId: '5-3-3-inverse-trig' },
  { id: 'math5-3m-21', text: 'Find dy/dx for y = sec⁻¹(1/(2x² − 1)), 0 < x < 1/√2.', category: '3-mark', topicId: '5-3-3-inverse-trig' },
  { id: 'math5-5m-11', text: 'Derive the derivatives of all three inverse trig functions — sin⁻¹x, cos⁻¹x, tan⁻¹x — from first principles using implicit differentiation. Present them in a table with domains.', category: '5-mark', topicId: '5-3-3-inverse-trig' },
  { id: 'math5-5m-12', text: 'Find dy/dx for y = tan⁻¹((3x − x³)/(1 − 3x²)) and show it simplifies to 3/(1 + x²) for |x| < 1/√3.', category: '5-mark', topicId: '5-3-3-inverse-trig' },

  // 5.4 Exponential and Logarithmic Functions
  { id: 'math5-1m-23', text: 'Define the exponential function y = bˣ for b > 1. State its domain and range.', category: '1-mark', topicId: '5-4-exp-log' },
  { id: 'math5-1m-24', text: 'Define logarithm of a to base b. Write the equivalent exponential form.', category: '1-mark', topicId: '5-4-exp-log' },
  { id: 'math5-1m-25', text: 'Write d/dx(eˣ) and d/dx(log x).', category: '1-mark', topicId: '5-4-exp-log' },
  { id: 'math5-1m-26', text: 'Is it true that x = e^(log x) for all real x? Justify.', category: '1-mark', topicId: '5-4-exp-log' },
  { id: 'math5-1m-27', text: 'What is the natural exponential function? Why is it called \'natural\'?', category: '1-mark', topicId: '5-4-exp-log' },
  { id: 'math5-2m-23', text: 'Prove the product rule of logarithms: log_b(pq) = log_b p + log_b q.', category: '2-mark', topicId: '5-4-exp-log' },
  { id: 'math5-2m-24', text: 'Prove the change of base rule: log_a p = log_b p / log_b a.', category: '2-mark', topicId: '5-4-exp-log' },
  { id: 'math5-2m-25', text: 'Differentiate the following w.r.t. x: (i) e⁻ˣ   (ii) sin(log x), x > 0', category: '2-mark', topicId: '5-4-exp-log' },
  { id: 'math5-2m-26', text: 'Differentiate cos⁻¹(eˣ) w.r.t. x.', category: '2-mark', topicId: '5-4-exp-log' },
  { id: 'math5-2m-27', text: 'Differentiate e^(cos x) w.r.t. x.', category: '2-mark', topicId: '5-4-exp-log' },
  { id: 'math5-3m-22', text: 'Differentiate the following w.r.t. x: (i) e^(sin⁻¹x)   (ii) e^(x³)   (iii) √(e^√x), x > 0', category: '3-mark', topicId: '5-4-exp-log' },
  { id: 'math5-3m-23', text: 'Differentiate sin(tan⁻¹(e⁻ˣ)) w.r.t. x.', category: '3-mark', topicId: '5-4-exp-log' },
  { id: 'math5-3m-24', text: 'Differentiate log(cos(eˣ)) w.r.t. x. State the domain.', category: '3-mark', topicId: '5-4-exp-log' },
  { id: 'math5-3m-25', text: 'Differentiate log(log x) for x > 1 w.r.t. x.', category: '3-mark', topicId: '5-4-exp-log' },
  { id: 'math5-3m-26', text: 'Differentiate (cos x)/log x for x > 0 w.r.t. x.', category: '3-mark', topicId: '5-4-exp-log' },
  { id: 'math5-3m-27', text: 'Differentiate eˣ + e^(x²) + ... + e^(x⁵) w.r.t. x.', category: '3-mark', topicId: '5-4-exp-log' },
  { id: 'math5-5m-13', text: 'Prove that the exponential function y = 10ˣ grows faster than any polynomial function yₙ = xⁿ. Illustrate with a numerical comparison for x = 10³, n = 100.', category: '5-mark', topicId: '5-4-exp-log' },
  { id: 'math5-5m-14', text: 'List and explain all key properties of the logarithmic function (domain, range, graph features, monotonicity). Sketch rough graphs of y = log₂x, y = logₑx, y = log₁₀x on the same axes and compare.', category: '5-mark', topicId: '5-4-exp-log' },
  { id: 'math5-5m-15', text: 'Differentiate cos(log x + eˣ) w.r.t. x for x > 0. Show all steps.', category: '5-mark', topicId: '5-4-exp-log' },

  // 5.5 Logarithmic Differentiation
  { id: 'math5-1m-28', text: 'When is logarithmic differentiation used? Give the general form of the function.', category: '1-mark', topicId: '5-5-log-diff' },
  { id: 'math5-1m-29', text: 'Write the key formula derived during logarithmic differentiation of y = [u(x)]^v(x).', category: '1-mark', topicId: '5-5-log-diff' },
  { id: 'math5-1m-30', text: 'Find d/dx(aˣ) where a is a positive constant. (Use log differentiation.)', category: '1-mark', topicId: '5-5-log-diff' },
  { id: 'math5-2m-28', text: 'Differentiate aˣ w.r.t. x, where a is a positive constant. Show both the logarithmic and exponential method.', category: '2-mark', topicId: '5-5-log-diff' },
  { id: 'math5-2m-29', text: 'Differentiate (log x)^(cos x) w.r.t. x.', category: '2-mark', topicId: '5-5-log-diff' },
  { id: 'math5-2m-30', text: 'Differentiate xˣ − 2^(sin x) w.r.t. x.', category: '2-mark', topicId: '5-5-log-diff' },
  { id: 'math5-3m-28', text: 'Differentiate x^(sin x), x > 0 w.r.t. x. Show all steps of logarithmic differentiation.', category: '3-mark', topicId: '5-5-log-diff' },
  { id: 'math5-3m-29', text: 'Differentiate (sin x)ˣ + sin⁻¹√x w.r.t. x.', category: '3-mark', topicId: '5-5-log-diff' },
  { id: 'math5-3m-30', text: 'Differentiate [(x − 1)(x − 2) / {(x − 3)(x − 4)(x − 5)}]^(1/2) w.r.t. x using logarithmic differentiation.', category: '3-mark', topicId: '5-5-log-diff' },
  { id: 'math5-3m-31', text: 'Differentiate (x + 3)² · (x + 4)³ · (x + 5)⁴ w.r.t. x using log differentiation.', category: '3-mark', topicId: '5-5-log-diff' },
  { id: 'math5-3m-32', text: 'Differentiate x^(sin x) + (sin x)^(cos x) w.r.t. x.', category: '3-mark', topicId: '5-5-log-diff' },
  { id: 'math5-5m-16', text: 'Find dy/dx if yˣ + xʸ + xˣ = a^b. [Hint: Put u = yˣ, v = xʸ, w = xˣ and differentiate each by log method.]', category: '5-mark', topicId: '5-5-log-diff' },
  { id: 'math5-5m-17', text: 'Find the derivative of f(x) = (1 + x)(1 + x²)(1 + x⁴)(1 + x⁸) using logarithmic differentiation, and hence find f′(1).', category: '5-mark', topicId: '5-5-log-diff' },
  { id: 'math5-5m-18', text: 'Differentiate (x² − 5x + 8)(x³ + 7x + 9) in THREE ways: (i) Product rule, (ii) Expanding, (iii) Logarithmic differentiation. Verify all give the same answer.', category: '5-mark', topicId: '5-5-log-diff' },
  { id: 'math5-5m-19', text: 'If u, v, w are functions of x, prove d/dx(uvw) = u′vw + uv′w + uvw′ using (i) repeated product rule, (ii) logarithmic differentiation.', category: '5-mark', topicId: '5-5-log-diff' },
  { id: 'math5-5m-20', text: 'Differentiate (x^(x cos x)) + (x² + 1)/(x² − 1) w.r.t. x.', category: '5-mark', topicId: '5-5-log-diff' },

  // 5.6 Parametric Forms
  { id: 'math5-1m-31', text: 'What is parametric form? Give an example of x and y expressed in terms of a parameter t.', category: '1-mark', topicId: '5-6-parametric' },
  { id: 'math5-1m-32', text: 'Write the formula for dy/dx when x = f(t) and y = g(t).', category: '1-mark', topicId: '5-6-parametric' },
  { id: 'math5-1m-33', text: 'If x = at², y = 2at, find dy/dx.', category: '1-mark', topicId: '5-6-parametric' },
  { id: 'math5-2m-31', text: 'Find dy/dx if x = a cos θ, y = a sin θ.', category: '2-mark', topicId: '5-6-parametric' },
  { id: 'math5-2m-32', text: 'Find dy/dx if x = a cos θ, y = b cos θ.', category: '2-mark', topicId: '5-6-parametric' },
  { id: 'math5-2m-33', text: 'Find dy/dx if x = sin t, y = cos 2t.', category: '2-mark', topicId: '5-6-parametric' },
  { id: 'math5-2m-34', text: 'Find dy/dx if x = 4t, y = 4/t.', category: '2-mark', topicId: '5-6-parametric' },
  { id: 'math5-2m-35', text: 'Find dy/dx if x = a(θ − sin θ), y = a(1 + cos θ).', category: '2-mark', topicId: '5-6-parametric' },
  { id: 'math5-3m-33', text: 'Find dy/dx if x = a(θ + sin θ), y = a(1 − cos θ). Express the answer in terms of θ.', category: '3-mark', topicId: '5-6-parametric' },
  { id: 'math5-3m-34', text: 'Find dy/dx for x^(2/3) + y^(2/3) = a^(2/3) using parametric form x = a cos³θ, y = a sin³θ.', category: '3-mark', topicId: '5-6-parametric' },
  { id: 'math5-3m-35', text: 'Find dy/dx if x = cos θ − cos 2θ, y = sin θ − sin 2θ.', category: '3-mark', topicId: '5-6-parametric' },
  { id: 'math5-3m-36', text: 'Find dy/dx if x = sin³t/√(cos 2t), y = cos³t/√(cos 2t).', category: '3-mark', topicId: '5-6-parametric' },
  { id: 'math5-3m-37', text: 'Find dy/dx if x = a(cos t + log tan(t/2)), y = a sin t.', category: '3-mark', topicId: '5-6-parametric' },
  { id: 'math5-5m-21', text: 'If x = √(a^(sin⁻¹t)) and y = √(a^(cos⁻¹t)), show that dy/dx = −y/x.', category: '5-mark', topicId: '5-6-parametric' },
  { id: 'math5-5m-22', text: 'Find dy/dx if x = a sec θ, y = b tan θ. Also find the slope of tangent at θ = π/4.', category: '5-mark', topicId: '5-6-parametric' },
  { id: 'math5-5m-23', text: 'For a positive constant a, find dy/dx where y = a^(t + 1/t) and x = (t + 1/t)^a.', category: '5-mark', topicId: '5-6-parametric' },
  { id: 'math5-5m-24', text: 'Differentiate sin²x w.r.t. e^(cos x) (differentiation of one function w.r.t. another).', category: '5-mark', topicId: '5-6-parametric' },

  // 5.7 Second Order Derivative
  { id: 'math5-1m-34', text: 'Define the second order derivative of y = f(x). Write its notation.', category: '1-mark', topicId: '5-7-second-order' },
  { id: 'math5-1m-35', text: 'If y = x³ + tan x, find d²y/dx².', category: '1-mark', topicId: '5-7-second-order' },
  { id: 'math5-1m-36', text: 'Write the second order derivative of y = eˣ.', category: '1-mark', topicId: '5-7-second-order' },
  { id: 'math5-1m-37', text: 'If y = log x, find y₂ (second derivative).', category: '1-mark', topicId: '5-7-second-order' },
  { id: 'math5-2m-36', text: 'Find d²y/dx² for: (i) y = x² + 3x + 2   (ii) y = x · cos x.', category: '2-mark', topicId: '5-7-second-order' },
  { id: 'math5-2m-37', text: 'Find d²y/dx² for y = log(log x), x > 1.', category: '2-mark', topicId: '5-7-second-order' },
  { id: 'math5-2m-38', text: 'Find d²y/dx² for y = sin(log x).', category: '2-mark', topicId: '5-7-second-order' },
  { id: 'math5-2m-39', text: 'Find d²y/dx² for y = e^(6x) cos 3x.', category: '2-mark', topicId: '5-7-second-order' },
  { id: 'math5-2m-40', text: 'Find d²y/dx² for y = tan⁻¹x.', category: '2-mark', topicId: '5-7-second-order' },
  { id: 'math5-3m-38', text: 'If y = A sin x + B cos x, prove that d²y/dx² + y = 0.', category: '3-mark', topicId: '5-7-second-order' },
  { id: 'math5-3m-39', text: 'If y = 3e²ˣ + 2e³ˣ, prove that d²y/dx² − 5(dy/dx) + 6y = 0.', category: '3-mark', topicId: '5-7-second-order' },
  { id: 'math5-3m-40', text: 'If y = sin⁻¹x, show that (1 − x²)(d²y/dx²) − x(dy/dx) = 0.', category: '3-mark', topicId: '5-7-second-order' },
  { id: 'math5-3m-41', text: 'If y = 5 cos x − 3 sin x, prove that d²y/dx² + y = 0.', category: '3-mark', topicId: '5-7-second-order' },
  { id: 'math5-3m-42', text: 'Find d²y/dx² for y = x³ log x.', category: '3-mark', topicId: '5-7-second-order' },
  { id: 'math5-3m-43', text: 'Find d²y/dx² for y = eˣ sin 5x.', category: '3-mark', topicId: '5-7-second-order' },
  { id: 'math5-5m-25', text: 'If y = 3 cos(log x) + 4 sin(log x), show that x²y₂ + xy₁ + y = 0.', category: '5-mark', topicId: '5-7-second-order' },
  { id: 'math5-5m-26', text: 'If y = Ae^(mx) + Be^(nx), show that d²y/dx² − (m + n)(dy/dx) + mny = 0.', category: '5-mark', topicId: '5-7-second-order' },
  { id: 'math5-5m-27', text: 'If y = 500e^(7x) + 600e^(−7x), show that d²y/dx² = 49y.', category: '5-mark', topicId: '5-7-second-order' },
  { id: 'math5-5m-28', text: 'If eʸ(x + 1) = 1, show that d²y/dx² = (dy/dx)².', category: '5-mark', topicId: '5-7-second-order' },
  { id: 'math5-5m-29', text: 'If y = (tan⁻¹x)², show that (x² + 1)²y₂ + 2x(x² + 1)y₁ = 2.', category: '5-mark', topicId: '5-7-second-order' },
  { id: 'math5-5m-30', text: 'If y = cos⁻¹x, find d²y/dx² in terms of y alone.', category: '5-mark', topicId: '5-7-second-order' },
  { id: 'math5-5m-31', text: 'If x = a(cos t + t sin t) and y = a(sin t − t cos t), find d²y/dx².', category: '5-mark', topicId: '5-7-second-order' },
  { id: 'math5-5m-32', text: 'If y = e^(a cos⁻¹x), −1 ≤ x ≤ 1, show that (1 − x²)(d²y/dx²) − x(dy/dx) − a²y = 0.', category: '5-mark', topicId: '5-7-second-order' },

  // Assertion-Reason
  { id: 'math5-ar-1', text: 'Assertion (A): The function f(x) = sin x + cos x is continuous on ℝ.\nReason (R): Sum of two continuous functions is continuous.\n(a) Both A and R are true, R is the correct explanation of A.\n(b) Both A and R are true, R is not the correct explanation of A.\n(c) A is true, R is false.\n(d) A is false, R is true.', category: 'assertion-reason', topicId: '5-2-continuity' },
  { id: 'math5-ar-2', text: 'Assertion (A): If y = x^(20), then d²y/dx² = 380x^(18).\nReason (R): d/dx(xⁿ) = nxⁿ⁻¹ applied twice.\n(a) Both A and R are true, R is correct explanation of A.\n(b) Both A and R are true, but R is not the correct explanation of A.\n(c) A is true, R is false.\n(d) A is false, R is true.', category: 'assertion-reason', topicId: '5-7-second-order' },

  // Case Study
  { id: 'math5-case-1', text: 'Case Study: A student defines: \'f(x) is continuous at c if lim(x→c) f(x) exists.\' Is this definition complete? Correct the definition and give an example where the limit exists but f is still discontinuous.', category: 'case-study', topicId: '5-2-continuity' },
  { id: 'math5-case-2', text: 'Case Study: A particle moves along a straight line such that its displacement is y = 3e²ˣ + 2e³ˣ. Show that the \'acceleration\' d²y/dx² satisfies d²y/dx² − 5(dy/dx) + 6y = 0.', category: 'case-study', topicId: '5-7-second-order' },

  // HOTS / Miscellaneous
  { id: 'math5-hots-1', text: 'Differentiate (3x² − 9x + 5)⁹ w.r.t. x.', category: 'hots', topicId: '5-3-1-chain-rule' },
  { id: 'math5-hots-2', text: 'Differentiate sin³x + cos⁶x w.r.t. x.', category: 'hots', topicId: '5-3-1-chain-rule' },
  { id: 'math5-hots-3', text: 'Differentiate (5x)^(3 cos 2x) w.r.t. x using log differentiation.', category: 'hots', topicId: '5-5-log-diff' },
  { id: 'math5-hots-4', text: 'Differentiate sin⁻¹(x√x), 0 ≤ x ≤ 1 w.r.t. x.', category: 'hots', topicId: '5-3-3-inverse-trig' },
  { id: 'math5-hots-5', text: 'Differentiate cos⁻¹(x/2) / √(2x + 7), −2 < x < 2 w.r.t. x.', category: 'hots', topicId: '5-3-3-inverse-trig' },
  { id: 'math5-hots-6', text: 'Find dy/dx if y = 12(1 − cos t), x = 10(t − sin t), −π/2 < t < π/2.', category: 'hots', topicId: '5-6-parametric' },
  { id: 'math5-hots-7', text: 'Find dy/dx if y = sin⁻¹x + sin⁻¹√(1 − x²), 0 < x < 1. What do you observe?', category: 'hots', topicId: '5-3-3-inverse-trig' },
  { id: 'math5-hots-8', text: 'If (x − a)² + (y − b)² = c² for c > 0, prove that [1 + (dy/dx)²]^(3/2) / (d²y/dx²) is a constant independent of a and b.', category: 'hots', topicId: '5-7-second-order' },
  { id: 'math5-hots-9', text: 'If cos y = x cos(a + y) with cos a ≠ ±1, prove that dy/dx = cos²(a + y)/sin a.', category: 'hots', topicId: '5-3-2-implicit' },
  { id: 'math5-hots-10', text: 'If f(x) = |x|³, show that f″(x) exists for all real x and find it.', category: 'hots', topicId: '5-7-second-order' },
  { id: 'math5-hots-11', text: 'Does there exist a function which is continuous everywhere but not differentiable at exactly two points? Justify with an example.', category: 'hots', topicId: '5-3-differentiability' },
  { id: 'math5-hots-12', text: 'Using sin(A + B) = sin A cos B + cos A sin B and differentiation, derive the sum formula for cosines: cos(A + B) = cos A cos B − sin A sin B.', category: 'hots', topicId: '5-3-1-chain-rule' },
];

// Chapter 6: Applications of Derivatives
const chapter6Questions: Question[] = [
  // ===== 6.2 Rate of Change of Quantities =====
  // 1-mark questions
  { id: 'math6-1m-1', text: 'Define the rate of change of y with respect to x when y = f(x). Write its notation.', category: '1-mark', topicId: '6-2-rate-change' },
  { id: 'math6-1m-2', text: 'If y varies with t and x varies with t, write the formula for dy/dx in terms of dy/dt and dx/dt.', category: '1-mark', topicId: '6-2-rate-change' },
  { id: 'math6-1m-3', text: 'The area A of a circle is given by A = πr². What does dA/dr represent?', category: '1-mark', topicId: '6-2-rate-change' },
  { id: 'math6-1m-4', text: 'What is marginal cost? Define it mathematically.', category: '1-mark', topicId: '6-2-rate-change' },
  { id: 'math6-1m-5', text: 'What is marginal revenue? Write its formula.', category: '1-mark', topicId: '6-2-rate-change' },
  { id: 'math6-1m-6', text: 'If the volume V of a sphere increases with time, write dV/dt in terms of dr/dt.', category: '1-mark', topicId: '6-2-rate-change' },
  // 2-mark questions
  { id: 'math6-2m-1', text: 'Find the rate of change of the area of a circle with respect to its radius r when: (a) r = 3 cm  (b) r = 4 cm.', category: '2-mark', topicId: '6-2-rate-change' },
  { id: 'math6-2m-2', text: 'The total revenue from the sale of x units is R(x) = 3x² + 36x + 5. Find the marginal revenue when x = 5.', category: '2-mark', topicId: '6-2-rate-change' },
  { id: 'math6-2m-3', text: 'The total cost C(x) = 0.005x³ − 0.02x² + 30x + 5000. Find the marginal cost when x = 3 units are produced.', category: '2-mark', topicId: '6-2-rate-change' },
  { id: 'math6-2m-4', text: 'The radius of a circle is increasing uniformly at 3 cm/s. Find the rate at which the area is increasing when r = 10 cm.', category: '2-mark', topicId: '6-2-rate-change' },
  { id: 'math6-2m-5', text: 'An edge of a variable cube increases at 3 cm/s. How fast is the volume increasing when edge = 10 cm?', category: '2-mark', topicId: '6-2-rate-change' },
  { id: 'math6-2m-6', text: 'The radius of an air bubble increases at 1/2 cm/s. At what rate is its volume increasing when r = 1 cm?', category: '2-mark', topicId: '6-2-rate-change' },
  // 3-mark questions
  { id: 'math6-3m-1', text: 'The volume of a cube is increasing at 9 cm³/s. How fast is the surface area increasing when the edge is 10 cm?', category: '3-mark', topicId: '6-2-rate-change' },
  { id: 'math6-3m-2', text: 'A stone dropped into a quiet lake makes circular waves at 4 cm/s. How fast is the enclosed area increasing when r = 10 cm?', category: '3-mark', topicId: '6-2-rate-change' },
  { id: 'math6-3m-3', text: 'A ladder 5 m long leans against a wall. Its bottom is pulled at 2 cm/s away from the wall. How fast is its height on the wall decreasing when the foot is 4 m from the wall?', category: '3-mark', topicId: '6-2-rate-change' },
  { id: 'math6-3m-4', text: 'A particle moves along 6y = x³ + 2. Find points where y-coordinate changes 8 times as fast as x-coordinate.', category: '3-mark', topicId: '6-2-rate-change' },
  { id: 'math6-3m-5', text: 'The length x of a rectangle decreases at 5 cm/min; width y increases at 4 cm/min. When x = 8 cm and y = 6 cm, find the rate of change of: (a) the perimeter  (b) the area.', category: '3-mark', topicId: '6-2-rate-change' },
  { id: 'math6-3m-6', text: 'A spherical balloon is being inflated at 900 cm³/s. Find the rate of radius increase when r = 15 cm.', category: '3-mark', topicId: '6-2-rate-change' },
  { id: 'math6-3m-7', text: 'Sand pours from a pipe at 12 cm³/s and forms a cone such that height = (1/6) × radius. How fast does height increase when h = 4 cm?', category: '3-mark', topicId: '6-2-rate-change' },
  // 5-mark questions
  { id: 'math6-5m-1', text: 'A water tank is an inverted right circular cone with semi-vertical angle tan⁻¹(0.5). Water is poured in at 5 m³/h. Find the rate of rise of water level when depth = 4 m.', category: '5-mark', topicId: '6-2-rate-change' },
  { id: 'math6-5m-2', text: 'A man of height 2 m walks at 5 km/h away from a 6 m lamp post. Find the rate at which the length of his shadow increases.', category: '5-mark', topicId: '6-2-rate-change' },
  { id: 'math6-5m-3', text: 'A balloon (spherical) has variable diameter (3/2)(2x + 1). Find the rate of change of volume with respect to x.', category: '5-mark', topicId: '6-2-rate-change' },
  { id: 'math6-5m-4', text: 'A total cost function is C(x) = 0.007x³ − 0.003x² + 15x + 4000. Find the marginal cost when 17 units are produced. Also find total revenue R(x) = 13x² + 26x + 15, and marginal revenue when x = 7.', category: '5-mark', topicId: '6-2-rate-change' },

  // ===== 6.3 Increasing and Decreasing Functions =====
  // 1-mark questions
  { id: 'math6-1m-7', text: 'Define an increasing function on an interval I using the formal definition.', category: '1-mark', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-1m-8', text: 'Define a strictly decreasing function on interval I.', category: '1-mark', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-1m-9', text: 'State the condition on f′(x) for f to be increasing on [a, b].', category: '1-mark', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-1m-10', text: 'What does it mean for a function to be constant on an interval?', category: '1-mark', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-1m-11', text: 'For f(x) = 7x − 3, is f increasing or decreasing on ℝ? Justify.', category: '1-mark', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-1m-12', text: 'What is a critical point of a function f?', category: '1-mark', topicId: '6-3-increasing-decreasing' },
  // 2-mark questions
  { id: 'math6-2m-7', text: 'Show that f(x) = 3x + 17 is increasing on ℝ.', category: '2-mark', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-2m-8', text: 'Show that f(x) = e²ˣ is increasing on ℝ.', category: '2-mark', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-2m-9', text: 'Find the intervals in which f(x) = 2x² − 3x is: (a) increasing  (b) decreasing.', category: '2-mark', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-2m-10', text: 'Show that f(x) = x³ − 3x² + 4x is increasing on ℝ. [Hint: Show f′(x) > 0 always.]', category: '2-mark', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-2m-11', text: 'Prove that f(x) = cos x is: (a) decreasing in (0, π)  (b) increasing in (π, 2π).', category: '2-mark', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-2m-12', text: 'Find the intervals in which f(x) = sin 3x, x ∈ [0, π/2] is: (a) increasing  (b) decreasing.', category: '2-mark', topicId: '6-3-increasing-decreasing' },
  // 3-mark questions
  { id: 'math6-3m-8', text: 'Find all intervals in which f(x) = 2x³ − 3x² − 36x + 7 is: (a) increasing  (b) decreasing.', category: '3-mark', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-3m-9', text: 'Find the intervals in which f(x) = 4x³ − 6x² − 72x + 30 is: (a) increasing  (b) decreasing. Present your work in a sign chart table.', category: '3-mark', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-3m-10', text: 'Find intervals of strict increase/decrease for each: (a) x² + 2x − 5  (b) 10 − 6x − 2x²  (c) −2x³ − 9x² − 12x + 1  (d) (x + 1)³(x − 3)³.', category: '3-mark', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-3m-11', text: 'Find the intervals in which f(x) = sin x + cos x, 0 ≤ x ≤ 2π is increasing or decreasing. Present a sign table.', category: '3-mark', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-3m-12', text: 'Show that f(x) = log(1 + x) − 2x/(2 + x), x > −1 is an increasing function throughout its domain.', category: '3-mark', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-3m-13', text: 'Find the values of x for which y = [x(x − 2)]² is an increasing function.', category: '3-mark', topicId: '6-3-increasing-decreasing' },
  // 5-mark questions
  { id: 'math6-5m-5', text: 'Find intervals in which f(x) = (3/10)x⁴ − (4/5)x³ − 3x² + (36/5)x + 11 is: (a) increasing  (b) decreasing. Draw a sign chart.', category: '5-mark', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-5m-6', text: 'Show that f(x) = tan⁻¹(sin x + cos x), x > 0 is always increasing on (0, π/4).', category: '5-mark', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-5m-7', text: 'Prove that 4sinθ/(2 + cosθ) − θ is an increasing function of θ in [0, π/2].', category: '5-mark', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-5m-8', text: 'Prove that the function f(x) = log|cos x| is decreasing on (0, π/2) and increasing on (3π/2, 2π).', category: '5-mark', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-5m-9', text: 'Prove that f(x) = x³ − 3x² + 3x − 100 is increasing in ℝ.', category: '5-mark', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-5m-10', text: 'Let I be any interval disjoint from [−1, 1]. Prove that f(x) = x + 1/x is increasing on I.', category: '5-mark', topicId: '6-3-increasing-decreasing' },

  // ===== 6.4 Maxima and Minima =====
  // 1-mark questions
  { id: 'math6-1m-13', text: 'Define a point of local maxima of a function f.', category: '1-mark', topicId: '6-4-maxima-minima' },
  { id: 'math6-1m-14', text: 'Define a point of local minima of a function f.', category: '1-mark', topicId: '6-4-maxima-minima' },
  { id: 'math6-1m-15', text: 'State the First Derivative Test for local maxima.', category: '1-mark', topicId: '6-4-maxima-minima' },
  { id: 'math6-1m-16', text: 'State the Second Derivative Test: if f′(c) = 0 and f″(c) < 0, what can you conclude?', category: '1-mark', topicId: '6-4-maxima-minima' },
  { id: 'math6-1m-17', text: 'What is a point of inflexion? Give an example.', category: '1-mark', topicId: '6-4-maxima-minima' },
  { id: 'math6-1m-18', text: 'Does f′(c) = 0 always imply a local extremum? Give a counterexample.', category: '1-mark', topicId: '6-4-maxima-minima' },
  // 2-mark questions
  { id: 'math6-2m-13', text: 'Find the maximum and minimum values (if any) of f(x) = x², x ∈ ℝ.', category: '2-mark', topicId: '6-4-maxima-minima' },
  { id: 'math6-2m-14', text: 'Find the local minimum value of f(x) = 3 + |x|, x ∈ ℝ using the First Derivative Test.', category: '2-mark', topicId: '6-4-maxima-minima' },
  { id: 'math6-2m-15', text: 'Find all points of local maxima and local minima of f(x) = x³ − 3x + 3 using First Derivative Test. Construct a sign table.', category: '2-mark', topicId: '6-4-maxima-minima' },
  { id: 'math6-2m-16', text: 'Find all points of local maxima and local minima of f(x) = 2x³ − 6x² + 6x + 5. Comment on whether x = 1 is a point of inflexion.', category: '2-mark', topicId: '6-4-maxima-minima' },
  { id: 'math6-2m-17', text: 'Find the local maximum and minimum values of f(x) = 3x⁴ + 4x³ − 12x² + 12 using the Second Derivative Test.', category: '2-mark', topicId: '6-4-maxima-minima' },
  { id: 'math6-2m-18', text: 'Find two positive numbers whose sum is 15 and the sum of whose squares is minimum.', category: '2-mark', topicId: '6-4-maxima-minima' },
  // 3-mark questions
  { id: 'math6-3m-14', text: 'Find all local maxima and minima of f(x) = x³ − 6x² + 9x + 15 using First Derivative Test. Provide a sign table.', category: '3-mark', topicId: '6-4-maxima-minima' },
  { id: 'math6-3m-15', text: 'Find local maxima and minima of f(x) = sin x + cos x, 0 < x < π/2 using Second Derivative Test.', category: '3-mark', topicId: '6-4-maxima-minima' },
  { id: 'math6-3m-16', text: 'Find local maxima and minima of g(x) = x/2 + 2/x, x > 0 using Second Derivative Test.', category: '3-mark', topicId: '6-4-maxima-minima' },
  { id: 'math6-3m-17', text: 'Find the shortest distance from (0, c), where 1/2 ≤ c ≤ 5, to the parabola y = x². Show all working.', category: '3-mark', topicId: '6-4-maxima-minima' },
  { id: 'math6-3m-18', text: 'Find two positive numbers x and y such that x + y = 60 and xy³ is maximum.', category: '3-mark', topicId: '6-4-maxima-minima' },
  { id: 'math6-3m-19', text: 'Find two positive numbers x and y such that their sum is 35 and x²y⁵ is maximum.', category: '3-mark', topicId: '6-4-maxima-minima' },
  { id: 'math6-3m-20', text: 'Find two positive numbers whose sum is 16 and whose sum of cubes is minimum.', category: '3-mark', topicId: '6-4-maxima-minima' },
  // 5-mark questions - Geometry/Optimization
  { id: 'math6-5m-11', text: 'A square tin sheet of side 18 cm is made into a box (no top) by cutting equal squares of side x from each corner. Find x for maximum volume. Also find the maximum volume.', category: '5-mark', topicId: '6-misc-optimization' },
  { id: 'math6-5m-12', text: 'A rectangular tin sheet 45 cm × 24 cm is made into a box (no top) by cutting squares of side x from corners. Find x for maximum volume.', category: '5-mark', topicId: '6-misc-optimization' },
  { id: 'math6-5m-13', text: 'Show that of all rectangles inscribed in a fixed circle, the square has maximum area.', category: '5-mark', topicId: '6-misc-optimization' },
  { id: 'math6-5m-14', text: 'Show that the right circular cylinder of given surface area and maximum volume has height equal to the diameter of its base.', category: '5-mark', topicId: '6-misc-optimization' },
  { id: 'math6-5m-15', text: 'Of all closed cylindrical cans (right circular) of volume 100 cm³, find dimensions for minimum surface area.', category: '5-mark', topicId: '6-misc-optimization' },
  { id: 'math6-5m-16', text: 'A wire 28 m long is cut into two pieces — one to form a square, the other a circle. Find the lengths for minimum combined area.', category: '5-mark', topicId: '6-misc-optimization' },
  { id: 'math6-5m-17', text: 'Prove that the volume of the largest cone inscribed in a sphere of radius R is 8/27 of the volume of the sphere.', category: '5-mark', topicId: '6-misc-optimization' },
  { id: 'math6-5m-18', text: 'If three sides of a trapezium other than the base are each 10 cm, find the area when it is maximum.', category: '5-mark', topicId: '6-misc-optimization' },
  { id: 'math6-5m-19', text: 'Prove that the radius of the right circular cylinder of greatest curved surface area inscribed in a given cone is half the radius of the cone.', category: '5-mark', topicId: '6-misc-optimization' },
  { id: 'math6-5m-20', text: 'Show that the semi-vertical angle of the cone of maximum volume and given slant height is tan⁻¹(√2).', category: '5-mark', topicId: '6-misc-optimization' },
  { id: 'math6-5m-21', text: 'Show that the semi-vertical angle of a right circular cone of given surface area and maximum volume is sin⁻¹(1/3).', category: '5-mark', topicId: '6-misc-optimization' },
  { id: 'math6-5m-22', text: 'AP and BQ are two vertical poles at points A and B. AP = 16 m, BQ = 22 m, AB = 20 m. Find the distance of point R on AB from A such that RP² + RQ² is minimum.', category: '5-mark', topicId: '6-misc-optimization' },
  { id: 'math6-5m-23', text: 'Find the maximum area of an isosceles triangle inscribed in the ellipse x²/a² + y²/b² = 1 with vertex at one end of the major axis.', category: '5-mark', topicId: '6-misc-optimization' },
  // 5-mark - Economics Applications
  { id: 'math6-5m-24', text: 'A manufacturer can sell x items at price ₹(5 − x/100) each. Cost of x items is ₹(x/5 + 500). Find the number of items to sell for maximum profit.', category: '5-mark', topicId: '6-misc-optimization' },
  { id: 'math6-5m-25', text: 'A car starts from P (t = 0) and stops at Q. Distance x = t²(2 − t/3). Find time to reach Q and distance PQ.', category: '5-mark', topicId: '6-misc-optimization' },
  { id: 'math6-5m-26', text: 'An open-topped box is constructed from a 3 m × 8 m aluminium sheet by cutting equal squares from corners. Find the maximum volume.', category: '5-mark', topicId: '6-misc-optimization' },
  { id: 'math6-5m-27', text: 'Prove that log(x)/x has maximum value at x = e.', category: '5-mark', topicId: '6-misc-optimization' },

  // ===== 6.4.1 Absolute Maximum and Minimum (Closed Interval Method) =====
  // 1-mark questions
  { id: 'math6-1m-19', text: 'State the Working Rule (4 steps) for finding absolute maximum and minimum of f on [a, b].', category: '1-mark', topicId: '6-4-1-absolute-extrema' },
  { id: 'math6-1m-20', text: 'State Theorem: Every continuous function on a closed interval [a, b] has an absolute maximum and absolute minimum.', category: '1-mark', topicId: '6-4-1-absolute-extrema' },
  { id: 'math6-1m-21', text: 'Distinguish between local maximum and absolute maximum with an example.', category: '1-mark', topicId: '6-4-1-absolute-extrema' },
  // 2-mark questions
  { id: 'math6-2m-19', text: 'Find the absolute maximum and minimum of f(x) = x³, x ∈ [−2, 2].', category: '2-mark', topicId: '6-4-1-absolute-extrema' },
  { id: 'math6-2m-20', text: 'Find the absolute maximum and minimum of f(x) = sin x + cos x, x ∈ [0, π].', category: '2-mark', topicId: '6-4-1-absolute-extrema' },
  { id: 'math6-2m-21', text: 'Find absolute max and min of f(x) = 4x − x²/2, x ∈ [−2, 9/2].', category: '2-mark', topicId: '6-4-1-absolute-extrema' },
  { id: 'math6-2m-22', text: 'Find absolute max and min of f(x) = (x − 1)² + 3, x ∈ [−3, 1].', category: '2-mark', topicId: '6-4-1-absolute-extrema' },
  { id: 'math6-2m-23', text: 'Find the maximum profit for p(x) = 41 − 72x − 18x².', category: '2-mark', topicId: '6-4-1-absolute-extrema' },
  { id: 'math6-2m-24', text: 'Find the maximum value of 2x³ − 24x + 107 on [1, 3]. Also find max on [−3, −1].', category: '2-mark', topicId: '6-4-1-absolute-extrema' },
  // 3-mark questions
  { id: 'math6-3m-21', text: 'Find the absolute maximum and minimum values of f(x) = 2x³ − 15x² + 36x + 1 on [1, 5]. Show the evaluation table.', category: '3-mark', topicId: '6-4-1-absolute-extrema' },
  { id: 'math6-3m-22', text: 'Find absolute max and min of f(x) = 12x^(4/3) − 6x^(1/3), x ∈ [−1, 1]. (Note: f′ is undefined at x = 0.)', category: '3-mark', topicId: '6-4-1-absolute-extrema' },
  { id: 'math6-3m-23', text: 'Find both max and min of 3x⁴ − 8x³ + 12x² − 48x + 25 on [0, 3].', category: '3-mark', topicId: '6-4-1-absolute-extrema' },
  { id: 'math6-3m-24', text: 'At what points in [0, 2π] does sin 2x attain its maximum value?', category: '3-mark', topicId: '6-4-1-absolute-extrema' },
  { id: 'math6-3m-25', text: 'Find the maximum and minimum values of x + sin 2x on [0, 2π].', category: '3-mark', topicId: '6-4-1-absolute-extrema' },
  { id: 'math6-3m-26', text: 'It is given that at x = 1, f(x) = x⁴ − 62x² + ax + 9 attains its maximum on [0, 2]. Find a.', category: '3-mark', topicId: '6-4-1-absolute-extrema' },
  // 5-mark questions
  { id: 'math6-5m-28', text: 'Find the absolute maximum and minimum values of f(x) = cos²x + sin x on [0, π]. Construct a complete evaluation table.', category: '5-mark', topicId: '6-4-1-absolute-extrema' },
  { id: 'math6-5m-29', text: 'Find two numbers whose sum is 24 and product is maximum. Then generalise: if sum is k, show the two numbers are k/2 each.', category: '5-mark', topicId: '6-4-1-absolute-extrema' },
  { id: 'math6-5m-30', text: 'Find two positive numbers x and y with x + y = 60 such that xy³ is maximum. Verify using second derivative test.', category: '5-mark', topicId: '6-4-1-absolute-extrema' },
  { id: 'math6-5m-31', text: 'A tank with rectangular base and sides (open at top) has depth 2 m and volume 8 m³. If building costs ₹70/m² for base and ₹45/m² for sides, find the cost of the least expensive tank.', category: '5-mark', topicId: '6-misc-optimization' },
  { id: 'math6-5m-32', text: 'A window is a rectangle surmounted by a semicircle with total perimeter 10 m. Find dimensions to admit maximum light. Show a diagram and complete working.', category: '5-mark', topicId: '6-misc-optimization' },
  { id: 'math6-5m-33', text: 'Find the points at which f(x) = (x − 2)⁴(x + 1)³ has: (i) local maxima  (ii) local minima  (iii) point of inflexion.', category: '5-mark', topicId: '6-4-maxima-minima' },
  { id: 'math6-5m-34', text: 'Show that the altitude of the right circular cone of maximum volume inscribed in a sphere of radius r is 4r/3.', category: '5-mark', topicId: '6-misc-optimization' },
  { id: 'math6-5m-35', text: 'Show that the height of the cylinder of maximum volume inscribed in a sphere of radius R is 2R/√3. Also find the maximum volume.', category: '5-mark', topicId: '6-misc-optimization' },
  { id: 'math6-5m-36', text: 'Show that the height of the cylinder of greatest volume inscribed in a right circular cone of height h and semi-vertical angle α is h/3. Also find the greatest volume.', category: '5-mark', topicId: '6-misc-optimization' },

  // ===== MCQ Questions =====
  { id: 'math6-mcq-1', text: 'The rate of change of the area of a circle with respect to its radius r at r = 6 cm is:\n(A) 10π   (B) 12π   (C) 8π   (D) 11π', category: 'assertion-reason', topicId: '6-2-rate-change' },
  { id: 'math6-mcq-2', text: 'The total revenue R(x) = 3x² + 36x + 5. The marginal revenue when x = 15 is:\n(A) 116   (B) 96   (C) 90   (D) 126', category: 'assertion-reason', topicId: '6-2-rate-change' },
  { id: 'math6-mcq-3', text: 'Which of the following functions are decreasing on (0, π/2)?\n(A) cos x   (B) cos 2x   (C) cos 3x   (D) tan x', category: 'assertion-reason', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-mcq-4', text: 'The interval in which y = x² e⁻ˣ is increasing is:\n(A) (−∞, ∞)   (B) (−2, 0)   (C) (2, ∞)   (D) (0, 2)', category: 'assertion-reason', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-mcq-5', text: 'On which of the following intervals is f(x) = x¹⁰⁰ + sin x − 1 decreasing?\n(A) (0, 1)   (B) (π/2, π)   (C) (0, π/2)   (D) None of these', category: 'assertion-reason', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-mcq-6', text: 'The point on x² = 2y nearest to (0, 5) is:\n(A) (2√2, 4)   (B) (2√2, 0)   (C) (0, 0)   (D) (2, 2)', category: 'assertion-reason', topicId: '6-4-maxima-minima' },
  { id: 'math6-mcq-7', text: 'The minimum value of (1 − x + x²)/(1 + x + x²) for all real x is:\n(A) 0   (B) 1   (C) 3   (D) 1/3', category: 'assertion-reason', topicId: '6-4-maxima-minima' },
  { id: 'math6-mcq-8', text: 'Maximum value of [x(x − 1) + 1]^(1/3), 0 ≤ x ≤ 1 is:\n(A) (1/3)^(1/3)   (B) 1/2   (C) 1   (D) 0', category: 'assertion-reason', topicId: '6-4-maxima-minima' },
  { id: 'math6-mcq-9', text: 'A cylindrical tank of radius 10 m is being filled with wheat at 314 m³/h. The depth of wheat increases at the rate of:\n(A) 1 m/h   (B) 0.1 m/h   (C) 1.1 m/h   (D) 0.5 m/h', category: 'assertion-reason', topicId: '6-2-rate-change' },

  // ===== Assertion-Reason Questions =====
  { id: 'math6-ar-1', text: 'Assertion (A): If a circular disc\'s radius increases at 0.05 cm/s, its area increases at approximately 0.320π cm²/s when r = 3.2 cm.\nReason (R): dA/dt = 2πr · dr/dt by Chain Rule.\n(A) Both A and R are true, R is the correct explanation of A.\n(B) Both A and R are true, but R is not the correct explanation of A.\n(C) A is true, R is false.\n(D) A is false, R is true.', category: 'assertion-reason', topicId: '6-2-rate-change' },

  // ===== Case Study Questions =====
  { id: 'math6-cs-1', text: 'Case Study: A manufacturer models profit P(x) = −x³ + 9x² − 15x + 3, where x is output in hundreds.\n(i) Find P′(x) and critical points.\n(ii) For what values of x is profit increasing?\n(iii) For what values of x is profit decreasing?\n(iv) What is the maximum profit in [1, 6]?', category: 'case-study', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-cs-2', text: 'Case Study: A helicopter flies along y = x² + 7. A soldier is at (3, 7).\n(i) Express the square of distance D²(x) from soldier to helicopter.\n(ii) Find dD²/dx and solve dD²/dx = 0.\n(iii) Show x = 1 is the minimum distance point.\n(iv) Find the nearest distance.', category: 'case-study', topicId: '6-4-maxima-minima' },
  { id: 'math6-cs-3', text: 'Case Study: A square piece of tin (side 18 cm) is to be made into an open box by cutting corners of side x.\n(i) Write V(x) in terms of x.\n(ii) Find V′(x) and critical points.\n(iii) Show x = 3 is valid and find the constraint on x.\n(iv) Find maximum volume and the optimal x.\n(v) Verify using V″(x) < 0.', category: 'case-study', topicId: '6-misc-optimization' },

  // ===== HOTS Questions =====
  { id: 'math6-hots-1', text: 'The two equal sides of an isosceles triangle with fixed base b decrease at 3 cm/s. How fast is the area decreasing when the equal sides equal the base?', category: 'hots', topicId: '6-2-rate-change' },
  { id: 'math6-hots-2', text: 'Find the intervals in which f(x) = (4 sin x − 2x − x cos x)/(2 + cos x) is: (a) increasing  (b) decreasing.', category: 'hots', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-hots-3', text: 'Find the intervals of increase/decrease for f(x) = x³ + 1/x³, x ≠ 0.', category: 'hots', topicId: '6-3-increasing-decreasing' },
  { id: 'math6-hots-4', text: 'A point on the hypotenuse of a right triangle is at distances a and b from the two legs. Show the minimum length of the hypotenuse is (a^(2/3) + b^(2/3))^(3/2).', category: 'hots', topicId: '6-misc-optimization' },
  { id: 'math6-hots-5', text: 'A window has a rectangle surmounted by a semicircle. Perimeter = 10 m. Find the dimensions for maximum light. State your constraint and objective function clearly.', category: 'hots', topicId: '6-misc-optimization' },
  { id: 'math6-hots-6', text: 'Show that semi-vertical angle of the right circular cone of given surface area and maximum volume is sin⁻¹(1/3).', category: 'hots', topicId: '6-misc-optimization' },
  { id: 'math6-hots-7', text: 'Prove that the volume of the largest cone inscribed in a sphere of radius R is 8/27 × volume of sphere.', category: 'hots', topicId: '6-misc-optimization' },
  { id: 'math6-hots-8', text: 'An Apache helicopter flies along y = x² + 7. A soldier is at (3, 7). Find the nearest distance between them using the concept of absolute minima.', category: 'hots', topicId: '6-4-maxima-minima' },
  { id: 'math6-hots-9', text: 'A manufacturer\'s total cost is C(x) = 0.007x³ − 0.003x² + 15x + 4000 and revenue R(x) = 13x² + 26x + 15. Find x for maximum profit and state the maximum profit.', category: 'hots', topicId: '6-misc-optimization' },
  { id: 'math6-hots-10', text: 'Show that f(x) = tan⁻¹(sin x + cos x) is increasing on (0, π/4) using the sign of f′(x).', category: 'hots', topicId: '6-3-increasing-decreasing' },
];

// Chapter 7: Integrals
const chapter7Questions: Question[] = [
  // ===== Section 1: Introduction & Integration as Inverse Process (§7.1-7.2) =====
  // MCQ questions
  { id: 'math7-mcq-1', text: 'The anti-derivative of cos x is:\n(A) -sin x + C    (B) sin x + C    (C) tan x + C    (D) sec x + C', category: 'assertion-reason', topicId: '7-1-2-introduction' },
  { id: 'math7-mcq-2', text: 'If d/dx[F(x)] = f(x), then ∫f(x)dx equals:\n(A) F(x)    (B) F(x) + C    (C) f(x) + C    (D) F\'(x) + C', category: 'assertion-reason', topicId: '7-1-2-introduction' },
  { id: 'math7-mcq-3', text: 'The anti-derivative of eˣ is:\n(A) eˣ/x    (B) xeˣ    (C) eˣ + C    (D) e^(x+1) + C', category: 'assertion-reason', topicId: '7-1-2-introduction' },
  { id: 'math7-mcq-4', text: '∫xⁿ dx = ? (n ≠ -1)\n(A) nxⁿ⁻¹ + C    (B) xⁿ⁺¹/(n+1) + C    (C) xⁿ/n + C    (D) nxⁿ + C', category: 'assertion-reason', topicId: '7-1-2-introduction' },
  { id: 'math7-mcq-5', text: '∫(1/x)dx equals:\n(A) 1/x² + C    (B) log|x| + C    (C) -1/x + C    (D) x log x + C', category: 'assertion-reason', topicId: '7-1-2-introduction' },
  { id: 'math7-mcq-6', text: 'The anti-derivative of (√x + 1/√x) equals:\n(A) (1/3)x^(1/3) + 2x^(1/2) + C    (B) (2/3)x^(3/2) + 2x^(1/2) + C    (C) (2/3)x^(3/2) + (1/2)x^(1/2) + C    (D) x^(3/2) + x^(1/2) + C', category: 'assertion-reason', topicId: '7-1-2-introduction' },
  // 2-mark questions
  { id: 'math7-2m-1', text: 'Write an anti-derivative for cos 2x using inspection method.', category: '2-mark', topicId: '7-1-2-introduction' },
  { id: 'math7-2m-2', text: 'Find an anti-derivative of 3x² + 4x³ by inspection.', category: '2-mark', topicId: '7-1-2-introduction' },
  { id: 'math7-2m-3', text: 'Find ∫(4e^(3x) + 1)dx.', category: '2-mark', topicId: '7-1-2-introduction' },
  { id: 'math7-2m-4', text: 'Find ∫(2x² + eˣ)dx.', category: '2-mark', topicId: '7-1-2-introduction' },
  { id: 'math7-2m-5', text: 'Find ∫(√x - 1/√x)² dx.', category: '2-mark', topicId: '7-1-2-introduction' },
  { id: 'math7-2m-6', text: 'Find the anti-derivative F of f(x) = 4x³ - 6, where F(0) = 3.', category: '2-mark', topicId: '7-1-2-introduction' },
  // 3-mark questions
  { id: 'math7-3m-1', text: 'Find ∫(x³ - 1)/x² dx.', category: '3-mark', topicId: '7-1-2-introduction' },
  { id: 'math7-3m-2', text: 'Find ∫(x^(2/3) + 1)dx.', category: '3-mark', topicId: '7-1-2-introduction' },
  { id: 'math7-3m-3', text: 'Find ∫(x^(3/2) + 2eˣ - 1/x)dx.', category: '3-mark', topicId: '7-1-2-introduction' },
  { id: 'math7-3m-4', text: 'Evaluate ∫(sin x + cos x)dx and ∫cosec x(cosec x + cot x)dx.', category: '3-mark', topicId: '7-1-2-introduction' },
  { id: 'math7-3m-5', text: 'Find ∫(1 - sin x)/cos²x dx.', category: '3-mark', topicId: '7-1-2-introduction' },
  // 5-mark questions
  { id: 'math7-5m-1', text: 'If d/dx[f(x)] = 4x³ - 3/x⁴ such that f(2) = 0, find f(x).', category: '5-mark', topicId: '7-1-2-introduction' },

  // ===== Section 2: Integration by Substitution (§7.3.1) =====
  // MCQ questions
  { id: 'math7-mcq-7', text: '∫tan x dx equals:\n(A) sec²x + C    (B) log|cos x| + C    (C) log|sec x| + C    (D) -log|cos x| + C', category: 'assertion-reason', topicId: '7-3-1-substitution' },
  { id: 'math7-mcq-8', text: '∫cot x dx equals:\n(A) log|tan x| + C    (B) log|sin x| + C    (C) -log|sin x| + C    (D) cosec²x + C', category: 'assertion-reason', topicId: '7-3-1-substitution' },
  { id: 'math7-mcq-9', text: '∫(2x)/(1 + x²)dx equals:\n(A) tan⁻¹x + C    (B) log(1 + x²) + C    (C) 2/(1+x²) + C    (D) 2tan⁻¹x + C', category: 'assertion-reason', topicId: '7-3-1-substitution' },
  { id: 'math7-mcq-10', text: '∫sec x dx equals:\n(A) sec x tan x + C    (B) log|sec x - tan x| + C    (C) log|sec x + tan x| + C    (D) log|tan x| + C', category: 'assertion-reason', topicId: '7-3-1-substitution' },
  { id: 'math7-mcq-11', text: '∫2x·sin(x² + 1)dx equals:\n(A) cos(x²+1) + C    (B) -cos(x²+1) + C    (C) sin(x²+1) + C    (D) 2cos(x²+1) + C', category: 'assertion-reason', topicId: '7-3-1-substitution' },
  { id: 'math7-mcq-12', text: '∫sin(mx)dx equals:\n(A) cos(mx) + C    (B) -cos(mx) + C    (C) -(1/m)cos(mx) + C    (D) (1/m)cos(mx) + C', category: 'assertion-reason', topicId: '7-3-1-substitution' },
  // 2-mark questions
  { id: 'math7-2m-7', text: 'Evaluate ∫sin(ax + b)·cos(ax + b)dx.', category: '2-mark', topicId: '7-3-1-substitution' },
  { id: 'math7-2m-8', text: 'Find ∫x/(x+4) dx, x > 0. (Hint: write x = (x+4) - 4)', category: '2-mark', topicId: '7-3-1-substitution' },
  { id: 'math7-2m-9', text: 'Find ∫e^(2x+3) dx.', category: '2-mark', topicId: '7-3-1-substitution' },
  { id: 'math7-2m-10', text: 'Find ∫sin(tan⁻¹x)/(1+x²) dx.', category: '2-mark', topicId: '7-3-1-substitution' },
  { id: 'math7-2m-11', text: 'Evaluate ∫dx/(x - √x).', category: '2-mark', topicId: '7-3-1-substitution' },
  { id: 'math7-2m-12', text: 'Find ∫sin³x·cos²x dx.', category: '2-mark', topicId: '7-3-1-substitution' },
  // 3-mark questions
  { id: 'math7-3m-6', text: 'Find ∫sin x / sin(x + a) dx.', category: '3-mark', topicId: '7-3-1-substitution' },
  { id: 'math7-3m-7', text: 'Find ∫1/(1 + tan x) dx.', category: '3-mark', topicId: '7-3-1-substitution' },
  { id: 'math7-3m-8', text: 'Find ∫(e^(tan⁻¹x))/(1+x²) dx.', category: '3-mark', topicId: '7-3-1-substitution' },
  // 5-mark questions
  { id: 'math7-5m-2', text: 'Find ∫(tan⁴√x · sec²√x)/√x dx.', category: '5-mark', topicId: '7-3-1-substitution' },
  { id: 'math7-5m-3', text: 'Find ∫sin x/(1 + cos x)dx and ∫sin x/(1+cos x)² dx.', category: '5-mark', topicId: '7-3-1-substitution' },

  // ===== Section 3: Integration Using Trigonometric Identities (§7.3.2) =====
  // MCQ questions
  { id: 'math7-mcq-13', text: '∫cos²x dx equals:\n(A) sin 2x/2 + C    (B) x/2 + sin 2x/4 + C    (C) x + sin 2x/2 + C    (D) (1+cos 2x)/2 + C', category: 'assertion-reason', topicId: '7-3-2-trig-identities' },
  { id: 'math7-mcq-14', text: '∫sin²(2x+5)dx equals:\n(A) x/2 - sin(4x+10)/8 + C    (B) x - sin(4x+10)/4 + C    (C) x/2 + sin(4x+10)/8 + C    (D) x - cos(4x+10)/8 + C', category: 'assertion-reason', topicId: '7-3-2-trig-identities' },
  { id: 'math7-mcq-15', text: '∫sin 3x · cos 4x dx, using product-to-sum identity, gives:\n(A) (1/2)[-cos 7x/7 + cos x] + C    (B) -(1/2)[cos 7x/7 + cos x] + C    (C) -(1/14)cos 7x + (1/2)cos x + C    (D) (1/2)[-cos 7x/7 + cos x] + C', category: 'assertion-reason', topicId: '7-3-2-trig-identities' },
  // 2-mark questions
  { id: 'math7-2m-13', text: 'Find ∫sin 2x · cos 3x dx.', category: '2-mark', topicId: '7-3-2-trig-identities' },
  { id: 'math7-2m-14', text: 'Find ∫cos 2x · cos 4x · cos 6x dx.', category: '2-mark', topicId: '7-3-2-trig-identities' },
  { id: 'math7-2m-15', text: 'Evaluate ∫sin³x dx using identity sin 3x = 3sin x - 4sin³x.', category: '2-mark', topicId: '7-3-2-trig-identities' },
  { id: 'math7-2m-16', text: 'Find ∫cos³x dx.', category: '2-mark', topicId: '7-3-2-trig-identities' },
  // 3-mark questions
  { id: 'math7-3m-9', text: 'Find ∫sin⁴x dx.', category: '3-mark', topicId: '7-3-2-trig-identities' },
  { id: 'math7-3m-10', text: 'Find ∫sin³x·cos³x dx.', category: '3-mark', topicId: '7-3-2-trig-identities' },
  { id: 'math7-3m-11', text: 'Find ∫(cos x - sin x)/(1 + sin 2x) dx.', category: '3-mark', topicId: '7-3-2-trig-identities' },
  // 5-mark questions
  { id: 'math7-5m-4', text: 'Find ∫cos⁴ 2x dx.', category: '5-mark', topicId: '7-3-2-trig-identities' },

  // ===== Section 4: Integrals of Some Particular Functions (§7.4) =====
  // MCQ questions
  { id: 'math7-mcq-16', text: '∫dx/(x²-16) equals:\n(A) (1/8)log|(x-4)/(x+4)| + C    (B) (1/4)log|(x-4)/(x+4)| + C    (C) (1/8)log|(x+4)/(x-4)| + C    (D) (1/8)tan⁻¹(x/4) + C', category: 'assertion-reason', topicId: '7-4-particular-functions' },
  { id: 'math7-mcq-17', text: '∫dx/(x²+a²) equals:\n(A) (1/a)log|x/a| + C    (B) (1/a)tan⁻¹(x/a) + C    (C) sin⁻¹(x/a) + C    (D) log|x+√(x²+a²)| + C', category: 'assertion-reason', topicId: '7-4-particular-functions' },
  { id: 'math7-mcq-18', text: '∫dx/√(a²-x²) equals:\n(A) cos⁻¹(x/a) + C    (B) sin⁻¹(x/a) + C    (C) log|x + √(a²-x²)| + C    (D) (1/a)tan⁻¹(x/a) + C', category: 'assertion-reason', topicId: '7-4-particular-functions' },
  { id: 'math7-mcq-19', text: '∫dx/(9-4x²) equals:\n(A) (1/12)log|(3+2x)/(3-2x)| + C    (B) (1/6)log|(3+2x)/(3-2x)| + C    (C) (1/12)log|(3-2x)/(3+2x)| + C    (D) (1/3)sin⁻¹(2x/3) + C', category: 'assertion-reason', topicId: '7-4-particular-functions' },
  { id: 'math7-mcq-20', text: '∫dx/√(9x-4x²) equals:\n(A) (1/3)sin⁻¹((9x-8)/9) + C    (B) (1/9)sin⁻¹((9x-8)/9) + C    (C) (1/2)sin⁻¹((8x-9)/9) + C    (D) (1/3)sin⁻¹((8-9x)/9) + C', category: 'assertion-reason', topicId: '7-4-particular-functions' },
  // 2-mark questions
  { id: 'math7-2m-17', text: 'Find ∫dx/(x²-6x+13).', category: '2-mark', topicId: '7-4-particular-functions' },
  { id: 'math7-2m-18', text: 'Find ∫dx/√(2x-x²).', category: '2-mark', topicId: '7-4-particular-functions' },
  { id: 'math7-2m-19', text: 'Find ∫dx/(3x²+13x-10).', category: '2-mark', topicId: '7-4-particular-functions' },
  { id: 'math7-2m-20', text: 'Find ∫(x+2)/(2x²+6x+5)dx.', category: '2-mark', topicId: '7-4-particular-functions' },
  // 3-mark questions
  { id: 'math7-3m-12', text: 'Find ∫(4x+1)/(2x²+x-3)dx.', category: '3-mark', topicId: '7-4-particular-functions' },
  { id: 'math7-3m-13', text: 'Find ∫(x+3)/√(5-4x-x²)dx.', category: '3-mark', topicId: '7-4-particular-functions' },
  { id: 'math7-3m-14', text: 'Evaluate ∫(6x+7)/√(x²-x-2) dx.', category: '3-mark', topicId: '7-4-particular-functions' },
  // 5-mark questions
  { id: 'math7-5m-5', text: 'Find ∫dx/(x²+2x+2)² using completing the square and substitution.', category: '5-mark', topicId: '7-4-particular-functions' },

  // ===== Section 5: Integration by Partial Fractions (§7.5) =====
  // MCQ questions
  { id: 'math7-mcq-21', text: '∫x dx/[(x-1)(x-2)] equals:\n(A) log|(x-1)²/(x-2)| + C    (B) log|(x-2)²/(x-1)| + C    (C) log|(x-1)/(x-2)²| + C    (D) log|(x-1)(x-2)| + C', category: 'assertion-reason', topicId: '7-5-partial-fractions' },
  { id: 'math7-mcq-22', text: '∫dx/[x(x²+1)] equals:\n(A) log|x| - (1/2)log(x²+1) + C    (B) log|x| + (1/2)log(x²+1) + C    (C) -log|x| + (1/2)log(x²+1) + C    (D) log|x| + log(x²+1) + C', category: 'assertion-reason', topicId: '7-5-partial-fractions' },
  { id: 'math7-mcq-23', text: 'When (3x-1)/[(x-1)(x-2)(x-3)] is decomposed, how many partial fractions does it have?\n(A) 1    (B) 2    (C) 3    (D) 4', category: 'assertion-reason', topicId: '7-5-partial-fractions' },
  { id: 'math7-mcq-24', text: 'The partial fraction form of (px+q)/(x-a)² is:\n(A) A/(x-a)    (B) A/(x-a) + B/(x-a)²    (C) A/(x-a)² + B    (D) Ax + B/(x-a)', category: 'assertion-reason', topicId: '7-5-partial-fractions' },
  // 2-mark questions
  { id: 'math7-2m-21', text: 'Find ∫dx/[(x+1)(x+2)].', category: '2-mark', topicId: '7-5-partial-fractions' },
  { id: 'math7-2m-22', text: 'Find ∫(2x-3)/[(x²-1)(2x+3)]dx.', category: '2-mark', topicId: '7-5-partial-fractions' },
  { id: 'math7-2m-23', text: 'Integrate (x² + 1)/(x² - 5x + 6).', category: '2-mark', topicId: '7-5-partial-fractions' },
  { id: 'math7-2m-24', text: 'Find ∫(3x-2)/[(x+1)²(x+3)]dx.', category: '2-mark', topicId: '7-5-partial-fractions' },
  // 3-mark questions
  { id: 'math7-3m-15', text: 'Find ∫x² dx/[(x²+1)(x²+4)].', category: '3-mark', topicId: '7-5-partial-fractions' },
  { id: 'math7-3m-16', text: 'Evaluate ∫(x³+x+1)/(x²-1)dx.', category: '3-mark', topicId: '7-5-partial-fractions' },
  { id: 'math7-3m-17', text: 'Find ∫(x²+x+1)/[(x+1)²(x+2)]dx.', category: '3-mark', topicId: '7-5-partial-fractions' },
  // 5-mark questions
  { id: 'math7-5m-6', text: 'Integrate 1/(sin x - sin 2x) using substitution followed by partial fractions.', category: '5-mark', topicId: '7-5-partial-fractions' },

  // ===== Section 6: Integration by Parts (§7.6) =====
  // MCQ questions
  { id: 'math7-mcq-25', text: 'In Integration by Parts, which is the preferred "first function" according to ILATE rule?\n(A) Always exponential    (B) Always trigonometric    (C) The one whose integral is known    (D) Function whose derivative simplifies the integral', category: 'assertion-reason', topicId: '7-6-by-parts' },
  { id: 'math7-mcq-26', text: '∫x·eˣ dx equals:\n(A) x²eˣ/2 + C    (B) xeˣ - eˣ + C    (C) xeˣ + eˣ + C    (D) eˣ(x+1) + C', category: 'assertion-reason', topicId: '7-6-by-parts' },
  { id: 'math7-mcq-27', text: '∫eˣ(sin x + cos x)dx equals:\n(A) eˣ sin x + C    (B) eˣ cos x + C    (C) eˣ(sin x - cos x)/2 + C    (D) -eˣ cos x + C', category: 'assertion-reason', topicId: '7-6-by-parts' },
  { id: 'math7-mcq-28', text: '∫x²eˣ³ dx equals:\n(A) (1/3)eˣ³ + C    (B) x²eˣ³ - 2xeˣ³ + C    (C) (1/3)eˣ² + C    (D) (1/2)eˣ² + C', category: 'assertion-reason', topicId: '7-6-by-parts' },
  { id: 'math7-mcq-29', text: '∫sec x(1+tan x)eˣ dx equals:\n(A) eˣ cos x + C    (B) eˣ sec x + C    (C) eˣ tan x + C    (D) eˣ sin x + C', category: 'assertion-reason', topicId: '7-6-by-parts' },
  // 2-mark questions
  { id: 'math7-2m-25', text: 'Find ∫x cos x dx.', category: '2-mark', topicId: '7-6-by-parts' },
  { id: 'math7-2m-26', text: 'Find ∫x sin x dx.', category: '2-mark', topicId: '7-6-by-parts' },
  { id: 'math7-2m-27', text: 'Find ∫x² eˣ dx.', category: '2-mark', topicId: '7-6-by-parts' },
  { id: 'math7-2m-28', text: 'Find ∫log x dx.', category: '2-mark', topicId: '7-6-by-parts' },
  { id: 'math7-2m-29', text: 'Find ∫sin⁻¹x dx.', category: '2-mark', topicId: '7-6-by-parts' },
  { id: 'math7-2m-30', text: 'Find ∫x log x dx.', category: '2-mark', topicId: '7-6-by-parts' },
  // 3-mark questions
  { id: 'math7-3m-18', text: 'Find ∫x tan⁻¹x dx.', category: '3-mark', topicId: '7-6-by-parts' },
  { id: 'math7-3m-19', text: 'Find ∫√(x²+2x+5) dx.', category: '3-mark', topicId: '7-6-by-parts' },
  { id: 'math7-3m-20', text: 'Find ∫√(3-2x-x²) dx.', category: '3-mark', topicId: '7-6-by-parts' },
  // 5-mark questions
  { id: 'math7-5m-7', text: 'Find ∫x·sin⁻¹x/√(1-x²) dx.', category: '5-mark', topicId: '7-6-by-parts' },
  { id: 'math7-5m-8', text: 'Find ∫e²ˣ sin x dx.', category: '5-mark', topicId: '7-6-by-parts' },

  // ===== Section 7: Definite Integrals & Fundamental Theorem (§7.7-7.8) =====
  // MCQ questions
  { id: 'math7-mcq-30', text: 'The value of ∫₂³ x² dx is:\n(A) 6    (B) 19/3    (C) 9    (D) 8/3', category: 'assertion-reason', topicId: '7-7-8-definite-integrals' },
  { id: 'math7-mcq-31', text: '∫₀¹ dx/(1+x²) equals:\n(A) π/2    (B) π/4    (C) π    (D) 0', category: 'assertion-reason', topicId: '7-7-8-definite-integrals' },
  { id: 'math7-mcq-32', text: '∫₀^(π/4) tan x dx equals:\n(A) log√2    (B) log 2    (C) -log√2    (D) -(1/2)log 2', category: 'assertion-reason', topicId: '7-7-8-definite-integrals' },
  { id: 'math7-mcq-33', text: 'If A(x) = ∫ₐˣ f(t)dt, then A\'(x) equals:\n(A) f(a)    (B) F(x)-F(a)    (C) f(x)    (D) f(x)-f(a)', category: 'assertion-reason', topicId: '7-7-8-definite-integrals' },
  // 2-mark questions
  { id: 'math7-2m-31', text: 'Evaluate ∫₁² (4x³-5x²+6x+9)dx.', category: '2-mark', topicId: '7-7-8-definite-integrals' },
  { id: 'math7-2m-32', text: 'Evaluate ∫₄⁵ eˣ dx.', category: '2-mark', topicId: '7-7-8-definite-integrals' },
  { id: 'math7-2m-33', text: 'Evaluate ∫₁² x/[(x+1)(x+2)] dx.', category: '2-mark', topicId: '7-7-8-definite-integrals' },
  { id: 'math7-2m-34', text: 'Evaluate ∫₀^(π/4) sin³ 2t · cos 2t dt.', category: '2-mark', topicId: '7-7-8-definite-integrals' },
  // 3-mark questions
  { id: 'math7-3m-21', text: 'Evaluate ∫₄⁹ √x/(30-x^(3/2))² dx.', category: '3-mark', topicId: '7-7-8-definite-integrals' },
  { id: 'math7-3m-22', text: 'Evaluate ∫₁² x dx/[(x+1)(x+2)].', category: '3-mark', topicId: '7-7-8-definite-integrals' },
  // 5-mark questions
  { id: 'math7-5m-9', text: 'Find ∫₁³ (x²+x) dx as a limit of sum (or verify using FTC).', category: '5-mark', topicId: '7-7-8-definite-integrals' },

  // ===== Section 8: Evaluation by Substitution - Changing Limits (§7.9) =====
  // MCQ questions
  { id: 'math7-mcq-34', text: '∫₋₁¹ 5x⁴√(x⁵+1) dx equals:\n(A) 4√2/3    (B) 4√2    (C) 2√2    (D) 8√2/3', category: 'assertion-reason', topicId: '7-9-substitution-definite' },
  { id: 'math7-mcq-35', text: '∫₀¹ tan⁻¹x/(1+x²) dx equals:\n(A) π²/8    (B) π²/32    (C) π/4    (D) π²/4', category: 'assertion-reason', topicId: '7-9-substitution-definite' },
  { id: 'math7-mcq-36', text: '∫₀^(π/2) √(sin φ) cos⁵φ dφ equals:\n(A) 64/231    (B) 32/231    (C) 128/231    (D) 16/231', category: 'assertion-reason', topicId: '7-9-substitution-definite' },
  // 2-mark questions
  { id: 'math7-2m-35', text: 'Evaluate ∫₀¹ x/(x²+1) dx.', category: '2-mark', topicId: '7-9-substitution-definite' },
  { id: 'math7-2m-36', text: 'Evaluate ∫₀^(π/2) sin x/(1+cos²x) dx.', category: '2-mark', topicId: '7-9-substitution-definite' },
  { id: 'math7-2m-37', text: 'Evaluate ∫₀² x√(x+2) dx. (Put x+2=t²)', category: '2-mark', topicId: '7-9-substitution-definite' },
  { id: 'math7-2m-38', text: 'Evaluate ∫₁² (1/x - 1/(2x²))e^(2x) dx.', category: '2-mark', topicId: '7-9-substitution-definite' },
  // 3-mark questions
  { id: 'math7-3m-23', text: 'Evaluate ∫₀^(π/2) sin²x/(1+cos²x) dx.', category: '3-mark', topicId: '7-9-substitution-definite' },
  // 5-mark questions
  { id: 'math7-5m-10', text: 'Evaluate ∫₋₁¹ 5x⁴√(x⁵+1) dx by changing limits.', category: '5-mark', topicId: '7-9-substitution-definite' },

  // ===== Section 9: Properties of Definite Integrals P0-P7 (§7.10) =====
  // MCQ questions
  { id: 'math7-mcq-37', text: '∫₋₁¹ sin⁵x·cos⁴x dx equals:\n(A) 2/9    (B) 1/9    (C) 0    (D) -2/9', category: 'assertion-reason', topicId: '7-10-properties' },
  { id: 'math7-mcq-38', text: '∫₋π/₂^(π/2) sin²x dx equals:\n(A) 0    (B) π/4    (C) π/2    (D) π', category: 'assertion-reason', topicId: '7-10-properties' },
  { id: 'math7-mcq-39', text: 'The value of ∫₀^(π/2) log(tan x)dx is:\n(A) π/4    (B) π/2    (C) 1    (D) 0', category: 'assertion-reason', topicId: '7-10-properties' },
  { id: 'math7-mcq-40', text: '∫₀^(2π) cos⁵x dx equals:\n(A) 4/5    (B) 2/5    (C) 0    (D) 1', category: 'assertion-reason', topicId: '7-10-properties' },
  { id: 'math7-mcq-41', text: 'The value of ∫₀^(π/2) sin⁴x/(sin⁴x + cos⁴x) dx is:\n(A) π/2    (B) 0    (C) π/4    (D) π', category: 'assertion-reason', topicId: '7-10-properties' },
  // 2-mark questions
  { id: 'math7-2m-39', text: 'Evaluate ∫₀^π x sin x/(1+cos²x) dx using King Property P₄.', category: '2-mark', topicId: '7-10-properties' },
  { id: 'math7-2m-40', text: 'Evaluate ∫₀^(π/2) dx/(1+√tan x).', category: '2-mark', topicId: '7-10-properties' },
  { id: 'math7-2m-41', text: 'Evaluate ∫₋₅^5 |x+2|dx.', category: '2-mark', topicId: '7-10-properties' },
  { id: 'math7-2m-42', text: 'Show that ∫₀^(π/2) log(sin x)dx = -(π/2)log 2.', category: '2-mark', topicId: '7-10-properties' },
  { id: 'math7-2m-43', text: 'Evaluate ∫₀^4 |x-1|dx.', category: '2-mark', topicId: '7-10-properties' },
  // 3-mark questions
  { id: 'math7-3m-24', text: 'Prove: ∫₀^(π/2) sinⁿx/(sinⁿx+cosⁿx) dx = π/4, using properties.', category: '3-mark', topicId: '7-10-properties' },
  // 5-mark questions
  { id: 'math7-5m-11', text: 'Evaluate ∫₀^π x dx/(a²cos²x + b²sin²x).', category: '5-mark', topicId: '7-10-properties' },
  { id: 'math7-5m-12', text: 'Evaluate ∫₋₁^(3/2) |x·sin(πx)| dx.', category: '5-mark', topicId: '7-10-properties' },
  { id: 'math7-5m-13', text: 'Evaluate ∫₀^π log|1+cos x| dx.', category: '5-mark', topicId: '7-10-properties' },

  // ===== Assertion-Reason Questions =====
  { id: 'math7-ar-1', text: 'Assertion (A): ∫(1/x)dx = log|x| + C for all x ≠ 0.\nReason (R): d/dx(log|x|) = 1/x for x > 0.\n(A) Both A and R are true, R is the correct explanation of A\n(B) Both A and R are true, but R is not the complete explanation of A\n(C) A is true but R is false\n(D) A is false but R is true', category: 'assertion-reason', topicId: '7-1-2-introduction' },
  { id: 'math7-ar-2', text: 'Assertion (A): ∫₀^π sin x dx = 0.\nReason (R): sin x is an odd function.\n(A) Both A and R are true, R is the correct explanation of A\n(B) Both A and R are true, but R is not the correct explanation of A\n(C) A is false, R is true\n(D) A is false, R is false', category: 'assertion-reason', topicId: '7-10-properties' },
  { id: 'math7-ar-3', text: 'Assertion (A): ∫₋ₐᵃ f(x)dx = 0 if f is an odd function.\nReason (R): For odd f, f(-x) = -f(x), so contributions cancel.\n(A) Both A and R are true, R is the correct explanation of A\n(B) Both A and R are true, but R is not the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true', category: 'assertion-reason', topicId: '7-10-properties' },

  // ===== Case Study Questions =====
  { id: 'math7-cs-1', text: 'Case Study: A civil engineer calculates the area under a load-distribution curve. The curve is modeled by f(x) = 3x² + 2x + 5 over [0, 4].\n(i) Find ∫₀⁴ f(x)dx.\n(ii) The engineer doubles the interval to [0, 8]. Without computing, express the new integral in terms of the original result. Also find ∫₄⁸ f(x)dx.', category: 'case-study', topicId: '7-7-8-definite-integrals' },
  { id: 'math7-cs-2', text: 'Case Study: A physicist studying oscillations uses f(x) = sin²x + cos²x and g(x) = sin x·cos x over [0, π/2].\n(i) Find ∫₀^(π/2) g(x)dx.\n(ii) Using property P₄, evaluate ∫₀^(π/2) sin²x/(sin²x+cos²x) dx. What does the result signify?', category: 'case-study', topicId: '7-10-properties' },

  // ===== HOTS & PYQ Questions =====
  { id: 'math7-hots-1', text: 'CBSE 2024: Find ∫ dx/[x(x⁶+1)]. [Hint: Multiply num/den by x⁵]', category: 'hots', topicId: '7-5-partial-fractions' },
  { id: 'math7-hots-2', text: 'CBSE 2023: Evaluate ∫₀^(π/2) x/(sin x+cos x) dx.', category: 'hots', topicId: '7-10-properties' },
  { id: 'math7-hots-3', text: 'CBSE 2022: Find ∫(3x-1)/√(x²+9) dx.', category: 'hots', topicId: '7-4-particular-functions' },
  { id: 'math7-hots-4', text: 'CBSE 2025 (Expected type): Evaluate ∫₀^1 sin⁻¹(2x/(1+x²)) dx.', category: 'hots', topicId: '7-6-by-parts' },
  { id: 'math7-hots-5', text: 'Find ∫eˣ[(1-x)/(1+x²)]² dx.', category: 'hots', topicId: '7-6-by-parts' },
  { id: 'math7-hots-6', text: 'Evaluate ∫₀^(π/4) log(1+tan x) dx.', category: 'hots', topicId: '7-10-properties' },
  { id: 'math7-hots-7', text: 'Find ∫(x⁴+1)/(x⁶+1) dx.', category: 'hots', topicId: '7-5-partial-fractions' },
  { id: 'math7-hots-8', text: 'Evaluate ∫₀^(π/2) dx/(4+5cos x).', category: 'hots', topicId: '7-3-1-substitution' },
  { id: 'math7-hots-9', text: 'Find ∫√(tan x) dx.', category: 'hots', topicId: '7-3-1-substitution' },
  { id: 'math7-hots-10', text: 'Evaluate ∫₀^1 log(1+x)/(1+x²) dx.', category: 'hots', topicId: '7-10-properties' },
];

// Chapter 8: Application of Integrals
const chapter8Questions: Question[] = [
  // ===== 8.1 Introduction =====
  // 1-mark questions
  { id: 'math8-1m-1', text: 'What is the limitation of elementary geometry formulae when it comes to calculating areas bounded by curves?', category: '1-mark', topicId: '8-1-introduction' },
  { id: 'math8-1m-2', text: 'Name the branch of mathematics used to find the area enclosed by a curve.', category: '1-mark', topicId: '8-1-introduction' },
  { id: 'math8-1m-3', text: 'State the formula for the area of a region bounded by the curve y = f(x), the x-axis and the ordinates x = a and x = b.', category: '1-mark', topicId: '8-1-introduction' },
  { id: 'math8-1m-4', text: 'If the curve y = f(x) lies below the x-axis between x = a and x = b, what sign does the computed integral have, and how do we interpret the area?', category: '1-mark', topicId: '8-1-introduction' },
  { id: 'math8-1m-5', text: 'Write the formula for the area of a region bounded by the curve x = g(y), the y-axis and the lines y = c and y = d.', category: '1-mark', topicId: '8-1-introduction' },
  // 2-mark questions
  { id: 'math8-2m-1', text: 'Explain the concept of an "elementary area strip" used to compute the total area under a curve y = f(x). Write the expression dA and state what ydx represents geometrically.', category: '2-mark', topicId: '8-1-introduction' },
  { id: 'math8-2m-2', text: 'Explain, with a sketch description, why horizontal strips are preferred when computing the area bounded by x = g(y), the y-axis and y = c, y = d.', category: '2-mark', topicId: '8-1-introduction' },
  { id: 'math8-2m-3', text: 'A curve y = f(x) lies partly above and partly below the x-axis between x = a and x = b. Explain how the total bounded area is computed in this case.', category: '2-mark', topicId: '8-1-introduction' },
  // 3-mark questions
  { id: 'math8-3m-1', text: 'Derive the formula A = ∫ₐᵇ f(x)dx for the area bounded by a curve y = f(x) (f(x) ≥ 0), the x-axis, and ordinates x = a, x = b, using the concept of elementary strips.', category: '3-mark', topicId: '8-1-introduction' },
  { id: 'math8-3m-2', text: 'Distinguish between ∫ₐᵇ f(x)dx and the actual bounded area when f(x) changes sign in [a, b]. Give a specific example showing the difference.', category: '3-mark', topicId: '8-1-introduction' },

  // ===== 8.2 Area under Simple Curves =====
  // 1-mark questions
  { id: 'math8-1m-6', text: 'Write the elementary area strip dA when vertical strips of width dx are used under the curve y = f(x).', category: '1-mark', topicId: '8-2-simple-curves' },
  { id: 'math8-1m-7', text: 'Write the elementary area strip dA when horizontal strips of width dy are used beside the curve x = g(y).', category: '1-mark', topicId: '8-2-simple-curves' },
  { id: 'math8-1m-8', text: 'The curve y = x² lies entirely above the x-axis. Write the definite integral giving the area between y = x², x = 1, x = 3 and the x-axis.', category: '1-mark', topicId: '8-2-simple-curves' },
  { id: 'math8-1m-9', text: 'The area bounded by the curve y = f(x) between x = a and x = b comes out to be −5 sq units. What is the actual area? Why?', category: '1-mark', topicId: '8-2-simple-curves' },
  { id: 'math8-1m-10', text: 'The area bounded by y = x² (x ≥ 0), x = 0 and x = 3 equals — state the correct integral.', category: '1-mark', topicId: '8-2-simple-curves' },
  // 2-mark questions
  { id: 'math8-2m-4', text: 'Find the area bounded by the curve y = x², x-axis and the ordinates x = 1 and x = 2.', category: '2-mark', topicId: '8-2-simple-curves' },
  { id: 'math8-2m-5', text: 'Find the area bounded by the curve y = x³, x-axis and x = 0, x = 2.', category: '2-mark', topicId: '8-2-simple-curves' },
  { id: 'math8-2m-6', text: 'Find the area bounded by y² = 4x, the y-axis and the line y = 3. (Use horizontal strips.)', category: '2-mark', topicId: '8-2-simple-curves' },
  { id: 'math8-2m-7', text: 'Find the area bounded by y = √x, the x-axis and x = 4.', category: '2-mark', topicId: '8-2-simple-curves' },
  { id: 'math8-2m-8', text: 'Find the area of the region bounded by the parabola y² = 4x, the x-axis and the lines x = 0, x = 4.', category: '2-mark', topicId: '8-2-simple-curves' },
  // 3-mark questions
  { id: 'math8-3m-3', text: 'Find the area of the region bounded by y = x|x|, the x-axis and x = −1, x = 1. [Hint: y = x² if x > 0; y = −x² if x < 0]', category: '3-mark', topicId: '8-2-simple-curves' },
  { id: 'math8-3m-4', text: 'Find the area bounded by y = cos x between x = 0 and x = 2π. (Split at points where cos x changes sign.)', category: '3-mark', topicId: '8-2-simple-curves' },
  { id: 'math8-3m-5', text: 'Find the area of the region bounded by the curve y = x³, x-axis and the ordinates x = −2 and x = 1. (Note: y = x³ < 0 for x < 0.)', category: '3-mark', topicId: '8-2-simple-curves' },
  { id: 'math8-3m-6', text: 'Find the area bounded by y = |x − 1|, the x-axis, x = 0 and x = 3.', category: '3-mark', topicId: '8-2-simple-curves' },
  { id: 'math8-3m-7', text: 'Sketch and find the area enclosed between y = x² and y = x.', category: '3-mark', topicId: '8-2-simple-curves' },
  // 5-mark questions
  { id: 'math8-5m-1', text: 'Find the area bounded by y = sin x and the x-axis from x = 0 to x = 2π, taking into account the sign changes of sin x.', category: '5-mark', topicId: '8-2-simple-curves' },
  { id: 'math8-5m-2', text: 'Find the area bounded by y = 3x + 2, x-axis and x = −1, x = 1. [Note: the line crosses the x-axis within the interval.]', category: '5-mark', topicId: '8-2-simple-curves' },
  { id: 'math8-5m-3', text: 'Find the area under the curve y = x² between x = 1 and x = 2.', category: '5-mark', topicId: '8-2-simple-curves' },
  { id: 'math8-5m-4', text: 'Find the area under y = x⁴ between x = 1 and x = 5.', category: '5-mark', topicId: '8-2-simple-curves' },
  { id: 'math8-5m-5', text: 'Sketch the graph of y = |x + 3| and evaluate ∫₋₆⁰ |x + 3| dx.', category: '5-mark', topicId: '8-2-simple-curves' },

  // ===== 8.2 Area Enclosed by a Circle =====
  // 1-mark questions
  { id: 'math8-1m-11', text: 'Write the equation of a circle of radius a centred at origin. Why is it sufficient to compute the area in the first quadrant and multiply by 4?', category: '1-mark', topicId: '8-2-circle' },
  { id: 'math8-1m-12', text: 'The area of the circle x² + y² = a² is πa². Verify this by stating the definite integral used.', category: '1-mark', topicId: '8-2-circle' },
  { id: 'math8-1m-13', text: 'Area lying in the first quadrant bounded by x² + y² = 4, x = 0 and x = 2 is:\n(A) π  (B) π/2  (C) π/3  (D) π/4', category: 'assertion-reason', topicId: '8-2-circle' },
  { id: 'math8-1m-14', text: 'Which formula from Chapter 7 is used to evaluate ∫₀ᵃ √(a² − x²) dx?', category: '1-mark', topicId: '8-2-circle' },
  { id: 'math8-1m-15', text: 'State the result: ∫₀ᵃ √(a² − x²) dx = ?', category: '1-mark', topicId: '8-2-circle' },
  // 2-mark questions
  { id: 'math8-2m-9', text: 'Using vertical strips, set up the integral (do not evaluate) for the total area enclosed by the circle x² + y² = 16.', category: '2-mark', topicId: '8-2-circle' },
  { id: 'math8-2m-10', text: 'Find the area of the region in the first quadrant bounded by the circle x² + y² = 25, the x-axis and x = 0.', category: '2-mark', topicId: '8-2-circle' },
  { id: 'math8-2m-11', text: 'Find the area enclosed by the circle x² + y² = 9 using the standard result. Verify by direct integration in the first quadrant.', category: '2-mark', topicId: '8-2-circle' },
  { id: 'math8-2m-12', text: 'Show that the area of the semicircle x² + y² = r² (y ≥ 0) is πr²/2 using integration.', category: '2-mark', topicId: '8-2-circle' },
  { id: 'math8-2m-13', text: 'Using horizontal strips, find the area of the region of the circle x² + y² = a² lying in the first quadrant (set up integral and evaluate).', category: '2-mark', topicId: '8-2-circle' },
  // 3-mark questions
  { id: 'math8-3m-8', text: 'Find the whole area enclosed by the circle x² + y² = a² using vertical strips. Show all steps including evaluation of the definite integral.', category: '3-mark', topicId: '8-2-circle' },
  { id: 'math8-3m-9', text: 'Find the area enclosed by the circle x² + y² = 4 using horizontal strips. Verify that your answer equals 4π.', category: '3-mark', topicId: '8-2-circle' },
  { id: 'math8-3m-10', text: 'Find the area of the region bounded by the circle x² + y² = r², the x-axis, and x = 0, x = r (first quadrant). Show the computation clearly.', category: '3-mark', topicId: '8-2-circle' },
  // 5-mark questions
  { id: 'math8-5m-6', text: 'Find the area enclosed by the circle x² + y² = a² using both (i) vertical strips and (ii) horizontal strips. Show that both methods give πa².', category: '5-mark', topicId: '8-2-circle' },
  { id: 'math8-5m-7', text: 'Find the area of the region bounded by x² + y² = 1. Also find the area of the region in the second and third quadrant combined. (Use symmetry.)', category: '5-mark', topicId: '8-2-circle' },

  // ===== 8.2 Area Enclosed by an Ellipse =====
  // 1-mark questions
  { id: 'math8-1m-16', text: 'Write the standard form of an ellipse with semi-major axis a and semi-minor axis b. What is its total area?', category: '1-mark', topicId: '8-2-ellipse' },
  { id: 'math8-1m-17', text: 'Find the area of the region bounded by the ellipse x²/16 + y²/9 = 1.', category: '1-mark', topicId: '8-2-ellipse' },
  { id: 'math8-1m-18', text: 'Find the area of the region bounded by the ellipse x²/4 + y²/9 = 1.', category: '1-mark', topicId: '8-2-ellipse' },
  { id: 'math8-1m-19', text: 'The area of the ellipse x²/25 + y²/16 = 1 is:\n(A) 20π  (B) 25π  (C) 16π  (D) 40π', category: 'assertion-reason', topicId: '8-2-ellipse' },
  { id: 'math8-1m-20', text: 'If the area of ellipse x²/a² + y²/b² = 1 is πab, what does it reduce to when a = b = r?', category: '1-mark', topicId: '8-2-ellipse' },
  // 2-mark questions
  { id: 'math8-2m-14', text: 'Set up the integral (do not evaluate) for the area enclosed by the ellipse x²/9 + y²/4 = 1 using vertical strips. Use symmetry.', category: '2-mark', topicId: '8-2-ellipse' },
  { id: 'math8-2m-15', text: 'Find the area of the region in the first quadrant bounded by the ellipse x²/a² + y²/b² = 1.', category: '2-mark', topicId: '8-2-ellipse' },
  { id: 'math8-2m-16', text: 'Find the area bounded by the ellipse x²/4 + y²/9 = 1. Show the key steps.', category: '2-mark', topicId: '8-2-ellipse' },
  { id: 'math8-2m-17', text: 'Show that the area of the ellipse x²/a² + y²/b² = 1 can also be computed using horizontal strips, and verify it gives the same result πab.', category: '2-mark', topicId: '8-2-ellipse' },
  // 3-mark questions
  { id: 'math8-3m-11', text: 'Find the area enclosed by the ellipse x²/a² + y²/b² = 1 using vertical strips. Show all steps of integration and evaluation.', category: '3-mark', topicId: '8-2-ellipse' },
  { id: 'math8-3m-12', text: 'Find the area enclosed by the ellipse x²/16 + y²/9 = 1. Identify the semi-axes and apply the formula with justification.', category: '3-mark', topicId: '8-2-ellipse' },
  { id: 'math8-3m-13', text: 'The area of an ellipse is 6π sq. units. If one semi-axis is 2, find the other semi-axis.', category: '3-mark', topicId: '8-2-ellipse' },
  // 5-mark questions
  { id: 'math8-5m-8', text: 'Find the area enclosed by the ellipse x²/a² + y²/b² = 1 using both (i) vertical strips and (ii) horizontal strips. Prove that both yield πab.', category: '5-mark', topicId: '8-2-ellipse' },
  { id: 'math8-5m-9', text: 'Find the area of the region bounded by the ellipse x²/4 + y²/9 = 1. Also find the area of the region outside the ellipse but inside the rectangle formed by x = ±2 and y = ±3.', category: '5-mark', topicId: '8-2-ellipse' },

  // ===== 8.2 Area Bounded by Parabolas =====
  // 1-mark questions
  { id: 'math8-1m-21', text: 'Area of the region bounded by y² = 4x, the y-axis and y = 3 is:\n(A) 2  (B) 9/4  (C) 9/3  (D) 9/2', category: 'assertion-reason', topicId: '8-2-parabola' },
  { id: 'math8-1m-22', text: 'For the parabola y² = 4ax, express x in terms of y. Which axis do you integrate along if you use horizontal strips?', category: '1-mark', topicId: '8-2-parabola' },
  { id: 'math8-1m-23', text: 'What is the area bounded by the parabola x² = 4ay, x-axis, and ordinates x = 0 and x = 2a (first quadrant)?', category: '1-mark', topicId: '8-2-parabola' },
  { id: 'math8-1m-24', text: 'State the integral for the area bounded by y² = 4x and the line x = 9 (first quadrant).', category: '1-mark', topicId: '8-2-parabola' },
  // 2-mark questions
  { id: 'math8-2m-18', text: 'Find the area bounded by y² = 4x, the x-axis (y = 0) and x = 4, using vertical strips.', category: '2-mark', topicId: '8-2-parabola' },
  { id: 'math8-2m-19', text: 'Find the area enclosed between the parabola y² = 4x and the line x = 1.', category: '2-mark', topicId: '8-2-parabola' },
  { id: 'math8-2m-20', text: 'Find the area bounded by y = x², x-axis and x = −3, x = 3.', category: '2-mark', topicId: '8-2-parabola' },
  { id: 'math8-2m-21', text: 'Find the area bounded by y² = 4ax and its latus rectum (x = a).', category: '2-mark', topicId: '8-2-parabola' },
  { id: 'math8-2m-22', text: 'Find the area of the region bounded by x² = y, y = 1 and the y-axis (first quadrant).', category: '2-mark', topicId: '8-2-parabola' },
  // 3-mark questions
  { id: 'math8-3m-14', text: 'Find the area of the region enclosed between the parabola y² = 4x and the line x = 3. (Use horizontal strips.)', category: '3-mark', topicId: '8-2-parabola' },
  { id: 'math8-3m-15', text: 'Find the area of the region bounded by y² = 4x, y-axis and y = 3 (first quadrant). Which type of strips is most convenient? Justify.', category: '3-mark', topicId: '8-2-parabola' },
  { id: 'math8-3m-16', text: 'Find the area bounded by the parabola x² = 4y, the line x = 4 and the x-axis.', category: '3-mark', topicId: '8-2-parabola' },
  { id: 'math8-3m-17', text: 'Find the area of the parabola y² = 16x cut off by the latus rectum.', category: '3-mark', topicId: '8-2-parabola' },
  { id: 'math8-3m-18', text: 'Find the area of the region bounded by y² = x, x = 1, x = 4 and the x-axis (first quadrant).', category: '3-mark', topicId: '8-2-parabola' },
  // 5-mark questions
  { id: 'math8-5m-10', text: 'Find the area of the region bounded by the parabola y = x² and y = |x|.', category: '5-mark', topicId: '8-2-parabola' },
  { id: 'math8-5m-11', text: 'Find the area of the region bounded by the two parabolas y = x² and x = y².', category: '5-mark', topicId: '8-2-parabola' },
  { id: 'math8-5m-12', text: 'Find the area bounded by the curve y² = 4x and the line y = 4x − 2. (Find intersection points first.)', category: '5-mark', topicId: '8-2-parabola' },
  { id: 'math8-5m-13', text: 'Find the area under y = x⁴ between x = 1 and x = 5.', category: '5-mark', topicId: '8-2-parabola' },
  { id: 'math8-5m-14', text: 'Find the area bounded by the parabola y = 2 − x² and the x-axis.', category: '5-mark', topicId: '8-2-parabola' },

  // ===== 8.3 Miscellaneous - Lines, Modulus, Trig Curves, Area Between Curves =====
  // 1-mark questions
  { id: 'math8-1m-25', text: 'Find the area bounded by y = x³, x-axis and x = −2 and x = 1. [The curve dips below x-axis for x < 0.]', category: '1-mark', topicId: '8-misc' },
  { id: 'math8-1m-26', text: 'Area bounded by y = x³, x-axis and x = −2, x = 1 is:\n(A) −9  (B) −15/4  (C) 15/4  (D) 17/4', category: 'assertion-reason', topicId: '8-misc' },
  { id: 'math8-1m-27', text: 'The area bounded by y = x|x|, x-axis and x = −1, x = 1 is:\n(A) 0  (B) 1/3  (C) 2/3  (D) 4/3', category: 'assertion-reason', topicId: '8-misc' },
  { id: 'math8-1m-28', text: 'The line y = 3x + 2 crosses the x-axis at x = −2/3. Why must the area calculation be split at this point?', category: '1-mark', topicId: '8-misc' },
  // 2-mark questions
  { id: 'math8-2m-23', text: 'Sketch the graph of y = |x + 3| and evaluate ∫₋₆⁰ |x + 3| dx.', category: '2-mark', topicId: '8-misc' },
  { id: 'math8-2m-24', text: 'Find the area bounded by the curve y = sin x between x = 0 and x = π.', category: '2-mark', topicId: '8-misc' },
  { id: 'math8-2m-25', text: 'Find the area bounded by y = cos x between x = 0 and x = π/2.', category: '2-mark', topicId: '8-misc' },
  { id: 'math8-2m-26', text: 'Find the area of the region bounded by y = 2x + 1, x-axis, x = −1 and x = 2. (Check whether line crosses x-axis in [−1, 2].)', category: '2-mark', topicId: '8-misc' },
  // 3-mark questions
  { id: 'math8-3m-19', text: 'Find the area bounded by the curve y = sin x between x = 0 and x = 2π. (Split at x = π where sin x changes sign.)', category: '3-mark', topicId: '8-misc' },
  { id: 'math8-3m-20', text: 'Find the area bounded by the line y = 3x + 2, x-axis and the ordinates x = −1 and x = 1. Show work with clear splitting of the interval at x = −2/3.', category: '3-mark', topicId: '8-misc' },
  { id: 'math8-3m-21', text: 'Find the area of the region bounded by y = cos x and the x-axis from x = 0 to x = 2π. Show all three sub-regions.', category: '3-mark', topicId: '8-misc' },
  { id: 'math8-3m-22', text: 'Sketch and find the area bounded by y = |x − 2|, x-axis, x = 0 and x = 4.', category: '3-mark', topicId: '8-misc' },
  { id: 'math8-3m-23', text: 'Find the area bounded by y = x³ − x between x = −1 and x = 1. (Note: f changes sign.)', category: '3-mark', topicId: '8-misc' },
  // 5-mark questions
  { id: 'math8-5m-15', text: 'Find the area of the region bounded by y = 3x + 2, x-axis and x = −1 to x = 1. [The line crosses x-axis at x = −2/3; split and compute both parts carefully.]', category: '5-mark', topicId: '8-misc' },
  { id: 'math8-5m-16', text: 'Find the area bounded by the curve y = cos x between x = 0 and x = 2π. [Three sub-regions: [0, π/2], [π/2, 3π/2], [3π/2, 2π].]', category: '5-mark', topicId: '8-misc' },
  { id: 'math8-5m-17', text: 'Find the area of the region enclosed by the curves y = x² and y = 4. Identify the intersection points and compute the area using appropriate strips.', category: '5-mark', topicId: '8-misc' },

  // ===== Assertion-Reason Questions =====
  { id: 'math8-ar-1', text: 'Assertion (A): The area enclosed by the circle x² + y² = r² equals πr².\nReason (R): Area = 4∫₀ʳ √(r² − x²) dx by symmetry, and this evaluates to πr².\n(A) Both A and R are true, R is the correct explanation of A\n(B) Both A and R are true, but R is not the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true', category: 'assertion-reason', topicId: '8-2-circle' },
  { id: 'math8-ar-2', text: 'Assertion (A): The area of the ellipse x²/a² + y²/b² = 1 is πab.\nReason (R): The ellipse is symmetric about both axes, so Area = 4 × (first-quadrant area) = 4 × (b/a) × ∫₀ᵃ √(a² − x²) dx.\n(A) Both A and R are true, R is the correct explanation of A\n(B) Both A and R are true, but R is not the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true', category: 'assertion-reason', topicId: '8-2-ellipse' },
  { id: 'math8-ar-3', text: 'Assertion (A): ∫₋₁¹ x³ dx = 0 and hence the "area" is zero.\nReason (R): y = x³ is an odd function and its areas above and below the x-axis cancel.\n(A) Both A and R are true, R is the correct explanation of A\n(B) Both A and R are true, but R is not the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true', category: 'assertion-reason', topicId: '8-misc' },

  // ===== Case Study Questions =====
  { id: 'math8-cs-1', text: 'Case Study: A landscape architect designs a fountain enclosure whose cross-section is described by the ellipse x²/25 + y²/16 = 1 (in metres). He needs to tile the floor of the fountain.\n(i) Find the total area of the elliptical floor that needs to be tiled.\n(ii) If only the region in the first quadrant is to be carpeted with a special material, find that area.', category: 'case-study', topicId: '8-2-ellipse' },
  { id: 'math8-cs-2', text: 'Case Study: A farmer wants to fence a parabolic plot. The boundary is described by y² = 8x, from x = 0 to the line x = 2.\n(i) Identify the type of curve and find its focus and latus rectum.\n(ii) Find the area bounded by y² = 8x, x = 0 and x = 2.', category: 'case-study', topicId: '8-2-parabola' },

  // ===== HOTS & PYQ Questions =====
  { id: 'math8-hots-1', text: '[CBSE 2024] Find the area of the region bounded by the curve y = x² and the line y = 4.', category: 'hots', topicId: '8-misc' },
  { id: 'math8-hots-2', text: '[CBSE 2023] Find the area enclosed between the parabola y² = 4x and the line x = 1.', category: 'hots', topicId: '8-2-parabola' },
  { id: 'math8-hots-3', text: '[CBSE 2022] Using integration, find the area of the region bounded by the ellipse x²/4 + y²/9 = 1.', category: 'hots', topicId: '8-2-ellipse' },
  { id: 'math8-hots-4', text: '[CBSE 2022] Find the area of the smaller region bounded by the ellipse x²/9 + y²/4 = 1 and the line x/3 + y/2 = 1.', category: 'hots', topicId: '8-2-ellipse' },
  { id: 'math8-hots-5', text: '[CBSE 2020] Find the area of the region bounded by the parabola y = x² and y = |x|.', category: 'hots', topicId: '8-misc' },
  { id: 'math8-hots-6', text: '[CBSE 2019] Using integration, find the area of the triangle with vertices at A(1, 0), B(2, 2) and C(3, 1).', category: 'hots', topicId: '8-misc' },
  { id: 'math8-hots-7', text: '[CBSE 2025 Expected] Find the area of the region in the first quadrant enclosed by the x-axis, the line x = √3 y and the circle x² + y² = 4.', category: 'hots', topicId: '8-2-circle' },
  { id: 'math8-hots-8', text: 'Find the area of the region {(x, y) : y² ≤ 4x, 4x² + 4y² ≤ 9}. [Area inside circle but inside/outside parabola — split carefully.]', category: 'hots', topicId: '8-misc' },
  { id: 'math8-hots-9', text: 'Find the area of the region bounded by the curves y = √x, y = x/2 and the x-axis in the first quadrant.', category: 'hots', topicId: '8-misc' },
  { id: 'math8-hots-10', text: 'Using integration, find the area of the region bounded by x² + y² ≤ 4, x ≥ 0 and y ≥ 0. Verify using geometry.', category: 'hots', topicId: '8-2-circle' },
  { id: 'math8-hots-11', text: 'Find the area of the region {(x, y) : 0 ≤ y ≤ x² + 1, 0 ≤ y ≤ x + 1, 0 ≤ x ≤ 2}.', category: 'hots', topicId: '8-misc' },
  { id: 'math8-hots-12', text: 'Find the area bounded by the curve y = x² − 2x − 3 and the x-axis. [Curve crosses x-axis at x = −1 and x = 3.]', category: 'hots', topicId: '8-misc' },
  { id: 'math8-hots-13', text: 'Find the area of the region bounded by the parabola y = x², the tangent to the parabola at the point (2, 4) and the x-axis.', category: 'hots', topicId: '8-misc' },
];

// Chapter 9: Differential Equations
const chapter9Questions: Question[] = [
  // ===== 9.1 Introduction to Differential Equations =====
  // MCQ questions
  { id: 'math9-mcq-1', text: 'Which of the following is a differential equation?\n(A) x² + 3x + 5 = 0\n(B) sin x + cos y = 0\n(C) dy/dx = x + y\n(D) x + y = 7', category: 'assertion-reason', topicId: '9-1-introduction' },
  // 1-mark questions
  { id: 'math9-1m-1', text: 'Define a differential equation. Give one example.', category: '1-mark', topicId: '9-1-introduction' },
  { id: 'math9-1m-2', text: 'What is the difference between an ordinary differential equation and a partial differential equation?', category: '1-mark', topicId: '9-1-introduction' },

  // ===== 9.2 Order and Degree of Differential Equations =====
  // MCQ questions
  { id: 'math9-mcq-2', text: 'The order of d²y/dx² + dy/dx + y = 0 is:\n(A) 1    (B) 2    (C) 3    (D) Not defined', category: 'assertion-reason', topicId: '9-2-order-degree' },
  { id: 'math9-mcq-3', text: 'The order of 2x²(d²y/dx²) - 3(dy/dx) + y = 0 is:\n(A) 0    (B) 1    (C) 2    (D) Not defined', category: 'assertion-reason', topicId: '9-2-order-degree' },
  { id: 'math9-mcq-4', text: 'The order of d⁴y/dx⁴ + sin(y\'\'\') = 0 is:\n(A) 1    (B) 2    (C) 3    (D) 4', category: 'assertion-reason', topicId: '9-2-order-degree' },
  { id: 'math9-mcq-5', text: 'The degree of (d²y/dx²)³ + (dy/dx)² + sin(dy/dx) + 1 = 0 is:\n(A) 3    (B) 2    (C) 1    (D) Not defined', category: 'assertion-reason', topicId: '9-2-order-degree' },
  { id: 'math9-mcq-6', text: 'For (y\'\'\')² + (y\'\')³ + (y\')⁴ + y⁵ = 0, the order and degree are:\n(A) 3 and 2    (B) 3 and 3    (C) 3 and 1    (D) 2 and 3', category: 'assertion-reason', topicId: '9-2-order-degree' },
  { id: 'math9-mcq-7', text: 'The degree of (d²y/dx²)² + cos(dy/dx) = 0 is:\n(A) 2    (B) 1    (C) 0    (D) Not defined', category: 'assertion-reason', topicId: '9-2-order-degree' },
  // 2-mark questions
  { id: 'math9-2m-1', text: 'Find the order and degree (if defined) of: (d²y/dx²)² + cos(dy/dx) = 0.', category: '2-mark', topicId: '9-2-order-degree' },
  { id: 'math9-2m-2', text: 'Find order and degree of: (d³y/dx³) + x²(d²y/dx²)³ = 0.', category: '2-mark', topicId: '9-2-order-degree' },
  { id: 'math9-2m-3', text: 'Determine order and degree of: (ds/dt)⁴ + 3s(d²s/dt²) = 0.', category: '2-mark', topicId: '9-2-order-degree' },
  { id: 'math9-2m-4', text: 'Find the order and degree of: d²y/dx² = [1 + (dy/dx)²]^(3/2).', category: '2-mark', topicId: '9-2-order-degree' },
  { id: 'math9-2m-5', text: 'Find the order and degree of: (d²y/dx²)² + (dy/dx)³ + sin y = 0.', category: '2-mark', topicId: '9-2-order-degree' },

  // ===== 9.3 General and Particular Solutions =====
  // MCQ questions
  { id: 'math9-mcq-8', text: 'Number of arbitrary constants in the general solution of a 4th order ODE:\n(A) 0    (B) 2    (C) 3    (D) 4', category: 'assertion-reason', topicId: '9-3-solutions' },
  { id: 'math9-mcq-9', text: 'Number of arbitrary constants in a particular solution of a 3rd order ODE:\n(A) 3    (B) 2    (C) 1    (D) 0', category: 'assertion-reason', topicId: '9-3-solutions' },
  { id: 'math9-mcq-10', text: 'Which function satisfies dy/dx = y?\n(A) y = x²    (B) y = eˣ    (C) y = sin x    (D) y = cos x', category: 'assertion-reason', topicId: '9-3-solutions' },
  // 2-mark questions
  { id: 'math9-2m-6', text: 'Verify that y = eˣ + 1 is a solution of y\'\' - y\' = 0.', category: '2-mark', topicId: '9-3-solutions' },
  { id: 'math9-2m-7', text: 'Verify that y = cos x + C is a solution of y\' + sin x = 0.', category: '2-mark', topicId: '9-3-solutions' },
  { id: 'math9-2m-8', text: 'Form the ODE of the family y = A cos x + B sin x (A, B arbitrary constants).', category: '2-mark', topicId: '9-3-solutions' },
  { id: 'math9-2m-9', text: 'Verify that y = x sin x is a solution of x²y\'\' - 2xy\' + (x² + 2)y = 0.', category: '2-mark', topicId: '9-3-solutions' },
  // 3-mark questions
  { id: 'math9-3m-1', text: 'Form the ODE of the family y = Aeˣ + Be⁻ˣ + x² (A, B arbitrary constants).', category: '3-mark', topicId: '9-3-solutions' },
  { id: 'math9-3m-2', text: 'Form the ODE of the family y = eˣ(A cos x + B sin x).', category: '3-mark', topicId: '9-3-solutions' },
  { id: 'math9-3m-3', text: 'Form the ODE of circles centred at origin: x² + y² = a².', category: '3-mark', topicId: '9-3-solutions' },
  { id: 'math9-3m-4', text: 'Form the ODE of the family y = Ax + A³ (Clairaut equation form).', category: '3-mark', topicId: '9-3-solutions' },

  // ===== 9.4.1 Variable Separable Method =====
  // MCQ questions
  { id: 'math9-mcq-11', text: 'General solution of dy/dx = e^(x+y) is:\n(A) eˣ + e⁻ʸ = C    (B) eˣ - e⁻ʸ = C    (C) eˣ + eʸ = C    (D) e⁻ˣ + eʸ = C', category: 'assertion-reason', topicId: '9-4-1-variable-separable' },
  { id: 'math9-mcq-12', text: 'Solution of x⁵(dy/dx) = -y⁵ is:\n(A) x⁻⁴ + y⁻⁴ = C    (B) x⁻⁴ - y⁻⁴ = C    (C) x⁴ + y⁴ = C    (D) None of these', category: 'assertion-reason', topicId: '9-4-1-variable-separable' },
  // 3-mark questions
  { id: 'math9-3m-5', text: 'Find general solution of dy/dx = (1 - cos x)/(1 + cos x).', category: '3-mark', topicId: '9-4-1-variable-separable' },
  { id: 'math9-3m-6', text: 'Solve: dy/dx = √(4 - y²), where -2 < y < 2.', category: '3-mark', topicId: '9-4-1-variable-separable' },
  { id: 'math9-3m-7', text: 'Solve: y log y dx - x dy = 0.', category: '3-mark', topicId: '9-4-1-variable-separable' },
  { id: 'math9-3m-8', text: 'Find particular solution of dy/dx = -4xy² given y=1 when x=0.', category: '3-mark', topicId: '9-4-1-variable-separable' },
  { id: 'math9-3m-9', text: 'Find equation of curve through (1,1) with differential equation x dy = (2x²+1)dx (x≠0).', category: '3-mark', topicId: '9-4-1-variable-separable' },
  { id: 'math9-3m-10', text: 'Solve: dy/dx = (1 + y²)/(1 + x²).', category: '3-mark', topicId: '9-4-1-variable-separable' },
  { id: 'math9-3m-11', text: 'Solve: sec²x tan y dx + sec²y tan x dy = 0.', category: '3-mark', topicId: '9-4-1-variable-separable' },
  { id: 'math9-3m-12', text: 'Solve: (eˣ + e⁻ˣ)dy - (eˣ - e⁻ˣ)dx = 0.', category: '3-mark', topicId: '9-4-1-variable-separable' },

  // ===== 9.4.2 Homogeneous Differential Equations =====
  // MCQ questions
  { id: 'math9-mcq-13', text: 'dx/dy = h(x/y) is solved by substitution:\n(A) y = vx    (B) v = yx    (C) x = vy    (D) x = v', category: 'assertion-reason', topicId: '9-4-2-homogeneous' },
  { id: 'math9-mcq-14', text: 'Which of the following is a homogeneous differential equation?\n(A) (4x+6y+5)dy - (3y+2x+4)dx = 0\n(B) (xy)dx - (x³+y³)dy = 0\n(C) (x³+2y²)dx + 2xy dy = 0\n(D) y² dx + (x² - xy - y²)dy = 0', category: 'assertion-reason', topicId: '9-4-2-homogeneous' },
  // 3-mark questions
  { id: 'math9-3m-13', text: 'Solve: dy/dx = (x + y)/x.', category: '3-mark', topicId: '9-4-2-homogeneous' },
  { id: 'math9-3m-14', text: 'Solve (x² - y²)dx + 2xy dy = 0.', category: '3-mark', topicId: '9-4-2-homogeneous' },
  { id: 'math9-3m-15', text: 'Show the equation x cos(y/x)(dy/dx) = y cos(y/x) + x is homogeneous and solve it.', category: '3-mark', topicId: '9-4-2-homogeneous' },
  { id: 'math9-3m-16', text: 'Solve: dy/dx = (x² + y²)/(2xy).', category: '3-mark', topicId: '9-4-2-homogeneous' },
  { id: 'math9-3m-17', text: 'Solve: x dy - y dx = √(x² + y²) dx.', category: '3-mark', topicId: '9-4-2-homogeneous' },
  // 5-mark questions
  { id: 'math9-5m-1', text: 'Show that (x - y)(dy/dx) = x + 2y is homogeneous and solve it completely.', category: '5-mark', topicId: '9-4-2-homogeneous' },
  { id: 'math9-5m-2', text: 'Show 2y·e^(x/y)dx + (y - 2x·e^(x/y))dy = 0 is homogeneous. Find particular solution given x=0 when y=1.', category: '5-mark', topicId: '9-4-2-homogeneous' },
  { id: 'math9-5m-3', text: 'Solve the homogeneous equation: (x² + y²)dx - 2xy dy = 0.', category: '5-mark', topicId: '9-4-2-homogeneous' },

  // ===== 9.4.3 Linear Differential Equations =====
  // MCQ questions
  { id: 'math9-mcq-15', text: 'I.F. of x(dy/dx) - y = 2x² is:\n(A) e⁻ˣ    (B) e⁻ʸ    (C) 1/x    (D) x', category: 'assertion-reason', topicId: '9-4-3-linear' },
  { id: 'math9-mcq-16', text: 'General solution of eˣ dy + (yeˣ + 2x)dx = 0 is:\n(A) xeʸ + x² = C    (B) xeʸ + y² = C    (C) yeˣ + x² = C    (D) yeʸ + x² = C', category: 'assertion-reason', topicId: '9-4-3-linear' },
  { id: 'math9-mcq-17', text: 'I.F. of (1-y²)(dx/dy) + yx = ay, (-1 < y < 1):\n(A) 1/(y²-1)    (B) 1/√(y²-1)    (C) 1/(1-y²)    (D) 1/√(1-y²)', category: 'assertion-reason', topicId: '9-4-3-linear' },
  // 3-mark questions
  { id: 'math9-3m-18', text: 'Find general solution of dy/dx - y = cos x.', category: '3-mark', topicId: '9-4-3-linear' },
  { id: 'math9-3m-19', text: 'Solve: x(dy/dx) + 2y = x² (x ≠ 0).', category: '3-mark', topicId: '9-4-3-linear' },
  { id: 'math9-3m-20', text: 'Solve: y dx - (x + 2y²)dy = 0.', category: '3-mark', topicId: '9-4-3-linear' },
  { id: 'math9-3m-21', text: 'Find particular solution of dy/dx + y cot x = 4x cosec x (x≠0), y=0 when x=π/2.', category: '3-mark', topicId: '9-4-3-linear' },
  { id: 'math9-3m-22', text: 'Solve: dy/dx + 2y tan x = sin x.', category: '3-mark', topicId: '9-4-3-linear' },
  { id: 'math9-3m-23', text: 'Solve: cos²x (dy/dx) + y = tan x.', category: '3-mark', topicId: '9-4-3-linear' },
  { id: 'math9-3m-24', text: 'Solve: x(dy/dx) + y = x log x.', category: '3-mark', topicId: '9-4-3-linear' },
  // 5-mark questions
  { id: 'math9-5m-4', text: 'Find particular solution of dy/dx + y cot x = 2x + x² cot x (x≠0), given y=0 when x=π/2.', category: '5-mark', topicId: '9-4-3-linear' },
  { id: 'math9-5m-5', text: 'Solve (tan⁻¹y - x)dy = (1 + y²)dx and write general solution.', category: '5-mark', topicId: '9-4-3-linear' },
  { id: 'math9-5m-6', text: 'Solve: (1 + y²)dx = (tan⁻¹y - x)dy.', category: '5-mark', topicId: '9-4-3-linear' },

  // ===== 9.5 Applications of Differential Equations =====
  // 5-mark questions
  { id: 'math9-5m-7', text: 'A principal P in a bank grows continuously at 5% per year. (i) Write the ODE. (ii) How long for Rs 1000 to double?', category: '5-mark', topicId: '9-misc-applications' },
  { id: 'math9-5m-8', text: 'Find equation of curve through (0,1) where slope of tangent = x + xy at any point.', category: '5-mark', topicId: '9-misc-applications' },
  { id: 'math9-5m-9', text: 'Bacteria count is 1,00,000; increases 10% in 2 hr. In how many hours will it reach 2,00,000?', category: '5-mark', topicId: '9-misc-applications' },
  { id: 'math9-5m-10', text: 'The rate of increase of bacteria in a culture is proportional to the number present. If it doubles in 5 hours, in how many hours will it triple?', category: '5-mark', topicId: '9-misc-applications' },
  { id: 'math9-5m-11', text: 'The surface area of a balloon being inflated changes at a rate proportional to time t. If initially its radius is 1 unit and after 3 seconds it is 2 units, find the radius after time t.', category: '5-mark', topicId: '9-misc-applications' },
  { id: 'math9-5m-12', text: 'In a bank, principal increases continuously at the rate of r% per year. Find the value of r if Rs 100 doubles itself in 10 years (log₁₀ 2 = 0.6931).', category: '5-mark', topicId: '9-misc-applications' },

  // ===== Assertion-Reason Questions =====
  { id: 'math9-ar-1', text: 'Assertion (A): The degree of d²y/dx² + 3(dy/dx)² = x² log(d²y/dx²) is not defined.\nReason (R): Degree is defined only when the ODE is a polynomial equation in its derivatives.\n(A) Both A and R are true, R is the correct explanation of A\n(B) Both A and R are true, R is NOT the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true', category: 'assertion-reason', topicId: '9-2-order-degree' },
  { id: 'math9-ar-2', text: 'Assertion (A): y = A sin x + B cos x is the general solution of d²y/dx² + y = 0.\nReason (R): A general solution of a second-order ODE contains exactly two arbitrary constants.\n(A) Both A and R are true, R is the correct explanation of A\n(B) Both A and R are true, R is NOT the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true', category: 'assertion-reason', topicId: '9-3-solutions' },
  { id: 'math9-ar-3', text: 'Assertion (A): dy/dx = (x + y)/x is a homogeneous differential equation.\nReason (R): dy/dx = F(x,y) is homogeneous if F(λx, λy) = λ⁰·F(x,y).\n(A) Both A and R are true, R is the correct explanation of A\n(B) Both A and R are true, R is NOT the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true', category: 'assertion-reason', topicId: '9-4-2-homogeneous' },
  { id: 'math9-ar-4', text: 'Assertion (A): For the linear ODE dy/dx + Py = Q, the integrating factor is e^(∫P dx).\nReason (R): Multiplying by I.F. converts LHS into exact derivative d(y·I.F.)/dx.\n(A) Both A and R are true, R is the correct explanation of A\n(B) Both A and R are true, R is NOT the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true', category: 'assertion-reason', topicId: '9-4-3-linear' },
  { id: 'math9-ar-5', text: 'Assertion (A): The general solution of dy/dx = y/x is y = Cx.\nReason (R): The method of separation of variables cannot be applied to dy/dx = y/x.\n(A) Both A and R are true, R is the correct explanation of A\n(B) Both A and R are true, R is NOT the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true', category: 'assertion-reason', topicId: '9-4-1-variable-separable' },

  // ===== Case Study Questions =====
  { id: 'math9-cs-1', text: 'Case Study: A biologist studies a bacterial colony. The population N(t) grows at a rate proportional to N at time t. Initially N = N₀. The population doubles in 2 hours.\n(1) Write the differential equation governing population growth.\n(2) Solve the ODE to express N as a function of t.\n(3) Find the proportionality constant k given that N doubles in 2 hours.\n(4) After how many hours will the population be 8·N₀?', category: 'case-study', topicId: '9-misc-applications' },
  { id: 'math9-cs-2', text: 'Case Study: A bank offers continuous compounding at r% per year. A customer deposits Rs 10,000. The amount doubles in 10 years.\n(1) Formulate the differential equation for amount A at time t.\n(2) Write the general solution of this ODE.\n(3) Find the rate r% (use logₑ 2 = 0.6931).\n(4) What is the amount after 20 years?', category: 'case-study', topicId: '9-misc-applications' },
  { id: 'math9-cs-3', text: 'Case Study: The slope of the tangent at any point (x, y) on a curve is (x² + y²)/(2xy). The curve passes through (1, 1).\n(1) Verify that this ODE is homogeneous.\n(2) What substitution should be used to solve it?\n(3) After substitution y = vx, derive the separable equation in v and x.\n(4) Find the equation of the specific curve through (1, 1).', category: 'case-study', topicId: '9-4-2-homogeneous' },

  // ===== HOTS Questions =====
  { id: 'math9-hots-1', text: 'Solve the differential equation: (x + y)(dx - dy) = dx + dy.', category: 'hots', topicId: '9-4-1-variable-separable' },
  { id: 'math9-hots-2', text: 'Find the particular solution of (x + 1)dy/dx = 2e⁻ʸ - 1, given y = 0 when x = 0.', category: 'hots', topicId: '9-4-1-variable-separable' },
  { id: 'math9-hots-3', text: 'Solve: [y - x tan(y/x)]dx + x tan(y/x)dy = 0.', category: 'hots', topicId: '9-4-2-homogeneous' },
  { id: 'math9-hots-4', text: 'Solve: x²dy + y(x + y)dx = 0, given y = 1 when x = 1.', category: 'hots', topicId: '9-4-2-homogeneous' },
  { id: 'math9-hots-5', text: 'Solve: (x cos x + sin x)dx + (x sin x)dy = 0.', category: 'hots', topicId: '9-4-3-linear' },
  { id: 'math9-hots-6', text: 'Solve: dy/dx + y·sec x = tan x.', category: 'hots', topicId: '9-4-3-linear' },
  { id: 'math9-hots-7', text: 'Find the equation of the curve passing through origin, given that the slope of the tangent at any point (x, y) equals (y + 2x)/x.', category: 'hots', topicId: '9-4-2-homogeneous' },
  { id: 'math9-hots-8', text: 'The decay of a radioactive substance is proportional to the amount present. If half of the substance decays in 1600 years, find the percentage that remains after 800 years.', category: 'hots', topicId: '9-misc-applications' },
  { id: 'math9-hots-9', text: 'Newton\'s Law of Cooling: A body cools from 80°C to 60°C in 20 min. Ambient temp is 20°C. When will it reach 40°C?', category: 'hots', topicId: '9-misc-applications' },
  { id: 'math9-hots-10', text: 'Solve the Bernoulli equation: dy/dx + y/x = y² log x.', category: 'hots', topicId: '9-4-3-linear' },
];

// ========== CHAPTER 10: VECTOR ALGEBRA ==========
const chapter10Questions: Question[] = [
  // ===== 10.1-10.2 Introduction, Scalars & Vectors, Direction Cosines =====
  // MCQ - 1 Mark
  { id: 'math10-mcq-1', text: 'Which of the following is a scalar quantity?\n(A) Displacement\n(B) Velocity\n(C) Force\n(D) Work done', category: '1-mark', topicId: '10-1-introduction' },
  { id: 'math10-mcq-2', text: 'The position vector of a point P(3, -4, 5) has magnitude:\n(A) √12\n(B) 5√2\n(C) √50\n(D) √41', category: '1-mark', topicId: '10-2-position-direction' },
  { id: 'math10-mcq-3', text: 'If l, m, n are direction cosines of a vector, then l² + m² + n² equals:\n(A) 0\n(B) 2\n(C) 1\n(D) Cannot be determined', category: '1-mark', topicId: '10-2-position-direction' },

  // ===== 10.3 Types of Vectors =====
  { id: 'math10-mcq-4', text: 'A vector whose magnitude is unity is called:\n(A) Zero vector\n(B) Unit vector\n(C) Free vector\n(D) Collinear vector', category: '1-mark', topicId: '10-3-types-vectors' },
  { id: 'math10-mcq-5', text: 'Two vectors are said to be equal if they have the same:\n(A) Magnitude only\n(B) Direction only\n(C) Magnitude and direction\n(D) Initial points', category: '1-mark', topicId: '10-3-types-vectors' },
  { id: 'math10-mcq-6', text: 'Which statement is FALSE about collinear vectors?\n(A) They are parallel to the same line\n(B) They may have different magnitudes\n(C) They must have the same initial point\n(D) They may have opposite directions', category: '1-mark', topicId: '10-3-types-vectors' },

  // ===== 10.4 Addition of Vectors =====
  { id: 'math10-mcq-7', text: 'In triangle ABC, AB⃗ + BC⃗ + CA⃗ equals:\n(A) AB⃗\n(B) Zero vector (0⃗)\n(C) BC⃗\n(D) AC⃗', category: '1-mark', topicId: '10-4-addition-vectors' },
  { id: 'math10-mcq-8', text: 'The triangle law of vector addition states that if a girl moves from A to B and then B to C, the resultant is:\n(A) AB⃗\n(B) BC⃗\n(C) CA⃗\n(D) AC⃗', category: '1-mark', topicId: '10-4-addition-vectors' },

  // ===== 10.5 Multiplication by Scalar & Components =====
  { id: 'math10-mcq-9', text: 'The unit vector in the direction of vector a⃗ = 2î + 3ĵ + k̂ is:\n(A) (2î + 3ĵ + k̂)/√14\n(B) (2î + 3ĵ + k̂)/14\n(C) (2î + 3ĵ + k̂)/√12\n(D) (î + ĵ + k̂)/√3', category: '1-mark', topicId: '10-5-scalar-multiplication' },
  { id: 'math10-mcq-10', text: 'If a⃗ = xî + yĵ + zk̂, the direction ratios of a⃗ are:\n(A) x/r, y/r, z/r where r = |a⃗|\n(B) x, y, z\n(C) x², y², z²\n(D) 1/x, 1/y, 1/z', category: '1-mark', topicId: '10-5-scalar-multiplication' },

  // ===== 10.5.3 Section Formula =====
  { id: 'math10-mcq-11', text: 'R divides PQ internally in ratio m:n. If position vectors of P and Q are a⃗ and b⃗, then OR⃗ =\n(A) (ma⃗ + nb⃗)/(m+n)\n(B) (mb⃗ + na⃗)/(m+n)\n(C) (ma⃗ - nb⃗)/(m-n)\n(D) (a⃗ + b⃗)/2', category: '1-mark', topicId: '10-5-3-section-formula' },
  { id: 'math10-mcq-12', text: 'The midpoint of segment joining P(position vector a⃗) and Q(position vector b⃗) has position vector:\n(A) a⃗ - b⃗\n(B) a⃗ + b⃗\n(C) (a⃗ + b⃗)/2\n(D) (a⃗ - b⃗)/2', category: '1-mark', topicId: '10-5-3-section-formula' },

  // ===== 10.6.1 Scalar (Dot) Product =====
  { id: 'math10-mcq-13', text: 'If a⃗ and b⃗ are perpendicular nonzero vectors, then a⃗·b⃗ equals:\n(A) |a⃗||b⃗|\n(B) 1\n(C) 0\n(D) -|a⃗||b⃗|', category: '1-mark', topicId: '10-6-1-scalar-product' },
  { id: 'math10-mcq-14', text: 'For mutually perpendicular unit vectors î, ĵ, k̂: î·ĵ + ĵ·k̂ + k̂·î equals:\n(A) 3\n(B) 1\n(C) 0\n(D) -1', category: '1-mark', topicId: '10-6-1-scalar-product' },
  { id: 'math10-mcq-15', text: 'The scalar product of two vectors is commutative means:\n(A) a⃗·b⃗ = -b⃗·a⃗\n(B) a⃗·b⃗ = b⃗·a⃗\n(C) a⃗·b⃗ = |a⃗||b⃗|\n(D) a⃗·b⃗ = a⃗ × b⃗', category: '1-mark', topicId: '10-6-1-scalar-product' },

  // ===== 10.6.3 Vector (Cross) Product =====
  { id: 'math10-mcq-16', text: 'For two parallel nonzero vectors a⃗ and b⃗, a⃗ × b⃗ equals:\n(A) 1\n(B) |a⃗||b⃗|\n(C) Zero vector (0⃗)\n(D) a⃗·b⃗', category: '1-mark', topicId: '10-6-3-cross-product' },
  { id: 'math10-mcq-17', text: 'The cross product a⃗ × b⃗ equals:\n(A) b⃗ × a⃗\n(B) -(b⃗ × a⃗)\n(C) b⃗·a⃗\n(D) 2(b⃗ × a⃗)', category: '1-mark', topicId: '10-6-3-cross-product' },
  { id: 'math10-mcq-18', text: 'If a⃗ and b⃗ are adjacent sides of a parallelogram, its area is:\n(A) |a⃗·b⃗|\n(B) (1/2)|a⃗ × b⃗|\n(C) |a⃗ × b⃗|\n(D) (1/2)|a⃗·b⃗|', category: '1-mark', topicId: '10-6-3-cross-product' },
  { id: 'math10-mcq-19', text: 'For unit vectors î, ĵ, k̂: î × ĵ equals:\n(A) -k̂\n(B) k̂\n(C) ĵ\n(D) 0', category: '1-mark', topicId: '10-6-3-cross-product' },

  // ===== ASSERTION-REASON QUESTIONS =====
  { id: 'math10-ar-1', text: 'Assertion (A): The vectors 2î - 3ĵ + 4k̂ and -4î + 6ĵ - 8k̂ are collinear.\nReason (R): Two vectors are collinear if one is a scalar multiple of the other.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '10-3-types-vectors' },
  { id: 'math10-ar-2', text: 'Assertion (A): For a unit vector â, (x⃗ - â)·(x⃗ + â) = |x⃗|² - 1.\nReason (R): For a unit vector â, |â| = 1, so â·â = |â|² = 1.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '10-6-1-scalar-product' },
  { id: 'math10-ar-3', text: 'Assertion (A): The cross product is not commutative i.e. a⃗ × b⃗ ≠ b⃗ × a⃗ in general.\nReason (R): The cross product satisfies a⃗ × b⃗ = -(b⃗ × a⃗) (anti-commutative property).\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '10-6-3-cross-product' },
  { id: 'math10-ar-4', text: 'Assertion (A): If a⃗·a⃗ = 0 and a⃗·b⃗ = 0, then vector b⃗ must be the zero vector.\nReason (R): If a⃗·a⃗ = 0, then a⃗ itself is the zero vector, so a⃗·b⃗ = 0 for any vector b⃗.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '10-6-1-scalar-product' },
  { id: 'math10-ar-5', text: 'Assertion (A): The area of triangle with adjacent sides a⃗ = î + 2ĵ and b⃗ = 3î + 4ĵ is 1 sq. unit.\nReason (R): Area of triangle = (1/2)|a⃗ × b⃗|.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '10-6-3-cross-product' },

  // ===== 2-MARK QUESTIONS =====
  { id: 'math10-2m-1', text: 'Find the magnitude of the vector a⃗ = î + ĵ + k̂.', category: '2-mark', topicId: '10-2-position-direction' },
  { id: 'math10-2m-2', text: 'Find the direction cosines of vector a⃗ = î + ĵ - 2k̂.', category: '2-mark', topicId: '10-2-position-direction' },
  { id: 'math10-2m-3', text: 'Write direction ratios of the vector a⃗ = î + ĵ - 2k̂ and find its direction cosines.', category: '2-mark', topicId: '10-2-position-direction' },
  { id: 'math10-2m-4', text: 'Classify as scalar or vector: (i) 10 kg (ii) 2 m north-west (iii) 40 watt (iv) 20 m/s².', category: '2-mark', topicId: '10-1-introduction' },
  { id: 'math10-2m-5', text: 'Show that vectors 2î - 3ĵ + 4k̂ and -4î + 6ĵ - 8k̂ are collinear.', category: '2-mark', topicId: '10-3-types-vectors' },
  { id: 'math10-2m-6', text: 'Find a unit vector in the direction of a⃗ = 2î + 3ĵ + k̂.', category: '2-mark', topicId: '10-5-scalar-multiplication' },
  { id: 'math10-2m-7', text: 'Find the vector joining P(2, 3, 0) and Q(-1, -2, -4) directed from P to Q.', category: '2-mark', topicId: '10-5-scalar-multiplication' },
  { id: 'math10-2m-8', text: 'If a⃗ = î - 2ĵ + 3k̂ and b⃗ = -2î + 4ĵ - 5k̂, find a⃗ + b⃗.', category: '2-mark', topicId: '10-4-addition-vectors' },
  { id: 'math10-2m-9', text: 'Find position vector of midpoint of segment joining A(2î - ĵ + k̂) and B(3î + 2ĵ - 2k̂).', category: '2-mark', topicId: '10-5-3-section-formula' },
  { id: 'math10-2m-10', text: 'R divides PQ in ratio 1:2 internally. OP⃗ = î + 2ĵ - k̂, OQ⃗ = -î + ĵ + k̂. Find OR⃗.', category: '2-mark', topicId: '10-5-3-section-formula' },

  // ===== 3-MARK QUESTIONS =====
  { id: 'math10-3m-1', text: 'Find the angle between vectors a⃗ = î + ĵ - k̂ and b⃗ = î - ĵ + k̂.', category: '3-mark', topicId: '10-6-1-scalar-product' },
  { id: 'math10-3m-2', text: 'If a⃗ = 5î - ĵ - 3k̂ and b⃗ = î + 3ĵ - 5k̂, show that a⃗ + b⃗ and a⃗ - b⃗ are perpendicular.', category: '3-mark', topicId: '10-6-1-scalar-product' },
  { id: 'math10-3m-3', text: 'Find the projection of vector a⃗ = 2î + 3ĵ + 2k̂ on vector b⃗ = î + 2ĵ + k̂.', category: '3-mark', topicId: '10-6-2-projection' },
  { id: 'math10-3m-4', text: 'If â is a unit vector and (x⃗ - â)·(x⃗ + â) = 8, find |x⃗|.', category: '3-mark', topicId: '10-6-1-scalar-product' },
  { id: 'math10-3m-5', text: 'Find |a⃗ - b⃗| if two vectors a⃗ and b⃗ satisfy |a⃗| = 2, |b⃗| = 3 and a⃗·b⃗ = 4.', category: '3-mark', topicId: '10-6-1-scalar-product' },
  { id: 'math10-3m-6', text: 'Find the value of λ such that a⃗ + λb⃗ is perpendicular to c⃗, where a⃗ = 2î + 2ĵ + 3k̂, b⃗ = -î + 2ĵ + k̂, c⃗ = 3î + ĵ.', category: '3-mark', topicId: '10-6-1-scalar-product' },
  { id: 'math10-3m-7', text: 'Write direction cosines of a vector making angles 90°, 135°, 45° with positive x, y, z axes.', category: '3-mark', topicId: '10-2-position-direction' },
  { id: 'math10-3m-8', text: 'Find the angle between the vectors a⃗ = î - 2ĵ + 3k̂ and b⃗ = 3î - 2ĵ + k̂.', category: '3-mark', topicId: '10-6-1-scalar-product' },
  { id: 'math10-3m-9', text: 'Find a⃗ × b⃗ given a⃗ = 2î + ĵ + 3k̂ and b⃗ = 3î + 5ĵ - 2k̂.', category: '3-mark', topicId: '10-6-3-cross-product' },
  { id: 'math10-3m-10', text: 'Find a unit vector perpendicular to each of (a⃗ + b⃗) and (a⃗ - b⃗), where a⃗ = î + ĵ + k̂ and b⃗ = î + 2ĵ + 3k̂.', category: '3-mark', topicId: '10-6-3-cross-product' },
  { id: 'math10-3m-11', text: 'Find the area of triangle with vertices A(1,1,1), B(1,2,3) and C(2,3,1).', category: '3-mark', topicId: '10-6-3-cross-product' },
  { id: 'math10-3m-12', text: 'Show that (a⃗ - b⃗) × (a⃗ + b⃗) = 2(a⃗ × b⃗).', category: '3-mark', topicId: '10-6-3-cross-product' },

  // ===== 5-MARK QUESTIONS =====
  { id: 'math10-5m-1', text: 'If a⃗ + b⃗ + c⃗ = 0⃗ and |a⃗| = 3, |b⃗| = 4, |c⃗| = 2, find the value of a⃗·b⃗ + b⃗·c⃗ + c⃗·a⃗.', category: '5-mark', topicId: '10-6-1-scalar-product' },
  { id: 'math10-5m-2', text: 'Prove the triangle inequality: |a⃗ + b⃗| ≤ |a⃗| + |b⃗| for any two vectors a⃗ and b⃗.', category: '5-mark', topicId: '10-6-1-scalar-product' },
  { id: 'math10-5m-3', text: 'The scalar product of î + ĵ + k̂ with unit vector along sum of 2î + 4ĵ - 5k̂ and λî + 2ĵ + 3k̂ is 1. Find λ.', category: '5-mark', topicId: '10-6-1-scalar-product' },
  { id: 'math10-5m-4', text: 'If a⃗, b⃗, c⃗ are unit vectors with a⃗ + b⃗ + c⃗ = 0⃗, find a⃗·b⃗ + b⃗·c⃗ + c⃗·a⃗.', category: '5-mark', topicId: '10-6-1-scalar-product' },
  { id: 'math10-5m-5', text: 'Find area of parallelogram with adjacent sides a⃗ = 3î + ĵ + 4k̂ and b⃗ = î - ĵ + k̂.', category: '5-mark', topicId: '10-6-3-cross-product' },
  { id: 'math10-5m-6', text: 'Show that A(-2î + 3ĵ + 5k̂), B(î + 2ĵ + 3k̂), C(7î - k̂) are collinear points.', category: '5-mark', topicId: '10-3-types-vectors' },

  // ===== CASE STUDY QUESTIONS =====
  { id: 'math10-cs-1', text: 'Case Study: A football player is positioned at origin O. He needs to pass to teammate at P(3, 4, 0). A second player is at Q(6, 8, 0). The coach observes that OP and OQ lie along the same line. The player applies force of 10 N along OP and 5 N along OQ simultaneously.\n\n(1) Find the position vector OP⃗ and its magnitude.\n(2) Show that OP⃗ and OQ⃗ are collinear vectors.\n(3) Find the unit vector in direction of OP⃗.\n(4) Find the resultant force vector if F₁ = 10×(unit vector along OP) and F₂ is 5 N along OQ direction.', category: 'case-study', topicId: '10-2-position-direction' },
  { id: 'math10-cs-2', text: 'Case Study: An architect is designing a rectangular room. Three mutually perpendicular edges from one corner are represented by vectors a⃗ = 4î, b⃗ = 3ĵ, c⃗ = 2k̂ (in meters). The diagonal of the room runs from the corner to the opposite corner.\n\n(1) Write the vector representing the room diagonal d⃗ = a⃗ + b⃗ + c⃗.\n(2) Find the length of the room diagonal.\n(3) Find the direction cosines of the diagonal vector.\n(4) Find the angle the diagonal makes with the longest edge (4î direction).', category: 'case-study', topicId: '10-5-scalar-multiplication' },
  { id: 'math10-cs-3', text: 'Case Study: In a physics lab, students study forces. Force F₁ = 3î + 4ĵ - k̂ (in Newtons) acts on a body. A second force F₂ = î - 2ĵ + 3k̂ also acts on it. A student wants to find the resultant, the work done when displaced by d⃗ = 2î + ĵ + k̂, and the moment of F₁ about origin.\n\n(1) Find the resultant force F₁ + F₂.\n(2) Find the work done W = (F₁ + F₂)·d⃗.\n(3) Find the magnitude of cross product F₁ × d⃗ (moment of F₁).\n(4) Find the angle between F₁ and F₂ using dot product.', category: 'case-study', topicId: '10-6-1-scalar-product' },

  // ===== HOTS QUESTIONS =====
  { id: 'math10-hots-1', text: 'If a⃗ = î + ĵ + k̂, b⃗ = 4î - 2ĵ + 3k̂, c⃗ = î - 2ĵ + k̂, find a vector of magnitude 6 units parallel to 2a⃗ - b⃗ + 3c⃗.', category: 'hots', topicId: '10-5-scalar-multiplication' },
  { id: 'math10-hots-2', text: 'Prove that |a⃗ × b⃗|² + |a⃗·b⃗|² = |a⃗|² × |b⃗|² (Lagrange\'s identity).', category: 'hots', topicId: '10-6-3-cross-product' },
  { id: 'math10-hots-3', text: 'Find a vector d⃗ perpendicular to both a⃗ = 2î + ĵ - k̂ and b⃗ = î + 2ĵ + k̂, and satisfying c⃗·d⃗ = 15, where c⃗ = î - ĵ + 2k̂.', category: 'hots', topicId: '10-6-3-cross-product' },
  { id: 'math10-hots-4', text: 'Show that the points A(1, -1, -1), B(1, 2, 3), C(2, 3, 1) form vertices of a triangle and find its area.', category: 'hots', topicId: '10-6-3-cross-product' },
];

// ========== CHAPTER 11: THREE DIMENSIONAL GEOMETRY ==========
const chapter11Questions: Question[] = [
  // ===== 11.2 Direction Cosines and Direction Ratios =====
  // MCQ - 1 Mark
  { id: 'math11-mcq-1', text: 'If a line makes angles 90°, 135°, 45° with x, y, z-axes respectively, its direction cosines are:\n(A) 0, -1/√2, 1/√2\n(B) 0, 1/√2, -1/√2\n(C) 1, -1/√2, 1/√2\n(D) 0, 1/√2, 1/√2', category: '1-mark', topicId: '11-2-direction-cosines' },
  { id: 'math11-mcq-2', text: 'Direction cosines of a line which makes equal angles with all three coordinate axes satisfy:\n(A) l = m = n = 1\n(B) l = m = n = 1/√3\n(C) l = m = n = 1/√2\n(D) l + m + n = 1', category: '1-mark', topicId: '11-2-direction-cosines' },
  { id: 'math11-mcq-3', text: 'If a, b, c are direction ratios of a line, the direction cosines are:\n(A) a, b, c\n(B) a/r, b/r, c/r where r = √(a²+b²+c²)\n(C) a², b², c²\n(D) ka, kb, kc', category: '1-mark', topicId: '11-2-direction-cosines' },
  { id: 'math11-mcq-4', text: 'The direction ratios of the line joining A(2,3,-4) and B(1,-2,3) are:\n(A) 1, 5, -7\n(B) -1, -5, 7\n(C) 3, 1, -1\n(D) 1, 1, -1', category: '1-mark', topicId: '11-2-1-dc-two-points' },

  // ===== 11.3 Equation of Line in Space =====
  { id: 'math11-mcq-5', text: 'The vector equation of a line through point with position vector a⃗ and parallel to vector b⃗ is:\n(A) r⃗ = b⃗ + λa⃗\n(B) r⃗ = a⃗ + λb⃗\n(C) r⃗ = a⃗ - λb⃗\n(D) r⃗ = λ(a⃗+b⃗)', category: '1-mark', topicId: '11-3-line-space' },
  { id: 'math11-mcq-6', text: 'The Cartesian equation of line through (x₁,y₁,z₁) with direction ratios a,b,c is:\n(A) (x-x₁)/a = (y-y₁)/b = (z-z₁)/c\n(B) x/a = y/b = z/c\n(C) (x+x₁)/a = (y+y₁)/b = (z+z₁)/c\n(D) x₁/a = y₁/b = z₁/c', category: '1-mark', topicId: '11-3-line-space' },
  { id: 'math11-mcq-7', text: 'The vector equation of line through two points with position vectors a⃗ and b⃗ is:\n(A) r⃗ = a⃗ + λb⃗\n(B) r⃗ = b⃗ + λa⃗\n(C) r⃗ = a⃗ + λ(b⃗ - a⃗)\n(D) r⃗ = (a⃗+b⃗)/2 + λ(a⃗-b⃗)', category: '1-mark', topicId: '11-3-2-line-two-points' },

  // ===== 11.4 Angle Between Lines =====
  { id: 'math11-mcq-8', text: 'Two lines with direction ratios a₁,b₁,c₁ and a₂,b₂,c₂ are perpendicular if:\n(A) a₁/a₂ = b₁/b₂ = c₁/c₂\n(B) a₁a₂ + b₁b₂ + c₁c₂ = 0\n(C) a₁a₂ = b₁b₂ = c₁c₂ = 1\n(D) a₁+a₂ = b₁+b₂ = c₁+c₂ = 0', category: '1-mark', topicId: '11-4-angle-lines' },
  { id: 'math11-mcq-9', text: 'Two lines with direction ratios a₁,b₁,c₁ and a₂,b₂,c₂ are parallel if:\n(A) a₁a₂ + b₁b₂ + c₁c₂ = 0\n(B) a₁/a₂ + b₁/b₂ + c₁/c₂ = 0\n(C) a₁/a₂ = b₁/b₂ = c₁/c₂\n(D) a₁a₂b₁b₂c₁c₂ = 1', category: '1-mark', topicId: '11-4-angle-lines' },
  { id: 'math11-mcq-10', text: 'The acute angle between lines r⃗ = a⃗₁ + λb⃗₁ and r⃗ = a⃗₂ + μb⃗₂ is given by:\n(A) cos θ = (b⃗₁·b⃗₂)/(|b⃗₁||b⃗₂|)\n(B) cos θ = |b⃗₁·b⃗₂|/(|b⃗₁||b⃗₂|)\n(C) cos θ = b⃗₁ × b⃗₂\n(D) cos θ = (a⃗₁·a⃗₂)/(|a⃗₁||a⃗₂|)', category: '1-mark', topicId: '11-4-angle-lines' },

  // ===== 11.5 Shortest Distance =====
  { id: 'math11-mcq-11', text: 'Skew lines are lines that are:\n(A) Parallel and non-intersecting\n(B) Intersecting but not perpendicular\n(C) Neither parallel nor intersecting, lying in different planes\n(D) Parallel and coplanar', category: '1-mark', topicId: '11-5-1-shortest-distance' },
  { id: 'math11-mcq-12', text: 'The shortest distance between skew lines r⃗ = a⃗₁ + λb⃗₁ and r⃗ = a⃗₂ + μb⃗₂ is:\n(A) |(b⃗₁ × b⃗₂)·(a⃗₂ - a⃗₁)| / |b⃗₁ × b⃗₂|\n(B) |(a⃗₂ - a⃗₁)| / |b⃗₁ × b⃗₂|\n(C) |(b⃗₁·b⃗₂)·(a⃗₂ - a⃗₁)|\n(D) |(a⃗₂ - a⃗₁)| × |b⃗₁ × b⃗₂|', category: '1-mark', topicId: '11-5-1-shortest-distance' },
  { id: 'math11-mcq-13', text: 'The distance between parallel lines r⃗ = a⃗₁ + λb⃗ and r⃗ = a⃗₂ + μb⃗ is:\n(A) |b⃗ × (a⃗₂ - a⃗₁)| / |b⃗|\n(B) |(a⃗₂ - a⃗₁)| / |b⃗|\n(C) |(b⃗)·(a⃗₂ - a⃗₁)| / |b⃗|\n(D) |b⃗| × |(a⃗₂ - a⃗₁)|', category: '1-mark', topicId: '11-5-2-parallel-distance' },
  { id: 'math11-mcq-14', text: 'If two lines in space intersect at a point, the shortest distance between them is:\n(A) 1\n(B) Depends on the angle\n(C) 0\n(D) Cannot be determined', category: '1-mark', topicId: '11-5-1-shortest-distance' },

  // ===== ASSERTION-REASON QUESTIONS =====
  { id: 'math11-ar-1', text: 'Assertion (A): The direction cosines of x-axis are (1, 0, 0).\nReason (R): The x-axis makes angles 0°, 90°, 90° with the positive directions of x, y, and z-axes respectively.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '11-2-direction-cosines' },
  { id: 'math11-ar-2', text: 'Assertion (A): The points A(2,3,-4), B(1,-2,3) and C(3,8,-11) are collinear.\nReason (R): Three points are collinear if the direction ratios of AB and BC are proportional.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '11-2-1-dc-two-points' },
  { id: 'math11-ar-3', text: 'Assertion (A): The lines (x-1)/2 = (y-2)/3 = (z-3)/4 and (x-4)/5 = (y-1)/2 = (z-0)/1 are perpendicular.\nReason (R): Two lines are perpendicular if a₁a₂ + b₁b₂ + c₁c₂ = 0.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '11-4-angle-lines' },
  { id: 'math11-ar-4', text: 'Assertion (A): Two skew lines lie in different planes and have a unique shortest distance.\nReason (R): Skew lines are neither parallel nor intersecting.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '11-5-1-shortest-distance' },
  { id: 'math11-ar-5', text: 'Assertion (A): If l² + m² + n² = 1, then l, m, n are direction cosines of some line.\nReason (R): The direction cosines of any line always satisfy l² + m² + n² = 1.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '11-2-direction-cosines' },

  // ===== 2-MARK QUESTIONS =====
  { id: 'math11-2m-1', text: 'If a line has direction ratios 2, -1, -2, find its direction cosines.', category: '2-mark', topicId: '11-2-direction-cosines' },
  { id: 'math11-2m-2', text: 'Find the direction cosines of the line joining (-2, 4, -5) and (1, 2, 3).', category: '2-mark', topicId: '11-2-1-dc-two-points' },
  { id: 'math11-2m-3', text: 'If a line makes angles 90°, 60°, 30° with positive x, y, z-axes, find its direction cosines.', category: '2-mark', topicId: '11-2-direction-cosines' },
  { id: 'math11-2m-4', text: 'Find the vector and Cartesian equations of line through (5, 2, -4) parallel to 3î + 2ĵ - 8k̂.', category: '2-mark', topicId: '11-3-1-line-parallel' },
  { id: 'math11-2m-5', text: 'Write the vector form of the Cartesian equation: (x-5)/3 = (y+4)/7 = (z-6)/2.', category: '2-mark', topicId: '11-3-line-space' },
  { id: 'math11-2m-6', text: 'Find the Cartesian equation of line through (-2, 4, -5) parallel to (x+3)/3 = (y-4)/5 = (z+8)/6.', category: '2-mark', topicId: '11-3-1-line-parallel' },
  { id: 'math11-2m-7', text: 'Show that lines with direction ratios 12,-3,-4 and 4,12,3 are perpendicular.', category: '2-mark', topicId: '11-4-angle-lines' },
  { id: 'math11-2m-8', text: 'Find the angle between lines: (x-2)/2 = (y-1)/5 = (z+3)/(-3) and (x+2)/(-1) = (y-4)/8 = (z-5)/4.', category: '2-mark', topicId: '11-4-angle-lines' },
  { id: 'math11-2m-9', text: 'Find shortest distance between lines r⃗ = î + 2ĵ - 4k̂ + λ(2î + 3ĵ + 6k̂) and r⃗ = 3î + 3ĵ - 5k̂ + μ(2î + 3ĵ + 6k̂).', category: '2-mark', topicId: '11-5-2-parallel-distance' },
  { id: 'math11-2m-10', text: 'Determine whether lines r⃗ = î + ĵ - k̂ + λ(3î - ĵ) and r⃗ = 4î - k̂ + μ(2î + 3k̂) intersect or are skew.', category: '2-mark', topicId: '11-5-1-shortest-distance' },

  // ===== 3-MARK QUESTIONS =====
  { id: 'math11-3m-1', text: 'Find direction cosines of the sides of triangle with vertices (3,5,-4), (-1,1,2), (-5,-5,-2).', category: '3-mark', topicId: '11-2-1-dc-two-points' },
  { id: 'math11-3m-2', text: 'Show that points A(2,3,-4), B(1,-2,3), C(3,8,-11) are collinear.', category: '3-mark', topicId: '11-2-1-dc-two-points' },
  { id: 'math11-3m-3', text: 'Find the vector equation of the line passing through the points A(1,-1,1) and B(2,3,-1).', category: '3-mark', topicId: '11-3-2-line-two-points' },
  { id: 'math11-3m-4', text: 'Find the angle between lines r⃗ = 3î + 2ĵ - 4k̂ + λ(î + 2ĵ + 2k̂) and r⃗ = 5î - 2k̂ + μ(3î + 2ĵ + 6k̂).', category: '3-mark', topicId: '11-4-angle-lines' },
  { id: 'math11-3m-5', text: 'Find angle between lines (x+3)/3 = (y-1)/5 = (z+3)/4 and (x+1)/1 = (y-4)/1 = (z-5)/2.', category: '3-mark', topicId: '11-4-angle-lines' },
  { id: 'math11-3m-6', text: 'Find value of p so that lines (1-x)/3 = (7y-14)/(2p) = (z-3)/2 and (7-7x)/(3p) = (y-5)/1 = (6-z)/5 are at right angles.', category: '3-mark', topicId: '11-4-angle-lines' },
  { id: 'math11-3m-7', text: 'Find shortest distance between lines r⃗ = î + ĵ + λ(2î - ĵ + k̂) and r⃗ = 2î + ĵ - k̂ + μ(3î - 5ĵ + 2k̂).', category: '3-mark', topicId: '11-5-1-shortest-distance' },
  { id: 'math11-3m-8', text: 'Find shortest distance between lines (x+1)/7 = (y+1)/(-6) = (z+1)/1 and (x-3)/1 = (y-5)/(-2) = (z-7)/1.', category: '3-mark', topicId: '11-5-1-shortest-distance' },
  { id: 'math11-3m-9', text: 'Find distance between parallel lines r⃗ = î + 2ĵ - 4k̂ + λ(2î + 3ĵ + 6k̂) and r⃗ = 3î + 3ĵ - 5k̂ + μ(2î + 3ĵ + 6k̂).', category: '3-mark', topicId: '11-5-2-parallel-distance' },

  // ===== 5-MARK QUESTIONS =====
  { id: 'math11-5m-1', text: 'Find the shortest distance between lines whose vector equations are r⃗ = î+2ĵ+3k̂ + λ(î-3ĵ+2k̂) and r⃗ = 4î+5ĵ+6k̂ + μ(2î+3ĵ+k̂).', category: '5-mark', topicId: '11-5-1-shortest-distance' },
  { id: 'math11-5m-2', text: 'Find the vector equation of the line passing through (1, 2, -4) and perpendicular to the two lines: (x-8)/3 = (y+19)/(-16) = (z-10)/7 and (x-15)/3 = (y-29)/8 = (z-5)/(-5).', category: '5-mark', topicId: '11-4-angle-lines' },
  { id: 'math11-5m-3', text: 'Show that lines r⃗ = î + ĵ + λ(2î + ĵ + 4k̂) and r⃗ = 2î + ĵ + μ(î + 2ĵ - 2k̂) are skew lines. Find shortest distance.', category: '5-mark', topicId: '11-5-1-shortest-distance' },
  { id: 'math11-5m-4', text: 'Find the angle between the lines whose direction cosines l, m, n satisfy: l+m+n = 0 and l² + m² - n² = 0.', category: '5-mark', topicId: '11-2-direction-cosines' },

  // ===== CASE STUDY QUESTIONS =====
  { id: 'math11-cs-1', text: 'Case Study: An architect is designing a museum with a long corridor represented as a straight line L₁ passing through A(1, 2, 3) with direction ratios 2, 3, 6. Another corridor L₂ passes through B(2, 3, 4) with direction ratios 1, 2, 2. The architect needs to analyze the geometry of these corridors.\n\n(1) Write the vector equation of corridor L₁.\n(2) Write the Cartesian equation of corridor L₂.\n(3) Find the angle between the two corridors.\n(4) Determine whether the corridors are perpendicular, parallel, or neither.', category: 'case-study', topicId: '11-3-line-space' },
  { id: 'math11-cs-2', text: 'Case Study: A fighter jet starting from base station A(1, 1, 0) flies along a direction given by the vector 2î + ĵ + k̂. A second jet starts from B(2, 1, -1) in direction 3î + 5ĵ - k̂. An air traffic controller needs to check if the paths will intersect and find the minimum separation distance if they do not.\n\n(1) Write parametric equations of both flight paths.\n(2) Determine if the paths are parallel, intersecting, or skew.\n(3) Find b⃗₁ × b⃗₂ for the two direction vectors.\n(4) Calculate the shortest distance between the two flight paths.', category: 'case-study', topicId: '11-5-1-shortest-distance' },
  { id: 'math11-cs-3', text: 'Case Study: A surveyor marks three points on a terrain: P(2, 3, -4), Q(1, -2, 3) and R(3, 8, -11). She needs to determine if these points lie on a straight line, and if so, find the equation of the line and distance PR.\n\n(1) Find the direction ratios of line PQ.\n(2) Find the direction ratios of line QR.\n(3) Show whether P, Q, R are collinear.\n(4) If collinear, find the equation of the line through P and Q and the distance PR.', category: 'case-study', topicId: '11-2-1-dc-two-points' },

  // ===== HOTS QUESTIONS =====
  { id: 'math11-hots-1', text: 'Find the value of k so that lines (x-1)/(-3) = (y-2)/(2k) = (z-3)/2 and (x-1)/(3k) = (y-1)/1 = (z-6)/(-5) are perpendicular.', category: 'hots', topicId: '11-4-angle-lines' },
  { id: 'math11-hots-2', text: 'Find the angle between the lines with direction ratios a, b, c and b-c, c-a, a-b.', category: 'hots', topicId: '11-4-angle-lines' },
  { id: 'math11-hots-3', text: 'Find the equation of line passing through origin and parallel to the line 2x + 3y + z = 5, 3x + y + z = 6 (intersection of planes).', category: 'hots', topicId: '11-3-line-space' },
  { id: 'math11-hots-4', text: 'A line passes through (2, -1, 3) and is perpendicular to line r⃗ = î+ĵ-k̂+λ(2î-2ĵ+k̂). Find vector equation of the line also passing through (-1, 0, 7).', category: 'hots', topicId: '11-3-line-space' },
];

// ========== CHAPTER 12: LINEAR PROGRAMMING ==========
const chapter12Questions: Question[] = [
  // ===== 12.1 Introduction =====
  // 1-Mark Questions
  { id: 'math12-1m-1', text: 'What is an optimisation problem? Give one example.', category: '1-mark', topicId: '12-1-introduction' },
  { id: 'math12-1m-2', text: 'Define linear programming problem (LPP).', category: '1-mark', topicId: '12-1-introduction' },
  { id: 'math12-1m-3', text: 'What do you understand by the term "linear" in linear programming?', category: '1-mark', topicId: '12-1-introduction' },
  { id: 'math12-1m-4', text: 'What does the term "programming" mean in the context of linear programming?', category: '1-mark', topicId: '12-1-introduction' },
  { id: 'math12-1m-5', text: 'Name two fields where linear programming problems have wide applicability.', category: '1-mark', topicId: '12-1-introduction' },

  // ===== 12.2.1 Mathematical Formulation =====
  { id: 'math12-1m-6', text: 'What is an objective function in a linear programming problem?', category: '1-mark', topicId: '12-2-1-formulation' },
  { id: 'math12-1m-7', text: 'Define decision variables in a linear programming problem.', category: '1-mark', topicId: '12-2-1-formulation' },
  { id: 'math12-1m-8', text: 'What are constraints in a linear programming problem?', category: '1-mark', topicId: '12-2-1-formulation' },
  { id: 'math12-1m-9', text: 'What are non-negative restrictions? Why are they necessary?', category: '1-mark', topicId: '12-2-1-formulation' },
  { id: 'math12-1m-10', text: 'Write the general form of an objective function for two variables x and y.', category: '1-mark', topicId: '12-2-1-formulation' },
  { id: 'math12-1m-11', text: 'Define feasible region of a linear programming problem.', category: '1-mark', topicId: '12-2-1-formulation' },
  { id: 'math12-1m-12', text: 'What is meant by a feasible solution of an LPP?', category: '1-mark', topicId: '12-2-1-formulation' },
  { id: 'math12-1m-13', text: 'What is an infeasible solution?', category: '1-mark', topicId: '12-2-1-formulation' },
  { id: 'math12-1m-14', text: 'Define optimal solution of a linear programming problem.', category: '1-mark', topicId: '12-2-1-formulation' },
  { id: 'math12-1m-15', text: 'What is a corner point (vertex) of the feasible region?', category: '1-mark', topicId: '12-2-1-formulation' },
  { id: 'math12-1m-16', text: 'Distinguish between bounded and unbounded feasible regions.', category: '1-mark', topicId: '12-2-1-formulation' },

  // ===== 2-MARK QUESTIONS =====
  { id: 'math12-2m-1', text: 'A furniture dealer wants to maximise profit from selling tables and chairs with limited capital and storage space. Identify this as an optimisation problem and state why it is a linear programming problem.', category: '2-mark', topicId: '12-1-introduction' },
  { id: 'math12-2m-2', text: 'Distinguish between maximisation and minimisation problems in linear programming with one example each.', category: '2-mark', topicId: '12-1-introduction' },
  { id: 'math12-2m-3', text: 'State two real-life situations that can be modelled as linear programming problems.', category: '2-mark', topicId: '12-1-introduction' },
  { id: 'math12-2m-4', text: 'A dealer has Rs 50,000 to invest in tables (cost Rs 2500 each) and chairs (cost Rs 500 each). He can store at most 60 pieces. Write the mathematical formulation of the constraints.', category: '2-mark', topicId: '12-2-1-formulation' },
  { id: 'math12-2m-5', text: 'If profit on one table is Rs 250 and on one chair is Rs 75, write the objective function to be maximised.', category: '2-mark', topicId: '12-2-1-formulation' },
  { id: 'math12-2m-6', text: 'Explain why the feasible region of a linear programming problem is always a convex region.', category: '2-mark', topicId: '12-2-1-formulation' },
  { id: 'math12-2m-7', text: 'Distinguish between a feasible solution and an optimal feasible solution with examples.', category: '2-mark', topicId: '12-2-1-formulation' },
  { id: 'math12-2m-8', text: 'State Theorem 1 (Corner Point Theorem) for linear programming problems.', category: '2-mark', topicId: '12-2-2-graphical' },
  { id: 'math12-2m-9', text: 'State Theorem 2 regarding maximum and minimum values of objective function in a bounded feasible region.', category: '2-mark', topicId: '12-2-2-graphical' },

  // ===== 3-MARK QUESTIONS =====
  { id: 'math12-3m-1', text: 'A furniture dealer deals in tables and chairs. He has Rs 50,000 to invest and storage space for at most 60 pieces. A table costs Rs 2500 and a chair Rs 500. Profit on one table is Rs 250 and on one chair is Rs 75. Formulate this as an LPP mathematically.', category: '3-mark', topicId: '12-2-1-formulation' },
  { id: 'math12-3m-2', text: 'Explain the Corner Point Method for solving a linear programming problem. List all the steps involved.', category: '3-mark', topicId: '12-2-2-graphical' },
  { id: 'math12-3m-3', text: 'How do you determine whether a maximum or minimum value exists when the feasible region is unbounded? Explain with appropriate conditions.', category: '3-mark', topicId: '12-2-2-graphical' },
  { id: 'math12-3m-4', text: 'What happens when two corner points give the same optimal value of the objective function? Explain with reasoning.', category: '3-mark', topicId: '12-2-2-graphical' },
  { id: 'math12-3m-5', text: 'Solve the following LPP graphically: Maximise Z = 4x + y subject to x + y ≤ 50, 3x + y ≤ 90, x ≥ 0, y ≥ 0.', category: '3-mark', topicId: '12-2-2-graphical' },
  { id: 'math12-3m-6', text: 'Solve graphically: Minimise Z = 200x + 500y subject to x + 2y ≥ 10, 3x + 4y ≤ 24, x ≥ 0, y ≥ 0.', category: '3-mark', topicId: '12-2-2-graphical' },
  { id: 'math12-3m-7', text: 'Solve graphically: Minimise and Maximise Z = 3x + 9y subject to x + 3y ≤ 60, x + y ≥ 10, x ≤ y, x ≥ 0, y ≥ 0.', category: '3-mark', topicId: '12-2-2-graphical' },
  { id: 'math12-3m-8', text: 'Determine graphically the minimum value of Z = −50x + 20y subject to 2x − y ≥ −5, 3x + y ≥ 3, 2x − 3y ≤ 12, x ≥ 0, y ≥ 0.', category: '3-mark', topicId: '12-2-2-graphical' },
  { id: 'math12-3m-9', text: 'Solve graphically: Minimise Z = 3x + 2y subject to x + y ≥ 8, 3x + 5y ≤ 15, x ≥ 0, y ≥ 0. What do you observe?', category: '3-mark', topicId: '12-2-2-graphical' },
  { id: 'math12-3m-10', text: 'Maximise Z = 3x + 4y subject to the constraints: x + y ≤ 4, x ≥ 0, y ≥ 0.', category: '3-mark', topicId: '12-2-2-graphical' },
  { id: 'math12-3m-11', text: 'Minimise Z = −3x + 4y subject to x + 2y ≤ 8, 3x + 2y ≤ 12, x ≥ 0, y ≥ 0.', category: '3-mark', topicId: '12-2-2-graphical' },
  { id: 'math12-3m-12', text: 'Maximise Z = 5x + 3y subject to 3x + 5y ≤ 15, 5x + 2y ≤ 10, x ≥ 0, y ≥ 0.', category: '3-mark', topicId: '12-2-2-graphical' },
  { id: 'math12-3m-13', text: 'Minimise Z = 3x + 5y such that x + 3y ≥ 3, x + y ≥ 2, x ≥ 0, y ≥ 0.', category: '3-mark', topicId: '12-2-2-graphical' },
  { id: 'math12-3m-14', text: 'Maximise Z = 3x + 2y subject to x + 2y ≤ 10, 3x + y ≤ 15, x ≥ 0, y ≥ 0.', category: '3-mark', topicId: '12-2-2-graphical' },
  { id: 'math12-3m-15', text: 'Minimise Z = x + 2y subject to 2x + y ≥ 3, x + 2y ≥ 6, x ≥ 0, y ≥ 0. Show that the minimum of Z occurs at more than two points.', category: '3-mark', topicId: '12-2-2-graphical' },

  // ===== 5-MARK QUESTIONS =====
  { id: 'math12-5m-1', text: 'Define the following terms with respect to a linear programming problem: (i) Objective function (ii) Decision variables (iii) Constraints (iv) Feasible region (v) Optimal solution', category: '5-mark', topicId: '12-2-1-formulation' },
  { id: 'math12-5m-2', text: 'Explain the graphical method of solving linear programming problems. Describe all the steps of the Corner Point Method with suitable diagrams.', category: '5-mark', topicId: '12-2-2-graphical' },
  { id: 'math12-5m-3', text: 'Minimise and Maximise Z = 5x + 10y subject to x + 2y ≤ 120, x + y ≥ 60, x − 2y ≥ 0, x ≥ 0, y ≥ 0.', category: '5-mark', topicId: '12-2-2-graphical' },
  { id: 'math12-5m-4', text: 'Minimise and Maximise Z = x + 2y subject to x + 2y ≥ 100, 2x − y ≤ 0, 2x + y ≤ 200, x ≥ 0, y ≥ 0.', category: '5-mark', topicId: '12-2-2-graphical' },
  { id: 'math12-5m-5', text: 'Maximise Z = −x + 2y subject to the constraints: x ≥ 3, x + y ≥ 5, x + 2y ≥ 6, y ≥ 0.', category: '5-mark', topicId: '12-2-2-graphical' },
  { id: 'math12-5m-6', text: 'Maximise Z = x + y subject to x − y ≤ −1, −x + y ≤ 0, x ≥ 0, y ≥ 0Jean. Determine if the problem has a solution.', category: '5-mark', topicId: '12-2-2-graphical' },

  // ===== ASSERTION-REASON QUESTIONS =====
  { id: 'math12-ar-1', text: 'Assertion: The feasible region of a linear programming problem is always a convex polygon.\nReason: The intersection of half-planes defined by linear inequalities is always convex.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '12-2-1-formulation' },
  { id: 'math12-ar-2', text: 'Assertion: The optimal solution of an LPP always occurs at a corner point of the feasible region.\nReason: The objective function is linear and the feasible region is a convex polygon.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '12-2-2-graphical' },
  { id: 'math12-ar-3', text: 'Assertion: If the feasible region is unbounded, the LPP may have no optimal solution.\nReason: In an unbounded region, the objective function may increase or decrease indefinitely.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '12-2-2-graphical' },
  { id: 'math12-ar-4', text: 'Assertion: If two corner points give the same maximum value, then every point on the line segment joining them gives the same maximum value.\nReason: The objective function is constant along any line segment in the feasible region.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '12-2-2-graphical' },
  { id: 'math12-ar-5', text: 'Assertion: Non-negative constraints x ≥ 0, y ≥ 0 are always required in an LPP.\nReason: Decision variables represent quantities that cannot be negative in real-world problems.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '12-2-1-formulation' },
  { id: 'math12-ar-6', text: 'Assertion: A linear programming problem may have no feasible solution.\nReason: The constraints may be contradictory, leading to no common region.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '12-2-1-formulation' },
  { id: 'math12-ar-7', text: 'Assertion: The Corner Point Method works only for bounded feasible regions.\nReason: For unbounded regions, additional checks are required to verify optimality.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '12-2-2-graphical' },

  // ===== CASE STUDY QUESTIONS =====
  { id: 'math12-cs-1', text: 'Case Study: Manufacturing Problem\nA company manufactures two types of products A and B. Each unit of product A requires 2 hours of machine time and 3 hours of labour. Each unit of product B requires 4 hours of machine time and 2 hours of labour. The maximum available machine time is 16 hours and maximum labour hours are 12. The profit on each unit of product A is Rs 40 and on product B is Rs 50.\n\n(1) Identify the decision variables and write the objective function.\n(2) Write all the constraints mathematically.\n(3) Draw the feasible region on a graph.\n(4) Find the corner points of the feasible region.\n(5) Determine the maximum profit and the optimal production plan.', category: 'case-study', topicId: '12-3-types-lpp' },
  { id: 'math12-cs-2', text: 'Case Study: Diet Problem\nA dietician wishes to mix two types of food F1 and F2 such that the vitamin content of the mixture contains at least 8 units of vitamin A and 10 units of vitamin B. Food F1 contains 2 units/kg of vitamin A and 1 unit/kg of vitamin B, while food F2 contains 1 unit/kg of vitamin A and 2 units/kg of vitamin B. Food F1 costs Rs 50/kg and F2 costs Rs 70/kg.\n\n(1) Formulate the problem as an LPP by identifying decision variables, objective function, and constraints.\n(2) Graph the constraints and shade the feasible region.\n(3) Find the minimum cost of the mixture.\n(4) How much of each food should be used in the mixture?', category: 'case-study', topicId: '12-3-types-lpp' },
  { id: 'math12-cs-3', text: 'Case Study: Transportation Problem\nA toy company manufactures two types of dolls, Type I and Type II. Production of Type I doll requires 10 minutes of cutting and 5 minutes of assembling. Production of Type II doll requires 8 minutes of cutting and 8 minutes of assembling. The factory has 3 hours 20 minutes available for cutting and 2 hours 40 minutes for assembling per day. The profit is Rs 12 on each Type I doll and Rs 16 on each Type II doll.\n\n(1) Convert the given time constraints to minutes and write the mathematical constraints.\n(2) Write the objective function to maximise profit.\n(3) Find the feasible region graphically.\n(4) Determine how many dolls of each type should be produced daily to maximise profit.', category: 'case-study', topicId: '12-3-types-lpp' },

  // ===== HOTS QUESTIONS =====
  { id: 'math12-hots-1', text: 'A farmer has 100 hectares of land on which he can grow wheat or rice. He needs at least 10 hectares for wheat and at least 40 hectares for rice. Each hectare of wheat requires 2 workers per day while each hectare of rice requires 3 workers per day. The number of workers available is at most 180. If the profit per hectare on wheat is Rs 4000 and on rice is Rs 5000, formulate this as an LPP and find the optimal allocation.', category: 'hots', topicId: '12-3-types-lpp' },
  { id: 'math12-hots-2', text: 'Consider the LPP: Maximise Z = 3x + 4y subject to x + y ≤ 450, 2x + y ≤ 600, x ≥ 0, y ≥ 0. If a constraint x + y ≤ 450 is relaxed to x + y ≤ 500, by how much does the maximum value of Z change? What is the significance of this change?', category: 'hots', topicId: '12-2-2-graphical' },
  { id: 'math12-hots-3', text: 'For the LPP: Maximise Z = px + qy (p, q > 0) subject to x + y ≤ 10, 2x + 3y ≤ 24, x ≥ 0, y ≥ 0, find the relationship between p and q such that the maximum occurs at (6, 4).', category: 'hots', topicId: '12-2-2-graphical' },
  { id: 'math12-hots-4', text: 'Explain why the graphical method is limited to LPPs with only two decision variables. What alternative methods exist for problems with more variables?', category: 'hots', topicId: '12-2-2-graphical' },
  { id: 'math12-hots-5', text: 'An LPP has multiple optimal solutions. Under what conditions does this occur? If Z = 2x + 3y achieves maximum value of 18 at both (3, 4) and (6, 2), find another point that also gives the same maximum value.', category: 'hots', topicId: '12-2-2-graphical' },
];

// ========== CHAPTER 13: PROBABILITY ==========
const chapter13Questions: Question[] = [
  // ===== 13.1-13.2 Introduction & Conditional Probability =====
  // 1-Mark Questions
  { id: 'math13-1m-1', text: 'Define conditional probability of an event E given that event F has occurred.', category: '1-mark', topicId: '13-1-2-conditional' },
  { id: 'math13-1m-2', text: 'Write the formula for P(E|F). Under what condition is it valid?', category: '1-mark', topicId: '13-1-2-conditional' },
  { id: 'math13-1m-3', text: 'If P(A) = 0.6, P(B) = 0.3 and P(A ∩ B) = 0.2, find P(A|B).', category: '1-mark', topicId: '13-1-2-conditional' },
  { id: 'math13-1m-4', text: 'What is the value of P(S|F) where S is the sample space and F is any event with P(F) ≠ 0?', category: '1-mark', topicId: '13-1-2-conditional' },
  { id: 'math13-1m-5', text: 'If P(E|F) = P(E), what does this indicate about events E and F?', category: '1-mark', topicId: '13-1-2-conditional' },
  { id: 'math13-1m-6', text: "State the relationship between P(E'|F) and P(E|F).", category: '1-mark', topicId: '13-2-1-properties' },

  // ===== 13.2.1 Properties of Conditional Probability =====
  { id: 'math13-1m-7', text: 'State Property 1 of conditional probability: What is P(S|F)?', category: '1-mark', topicId: '13-2-1-properties' },
  { id: 'math13-1m-8', text: "State Property 3 of conditional probability relating P(E'|F) and P(E|F).", category: '1-mark', topicId: '13-2-1-properties' },
  { id: 'math13-1m-9', text: 'If A and B are disjoint events, what is P((A ∪ B)|F)?', category: '1-mark', topicId: '13-2-1-properties' },

  // ===== 13.3 Multiplication Theorem =====
  { id: 'math13-1m-10', text: 'State the multiplication rule of probability for two events E and F.', category: '1-mark', topicId: '13-3-multiplication' },
  { id: 'math13-1m-11', text: 'Write the formula for P(E ∩ F) when P(E) ≠ 0 and P(F) ≠ 0.', category: '1-mark', topicId: '13-3-multiplication' },
  { id: 'math13-1m-12', text: 'Extend the multiplication rule for three events E, F, and G.', category: '1-mark', topicId: '13-3-multiplication' },

  // ===== 13.4 Independent Events =====
  { id: 'math13-1m-13', text: 'Define independent events. Write the condition for two events E and F to be independent.', category: '1-mark', topicId: '13-4-independent' },
  { id: 'math13-1m-14', text: 'If A and B are independent events, what is P(A ∩ B)?', category: '1-mark', topicId: '13-4-independent' },
  { id: 'math13-1m-15', text: 'Are mutually exclusive events the same as independent events? Justify briefly.', category: '1-mark', topicId: '13-4-independent' },
  { id: 'math13-1m-16', text: 'If E and F are independent events, is P(E|F) = P(E)? Justify.', category: '1-mark', topicId: '13-4-independent' },

  // ===== 13.5 Bayes' Theorem =====
  { id: 'math13-1m-17', text: 'What is a partition of a sample space?', category: '1-mark', topicId: '13-5-bayes' },
  { id: 'math13-1m-18', text: "State Bayes' theorem.", category: '1-mark', topicId: '13-5-bayes' },
  { id: 'math13-1m-19', text: 'What is meant by priori probability and posteriori probability?', category: '1-mark', topicId: '13-5-bayes' },
  { id: 'math13-1m-20', text: 'What is the theorem of total probability?', category: '1-mark', topicId: '13-5-bayes' },

  // ===== 2-MARK QUESTIONS =====
  { id: 'math13-2m-1', text: 'If P(A) = 7/13, P(B) = 9/13 and P(A ∩ B) = 4/13, evaluate P(A|B).', category: '2-mark', topicId: '13-1-2-conditional' },
  { id: 'math13-2m-2', text: 'A family has two children. What is the probability that both children are boys given that at least one of them is a boy?', category: '2-mark', topicId: '13-1-2-conditional' },
  { id: 'math13-2m-3', text: 'Compute P(A|B), if P(B) = 0.5 and P(A ∩ B) = 0.32.', category: '2-mark', topicId: '13-1-2-conditional' },
  { id: 'math13-2m-4', text: 'If P(A) = 0.8, P(B) = 0.5 and P(B|A) = 0.4, find P(A ∩ B).', category: '2-mark', topicId: '13-1-2-conditional' },
  { id: 'math13-2m-5', text: 'Given that E and F are events such that P(E) = 0.6, P(F) = 0.3 and P(E ∩ F) = 0.2, find P(E|F) and P(F|E).', category: '2-mark', topicId: '13-1-2-conditional' },
  { id: 'math13-2m-6', text: 'State and prove Property 1: P(S|F) = P(F|F) = 1.', category: '2-mark', topicId: '13-2-1-properties' },
  { id: 'math13-2m-7', text: "If A and B are any two events of sample space S and F is an event such that P(F) ≠ 0, then write the formula for P((A ∪ B)|F) in terms of P(A|F), P(B|F), and P((A ∩ B)|F).", category: '2-mark', topicId: '13-2-1-properties' },
  { id: 'math13-2m-8', text: 'Derive P(E ∩ F) = P(E) × P(F|E) from the definition of conditional probability.', category: '2-mark', topicId: '13-3-multiplication' },
  { id: 'math13-2m-9', text: 'An urn contains 10 black and 5 white balls. Two balls are drawn without replacement. What is the probability that first ball is black and second ball is also black?', category: '2-mark', topicId: '13-3-multiplication' },
  { id: 'math13-2m-10', text: "A die is thrown. If E is the event 'the number appearing is a multiple of 3' and F is the event 'the number appearing is even', check whether E and F are independent.", category: '2-mark', topicId: '13-4-independent' },
  { id: 'math13-2m-11', text: "An unbiased die is thrown twice. Let A be the event 'odd number on the first throw' and B be the event 'odd number on the second throw'. Check the independence of A and B.", category: '2-mark', topicId: '13-4-independent' },
  { id: 'math13-2m-12', text: 'If P(A) = 3/5 and P(B) = 1/5, find P(A ∩ B) if A and B are independent events.', category: '2-mark', topicId: '13-4-independent' },
  { id: 'math13-2m-13', text: "A fair coin and an unbiased die are tossed. Let A be the event 'head appears on the coin' and B be the event '3 on the die'. Check whether A and B are independent events.", category: '2-mark', topicId: '13-4-independent' },
  { id: 'math13-2m-14', text: 'Give three conditions for events E₁, E₂, ..., Eₙ to represent a partition of sample space S.', category: '2-mark', topicId: '13-5-bayes' },
  { id: 'math13-2m-15', text: 'Write the formula for P(A) using the theorem of total probability when {E₁, E₂, ..., Eₙ} is a partition of S.', category: '2-mark', topicId: '13-5-bayes' },
  { id: 'math13-2m-16', text: 'An urn contains 5 red and 5 black balls. A ball is drawn at random, its colour is noted and is returned to the urn. Moreover, 2 additional balls of the colour drawn are put in the urn and then a ball is drawn at random. What is the probability that the second ball is red?', category: '2-mark', topicId: '13-5-bayes' },

  // ===== 3-MARK QUESTIONS =====
  { id: 'math13-3m-1', text: 'Ten cards numbered 1 to 10 are placed in a box and one card is drawn randomly. If it is known that the number on the drawn card is more than 3, what is the probability that it is an even number?', category: '3-mark', topicId: '13-1-2-conditional' },
  { id: 'math13-3m-2', text: 'In a school, there are 1000 students, out of which 430 are girls. It is known that out of 430, 10% of the girls study in class XII. What is the probability that a student chosen randomly studies in Class XII given that the chosen student is a girl?', category: '3-mark', topicId: '13-1-2-conditional' },
  { id: 'math13-3m-3', text: 'A die is thrown twice and the sum of the numbers appearing is observed to be 6. What is the conditional probability that the number 4 has appeared at least once?', category: '3-mark', topicId: '13-1-2-conditional' },
  { id: 'math13-3m-4', text: 'If P(A) = 6/11, P(B) = 5/11 and P(A ∪ B) = 7/11, find (i) P(A ∩ B) (ii) P(A|B) (iii) P(B|A).', category: '3-mark', topicId: '13-1-2-conditional' },
  { id: 'math13-3m-5', text: "Prove that P(E'|F) = 1 − P(E|F) using the properties of conditional probability.", category: '3-mark', topicId: '13-2-1-properties' },
  { id: 'math13-3m-6', text: 'Prove that if A and B are disjoint events, then P((A ∪ B)|F) = P(A|F) + P(B|F).', category: '3-mark', topicId: '13-2-1-properties' },
  { id: 'math13-3m-7', text: 'An urn contains 10 black and 5 white balls. Two balls are drawn from the urn one after the other without replacement. What is the probability that both drawn balls are black?', category: '3-mark', topicId: '13-3-multiplication' },
  { id: 'math13-3m-8', text: 'A bag contains 5 red and 4 blue balls. Two balls are drawn successively without replacement. Find the probability that (i) both are red (ii) first is red and second is blue.', category: '3-mark', topicId: '13-3-multiplication' },
  { id: 'math13-3m-9', text: "Three coins are tossed simultaneously. Consider the event E 'three heads or three tails', F 'at least two heads' and G 'at most two heads'. Of the pairs (E,F), (E,G) and (F,G), which are independent? which are dependent?", category: '3-mark', topicId: '13-4-independent' },
  { id: 'math13-3m-10', text: "Prove that if E and F are independent events, then so are the events E and F'.", category: '3-mark', topicId: '13-4-independent' },
  { id: 'math13-3m-11', text: 'Let E and F be events with P(E) = 3/5, P(F) = 3/10 and P(E ∩ F) = 1/5. Are E and F independent?', category: '3-mark', topicId: '13-4-independent' },
  { id: 'math13-3m-12', text: 'Given two independent events A and B such that P(A) = 0.3, P(B) = 0.6. Find (i) P(A and B) (ii) P(A and not B) (iii) P(A or B) (iv) P(neither A nor B).', category: '3-mark', topicId: '13-4-independent' },
  { id: 'math13-3m-13', text: 'Bag I contains 3 red and 4 black balls while another Bag II contains 5 red and 6 black balls. One ball is drawn at random from one of the bags and it is found to be red. Find the probability that it was drawn from Bag II.', category: '3-mark', topicId: '13-5-bayes' },
  { id: 'math13-3m-14', text: 'Given three identical boxes I, II and III, each containing two coins. In box I, both coins are gold coins, in box II, both are silver coins and in box III, there is one gold and one silver coin. A person chooses a box at random and takes out a coin. If the coin is of gold, what is the probability that the other coin in the box is also of gold?', category: '3-mark', topicId: '13-5-bayes' },
  { id: 'math13-3m-15', text: 'A bag contains 4 red and 4 black balls, another bag contains 2 red and 6 black balls. One of the two bags is selected at random and a ball is drawn from the bag which is found to be red. Find the probability that the ball is drawn from the first bag.', category: '3-mark', topicId: '13-5-bayes' },

  // ===== 5-MARK QUESTIONS =====
  { id: 'math13-5m-1', text: "A die is thrown three times. Events A and B are defined as: A: 4 on the third throw, B: 6 on the first and 5 on the second throw. Find the probability of A given that B has already occurred.", category: '5-mark', topicId: '13-1-2-conditional' },
  { id: 'math13-5m-2', text: "Consider the experiment of tossing a coin. If the coin shows head, toss it again but if it shows tail, then throw a die. Find the conditional probability of the event that 'the die shows a number greater than 4' given that 'there is at least one tail'.", category: '5-mark', topicId: '13-1-2-conditional' },
  { id: 'math13-5m-3', text: "A coin is tossed three times. Determine P(E|F) for: (i) E: head on third toss, F: heads on first two tosses (ii) E: at least two heads, F: at most two heads (iii) E: at most two tails, F: at least one tail.", category: '5-mark', topicId: '13-1-2-conditional' },
  { id: 'math13-5m-4', text: "A fair die is rolled. Consider events E = {1,3,5}, F = {2,3} and G = {2,3,4,5}. Find (i) P(E|F) and P(F|E) (ii) P(E|G) and P(G|E) (iii) P((E ∪ F)|G) and P((E ∩ F)|G).", category: '5-mark', topicId: '13-1-2-conditional' },
  { id: 'math13-5m-5', text: 'Three cards are drawn successively, without replacement from a pack of 52 well shuffled cards. What is the probability that first two cards are kings and the third card drawn is an ace?', category: '5-mark', topicId: '13-3-multiplication' },
  { id: 'math13-5m-6', text: 'A box of oranges is inspected by examining three randomly selected oranges drawn without replacement. If all the three oranges are good, the box is approved for sale, otherwise, it is rejected. Find the probability that a box containing 15 oranges out of which 12 are good and 3 are bad ones will be approved for sale.', category: '5-mark', topicId: '13-3-multiplication' },
  { id: 'math13-5m-7', text: 'Two balls are drawn at random with replacement from a box containing 10 black and 8 red balls. Find the probability that (i) both balls are red (ii) first ball is black and second is red (iii) one of them is black and other is red.', category: '5-mark', topicId: '13-3-multiplication' },
  { id: 'math13-5m-8', text: "If A and B are two independent events, then prove that the probability of occurrence of at least one of A and B is given by 1 − P(A') × P(B').", category: '5-mark', topicId: '13-4-independent' },
  { id: 'math13-5m-9', text: 'A die is tossed thrice. Find the probability of getting an odd number at least once.', category: '5-mark', topicId: '13-4-independent' },
  { id: 'math13-5m-10', text: 'Probability of solving specific problem independently by A and B are 1/2 and 1/3 respectively. If both try to solve the problem independently, find the probability that (i) the problem is solved (ii) exactly one of them solves the problem.', category: '5-mark', topicId: '13-4-independent' },
  { id: 'math13-5m-11', text: "One card is drawn at random from a well shuffled deck of 52 cards. In which of the following cases are the events E and F independent? (i) E: 'the card drawn is a spade', F: 'the card drawn is an ace' (ii) E: 'the card drawn is black', F: 'the card drawn is a king' (iii) E: 'the card drawn is a king or queen', F: 'the card drawn is a queen or jack'.", category: '5-mark', topicId: '13-4-independent' },
  { id: 'math13-5m-12', text: "Suppose that the reliability of a HIV test is specified as follows: Of people having HIV, 90% of the test detect the disease but 10% go undetected. Of people free of HIV, 99% of the test are judged HIV−ive but 1% are diagnosed as showing HIV+ive. From a large population of which only 0.1% have HIV, one person is selected at random, given the HIV test, and the pathologist reports him/her as HIV+ive. What is the probability that the person actually has HIV?", category: '5-mark', topicId: '13-5-bayes' },
  { id: 'math13-5m-13', text: 'In a factory which manufactures bolts, machines A, B and C manufacture respectively 25%, 35% and 40% of the bolts. Of their outputs, 5, 4 and 2 percent are respectively defective bolts. A bolt is drawn at random from the product and is found to be defective. What is the probability that it is manufactured by the machine B?', category: '5-mark', topicId: '13-5-bayes' },
  { id: 'math13-5m-14', text: 'A doctor is to visit a patient. From the past experience, it is known that the probabilities that he will come by train, bus, scooter or by other means of transport are respectively 3/10, 1/5, 1/10 and 2/5. The probabilities that he will be late are 1/4, 1/3, and 1/12 if he comes by train, bus and scooter respectively, but if he comes by other means of transport, then he will not be late. When he arrives, he is late. What is the probability that he comes by train?', category: '5-mark', topicId: '13-5-bayes' },
  { id: 'math13-5m-15', text: 'A man is known to speak truth 3 out of 4 times. He throws a die and reports that it is a six. Find the probability that it is actually a six.', category: '5-mark', topicId: '13-5-bayes' },
  { id: 'math13-5m-16', text: 'In answering a question on a multiple choice test, a student either knows the answer or guesses. Let 3/4 be the probability that he knows the answer and 1/4 be the probability that he guesses. Assuming that a student who guesses at the answer will be correct with probability 1/4, what is the probability that the student knows the answer given that he answered it correctly?', category: '5-mark', topicId: '13-5-bayes' },
  { id: 'math13-5m-17', text: 'There are three coins. One is a two headed coin (having head on both faces), another is a biased coin that comes up heads 75% of the time and third is an unbiased coin. One of the three coins is chosen at random and tossed, it shows heads, what is the probability that it was the two headed coin?', category: '5-mark', topicId: '13-5-bayes' },
  { id: 'math13-5m-18', text: 'An insurance company insured 2000 scooter drivers, 4000 car drivers and 6000 truck drivers. The probability of accidents are 0.01, 0.03 and 0.15 respectively. One of the insured persons meets with an accident. What is the probability that he is a scooter driver?', category: '5-mark', topicId: '13-5-bayes' },
  { id: 'math13-5m-19', text: 'A factory has two machines A and B. Past record shows that machine A produced 60% of the items of output and machine B produced 40% of the items. Further, 2% of the items produced by machine A and 1% produced by machine B were defective. All the items are put into one stockpile and then one item is chosen at random from this and is found to be defective. What is the probability that it was produced by machine B?', category: '5-mark', topicId: '13-5-bayes' },

  // ===== ASSERTION-REASON QUESTIONS =====
  { id: 'math13-ar-1', text: 'Assertion: If P(A) = 0.4, P(B) = 0.5 and P(A ∩ B) = 0.2, then P(A|B) = 0.4.\nReason: P(A|B) = P(A ∩ B)/P(B).\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '13-1-2-conditional' },
  { id: 'math13-ar-2', text: 'Assertion: P(S|F) = 1 where S is the sample space.\nReason: The conditional probability is valid only when P(F) ≠ 0.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '13-2-1-properties' },
  { id: 'math13-ar-3', text: 'Assertion: If A and B are independent events, then P(A ∩ B) = P(A) × P(B).\nReason: For independent events, the occurrence of one does not affect the probability of the other.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '13-4-independent' },
  { id: 'math13-ar-4', text: 'Assertion: Two mutually exclusive events having non-zero probabilities cannot be independent.\nReason: For mutually exclusive events A and B, P(A ∩ B) = 0, but for independent events with non-zero probabilities, P(A ∩ B) = P(A) × P(B) ≠ 0.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true', category: 'assertion-reason', topicId: '13-4-independent' },
  { id: 'math13-ar-5', text: "Assertion: If E and F are independent events, then E' and F are also independent.\nReason: Independence of events is preserved under complementation.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true", category: 'assertion-reason', topicId: '13-4-independent' },
  { id: 'math13-ar-6', text: "Assertion: In Bayes' theorem, the events E₁, E₂, ..., Eₙ must form a partition of the sample space.\nReason: The events must be pairwise disjoint and exhaustive with non-zero probabilities.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true", category: 'assertion-reason', topicId: '13-5-bayes' },
  { id: 'math13-ar-7', text: "Assertion: The probability of at least one of two independent events A and B occurring is 1 − P(A') × P(B').\nReason: P(A ∪ B) = 1 − P(A' ∩ B') for any two events.\n(A) Both true, R explains A\n(B) Both true, R does not explain A\n(C) A true, R false\n(D) A false, R true", category: 'assertion-reason', topicId: '13-4-independent' },

  // ===== CASE STUDY QUESTIONS =====
  { id: 'math13-cs-1', text: "Case Study: Medical Diagnosis and Probability\nA laboratory blood test is 99% effective in detecting a certain disease when it is in fact present. However, the test also yields a false positive result for 0.5% of the healthy persons tested. If 0.1 percent of the population actually has the disease, a person is selected at random and tested.\n\n(1) Define the events E (person has disease) and A (test is positive). Write P(E) and P(E').\n(2) What is P(A|E), the probability of a positive test given the person has the disease?\n(3) What is P(A|E'), the probability of a false positive?\n(4) Using Bayes' theorem, find the probability that a person has the disease given that his test result is positive.", category: 'case-study', topicId: '13-5-bayes' },
  { id: 'math13-cs-2', text: 'Case Study: Quality Control in Manufacturing\nA company has three manufacturing units A, B, and C which produce 50%, 30%, and 20% of the total products respectively. The defect rates are 3%, 4%, and 5% for units A, B, and C respectively. A product is randomly selected from the total output and found to be defective.\n\n(1) What is the probability that a randomly selected product is defective?\n(2) Given that a product is defective, what is the probability it was produced by unit A?\n(3) What is the probability that the defective product was produced by unit B?\n(4) Which unit should be prioritized for quality improvement and why?', category: 'case-study', topicId: '13-5-bayes' },
  { id: 'math13-cs-3', text: "Case Study: Card Drawing Experiment\nA card is drawn from a well-shuffled deck of 52 cards. Let A be the event 'the card is a heart', B be the event 'the card is a face card (Jack, Queen, King)', and C be the event 'the card is red'.\n\n(1) Find P(A), P(B), and P(C).\n(2) Find P(A|C) and interpret the result.\n(3) Are events A and B independent? Justify your answer.\n(4) Find P(A ∩ B ∩ C) and interpret this probability.", category: 'case-study', topicId: '13-4-independent' },

  // ===== HOTS QUESTIONS =====
  { id: 'math13-hots-1', text: "A and B throw a die alternatively till one of them gets a '6' and wins the game. Find their respective probabilities of winning, if A starts first.", category: 'hots', topicId: '13-4-independent' },
  { id: 'math13-hots-2', text: 'If a machine is correctly set up, it produces 90% acceptable items. If it is incorrectly set up, it produces only 40% acceptable items. Past experience shows that 80% of the set ups are correctly done. If after a certain set up, the machine produces 2 acceptable items, find the probability that the machine is correctly setup.', category: 'hots', topicId: '13-5-bayes' },
  { id: 'math13-hots-3', text: 'Suppose that 5% of men and 0.25% of women have grey hair. A grey haired person is selected at random. What is the probability of this person being male? Assume that there are equal number of males and females.', category: 'hots', topicId: '13-5-bayes' },
  { id: 'math13-hots-4', text: 'If a leap year is selected at random, what is the chance that it will contain 53 Tuesdays?', category: 'hots', topicId: '13-4-independent' },
  { id: 'math13-hots-5', text: 'Coloured balls are distributed in four boxes as given below:\nBox I: 3 Black, 4 White, 5 Red, 6 Blue\nBox II: 2 Black, 2 White, 2 Red, 2 Blue\nBox III: 1 Black, 2 White, 3 Red, 1 Blue\nBox IV: 4 Black, 3 White, 1 Red, 5 Blue\nA box is selected at random and then a ball is randomly drawn from the selected box. The colour of the ball is black, what is the probability that ball drawn is from the box III?', category: 'hots', topicId: '13-5-bayes' },
  { id: 'math13-hots-6', text: 'Assume that the chances of a patient having a heart attack is 40%. It is also assumed that a meditation and yoga course reduces the risk of heart attack by 30% and prescription of certain drug reduces its chances by 25%. At a time a patient can choose any one of the two options with equal probabilities. It is given that after going through one of the two options the patient selected at random suffers a heart attack. Find the probability that the patient followed a course of meditation and yoga.', category: 'hots', topicId: '13-5-bayes' },
  { id: 'math13-hots-7', text: 'Bag I contains 3 red and 4 black balls and Bag II contains 4 red and 5 black balls. One ball is transferred from Bag I to Bag II and then a ball is drawn from Bag II. The ball so drawn is found to be red in colour. Find the probability that the transferred ball is black.', category: 'hots', topicId: '13-5-bayes' },
];

export const mathematicsQuestionBanks: ChapterQuestionBank[] = [
  {
    chapterId: 'relations-functions',
    questions: chapter1Questions,
  },
  {
    chapterId: 'inverse-trig',
    questions: chapter2Questions,
  },
  {
    chapterId: 'matrices',
    questions: chapter3Questions,
  },
  {
    chapterId: 'determinants',
    questions: chapter4Questions,
  },
  {
    chapterId: 'continuity-diff',
    questions: chapter5Questions,
  },
  {
    chapterId: 'applications-derivatives',
    questions: chapter6Questions,
  },
  {
    chapterId: 'integrals',
    questions: chapter7Questions,
  },
  {
    chapterId: 'application-integrals',
    questions: chapter8Questions,
  },
  {
    chapterId: 'differential-equations',
    questions: chapter9Questions,
  },
  {
    chapterId: 'vectors',
    questions: chapter10Questions,
  },
  {
    chapterId: '3d-geometry',
    questions: chapter11Questions,
  },
  {
    chapterId: 'linear-programming',
    questions: chapter12Questions,
  },
  {
    chapterId: 'probability',
    questions: chapter13Questions,
  },
];

// Helper function to get questions for a specific chapter
export function getMathematicsChapterQuestions(chapterId: string): Question[] {
  const bank = mathematicsQuestionBanks.find(b => b.chapterId === chapterId);
  return bank?.questions || [];
}

// Helper function to get questions by category
export function getMathematicsQuestionsByCategory(chapterId: string, category: string): Question[] {
  const questions = getMathematicsChapterQuestions(chapterId);
  return questions.filter(q => q.category === category);
}

// Helper function to get questions by topic
export function getMathematicsQuestionsByTopic(chapterId: string, topicId: string): Question[] {
  const questions = getMathematicsChapterQuestions(chapterId);
  return questions.filter(q => q.topicId === topicId);
}
