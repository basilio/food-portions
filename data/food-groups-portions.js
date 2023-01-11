const foodGroupsAndPortions = [
	{
		name: 'Verduras',
		portions: null,
		subgroups: [
			{
				name: 'Verduras en general',
				portion: null,
				calories: 30,
				cho: 5,
				protein: 2,
				fat: 0,
				foodTypes: [
					{
						foods: [
							'Acelga', 'betarraga', 'berenjena', 'espinaca', 'repollitos de bruselas', 'zapallo (cocidas)'
						],
						values: [
							{
								unit: 3,
								value: '3/4'
							}
						]
					},
					{
						foods: [
							'Brócoli', 'coliflor', 'zanahoria', 'zapallo italiano (cocidas)'
						],
						values: [
							{
								unit: 3,
								value: 1
							}
						]
					},
					{
						foods: [
							'Champiñones', 'porotos verdes (cocidos)'
						],
						values: [
							{
								unit: 3,
								value: '3/4'
							},
						]
					},
					{
						foods: [
							'Alcachofa (cocida)'
						],
						values: [
							{
								unit: 9,
								value: 1
							}
						]
					},
					{
						foods: [
							'Espárragos (cocidos)'
						],
						values: [
							{
								unit: 8,
								value: 5
							}
						]
					},
					{
						foods: [
							'Zanahoria (cruda)'
						],
						values: [
							{
								unit: 3,
								value: '1/2'
							}
						]
					},
					{
						foods: [
							'Tomate (crudo)'
						],
						values: [
							{
								unit: 8,
								value: 1
							}
						]
					},
					{
						foods: [
							'Cebolla (cruda)'
						],
						values: [
							{
								unit: 3,
								value: '3/4'
							},
						]
					},
					{
						foods: [
							'Betarraga (cruda)'
						],
						values: [
							{
								unit: 3,
								value: 1
							}
						]
					}
				]
			},
			{
				name: 'Verduras de libre consumo',
				portion: null,
				calories: 10,
				cho: 2.5,
				protein: 0,
				fat: 0,
				foodTypes: [
					{
						foods: [
							'Acelga', 'achicoria', 'apio', 'cochayuyo', 'espinaca', 'lechuga', 'pepino', 'repollo', 'zapallo italiano crudo', 'ulte'
						],
						values: [
							{
								unit: 3,
								value: 1
							}
						]
					},
					{
						foods: [
							'Pimentón rojo y verde'
						],
						values: [
							{
								unit: 3,
								value: '1/2'
							}
						]
					},
					{
						foods: [
							'Ajo'
						],
						values: [
							{
								unit: 12,
								value: 8
							},
						]
					},
					{
						foods: [
							'Rabanito'
						],
						values: [
							{
								unit: 8,
								value: 5
							}
						]
					}
				]
			}
		]
	},
	{
		name: 'Cereales, Papas y Leguminosas frescas',
		portions: null,
		subgroups: [
			{
				name: 'Cereales, Papas y Leguminosas frescas',
				portion: null,
				calories: 140,
				cho: 30,
				protein: 3,
				fat: 1,
				foodTypes: [
					{
						foods: [
							'Arroz blanco', 'arroz integral', 'fideos', 'fideos integrales', 'choclo', 'porotos granados'
						],
						values: [
							{
								unit: 3,
								value: '3/4'
							}
						]
					},
					{
						foods: [
							'Quínoa (pseudo cereal)'
						],
						values: [
							{
								unit: 3,
								value: '1/4'
							},
							{
								unit: 4,
								value: 4
							},
						]
					},
					{
						foods: [
							'Arvejas'
						],
						values: [
							{
								unit: 3,
								value: '1 1/2'
							},
						]
					},
					{
						foods: [
							'Papa'
						],
						values: [
							{
								unit: 8,
								value: 1
							}
						]
					},
					{
						foods: [
							'Haba'
						],
						values: [
							{
								unit: 3,
								value: 1
							}
						]
					},
					{
						foods: [
							'Galletas de agua o soda'
						],
						values: [
							{
								unit: 8,
								value: 8
							}
						]
					},
					{
						foods: [
							'Pan marraqueta'
						],
						values: [
							{
								unit: 8,
								value: '1/2'
							},
							{
								unit: 1,
								value: 50
							},
						]
					},
					{
						foods: [
							'Pan Hallulla'
						],
						values: [
							{
								unit: 8,
								value: '1/2'
							},
							{
								unit: 1,
								value: 50
							},
						]
					},
					{
						foods: [
							'Pan Molde'
						],
						values: [
							{
								unit: 11,
								value: 3
							},
							{
								unit: 1,
								value: 60
							},
						]
					},
					{
						foods: [
							'Pan integral Hallulla'
						],
						values: [
							{
								unit: 9,
								value: '1/2'
							},
							{
								unit: 1,
								value: 50
							},
						]
					},
					{
						foods: [
							'Pan integral molde'
						],
						values: [
							{
								unit: 11,
								value: '1 1/4'
							},
							{
								unit: 1,
								value: 50
							},
						]
					},
					{
						foods: [
							'Pan Centeno Molde'
						],
						values: [
							{
								unit: 11,
								value: '1 1/4'
							},
							{
								unit: 1,
								value: 50
							},
						]
					},
					{
						foods: [
							'Pan Centeno Hallulla'
						],
						values: [
							{
								unit: 9,
								value: 1
							},
							{
								unit: 1,
								value: 50
							},
						]
					}
				]
			}
		]
	},
	{
		name: 'Lácteos',
		portions: null,
		subgroups: [
			{
				name: 'Lácteos altos en grasa',
				portion: null,
				calories: 110,
				cho: 9,
				protein: 5,
				fat: 6,
				foodTypes: [
					{
						foods: [
							'Leche líquida entera'
						],
						values: [
							{
								unit: 3,
								value: 1
							},
							{
								unit: 2,
								value: 200
							}
						]
					},
					{
						foods: [
							'Leche entera en polvo'
						],
						values: [
							{
								unit: 6,
								value: 1
							},
							{
								unit: 7,
								value: 3
							}
						]
					},
					{
						foods: [
							'Yogurt Natural (griego)'
						],
						values: [
							{
								unit: 8,
								value: 1
							},
							{
								unit: 1,
								value: 150
							}
						]
					}
				]
			},
			{
				name: 'Quesos',
				portion: null,
				calories: 80,
				cho: 1,
				protein: 5,
				fat: 6,
				foodTypes: [
					{
						foods: [
							'Chanco ', 'Mantecoso', 'Cheddar', 'Cabra', 'Gauda'
						],
						values: [
							{
								unit: 14,
								value: '1/2'
							}
						]
					},
					{
						foods: [
							'Parmesano'
						],
						values: [
							{
								unit: 7,
								value: 1
							},
							{
								unit: 5,
								value: 3
							}
						]
					},
					{
						foods: [
							'Untables'
						],
						values: [
							{
								unit: 4,
								value: 1
							}
						]
					}
				]
			},
			{
				name: 'Lácteos medios en grasas',
				portion: null,
				calories: 85,
				cho: 9,
				protein: 5,
				fat: 3,
				foodTypes: [
					{
						foods: [
							'Leche líquida semi descremada'
						],
						values: [
							{
								unit: 3,
								value: 1,
							},
							{
								unit: 2,
								value: 200
							}
						],
					},
					{
						foods: [
							'Leche semidescremada en polvo'
						],
						values: [
							{
								unit: 6,
								value: 1,
							},
							{
								unit: 7,
								value: 3
							}
						]
					},
					{
						foods: [
							'Leche líquida saborizada'
						],
						values: [
							{
								unit: 3,
								value: '1/2'
							},
							{
								unit: 2,
								value: 100
							}
						]
					},
					{
						foods: [
							'Yogurt sin azúcar y bajo en grasa (endulzantes artificiales)'
						],
						values: [
							{
								unit: 8,
								value: 1
							},
							{
								unit: 1,
								value: 150
							}
						]
					},
					{
						foods: [
							'Yogurt natural no endulzado (leche semidescremada)'
						],
						values: [
							{
								unit: 8,
								value: 1
							},
							{
								unit: 1,
								value: 150
							}
						]
					},
					{
						foods: [
							'Yogurt natural endulzado'
						],
						values: [
							{
								unit: 8,
								value: 1
							},
							{
								unit: 1,
								value: 150
							}
						]
					},
					{
						foods: [
							'Leche de Soya'
						],
						values: [
							{
								unit: 3,
								value: '3/4'
							},
							{
								unit: 2,
								value: 150
							}
						]
					},
					{
						foods: [
							'Tofu'
						],
						values: [
							{
								unit: 11,
								value: 1
							},
							{
								unit: 1,
								value: 70
							}
						]
					},
					{
						foods: [
							'Quesillo'
						],
						values: [
							{
								unit: 16,
								value: 1
							}
						]
					},
					{
						foods: [
							'Ricotta'
						],
						values: [
							{
								unit: 4,
								value: 2,
							},
						]
					}
				]
			},
			{
				name: 'Lácteos bajos en grasas',
				portion: null,
				calories: 70,
				cho: 10,
				protein: 7,
				fat: 0,
				foodTypes: [
					{
						foods: [
							'Leche líquida descremada'
						],
						values: [
							{
								unit: 3,
								value: 1
							},
							{
								unit: 2,
								value: 200
							}
						]
					},
					{
						foods: [
							'Leche en polvo descremada'
						],
						values: [
							{
								unit: 6,
								value: 1,
							},
							{
								unit: 7,
								value: 3
							}
						],
					},
					{
						foods: [
							'Leche cultivada descremada'
						],
						values: [
							{
								unit: 3,
								value: 1
							},
							{
								unit: 2,
								value: 200
							}
						],
					},
					{
						foods: [
							'Yogurt 0% grasa y sin azúcar'
						],
						values: [
							{
								unit: 8,
								value: 1
							},
							{
								unit: 2,
								value: 150
							}
						],
					},
					{
						foods: [
							'Yogurt natural no endulzado (leche descremada)'
						],
						values: [
							{
								unit: 8,
								value: 1
							},
							{
								unit: 2,
								value: 150
							}
						]
					},
					{
						foods: [
							'Quesillo light (leche descremada)'
						],
						values: [
							{
								unit: 16,
								value: 1
							}
						]
					}
				]
			}
		]
	},
	{
		name: 'Frutas',
		portions: null,
		subgroups: [
			{
				name: 'Frutas',
				portion: null,
				calories: 65,
				cho: 15,
				protein: 1,
				fat: 0,
				foodTypes: [
					{
						foods: [
							'Manzana', 'caqui', 'durazno', 'membrillo', 'naranja', 'pera'
						],
						values: [
							{
								unit: 8,
								value: 1
							},
							{
								unit: 1,
								value: 100
							}
						]
					},
					{
						foods: [
							'Ciruelas', 'damasco', 'limón', 'papaya'
						],
						values: [
							{
								unit: 8,
								value: 3
							}
						]
					},
					{
						foods: [
							'Higos', 'kiwi', 'tuna'
						],
						values: [
							{
								unit: 8,
								value: 2
							},
						]
					},
					{
						foods: [
							'Pepino dulce'
						],
						values: [
							{
								unit: 10,
								value: 1
							}
						]
					},
					{
						foods: [
							'Plátano'
						],
						values: [
							{
								unit: 8,
								value: '1/2'
							},
							{
								unit: 1,
								value: 60
							}
						]
					},
					{
						foods: [
							'Chirimoya'
						],
						values: [
							{
								unit: 8,
								value: '1/4'
							}
						]
					},
					{
						foods: [
							'Cerezas'
						],
						values: [
							{
								unit: 8,
								value: 15
							}
						]
					},
					{
						foods: [
							'Uvas'
						],
						values: [
							{
								unit: 8,
								value: 10
							}
						]
					},
					{
						foods: [
							'Frambuesas', 'frutillas', 'melón', 'sandia'
						],
						values: [
							{
								unit: 3,
								value: 1
							}
						]
					},
					{
						foods: [
							'Mora', 'grosella'
						],
						values: [
							{
								unit: 3,
								value: '1/2'
							}
						]
					},
					{
						foods: [
							'Piña'
						],
						values: [
							{
								unit: 3,
								value: '3/4'
							}
						]
					},
					{
						foods: [
							'Higos secos', 'huesillo'
						],
						values: [
							{
								unit: 8,
								value: 2
							}
						]
					},
					{
						foods: [
							'Pasas'
						],
						values: [
							{
								unit: 8,
								value: 20
							}
						]
					},
					{
						foods: [
							'Ciruelas'
						],
						values: [
							{
								unit: 8,
								value: '2 1/2'
							}
						]
					},
					{
						foods: [
							'Pera desecada', 'manzana desecada'
						],
						values: [
							{
								unit: 15,
								value: 7
							}
						]
					}
				]
			}
		]
	},
	{
		name: 'Aceites y grasas',
		portions: null,
		subgroups: [
			{
				name: 'Aceites y grasas',
				portion: null,
				calories: 180,
				cho: 0,
				protein: 0,
				fat: 20,
				foodTypes: [
					{
						foods: [
							'Aceite de maravilla', 'aceite de maíz', 'aceite de soya', 'aceite de oliva', 'aceite de canola'
						],
						values: [
							{
								unit: 5,
								value: 4
							}
						]
					},
					{
						foods: [
							'Manteca de cerdo', 'manteca vegetal', 'paté'
						],
						values: [
							{
								unit: 4,
								value: 2
							}
						]
					},
					{
						foods: [
							'Mantequilla', 'margarina'
						],
						values: [
							{
								unit: 5,
								value: 4
							}
						]
					},
					{
						foods: [
							'Crema espesa', 'crema chantilly'
						],
						values: [
							{
								unit: 4,
								value: 4
							}
						]
					},
					{
						foods: [
							'Mayonesa'
						],
						values: [
							{
								unit: 4,
								value: 1
							}
						]
					},
					{
						foods: [
							'Crema ácida'
						],
						values: [
							{
								unit: 3,
								value: '1/2'
							}
						]
					},
					{
						foods: [
							'Tocino'
						],
						values: [
							{
								unit: 13,
								value: '1 1/2'
							}
						]
					}
				]
			},
			{
				name: 'Alimentos ricos en lípidos',
				portion: null,
				calories: 180,
				cho: 0,
				protein: 0,
				fat: 20,
				foodTypes: [
					{
						foods: [
							'Almendras'
						],
						values: [
							{
								unit: 8,
								value: 26
							}
						]
					},
					{
						foods: [
							'Maní'
						],
						values: [
							{
								unit: 8,
								value: 30
							}
						]
					},
					{
						foods: [
							'Nueces'
						],
						values: [
							{
								unit: 8,
								value: 5
							}
						]
					},
					{
						foods: [
							'Aceitunas'
						],
						values: [
							{
								unit: 8,
								value: 11
							}
						]
					},
					{
						foods: [
							'Palta'
						],
						values: [
							{
								unit: 4,
								value: 3
							}
						]
					},
					{
						foods: [
							'Avellana'
						],
						values: [
							{
								unit: 8,
								value: 50
							}
						]
					},
					{
						foods: [
							'Pistacho'
						],
						values: [
							{
								unit: 8,
								value: 40
							}
						]
					},
					{
						foods: [
							'Mantequilla de maní'
						],
						values: [
							{
								unit: 4,
								value: 2
							}
						]
					}
				]
			}
		]
	},
	{
		name: 'Carnes, Pescados, Huevos y Leguminosas secas',
		portions: null,
		subgroups: [
			{
				name: 'Carnes bajas en grasa, Pescados, Huevos',
				portion: null,
				calories: 65,
				cho: 1,
				protein: 11,
				fat: 2,
				foodTypes: [
					{
						foods: [
							'Filete', 'lomo liso', 'posta negra', 'posta rosada'
						],
						values: [
							{
								unit: 1,
								value: 50
							},
						]
					},
					{
						foods: [
							'Pollo', 'Pavo'
						],
						values: [
							{
								unit: 1,
								value: 50
							},
						]
					},
					{
						foods: [
							'Huevos'
						],
						values: [
							{
								unit: 8,
								value: 1
							},
						]
					},
					{
						foods: [
							'Jurel', 'Merluza', 'Reineta', 'Salmón'
						],
						values: [
							{
								unit: 1,
								value: 80
							},
						]
					}
				]
			},
			{
				name: 'Leguminosas secas',
				portion: null,
				calories: 170,
				cho: 30,
				protein: 11,
				fat: 1,
				foodTypes: [
					{
						foods: [
							'Lentejas', 'Garbanzos', 'Porotos'
						],
						values: [
							{
								unit: 3,
								value: '3/4'
							},
						]
					}
				]
			}
		]
	},
	{
		name: 'Azúcares',
		portions: null,
		subgroups: [
			{
				name: 'Azúcares',
				portion: null,
				calories: 20,
				cho: 5,
				protein: 0,
				fat: 0,
				foodTypes: [
					{
						foods: [
							'Azúcar', 'miel de abeja', 'miel de palma', 'mermeladas', 'dulce de membrillo', 'manjar', 'jalea y jugo en polvo'
						],
						values: [
							{
								unit: 5,
								value: 1
							}
						]
					},
					{
						foods: [
							'Bebidas gaseosas', 'néctar', 'pulpa de frutas'
						],
						values: [
							{
								unit: 3,
								value: '1/4'
							}
						]
					},
					{
						foods: [
							'Helado de agua'
						],
						values: [
							{
								unit: 8,
								value: '1/4'
							}
						]
					}
				]
			}
		]
	}
];