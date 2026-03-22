export const WHATSAPP = '56930176239';
export const ADDRESS = 'San Diego 1473';

export const categories = [
  { id: 'teque', label: 'Tequeños', icon: '🧀' },
  { id: 'papas', label: 'Papas & Pollos', icon: '🍟' },
  { id: 'raciones', label: 'Raciones', icon: '🥢' },
  { id: 'combo', label: 'Súper Combo', icon: '⚡' },
];

export const products = {
  teque: [
    { id: 't1', name: '6 Tequeños de Queso', price: 2500, emoji: '🧀', desc: 'Fritos y crujientes. Incluye salsa de ajo y salsa verde.' },
    { id: 't2', name: '12 Tequeños de Queso', price: 4500, emoji: '🧀', desc: 'Fritos y crujientes. Incluye salsa de ajo y salsa verde.' },
    { id: 't3', name: '20 Tequeños de Queso', price: 7500, emoji: '🧀', desc: 'Perfectos para compartir. Con salsas incluidas.' },
    { id: 't4', name: '25 Tequeños de Queso', price: 9000, emoji: '🧀', desc: 'Ideal para reuniones. Con salsas incluidas.' },
    { id: 't5', name: '50 Tequeños de Queso', price: 16000, emoji: '🧀', desc: 'Para eventos y fiestas. Con salsas incluidas.' },
    { id: 't6', name: '100 Tequeños de Queso', price: 29000, emoji: '🧀', desc: 'El pack más grande para grandes eventos.' },
    { id: 't7', name: '6 Tequeños + Bebida 500ml', price: 3000, emoji: '🧀🥤', desc: '6 tequeños de 5cm + bebida de 500ml. Incluye salsas.' },
    { id: 't8', name: '12 Tequeños + 2 Bebidas', price: 5500, emoji: '🧀🥤', desc: '12 tequeños + 2 bebidas de 500ml. Incluye salsas.' },
    { id: 't9', name: 'Tequeños Guayaba & Queso x4', price: 5000, emoji: '🍓🧀', desc: 'Crujientes tequeños de guayaba y queso bañados en reducción de vino tinto y chocolate. 9cm.', isNew: false, isSpecial: true },
  ],
  papas: [
    { id: 'p1', name: 'Papas Fritas 350gr', price: 2000, emoji: '🍟', desc: 'Papas fritas naturales crujientes.' },
    { id: 'p2', name: 'Papas Fritas 500gr', price: 3000, emoji: '🍟', desc: 'Porción grande de papas fritas naturales.' },
    { id: 'p3', name: 'Salchipapas / Choripapas', price: 4500, emoji: '🌭🍟', desc: '500g papas fritas + vienesas o chorizo + salsas.' },
    { id: 'p4', name: 'Papas con Alas Crispy', price: 5000, emoji: '🍗🍟', desc: '500g papas fritas naturales + 4 alitas de pollo crispy.' },
    { id: 'p5', name: 'Supremas de Pollo Apanada', price: 6000, emoji: '🍗', desc: '500g papas fritas + 3 supremas de pollo apanadas + salsas.' },
    { id: 'p6', name: 'Papas con Nuggets (Pequeña)', price: 3000, emoji: '🐔🍟', desc: '350g papas fritas + 5 nuggets de pollo.' },
    { id: 'p7', name: 'Papas con Nuggets (Grande)', price: 4000, emoji: '🐔🍟', desc: '500g papas fritas + 7 nuggets de pollo.' },
    { id: 'p8', name: 'Filetillos de Pollo con Papas', price: 5000, emoji: '🍗🍟', desc: '500g papas fritas + 5 filetillos de pollo rebozados + salsas.' },
    { id: 'p9', name: 'Chorillana Pollo Mechado', price: 6500, emoji: '🍳🍟', desc: '500g papas + 180g pollo mechado + chorizos + 2 huevos + salsas.', isNew: true },
    { id: 'p10', name: 'Queso Cheddar 3.5 oz', price: 2000, emoji: '🧀', desc: 'Extra queso cheddar fundido para acompañar.' },
  ],
  raciones: [
    { id: 'r1', name: '8 Mini Arrollado Primavera', price: 2000, emoji: '🥟', desc: 'Con salsa agridulce incluida.', isNew: true },
    { id: 'r2', name: '14 Mini Arrollado Primavera', price: 3500, emoji: '🥟', desc: 'Con salsa agridulce incluida.', isNew: true },
    { id: 'r3', name: '5 Arrollados Jamón y Queso', price: 2500, emoji: '🥗', desc: 'Crujientes arrollados con salsa agridulce.' },
    { id: 'r4', name: '3 Supremas Pollo Rebozado', price: 4000, emoji: '🍗', desc: 'Supremas apanadas y jugosas.' },
    { id: 'r5', name: '12 Abocaditos de Carne', price: 3000, emoji: '🥟', desc: 'Crujientes y rellenos de carne sabrosa.' },
    { id: 'r6', name: '4 Alas Crispy', price: 3500, emoji: '🍗', desc: 'Alitas de pollo extra crujientes.' },
    { id: 'r7', name: '8 Nuggets de Pollo', price: 2500, emoji: '🐔', desc: 'Nuggets caseros bien dorados.' },
  ],
  combo: [
    {
      id: 'c1', name: 'Súper Combo', price: 13000, emoji: '🎉',
      desc: 'El combo perfecto para compartir.',
      items: ['900gr. Papas fritas naturales', '4 alitas de pollo crispy', '6 filetillos de pollo', '6 tequeños de queso', '2 bebidas de 500ml Fruna', 'Incluye salsas'],
      isCombo: true,
    },
  ],
};
