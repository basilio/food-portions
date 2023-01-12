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
								value: .75
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
								value: .75
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
								value: .5
							}
						]
					},
					{
						foods: [
							'Tomate'
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
							'Cebolla'
						],
						values: [
							{
								unit: 3,
								value: .75
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
								value: .5
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
								value: .75
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
								value: .25
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
								value: 1.5
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
							'Avena entera o integral'
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
							'Pan marraqueta'
						],
						values: [
							{
								unit: 8,
								value: .5
							},
							{
								unit: 1,
								value: 50
							},
						]
					},
					{
						foods: [
							'Pan hallulla'
						],
						values: [
							{
								unit: 8,
								value: .5
							},
							{
								unit: 1,
								value: 50
							},
						]
					},
					{
						foods: [
							'Pan hallulla integral'
						],
						values: [
							{
								unit: 9,
								value: .5
							},
							{
								unit: 1,
								value: 50
							},
						]
					},
					{
						foods: [
							'Pan hallulla centeno'
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
					},
					{
						foods: [
							'Pan molde'
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
							'Pan molde integral'
						],
						values: [
							{
								unit: 11,
								value: 2
							},
							{
								unit: 1,
								value: 50
							},
						]
					},
					{
						foods: [
							'Pan molde centeno'
						],
						values: [
							{
								unit: 11,
								value: 1.25
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
								value: .5
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
								value: .5
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
								value: .75
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
							'Quesillo', 'Queso fresco'
						],
						values: [
							{
								unit: 11,
								value: 2
							},
							{
								unit: 1,
								value: 60
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
								unit: 11,
								value: 3
							},
							{
								unit: 1,
								value: 90
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
								value: .5
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
								value: .25
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
							'Frambuesas', 'frutillas', 'melón', 'sandia', 'arándanos'
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
								value: .5
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
								value: .75
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
								value: 2.5
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
							'Aceite de maravilla', 'aceite de maíz', 'aceite de soya', 'aceite de oliva', 'aceite de canola', 'aceite vegetal'
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
								value: .5
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
								value: 1.5
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
								value: .75
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
								value: .25
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
								value: .25
							}
						]
					}
				]
			}
		]
	}
];