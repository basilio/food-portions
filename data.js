const groups = [
	{
		name: 'Cereales, Papas y Leguminosas frescas',
		portions: null,
		subgroups: [
			{
				name: 'Cereales, Papas y Leguminosas frescas',
				portion: null,
				calories: 140,
				cho: '30g',
				protein: '3g',
				fat: '1g',
				food_types: [
					{
						name: 'Arroz, Arroz integral, Fideos, Fideos integrales',
						values: [
							{
								unit: 'taza',
								value: '3/4'
							}
						]
					},
					{
						name: 'Quínoa (pseudo cereal)',
						values: [
							{
								unit: 'taza',
								value: '1/4'
							},
							{
								unit: 'cdas',
								value: '4'
							},
						]
					},
					{
						name: 'Arvejas',
						values: [
							{
								unit: 'tazas',
								value: '1 1/2'
							},
						]
					},
					{
						name: 'Choclo',
						values: [
							{
								unit: 'taza',
								value: '3/4'
							}
						]
					},
					{
						name: 'Porotos granados',
						values: [
							{
								unit: 'taza',
								value: '3/4'
							}
						]
					},
					{
						name: 'Papa',
						values: [
							{
								unit: 'unidad regular',
								value: '1'
							}
						]
					},
					{
						name: 'Haba',
						values: [
							{
								unit: 'taza',
								value: '1'
							}
						]
					},
					{
						name: 'Galletas de agua o soda',
						values: [
							{
								unit: 'unidades',
								value: '8'
							}
						]
					},
					{
						name: 'Pan marraqueta',
						values: [
							{
								unit: 'unidad',
								value: '1/2'
							},
							{
								unit: 'grs',
								value: '50'
							},
						]
					},
					{
						name: 'Pan Hallulla',
						values: [
							{
								unit: 'unidad',
								value: '1/2'
							},
							{
								unit: 'g',
								value: '50'
							},
						]
					},
					{
						name: 'Pan Molde',
						values: [
							{
								unit: 'rebanadas',
								value: '3'
							},
							{
								unit: 'g',
								value: '60'
							},
						]
					},
					{
						name: 'Pan integral Hallulla',
						values: [
							{
								unit: 'unidad chica',
								value: '1/2'
							},
							{
								unit: 'g',
								value: '50'
							},
						]
					},
					{
						name: 'Pan integral molde',
						values: [
							{
								unit: 'rebanada',
								value: '1 1/4'
							},
							{
								unit: 'g',
								value: '50'
							},
						]
					},
					{
						name: 'Pan Centeno Molde',
						values: [
							{
								unit: 'rebanada',
								value: '1 1/4'
							},
							{
								unit: 'g',
								value: '50'
							},
						]
					},
					{
						name: 'Pan Centeno Hallulla',
						values: [
							{
								unit: 'unidad chica',
								value: '1'
							},
							{
								unit: 'g',
								value: '50'
							},
						]
					}
				]
			}
		]
	},
	{
		name: 'Verduras',
		portions: null,
		subgroups: [
			{
				name: 'Verduras en general',
				portion: null,
				calories: 30,
				cho: '5g',
				protein: '2g',
				fat: '0g',
				food_types: [
					{
						name: 'Acelga, betarraga, berenjena, espinaca, repollitos de bruselas, zapallo (cocidas)',
						values: [
							{
								unit: 'taza',
								value: '3/4'
							}
						]
					},
					{
						name: 'Brócoli, coliflor, zanahoria, zapallo italiano (cocidas)',
						values: [
							{
								unit: 'taza',
								value: '1'
							}
						]
					},
					{
						name: 'Champiñones, porotos verdes (cocidos)',
						values: [
							{
								unit: 'taza',
								value: '3/4'
							},
						]
					},
					{
						name: 'Alcachofa (cocida)',
						values: [
							{
								unit: 'unidad chica',
								value: '1'
							}
						]
					},
					{
						name: 'Espárragos (cocidos)',
						values: [
							{
								unit: 'unidades',
								value: '5'
							}
						]
					},
					{
						name: 'Zanahoria (cruda)',
						values: [
							{
								unit: 'taza',
								value: '1/2'
							}
						]
					},
					{
						name: 'Tomate (crudo)',
						values: [
							{
								unit: 'unidad',
								value: '1'
							}
						]
					},
					{
						name: 'Cebolla (cruda)',
						values: [
							{
								unit: 'taza',
								value: '3/4'
							},
						]
					},
					{
						name: 'Betarraga (cruda)',
						values: [
							{
								unit: 'taza',
								value: '1'
							}
						]
					}
				]
			},
			{
				name: 'Verduras de libre consumo',
				portion: null,
				calories: 10,
				cho: '2,5g',
				protein: '0g',
				fat: '0g',
				food_types: [
					{
						name: 'Acelga, achicoria, apio, cochayuyo, espinaca, lechuga, pepino, repollo, zapallo italiano crudo, ulte',
						values: [
							{
								unit: 'taza',
								value: '1'
							}
						]
					},
					{
						name: 'Pimentón rojo y verde',
						values: [
							{
								unit: 'taza',
								value: '1/2'
							}
						]
					},
					{
						name: 'Ajo',
						values: [
							{
								unit: 'dientes',
								value: '8'
							},
						]
					},
					{
						name: 'Rabanito',
						values: [
							{
								unit: 'unidades',
								value: '5'
							}
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
				cho: '9g',
				protein: '5g',
				fat: '6g',
				food_types: [
					{
						name: 'Leche líquida entera',
						values: [
							{
								unit: 'taza',
								value: '1'
							},
							{
								unit: 'ml',
								value: '200'
							}
						]
					},
					{
						name: 'Leche entera en polvo',
						values: [
							{
								unit: 'cda colmada',
								value: '1'
							},
							{
								unit: 'cda rasas',
								value: '3'
							}
						]
					},
					{
						name: 'Yogurt Natural (griego)',
						values: [
							{
								unit: 'unidad',
								value: '1'
							},
							{
								unit: 'g',
								value: '150'
							}
						]
					}
				]
			},
			{
				name: 'Quesos',
				portion: null,
				calories: 80,
				cho: '1g',
				protein: '5g',
				fat: '6g',
				food_types: [
					{
						name: 'Chanco , Mantecoso, Cheddar, Cabra, Gauda',
						values: [
							{
								unit: 'tajada laminada',
								value: '1/2'
							}
						]
					},
					{
						name: 'Parmesano',
						values: [
							{
								unit: 'cdas rasas',
								value: '1'
							},
							{
								unit: 'cdtas',
								value: '3'
							}
						]
					},
					{
						name: 'Untables',
						values: [
							{
								unit: 'cdas',
								value: '1'
							}
						]
					}
				]
			},
			{
				name: 'Lácteos medios en grasas',
				portion: null,
				calories: 85,
				cho: '9g',
				protein: '5g',
				fat: '3g',
				food_types: [
					{
						name: 'Leche líquida semi descremada',
						values: [
							{
								unit: 'taza',
								value: 1,
							},
							{
								unit: 'ml',
								value: 200
							}
						],
					},
					{
						name: 'Leche semidescremada en polvo',
						values: [
							{
								unit: 'cda colmada',
								value: 1,
							},
							{
								unit: 'cdas rasas',
								value: 3
							}
						]
					},
					{
						name: 'Leche líquida saborizada',
						values: [
							{
								unit: 'taza',
								value: '1/2'
							},
							{
								unit: 'ml',
								value: 100
							}
						]
					},
					{
						name: 'Yogurt sin azúcar y bajo en grasa (endulzantes artificiales)',
						values: [
							{
								unit: 'unidad',
								value: 1
							},
							{
								unit: 'g',
								value: 150
							}
						]
					},
					{
						name: 'Yogurt natural no endulzado (leche semidescremada)',
						values: [
							{
								unit: 'unidad',
								value: 1
							},
							{
								unit: 'g',
								value: 150
							}
						]
					},
					{
						name: 'Yogurt natural endulzado',
						values: [
							{
								unit: 'unidad',
								value: 1
							},
							{
								unit: 'g',
								value: 150
							}
						]
					},
					{
						name: 'Leche de Soya',
						values: [
							{
								unit: 'taza',
								value: '3/4'
							},
							{
								unit: 'ml',
								value: 150
							}
						]
					},
					{
						name: 'Tofu',
						values: [
							{
								unit: 'rebanada',
								value: 1
							},
							{
								unit: 'g',
								value: 70
							}
						]
					},
					{
						name: 'Quesillo',
						values: [
							{
								unit: 'rodela de 3cm',
								value: 1
							}
						]
					},
					{
						name: 'Ricota',
						values: [
							{
								unit: 'cdas',
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
				cho: '10g',
				protein: '7g',
				fat: '0g',
				food_types: [
					{
						name: 'Leche líquida descremada',
						values: [
							{
								unit: 'taza',
								value: 1
							},
							{
								unit: 'ml',
								value: 200
							}
						]
					},
					{
						name: 'Leche en polvo descremada',
						values: [
							{
								unit: 'cda colmada',
								value: 1,
							},
							{
								unit: 'cdas rasas',
								value: 3
							}
						],
					},
					{
						name: 'Leche cultivada descremada',
						values: [
							{
								unit: 'taza',
								value: 1
							},
							{
								unit: 'ml',
								value: 200
							}
						],
					},
					{
						name: 'Yogurt 0% grasa y sin azúcar',
						values: [
							{
								unit: 'unidad',
								value: 1
							},
							{
								unit: 'ml',
								value: 150
							}
						],
					},
					{
						name: 'Yogurt natural no endulzado (leche descremada)',
						values: [
							{
								unit: 'unidad',
								value: 1
							},
							{
								unit: 'ml',
								value: 150
							}
						]
					},
					{
						name: 'Quesillo light (leche descremada)',
						values: [
							{
								unit: 'rodela de 3cm',
								value: 1
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
				cho: '0g',
				protein: '0g',
				fat: '20g',
				food_types: [
					{
						name: 'Aceite de maravilla, aceite de maíz, aceite de soya, aceite de oliva, aceite de canola',
						values: [
							{
								unit: 'cdta',
								value: 4
							}
						]
					},
					{
						name: 'Manteca de cerdo, manteca vegetal, paté',
						values: [
							{
								unit: 'cda',
								value: 2
							}
						]
					},
					{
						name: 'Mantequilla, margarina',
						values: [
							{
								unit: 'cdta',
								value: 4
							}
						]
					},
					{
						name: 'Crema espesa, crema chantilly',
						values: [
							{
								unit: 'cda',
								value: 4
							}
						]
					},
					{
						name: 'Mayonesa',
						values: [
							{
								unit: 'cda',
								value: 1
							}
						]
					},
					{
						name: 'Crema ácida',
						values: [
							{
								unit: 'taza',
								value: '1/2'
							}
						]
					},
					{
						name: 'Tocino',
						values: [
							{
								unit: 'tajada',
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
				cho: '0g',
				protein: '0g',
				fat: '20g',
				food_types: [
					{
						name: 'Almendras',
						values: [
							{
								unit: 'unidades',
								value: 26
							}
						]
					},
					{
						name: 'Maní',
						values: [
							{
								unit: 'unidades',
								value: 30
							}
						]
					},
					{
						name: 'Nueces',
						values: [
							{
								unit: 'unidades',
								value: 5
							}
						]
					},
					{
						name: 'Aceitunas',
						values: [
							{
								unit: 'unidades',
								value: 11
							}
						]
					},
					{
						name: 'Palta',
						values: [
							{
								unit: 'cda',
								value: 3
							}
						]
					},
					{
						name: 'Avellana',
						values: [
							{
								unit: 'unidades',
								value: 50
							}
						]
					},
					{
						name: 'Pistacho',
						values: [
							{
								unit: 'unidades',
								value: 40
							}
						]
					},
					{
						name: 'Mantequilla de maní',
						values: [
							{
								unit: 'cda',
								value: 2
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
				cho: '15g',
				protein: '1g',
				fat: '0g',
				food_types: [
					{
						name: 'Manzana, caqui, durazno, membrillo, naranja, pera',
						values: [
							{
								unit: 'unidad',
								value: '1'
							},
							{
								unit: 'g',
								value: '100'
							}
						]
					},
					{
						name: 'Ciruelas, damasco, limón, papaya',
						values: [
							{
								unit: 'unidades',
								value: '3'
							}
						]
					},
					{
						name: 'Higos, kiwi, tuna',
						values: [
							{
								unit: 'unidades',
								value: '2'
							},
						]
					},
					{
						name: 'Pepino dulce',
						values: [
							{
								unit: 'unidad grande',
								value: '1'
							}
						]
					},
					{
						name: 'Plátano',
						values: [
							{
								unit: 'unidad',
								value: '1/2'
							},
							{
								unit: 'g',
								value: '60'
							}
						]
					},
					{
						name: 'Chirimoya',
						values: [
							{
								unit: 'unidad',
								value: '1/4'
							}
						]
					},
					{
						name: 'Cerezas',
						values: [
							{
								unit: 'unidades',
								value: '15'
							}
						]
					},
					{
						name: 'Uvas',
						values: [
							{
								unit: 'unidades',
								value: '10'
							}
						]
					},
					{
						name: 'Frambuesas, frutillas, melón, sandia',
						values: [
							{
								unit: 'taza',
								value: '1'
							}
						]
					},
					{
						name: 'Mora, grosella',
						values: [
							{
								unit: 'taza',
								value: '1/2'
							}
						]
					},
					{
						name: 'Piña',
						values: [
							{
								unit: 'taza',
								value: '3/4'
							}
						]
					},
					{
						name: 'Higos secos, huesillo',
						values: [
							{
								unit: 'unidades',
								value: '2'
							}
						]
					},
					{
						name: 'Pasas',
						values: [
							{
								unit: 'unidades',
								value: '20'
							}
						]
					},
					{
						name: 'Ciruelas',
						values: [
							{
								unit: 'unidades',
								value: '2 1/2'
							}
						]
					},
					{
						name: 'Pera desecada, manzana desecada',
						values: [
							{
								unit: 'rodelas',
								value: '7'
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
				cho: '1g',
				protein: '11g',
				fat: '2g',
				food_types: [
					{
						name: 'Filete, lomo liso, posta negra, posta rosada',
						values: [
							{
								unit: 'g',
								value: 50
							},
						]
					},
					{
						name: 'Pollo, Pavo',
						values: [
							{
								unit: 'g',
								value: 50
							},
						]
					},
					{
						name: 'Huevos',
						values: [
							{
								unit: 'unidad',
								value: 1
							},
						]
					},
					{
						name: 'Jurel, Merluza, Reineta, Salmón',
						values: [
							{
								unit: 'g',
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
				cho: '30g',
				protein: '11g',
				fat: '1g',
				food_types: [
					{
						name: 'Lentejas, Garbanzos, Porotos',
						values: [
							{
								unit: 'taza',
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
				cho: '5g',
				protein: '0g',
				fat: '0g',
				food_types: [
					{
						name: 'Azúcar, miel de abeja, miel de palma, mermeladas, dulce de membrillo, manjar, jalea en polvo, jugo en polvo',
						values: [
							{
								unit: 'cdta',
								value: 1
							}
						]
					},
					{
						name: 'Bebidas gaseosas, néctar, pulpa de frutas',
						values: [
							{
								unit: 'taza',
								value: '1/4'
							}
						]
					},
					{
						name: 'Helado de agua',
						values: [
							{
								unit: 'unidad',
								value: '1/4'
							}
						]
					}
				]
			}
		]
	}
];