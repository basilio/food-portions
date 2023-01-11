const distribution = [
	{
		name: 'Cereales',
		schedule: {
			desayuno: 1,
			colacion: null,
			almuerzo: 1,
			once: 1,
			cena: 1,
			colacion2: null
		}
	},
	{
		name: 'Frutas',
		schedule: {
			desayuno: 1,
			colacion: 1,
			almuerzo: null,
			once: null,
			cena: null,
			colacion2: null
		}
	},
	{
		name: 'Verduras generales',
		schedule: {
			desayuno: .5,
			colacion: null,
			almuerzo: 1,
			once: null,
			cena: .5,
			colacion2: 1
		}
	},
	{
		name: 'Verduras de libre consumo',
		schedule: {
			desayuno: null,
			colacion: null,
			almuerzo: 1,
			once: null,
			cena: 1,
			colacion2: 1
		}
	},
	{
		name: 'Lácteos bajos en grasa',
		schedule: {
			desayuno: 1,
			colacion: null,
			almuerzo: null,
			once: 1,
			cena: null,
			colacion2: 1
		}
	},
	{
		name: 'Carnes, Pescados, Huevos',
		schedule: {
			desayuno: null,
			colacion: null,
			almuerzo: 1,
			once: null,
			cena: null,
			colacion2: null
		}
	},
	{
		name: 'Legumbres',
		schedule: {
			desayuno: null,
			colacion: null,
			almuerzo: null,
			once: null,
			cena: 1,
			colacion2: 1
		}
	},
	{
		name: 'Aceites y grasas',
		schedule: {
			desayuno: .5,
			colacion: null,
			almuerzo: .5,
			once: null,
			cena: .5,
			colacion2: .5
		}
	},
	{
		name: 'Alimentos ricos en lípidos',
		schedule: {
			desayuno: null,
			colacion: null,
			almuerzo: null,
			once: 1,
			cena: null,
			colacion2: 1
		}
	},
	{
		name: 'Azúcares',
		schedule: {
			desayuno: null,
			colacion: null,
			almuerzo: null,
			once: null,
			cena: null,
			colacion2: null
		}
	}
];

const schedule = [
	{
		name: 'Desayuno',
		hour: '07:00',
		cho: 45,
		preparations: [
			{
				name: 'Sandwich de quesillo y tomate',
				foods: [
					{
						name: 'Pan integral molde',
						quantity: 2,
						unit: 11,
						portion: 1
					},
					{
						name: 'Quesillo',
						quantity: 1,
						unit: 16,
						portion: 1
					},
					{
						name: 'Tomate',
						quantity: .5,
						unit: 8,
						portion: .5
					},
					{
						name: 'Aceite de oliva',
						quantity: 2,
						unit: 5,
						portion: .5
					},
				],
				additionalFoods: [
					{
						name: 'Té o hierbas',
						quantity: 1,
						unit: 3,
						portion: 'Infusiones'
					}
				]
			}
		]
	},
	{
		name: 'Colación',
		hour: '10:00',
		cho: 11,
		preparations: [
			{
				name: 'Fruta picada o entera',
				foods: [
					{
						name: 'Durazno',
						quantity: 1,
						unit: 8,
						portion: 1
					}
				]
			}
		]
	},
	{
		name: 'Almuerzo',
		hour: '13:30',
		cho: 55,
		preparations: [
			{
				name: 'Ensalada de lechuga con brocoli',
				foods: [
					{
						name: 'Lechuga',
						quantity: 1,
						unit: 3,
						portion: 1
					},
					{
						name: 'Brócoli',
						quantity: 1,
						unit: 3,
						portion: 1
					},
					{
						name: 'Aceite vegetal',
						quantity: 1,
						unit: 5,
						portion: 1
					}
				],
				additionalFoods: [
					{
						name: 'Jugo de limón y vinagre',
						quantity: 'A gusto',
						unit: null,
						cho: null,
						portion: 'Aliños'
					}
				]
			},
			{
				name: 'Plato de fondo: Chapsui de pollo con arroz',
				foods: [
					{
						name: 'Pollo',
						quantity: 50,
						unit: 1,
						portion: 1
					},
					{
						name: 'Arroz blanco',
						quantity: .75,
						unit: 3,
						portion: 1
					}
				]
			},
			{
				name: 'Fruta picada o entera',
				foods: [
					{
						name: 'Frutillas',
						quantity: 1,
						unit: 3,
						portion: 1
					}
				]
			}
		]
	},
	{
		name: 'Once o colación de tarde',
		hour: '16:00',
		cho: 33,
		preparations: [
			{
				name: 'Sandwich de queso fresco y mantequilla de maní',
				foods: [
					{
						name: 'Hallulla integral',
						quantity: 50,
						unit: 1,
						portion: 1
					},
					{
						name: 'Queso fresco',
						quantity: 2,
						unit: 16,
						portion: 1
					},
					{
						name: 'Mantequilla de maní',
						quantity: '1 1/2',
						unit: 4,
						portion: 1
					}
				]
			}
		]
	},
	{
		name: 'Cena o última comida',
		hour: '20:00',
		cho: 55,
		preparations: [
			{
				name: 'Guiso de lentejas con ensalada de lechuga y pepino',
				foods: [
					{
						name: 'Lentejas',
						quantity: .75,
						unit: 3,
						portion: 1
					},
					{
						name: 'Arroz blanco',
						quantity: '1/4',
						unit: 3,
						portion: .5
					}
				]
			},
			{
				name: 'Ensalada de Lechuga y tomate',
				foods: [
					{
						name: 'Lechuga',
						quantity: 1,
						unit: 3,
						portion: 1
					},
					{
						name: 'Tomate',
						quantity: .5,
						unit: 8,
						portion: .5
					},
					{
						name: 'Aceite vegetal',
						quantity: 2,
						unit: 5,
						portion: .5
					}
				],
				additionalFoods: [
					{
						name: 'Jugo de limón y vinagre',
						quantity: 'A gusto',
						unit: null,
						cho: null,
						portion: 'Aliños'
					}
				]
			}
		]
	},
	{
		name: 'Colación nocturna',
		hour: '22:00',
		cho: 22,
		preparations: [
			{
				name: 'Galletas de chia y romero',
				additionalFoods: [
					{
						name: 'Galletas de chia romero (Tika)',
						quantity: 4,
						unit: 8,
						portion: '1/2 porción de Cereales, Papas y Leguminosas fresca',
						cho: '13g'
					}
				]
			},
			{
				name: 'Pasta para untar de ricotta',
				foods: [
					{
						name: 'Ricotta',
						nameDetail: '(Quillayes)',
						quantity: 75,
						unit: 1,
						portion: 1
					},
					{
						name: 'Aceite de oliva',
						quantity: 1,
						unit: 5,
						portion: '1/4'
					},
				],
				additionalFoods: [
					{
						name: 'Perejil',
						quantity: 20,
						unit: 1,
						portion: null,
						cho: null
					},
					{
						name: 'Ajo',
						quantity: 1,
						unit: 12,
						portion: null,
						cho: null
					},
					{
						name: 'Sal',
						quantity: 1,
						unit: 17,
						portion: null,
						cho: null
					},
				]
			},
			{
				name: 'Bastones de verduras',
				foods: [
					{
						name: 'Zanahoria (cruda)',
						quantity: .5,
						unit: 3,
						portion: 1
					},
					{
						name: 'Apio',
						quantity: 1,
						unit: 3,
						portion: 1
					}
				]
			}
		]
	}
];