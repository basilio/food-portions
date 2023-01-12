const distribution = [
	{
		name: 'Cereales',
		schedule: {
			desayuno: 1,
			almuerzo: 1,
			once: 1,
			cena: 1,
			colacion2: .5
		}
	},
	{
		name: 'Frutas',
		schedule: {
			desayuno: 1,
			colacion: 1
		}
	},
	{
		name: 'Verduras generales',
		schedule: {
			almuerzo: 1,
			cena: 1
		}
	},
	{
		name: 'Verduras de libre consumo',
		schedule: {
			almuerzo: 1,
			cena: 1
		}
	},
	{
		name: 'Lácteos bajos en grasa',
		schedule: {
			once: 1,
			cena: 1,
			colacion2: 1
		}
	},
	{
		name: 'Carnes, Pescados, Huevos',
		schedule: {
			almuerzo: 1,
			once: .5,
			cena: 1
		}
	},
	{
		name: 'Legumbres',
		schedule: {
		}
	},
	{
		name: 'Aceites y grasas',
		schedule: {
			almuerzo: 1,
			cena: 1
		}
	},
	{
		name: 'Alimentos ricos en lípidos',
		schedule: {
			desayuno: .5,
			colacion2: .5
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
				name: 'Porridge de avena y manzana con bebida vegetal de almendras',
				foods: [
					{
						name: 'Avena entera o integral',
						quantity: 3,
						unit: 4,
						portion: 1
					},
					{
						name: 'Manzana',
						nameDetail: 'rallada',
						quantity: 1,
						unit: 8,
						portion: 1
					}
				],
				additionalFoods: [
					{
						name: 'Bebida vegetal de almendras (sin azúcar añadida)',
						quantity: 1,
						unit: 3,
						portion: '1/2 porción de Alimentos ricos en lípidos',
						cho: '1.6g'
					},
					{
						name: 'Stevia o alulosa',
						quantity: 'A gusto',
						unit: null,
						cho: null,
						portion: 'Endulzantes naturales'
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
				name: 'Mix frutillas y arándanos',
				foods: [
					{
						name: 'Frutillas',
						quantity: .5,
						unit: 3,
						portion: .5
					},
					{
						name: 'Arándanos',
						quantity: .5,
						unit: 3,
						portion: .5
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
				name: 'Ensalada de Repollo con Betarraga',
				foods: [
					{
						name: 'Repollo',
						quantity: 1,
						unit: 3,
						portion: 1
					},
					{
						name: 'Betarraga',
						quantity: .5,
						unit: 3,
						portion: 1
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
			},
			{
				name: 'Plato de fondo: Salteado de jurel con cebolla y fideos',
				foods: [
					{
						name: 'Jurel',
						quantity: 70,
						unit: 1,
						portion: 1
					},
					{
						name: 'Cebolla',
						quantity: .5,
						unit: 8,
						portion: .5
					},
					{
						name: 'Aceite vegetal',
						quantity: 2,
						unit: 5,
						portion: .5
					},
					{
						name: 'Fideos',
						quantity: .75,
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
				name: 'Sandwich de atún y quesillo',
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
					}
				],
				additionalFoods: [
					{
						name: 'Atún en agua',
						quantity: '1/4 tarro',
						unit: null,
						portion: '1/2 porción de Carnes, Pescados, Huevos y Leguminosas secas',
						cho: null
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
				name: 'Omelette de huevo con champiñón y tostadas de pan integral',
				foods: [
					{
						name: 'Pan molde integral',
						quantity: 1,
						unit: 11,
						portion: 1
					},
					{
						name: 'Huevo',
						quantity: 1,
						unit: 8,
						portion: 1
					},
					{
						name: 'Champiñones',
						quantity: .75,
						unit: 3,
						portion: 1
					},
					{
						name: 'Aceite vegetal',
						quantity: 2,
						unit: 5,
						portion: .5
					}
				]
			},
			{
				name: 'Ensalada de pepino y queso fresco',
				foods: [
					{
						name: 'Pepino',
						quantity: 1,
						unit: 3,
						portion: 1
					},
					{
						name: 'Queso fresco',
						quantity: 2,
						unit: 11,
						portion: 1
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
				name: 'Galletas de chia y romero con queso fresco y aceitunas',
				additionalFoods: [
					{
						name: 'Galletas de chia romero (Tika)',
						quantity: 5,
						unit: 8,
						portion: '1/2 porción de Cereales, Papas y Leguminosas fresca',
						cho: '17g'
					}
				],
				foods: [
					{
						name: 'Aceitunas',
						quantity: 5,
						unit: 8,
						portion: .5
					},
					{
						name: 'Queso fresco',
						quantity: 2,
						unit: 11,
						portion: 1
					}
				]
			}
		]
	}
];