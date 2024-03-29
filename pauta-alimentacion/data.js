const distribution = [
	{
		name: 'Cereales',
		schedule: {
			desayuno: 1,
			almuerzo: 1,
			once: 1,
			cena: 1,
		}
	},
	{
		name: 'Frutas',
		schedule: {
			desayuno: 1,
			colacion: 1,
		}
	},
	{
		name: 'Verduras generales',
		schedule: {
			desayuno: .5,
			almuerzo: 1,
			cena: .5,
			colacion2: 1
		}
	},
	{
		name: 'Verduras de libre consumo',
		schedule: {
			almuerzo: 1,
			cena: 1,
			colacion2: 1
		}
	},
	{
		name: 'Lácteos bajos en grasa',
		schedule: {
			desayuno: 1,
			once: 1,
			colacion2: 1
		}
	},
	{
		name: 'Carnes, Pescados, Huevos',
		schedule: {
			almuerzo: 1,
		}
	},
	{
		name: 'Legumbres',
		schedule: {
			cena: 1
		}
	},
	{
		name: 'Aceites y grasas',
		schedule: {
			desayuno: .5,
			almuerzo: .5,
			cena: .5,
			colacion2: .5
		}
	},
	{
		name: 'Alimentos ricos en lípidos',
		schedule: {
			once: 1
		}
	},
	{
		name: 'Azúcares',
		schedule: {
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
						name: 'Pan molde integral',
						quantity: 2,
						unit: 11,
						portion: 1
					},
					{
						name: 'Quesillo',
						quantity: 2,
						unit: 11,
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
						name: 'Pan hallulla integral',
						quantity: 50,
						unit: 1,
						portion: 1
					},
					{
						name: 'Queso fresco',
						quantity: 2,
						unit: 11,
						portion: 1
					},
					{
						name: 'Mantequilla de maní',
						quantity: 1.5,
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
						quantity: .25,
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
						quantity: 2,
						unit: 4	,
						portion: 1,
						cho: .7
					},
					{
						name: 'Aceite de oliva',
						quantity: 1,
						unit: 5,
						portion: .25
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