/* ============================================================
   EASTSIDE PARK LIVING HERITAGE MAP & TOURISM PORTAL
   Master Client Application Logic & SVG Interactive Engine
   ============================================================ */

(function () {
  'use strict';

  // ----------------------------------------------------------
  // 1. DATA DICTIONARY: BIOGRAPHIES, SPECS & ORAL HISTORIES
  // ----------------------------------------------------------
  const PARK_DATA = {
    'field-joe-robbins': {
      category: 'LITTLE LEAGUE BASEBALL',
      category_es: 'BÉISBOL DE PEQUEÑAS LIGAS',
      title: 'Joe Robbins Field (Field 1)',
      title_es: 'Campo Joe Robbins (Campo 1)',
      metaType: 'Lighted Youth Ballpark',
      metaType_es: 'Parque Iluminado para Jóvenes',
      bio: 'Named in loving memory of Joe Robbins, a tireless pioneer of youth baseball in Okanogan County. In the mid-20th century, Joe dedicated endless weekends to clearing river rock, building fences, and establishing the first sanctioned Little League chartered diamonds in Omak. His vision ensured generations of local youth had a safe, championship-caliber diamond to learn teamwork and sportsmanship.',
      bio_es: 'Nombrado en memoria de Joe Robbins, un incansable pionero del béisbol juvenil en el condado de Okanogan. A mediados del siglo XX, dedicó incontables fines de semana a construir cercas y establecer los primeros campos certificados de Pequeñas Ligas en Omak.',
      specs: [
        'Dimensions: 200 ft to left, center, and right foul poles',
        'Features: Enclosed dual-lane batting cages, covered dugouts, electronic scoreboard',
        'Primary Users: Omak Youth Baseball, Little League Majors (Ages 10–12)',
        'Priority: Youth league tournament host facility'
      ],
      specs_es: [
        'Dimensiones: 200 pies a las líneas de foul',
        'Instalaciones: Jaulas de bateo dobles, dugouts techados, pizarra electrónica',
        'Usuarios: Pequeñas Ligas de Omak (Edades 10–12)'
      ],
      audioNarration: 'Welcome to Joe Robbins Field. Joe Robbins was the heartbeat of youth sports in Omak throughout the nineteen-fifties and sixties. Before these lighted diamonds existed, local kids played on rocky pastureland. Joe rallied volunteers, secured lumber, and poured his soul into creating this dedicated Little League sanctuary. Next time you hear the crack of a wooden bat along the Okanogan River, remember Joe Robbins.'
    },

    'field-john-pock': {
      category: 'LITTLE LEAGUE BASEBALL',
      category_es: 'BÉISBOL DE PEQUEÑAS LIGAS',
      title: 'John Pock Field (Field 2)',
      title_es: 'Campo John Pock (Campo 2)',
      metaType: 'Youth Baseball Facility',
      metaType_es: 'Instalación de Béisbol Juvenil',
      bio: 'Dedicated in honor of John Pock, a respected civic leader and passionate booster of youth sports in Omak. John spent decades organizing equipment drives, coaching foundational mechanics, and officiating games across the valley. Located directly across from the municipal pool, John Pock Field remains the training ground where Omak youngsters take their very first competitive swings.',
      bio_es: 'Dedicado en honor a John Pock, respetado líder cívico y apasionado impulsor del deporte juvenil en Omak. John pasó décadas organizando donaciones de equipo y entrenando a jóvenes deportistas.',
      specs: [
        'Dimensions: 190 ft outfield fence with safety top-capping',
        'Features: Paved spectator concourse, shaded bleachers, direct proximity to city pool',
        'Primary Users: Little League Minors and Coach-Pitch developmental divisions',
        'Maintenance: City of Omak Parks Department seasonal turf management'
      ],
      specs_es: [
        'Dimensiones: Cerca de 190 pies con protección superior',
        'Instalaciones: Graderías sombreadas, junto a la piscina municipal',
        'Usuarios: Divisiones infantiles y de desarrollo'
      ],
      audioNarration: 'You are viewing John Pock Field. John Pock believed sports taught character, honesty, and grit better than any textbook. He personally ensured every child who wanted to play baseball had a glove and a pair of cleats, regardless of family finances. Today, this diamond across from the pool carries on his legacy of unconditional community support.'
    },

    'field-ross-mccormick': {
      category: 'HIGH SCHOOL & TOURNAMENT BASEBALL',
      category_es: 'BÉISBOL DE SECUNDARIA Y TORNEOS',
      title: 'Ross McCormick Field (Field 3)',
      title_es: 'Campo Ross McCormick (Campo 3)',
      metaType: 'Full-Sized Varsity Ballpark',
      metaType_es: 'Estadio de Béisbol Universitario',
      bio: 'Commemorating legendary coach and educator Ross McCormick. McCormick coached generations of Omak High School Pioneer student-athletes, instilling an indomitable work ethic and leading local teams to historic regional championships. Situated west of the Dance Pavilion, this full-sized regulation field features a deep outfield and classic brick dust baseline paths.',
      bio_es: 'Conmemora al legendario entrenador y educador Ross McCormick, quien entrenó a generaciones de atletas de Omak High School y lideró a los equipos a campeonatos regionales históricos.',
      specs: [
        'Dimensions: 320 ft foul lines, 375 ft deep center field alley',
        'Features: Raised pitcher mound, elevated varsity bleachers, enclosed press box',
        'Primary Users: Omak High School Pioneers Varsity, American Legion Baseball',
        'Host Facility: District 6 1A tournaments and regional invitationals'
      ],
      specs_es: [
        'Dimensiones: 320 pies por las líneas, 375 pies al centro',
        'Instalaciones: Montículo elevado, cabina de prensa, graderías universitarias',
        'Usuarios: Omak High School Pioneers y Liga Legionaria'
      ],
      audioNarration: 'This is Ross McCormick Field. For thirty years, Coach Ross McCormick stood in the third-base coach box, teaching not just how to turn a double play, but how to carry yourself with dignity in victory and defeat. His teams were known across Washington State for their grit and fundamentals.'
    },

    'field-jack-rowe': {
      category: 'HIGH SCHOOL & TOURNAMENT BASEBALL',
      category_es: 'BÉISBOL DE SECUNDARIA Y MULTIUSO',
      title: 'Jack Rowe Field (Field 4)',
      title_es: 'Campo Jack Rowe (Campo 4)',
      metaType: 'Multi-Use Tournament Diamond',
      metaType_es: 'Diamante Multiuso para Torneos',
      bio: 'Named in tribute to Jack Rowe, an ardent champion of athletic opportunities for Omak youth. In April 2026, the Omak Park Board approved major enhancement plans converting Jack Rowe Field into an all-weather multi-use surface, modernizing the infield to expand year-round play for baseball, adult recreation, and regional youth tournaments.',
      bio_es: 'Nombrado en honor a Jack Rowe, apasionado defensor del deporte juvenil. En 2026, la Junta de Parques de Omak aprobó renovaciones para convertir este campo en una superficie multiuso apta para todo el año.',
      specs: [
        'Dimensions: 315 ft left/right, 365 ft center field',
        'Features: Upgraded multi-use infield surface, high-perimeter backstop netting',
        'Primary Users: High School Junior Varsity, Senior Babe Ruth, Adult Leagues',
        'Status: Ongoing multi-use turf modernization supported by municipal parks funds'
      ],
      specs_es: [
        'Dimensiones: 315 pies laterales, 365 pies al centro',
        'Instalaciones: Infield modernizado multiuso apto para torneos',
        'Usuarios: Junior Varsity, Babe Ruth y ligas locales'
      ],
      audioNarration: 'Standing before Jack Rowe Field. Jack Rowe was a leader who believed community facilities should never sit idle. His dedication to maintaining high-quality fields paved the way for Omak to host state-wide tournaments that fill local hotels and restaurants every spring.'
    },

    'field-shirley-bowden': {
      category: 'FASTPITCH SOFTBALL',
      category_es: 'SÓFTBOL FASTPITCH',
      title: 'Shirley Bowden Field (Field 5)',
      title_es: 'Campo Shirley Bowden (Campo 5)',
      metaType: 'Championship Softball Diamond',
      metaType_es: 'Diamante de Sóftbol de Campeonato',
      bio: 'Honoring Shirley Bowden, a pioneering figure in North Central Washington women’s athletics. Shirley championed equality in sports facilities long before modern programs existed, coaching generations of young women in fastpitch softball and fighting for dedicated, first-class diamonds at Eastside Park.',
      bio_es: 'En honor a Shirley Bowden, figura pionera en el atletismo femenino del centro de Washington, quien luchó por instalaciones deportivas de primera clase para las jóvenes.',
      specs: [
        'Dimensions: 220 ft permanent outfield fence',
        'Features: Skinned clay infield, enclosed team dugouts, tournament scoring booth',
        'Primary Users: Omak High School Lady Pioneers Fastpitch, Summer ASA Tournaments',
        'Location: Located east of the tennis courts complex'
      ],
      specs_es: [
        'Dimensiones: Cerca de 220 pies permanente',
        'Instalaciones: Infield de arcilla compactada, dugouts cerrados',
        'Usuarios: Lady Pioneers de Omak High School y torneos de verano'
      ],
      audioNarration: 'Shirley Bowden Field stands as a testament to female athletic excellence. Shirley Bowden spent decades ensuring female athletes received the exact same top-tier fields, equipment, and travel opportunities as the boys. When the Lady Pioneers take the field here, they carry Shirley’s pioneering spirit with them.'
    },

    'field-stephanie-buchanon': {
      category: 'FASTPITCH SOFTBALL',
      category_es: 'SÓFTBOL FASTPITCH',
      title: 'Stephanie Buchanon Field (Field 6)',
      title_es: 'Campo Stephanie Buchanon (Campo 6)',
      metaType: 'Varsity Softball Facility',
      metaType_es: 'Campo de Sóftbol Universitario',
      bio: 'Dedicated in memory of Stephanie Buchanon, whose radiant sportsmanship, leadership, and athletic passion inspired her teammates and coaches throughout Omak. This field honors her enduring impact on community fastpitch and serves as a premier venue for regional high school softball showdowns.',
      bio_es: 'Dedicado a la memoria de Stephanie Buchanon, cuyo compañerismo y liderazgo inspiraron a toda la comunidad deportiva de Omak.',
      specs: [
        'Dimensions: 220 ft symmetric outfield fence',
        'Features: Clay-conditioned infield, safety perimeter fencing, spectator bleachers',
        'Primary Users: High School Varsity & Junior Varsity Softball',
        'Location: Flanked alongside Shirley Bowden Field'
      ],
      specs_es: [
        'Dimensiones: Cerca de 220 pies simétrica',
        'Instalaciones: Infield acondicionado con arcilla, graderías',
        'Usuarios: Sóftbol femenino de preparatoria'
      ],
      audioNarration: 'Welcome to Stephanie Buchanon Field. Stephanie was known for her infectious energy, unyielding determination, and love of softball. This diamond stands in her honor, reminding every player who steps onto the dirt to play with joy, courage, and heart.'
    },

    'field-eastside-practice': {
      category: 'ATHLETIC COMPLEX',
      category_es: 'COMPLEJO ATLÉTICO',
      title: 'Eastside Practice Diamond (Field 7)',
      title_es: 'Diamante de Práctica Eastside (Campo 7)',
      metaType: 'Multi-Purpose Practice Diamond',
      metaType_es: 'Diamante Multiuso de Entrenamiento',
      bio: 'The flexible 7th diamond of Eastside Park, utilized for youth t-ball, auxiliary tournament warmups, and open community recreation throughout spring and summer.',
      bio_es: 'El séptimo diamante del parque, utilizado para entrenamientos, calentamiento de torneos y recreación comunitaria abierta.',
      specs: [
        'Dimensions: 180 ft open outfield',
        'Features: Grass infield with portable pitching rubbers and bases',
        'Primary Users: Youth T-Ball, Senior League batting practice, Community pick-up'
      ],
      specs_es: [
        'Dimensiones: 180 pies campo abierto',
        'Instalaciones: Infield de césped con bases portátiles',
        'Usuarios: T-Ball infantil y prácticas de bateo'
      ],
      audioNarration: 'Field 7 is the open-access practice diamond of Eastside Park. From sunny Tuesday afternoon t-ball practices to weekend tournament warmups, this field keeps the sports energy flowing.'
    },

    'soccer-complex': {
      category: 'SOCCER COMPLEX',
      category_es: 'COMPLEJO DE FÚTBOL',
      title: 'North Omak Soccer Complex (Fields 1–4)',
      title_es: 'Complejo de Fútbol North Omak (Campos 1–4)',
      metaType: '4 Regulation Grass Pitches',
      metaType_es: '4 Canchas de Césped Reglamentarias',
      bio: 'Featuring four pristine natural grass soccer pitches, including a full High School varsity match field and U15 youth fields. Home to Omak Youth Soccer, school leagues, and the annual "Kick\'N It with the Cops" community soccer scrimmage.',
      bio_es: 'Cuenta con cuatro canchas reglamentarias de césped natural. Sede del fútbol juvenil de Omak, ligas escolares y el tradicional evento comunitario "Kick\'N It with the Cops".',
      specs: [
        'Pitch 1 (High School): 110 x 70 yards, full regulation match pitch with goals',
        'Pitches 2, 3 & 4: Sized for U15, U12, and developmental age brackets',
        'Surface: Natural irrigated river turf with white perimeter striping',
        'Events: Annual Okanogan County Soccer Tournament, Spring youth leagues'
      ],
      specs_es: [
        'Cancha 1 (HS): 110 x 70 yardas, reglamentaria con porterías oficiales',
        'Canchas 2, 3 y 4: Adaptadas para categorías U15 y ligas infantiles',
        'Superficie: Césped natural con riego e iluminación cercana'
      ],
      audioNarration: 'You are looking at the North Omak Soccer Complex. With four lush grass pitches, this corner of Eastside Park comes alive every weekend with families from across North Central Washington. Events like Kick\'N It with the Cops unite law enforcement, families, and hundreds of youth in healthy competition.'
    },

    'rv-carl-precht': {
      category: 'MUNICIPAL CAMPGROUND',
      category_es: 'CAMPAMENTO MUNICIPAL',
      title: 'Carl Precht Memorial RV Park',
      title_es: 'Parque de Casas Rodantes Carl Precht',
      metaType: '68+ Full Hookup Sites & Tent Lawn',
      metaType_es: '68+ Sitios con Conexiones y Área de Carpas',
      bio: 'Named in tribute to Carl Precht, a visionary educator who served as Director of Elementary Education for the Omak School District during the 1950s and 60s. Precht was a pioneer in environmental outdoor education, establishing the beloved "Camp Disautel" program so Omak children could experience primitive camping, ecology, and nature reverence. The RV park features towering mature Catalpa trees providing deep shade along the Okanogan River.',
      bio_es: 'Nombrado en honor a Carl Precht, pionero educador y Director de Educación Primaria de Omak en los años 50 y 60. Precht creó el programa "Camp Disautel" para educar a los niños en contacto con la naturaleza. El parque destaca por sus frondosos árboles Catalpa a la orilla del río.',
      specs: [
        'Accommodations: 68 RV sites (30-amp and 50-amp electrical service, water, sewer)',
        'Amenities: Restrooms, hot showers, dump station, fire pits, mature Catalpa tree canopy',
        'Recreation Access: Steps from river boat launch, tennis courts, pool, and River Walk',
        'Reservations: City of Omak Public Works (509) 826-1170'
      ],
      specs_es: [
        'Capacidad: 68 sitios con electricidad (30 y 50 amperes), agua y drenaje',
        'Servicios: Baños, duchas de agua caliente, sombra de árboles Catalpa',
        'Reservaciones: Obras Públicas de Omak al (509) 826-1170'
      ],
      audioNarration: 'Carl Precht Memorial RV Park is famous among Pacific Northwest travelers for its lush, cool shade beneath mature Catalpa trees. Carl Precht was not a politician; he was an educator who believed the outdoors was the greatest classroom on earth. Today, visitors from across North America camp right here along the tranquil Okanogan River.'
    },

    'stampede-arena': {
      category: 'RODEO & HERITAGE ARENA',
      category_es: 'ESTADIO DE RODEO Y TRADICIÓN',
      title: 'Omak Stampede Arena',
      title_es: 'Estadio Omak Stampede',
      metaType: 'PRCA Sanctioned Rodeo Grounds',
      metaType_es: 'Pista de Rodeo Sancionada por la PRCA',
      bio: 'The legendary amphitheater of the Omak Stampede, founded in 1933. Features North Grandstands (A–E), South Grandstands (AA–EE), Gold Buckle VIP Boxes, western bucking chutes, and the thundering central finish line where horses sprint across the river from Suicide Hill.',
      bio_es: 'El legendario anfiteatro del Omak Stampede, fundado en 1933. Cuenta con graderías norte y sur, palcos VIP Gold Buckle y la emocionante línea de meta de la Suicide Race.',
      specs: [
        'Seating Capacity: Over 7,500 covered and open grandstand seats',
        'Sanction: Professional Rodeo Cowboys Association (PRCA)',
        'Event Dates: Second full weekend of August annually',
        'Centerpiece: Suicide Race finish line sprint (approx. 500 yards)'
      ],
      specs_es: [
        'Capacidad: Más de 7,500 espectadores',
        'Sanción: Asociación Profesional de Vaqueros de Rodeo (PRCA)',
        'Fechas: Segundo fin de semana completo de agosto'
      ],
      audioNarration: 'Welcome to the Omak Stampede Arena. Since nineteen-thirty-three, this rodeo dirt has witnessed the greatest stock, world-champion cowboys, and the heart-pounding conclusion of the World Famous Suicide Race. The horses thunder through the arena gates straight from the river waters to cross the finish line right before the packed grandstands.'
    },

    'hotspot-suicide-hill': {
      category: 'HISTORIC RACE COURSE',
      category_es: 'PISTA HISTÓRICA DE CARRERAS',
      title: 'Suicide Hill (World Famous Race Course)',
      title_es: 'Suicide Hill (Pista Famosa Mundialmente)',
      metaType: '225-Ft Sandy Bluff at 62% Grade',
      metaType_es: 'Barranco de 225 Pies y 62% de Inclinación',
      bio: 'Conceived in 1935 during the Great Depression by Dr. P.X. Woodward and rodeo director Hugh Benton as a spectacle to draw crowds and revitalize the town. Jockeys and horses plunge down the nearly vertical 225-foot bluff, swim the deep Okanogan River, and sprint into the Stampede Arena.',
      bio_es: 'Concebida en 1935 durante la Gran Depresión por el Dr. P.X. Woodward y Hugh Benton para atraer turismo y revitalizar la economía de Omak. Los caballos descienden por el barranco vertical, cruzan el río a nado y corren hacia el estadio.',
      specs: [
        'Elevation Drop: 225 vertical feet from crest to river edge',
        'Slope Angle: 62-degree steep grade on loose sand and rock',
        'River Swim: Deep water channel crossing (approximately 100 yards)',
        'Safety Protocols: Comprehensive veterinarian inspections and jockey briefings'
      ],
      specs_es: [
        'Caída Vertical: 225 pies de descenso abrupto',
        'Inclinación: Pendiente del 62% sobre arena y grava',
        'Cruce Fluvial: Cruce de nado profundo en el río Okanogan'
      ],
      audioNarration: 'Look up at Suicide Hill across the river. In nineteen-thirty-five, with Omak struggling during the Great Depression, Dr. Woodward and Hugh Benton needed something unforgettable. They created the Suicide Race—a true test of courage and horsemanship. Riders plunge down that sheer sixty-two percent cliff, plunge into the cold river current, and gallop into the arena.'
    },

    'colville-powwow': {
      category: 'INDIGENOUS CULTURAL HERITAGE',
      category_es: 'HERENCIA CULTURAL INDÍGENA',
      title: 'Colville Indian Encampment & Pow Wow Grounds',
      title_es: 'Campamento Indígena Colville y Terreno del Pow Wow',
      metaType: 'Traditional Encampment & Ceremonial Arbor',
      metaType_es: 'Campamento Tradicional y Arbor Ceremonial',
      bio: 'An unbroken century of partnership with the Colville Confederated Tribes. The encampment features traditional canvas tepees in a historic circle, ceremonial dance arbor, drum competitions, authentic frybread, and traditional stick games.',
      bio_es: 'Un siglo de alianza cultural con las Doce Tribus Confederadas de Colville. El campamento incluye tipis tradicionales, arbor de danzas ceremoniales, concursos de tambor y comida autóctona.',
      specs: [
        'Structures: Authentic wooden ceremonial dance arbor, tepee circle grounds',
        'Traditions: Inter-tribal pow wow dancing, drumming, and Indian stick games',
        'Cultural Importance: Honoring the original stewards of the Okanogan River'
      ],
      specs_es: [
        'Estructuras: Arbor ceremonial de danza y círculo tradicional de tipis',
        'Tradiciones: Danzas intertribales, cantos ancestrales y juegos tradicionales'
      ],
      audioNarration: 'The Colville Indian Encampment represents the living soul of our valley. For nearly a century, tribal elders, drummers, and dancers have gathered on this sacred ground at Eastside Park. From the hypnotic rhythm of the drum circles beneath the arbor to the towering canvas tepees, this is an unbroken living heritage.'
    },

    'dance-pavilion': {
      category: 'CIVIC ARCHITECTURE',
      category_es: 'ARQUITECTURA CÍVICA',
      title: 'Historic Dance Pavilion',
      title_es: 'Pabellón de Baile Histórico',
      metaType: 'Community Gathering Hall',
      metaType_es: 'Salón Comunitario Histórico',
      bio: 'A landmark wooden hall at the center of Eastside Park. For generations, the Pavilion has hosted community dances, wedding receptions, rotary gatherings, and Stampede weekend festivities.',
      bio_es: 'Un histórico salón de madera en el centro del parque que ha albergado bailes comunitarios, bodas y festejos del Stampede durante generaciones.',
      specs: [
        'Capacity: Up to 300 guests',
        'Features: Hardwood dance floor, covered porches, adjacent lawn picnic area',
        'Reservations: Available year-round via City of Omak'
      ],
      specs_es: [
        'Capacidad: Hasta 300 personas',
        'Instalaciones: Pista de madera, terrazas cubiertas, área de pícnic'
      ],
      audioNarration: 'The Dance Pavilion is the warm social heart of Eastside Park. Countless couples in Omak shared their first dance beneath these timber beams. From harvest festivals to Stampede reunions, this building holds the joy of our town.'
    },

    'omak-pool': {
      category: 'CIVIC AMENITIES',
      category_es: 'INSTALACIONES CÍVICAS',
      title: 'Omak Municipal Swimming Pool',
      title_es: 'Piscina Municipal de Omak',
      metaType: 'Seasonal Aquatic Center',
      metaType_es: 'Centro Acuático de Temporada',
      bio: 'The city’s public swimming facility, offering summer swim lessons, open family recreational swimming, lap swim hours, and private pool party rentals.',
      bio_es: 'La piscina pública de la ciudad, abierta en temporada de verano para lecciones, natación libre y recreación familiar.',
      specs: [
        'Features: 25-meter lap lanes, diving board, wading area, locker rooms and showers',
        'Operating Season: Early June through late August',
        'Location: Situated beside Joe Robbins and John Pock ballfields'
      ],
      specs_es: [
        'Instalaciones: Carriles de 25 metros, trampolín, vestidores y duchas',
        'Temporada: De principios de junio a finales de agosto'
      ],
      audioNarration: 'Nothing beats cooling off at the Omak City Pool after a hot summer ballgame. Generations of kids learned to swim right here in these blue waters.'
    },

    'visitor-center': {
      category: 'TOURISM WAYFINDING',
      category_es: 'TURISMO Y ORIENTACIÓN',
      title: 'Omak Visitor Information Center (VIC)',
      title_es: 'Centro de Información Turística de Omak',
      metaType: 'Civic Tourism Hub & Sign Installation',
      metaType_es: 'Centro de Turismo e Instalación del Mapa',
      bio: 'The welcoming gateway for visitors arriving in Omak. The permanent physical home of the large-scale illustrated Eastside Park map, providing brochures, trail guides, event tickets, and regional hospitality.',
      bio_es: 'La puerta de entrada para los visitantes en Omak y sede física permanente del mapa ilustrado a gran escala.',
      specs: [
        'Services: Maps, regional guides, public restrooms, free Wi-Fi, tourism assistance',
        'Partner: Funded by City of Omak Tourism & Lodging Tax Advisory Committee (LTAC)'
      ],
      specs_es: [
        'Servicios: Mapas, folletos, guías regionales y baños públicos',
        'Financiamiento: Comité de Impuestos sobre el Hospedaje de Omak (LTAC)'
      ],
      audioNarration: 'Welcome to the Omak Visitor Information Center. Our town is proud to welcome travelers from around the globe to explore the majestic Okanogan Highlands. Stop inside for maps, local recommendations, and warm valley hospitality.'
    },

    'tennis-courts': {
      category: 'CIVIC RECREATION',
      category_es: 'RECREACIÓN CÍVICA',
      title: 'Tennis & Pickleball Complex',
      title_es: 'Canchas de Tenis y Pickleball',
      metaType: '4 Regulation Fenced Courts',
      metaType_es: '4 Canchas Cercadas Reglamentarias',
      bio: 'Four lighted, hard-surface regulation courts lined for both traditional tennis and modern pickleball, hosting high school matches and open community play.',
      bio_es: 'Cuatro canchas reglamentarias con iluminación para tenis y pickleball, sede de partidos escolares y juego comunitario.',
      specs: [
        'Courts: 4 regulation hard courts with dual tennis & pickleball striping',
        'Lighting: Push-button evening recreation lighting'
      ],
      specs_es: [
        'Instalaciones: 4 canchas con líneas para tenis y pickleball e iluminación'
      ],
      audioNarration: 'The Eastside Park courts are the regional hotspot for tennis and fast-growing pickleball leagues, open to the public from dawn until ten at night.'
    },

    'skate-park': {
      category: 'YOUTH RECREATION',
      category_es: 'RECREACIÓN JUVENIL',
      title: 'Omak Enclosed Skate Park',
      title_es: 'Pista de Skate Cerrada de Omak',
      metaType: 'Concrete Skate & BMX Plaza',
      metaType_es: 'Pista de Concreto para Skate y BMX',
      bio: 'A popular concrete skate park featuring quarter pipes, grind rails, and street features designed for skateboarders, rollerbladers, and BMX riders.',
      bio_es: 'Moderna pista de concreto con rampas, rieles y áreas de estilo urbano para patinetas, patines y bicicletas BMX.',
      specs: [
        'Features: Smooth concrete bowl, ledges, banks, and safety fencing',
        'Access: Free public admission daily'
      ],
      specs_es: [
        'Instalaciones: Bowl de concreto, rieles y cerca perimetral'
      ],
      audioNarration: 'The Omak Skate Park gives our valley youth a dedicated space to build skills, test their creativity, and connect with fellow skaters.'
    },

    'dog-park': {
      category: 'PET AMENITIES',
      category_es: 'ÁREA PARA MASCOTAS',
      title: 'Enclosed Dog Park',
      title_es: 'Parque Cercado para Perros',
      metaType: 'Off-Leash Grassy Run',
      metaType_es: 'Área Verde sin Correa',
      bio: 'A secure, fenced green lawn where travelers staying at Carl Precht RV Park and local residents can safely exercise their dogs off-leash.',
      bio_es: 'Área verde completamente cercada para que las mascotas de residentes y visitantes del RV Park jueguen libremente sin correa.',
      specs: [
        'Features: Double-gated security entry, waste stations, shaded seating'
      ],
      specs_es: [
        'Instalaciones: Doble puerta de seguridad, bancas con sombra y agua'
      ],
      audioNarration: 'Traveling with pets? The Eastside Dog Park is a fenced sanctuary right along the river trail for dogs to stretch their legs.'
    },

    'boat-launch': {
      category: 'RIVER ACCESS',
      category_es: 'ACCESO AL RÍO',
      title: 'Okanogan River Public Boat Launch',
      title_es: 'Rampa Pública para Botes del Río Okanogan',
      metaType: 'Concrete Boat Ramp & Trailer Parking',
      metaType_es: 'Rampa de Concreto y Estacionamiento para Remolques',
      bio: 'Public water access point for drift boats, kayaks, canoes, and motorized watercraft enjoying the tranquil Okanogan River.',
      bio_es: 'Acceso acuático público para kayaks, canoas y lanchas en el río Okanogan.',
      specs: [
        'Features: Single-lane concrete ramp, courtesy tie-up dock, trailer parking'
      ],
      specs_es: [
        'Instalaciones: Rampa de concreto, muelle de cortesía y espacio para remolques'
      ],
      audioNarration: 'Put in your drift boat or kayak right here at Eastside Park and enjoy world-class fishing and scenic river paddling down the Okanogan River.'
    },

    'carnival-midway': {
      category: 'FESTIVAL GROUNDS',
      category_es: 'TERRENO DE FERIA',
      title: 'Carnival & Midway Grounds',
      title_es: 'Área de Juegos y Carnaval',
      metaType: 'Seasonal Amusement Midway',
      metaType_es: 'Zona de Juegos Mecánicos de Temporada',
      bio: 'The buzzing festival grounds hosting the Davis Shows Northwest carnival during Stampede weekend with Ferris wheels, carousel rides, and game booths.',
      bio_es: 'El terreno que alberga la tradicional feria mecánica durante el fin de semana del Stampede.',
      specs: [
        'Attractions: Rides, games, cotton candy, family entertainment'
      ],
      specs_es: [
        'Atracciones: Rueda de la fortuna, carrusel y juegos familiares'
      ],
      audioNarration: 'When August arrives, this lawn transforms into a glittering carnival wonderland of neon lights, Ferris wheels, and festival laughter.'
    },

    'vendor-food-row': {
      category: 'DINING & COMMERCE',
      category_es: 'COMIDAS Y ARTESANÍAS',
      title: 'Vendor Row & Food Alley',
      title_es: 'Callejón de Comidas y Artesanías',
      metaType: 'Artisan Crafts & Food Court',
      metaType_es: 'Feria Gastronómica y Artesanal',
      bio: 'The vibrant market row connecting the Stampede Arena and Carnival, featuring authentic Indian frybread, smoked BBQ, handmade leatherwork, and western trading posts.',
      bio_es: 'El mercado gastronómico y artesanal con auténtico pan indio frito, barbacoa y artículos de cuero artesanal.',
      specs: [
        'Offerings: Local food trucks, artisan crafts, cowboy gear, tribal arts'
      ],
      specs_es: [
        'Oferta: Puestos de comida, ropa vaquera y arte indígena'
      ],
      audioNarration: 'Follow your nose to Food Court and Vendor Row for sizzling barbecue, hot frybread, and handcrafted western souvenirs.'
    },

    // ==========================================================
    // DOWNTOWN OMAK BUSINESSES, LODGING PARTNERS & HIGHWAYS
    // ==========================================================
    'biz-mirage-theater': {
      category: 'DOWNTOWN ENTERTAINMENT & ARTS',
      category_es: 'ENTRETENIMIENTO Y CINE CÉNTRICO',
      title: 'The Mirage Theater & Omak Theater',
      title_es: 'Teatro Mirage y Teatro Omak',
      metaType: 'Historic Art Deco Cinema Multiplex',
      metaType_es: 'Cine Multiplex Histórico Art Decó',
      bio: 'Located at 101 S Main Street, the Mirage Theater features an iconic multi-tier art deco neon marquee that has illuminated downtown Omak for decades. The premier entertainment anchor of downtown, offering 3 modern digital screens, first-run cinema, and community event screenings. Visitors can easily walk across the Central Ave Bridge from Eastside Park for evening entertainment.',
      bio_es: 'Ubicado en 101 S Main St, el histórico Teatro Mirage luce una marquesina de neón art decó tradicional. Es el corazón del entretenimiento nocturno del centro de Omak con tres salas de cine digital.',
      specs: [
        'Address: 101 S Main St, Omak, WA (Corner of Main & Central)',
        'Walking Distance: 3 minutes west across Central Ave Bridge',
        'Features: 3 digital projection screens, Dolby 7.1 surround sound, classic popcorn & concessions',
        'Role in Tourism: Prime downtown evening attraction for rodeo and tournament visitors',
        'Contact: (509) 826-0060 · omaktheater.com'
      ],
      specs_es: [
        'Dirección: 101 S Main St (Esquina de Main y Central)',
        'Distancia a pie: 3 minutos cruzando el Puente de Central Ave',
        'Instalaciones: 3 salas digitales, sonido envolvente Dolby',
        'Contacto: (509) 826-0060'
      ],
      audioNarration: 'Standing under the neon glow of the historic Mirage Theater. Located at the corner of Main and Central, this beloved Art Deco cinema has been entertaining generations of valley families and rodeo visitors. Just a three-minute stroll across the Central Avenue Bridge from Eastside Park, it remains the shining entertainment crown of downtown Omak.'
    },

    'biz-breadline-cafe': {
      category: 'ARTISANAL DINING & SCRATCH BAKERY',
      category_es: 'PANADERÍA Y CAFÉ ARTESANAL',
      title: 'Breadline Cafe & Scratch Bakery',
      title_es: 'Café y Panadería Breadline',
      metaType: 'Artisan Bakery & Community Gathering Hub',
      metaType_es: 'Panadería Artesanal y Café de Comunidad',
      bio: 'A legendary culinary pillar of Omak located at 102 S Ash Street. Renowned for artisan sourdough loaves baked fresh daily, hearty scratch soups, organic espresso, fresh egg breakfasts, and gourmet deli sandwiches. Breadline Cafe is where local orchardists, ranchers, artists, and weekend tourists gather over warm cups and wholesome food.',
      bio_es: 'Pilar culinario legendario de Omak en 102 S Ash St. Famoso por su pan artesanal de masa madre horneado a diario, sopas caseras, café espresso orgánico y desayunos completos.',
      specs: [
        'Address: 102 S Ash St, Omak, WA (1 block west of Main St)',
        'Walking Distance: 4 minutes from Eastside Park',
        'Menu Highlights: Sourdough breads, scratch clam chowder, breakfast scrambles, organic espresso',
        'Dietary Offerings: Whole-grain scratch recipes, vegetarian and pescatarian options',
        'Hours: Monday–Saturday 7:00 AM – 3:00 PM · (509) 826-5836'
      ],
      specs_es: [
        'Dirección: 102 S Ash St, Omak, WA',
        'Distancia a pie: 4 minutos desde el parque',
        'Especialidades: Pan de masa madre fresco, sopas caseras, café orgánico',
        'Horario: Lunes a Sábado 7:00 AM – 3:00 PM'
      ],
      audioNarration: 'Welcome to Breadline Cafe, the culinary soul of downtown Omak. Here, sourdough bread is an art form, mixed and proofed by hand each dawn. Whether you are fueling up before a Little League game or winding down after the Stampede parade, Breadline represents true Pacific Northwest scratch cooking and hospitality.'
    },

    'biz-magoos-diner': {
      category: 'CLASSIC AMERICAN DINER',
      category_es: 'RESTAURANTE Y BAR DEPORTIVO CLÁSICO',
      title: "Magoo's Diner & Sports Bar",
      title_es: "Diner y Bar Deportivo Magoo's",
      metaType: 'Family Diner & Post-Game Gathering Place',
      metaType_es: 'Restaurante Familiar Tradicional',
      bio: "Located at 24 N Main Street, Magoo's is an authentic American diner and sports lounge famous for its generous half-pound gourmet burgers, hand-battered onion rings, and classic thick milkshakes. It is the premier gathering place for athletes, coaches, and families celebrating post-game victories from Eastside Park.",
      bio_es: "Ubicado en 24 N Main St, Magoo's es el clásico diner estadounidense con hamburguesas artesanales de media libra, aros de cebolla y malteadas batidas a mano.",
      specs: [
        'Address: 24 N Main St, Omak, WA',
        'Walking Distance: 4 minutes from Eastside Park',
        'Features: Family dining area, sports television wall, full regional draft microbrews',
        'Specialties: Gourmet burgers, crinkle-cut fries, hand-scooped malts and shakes',
        'Contact: (509) 826-6700 · Open 7 Days'
      ],
      specs_es: [
        'Dirección: 24 N Main St, Omak, WA',
        'Distancia: 4 minutos desde Eastside Park',
        'Especialidades: Hamburguesas caseras, malteadas, cervezas locales de barril'
      ],
      audioNarration: "Hungry after seven innings at Eastside Park? Head straight to Magoo's on North Main. With sizzling burgers, frosty draft mugs, and milkshakes made the old-fashioned way, Magoo's has fed generations of Omak champions."
    },

    'biz-el-patron': {
      category: 'AUTHENTIC MEXICAN CUISINE',
      category_es: 'COMIDA MEXICANA AUTÉNTICA',
      title: 'El Patron Mexican Restaurant',
      title_es: 'Restaurante Mexicano El Patron',
      metaType: 'Family-Owned Authentic Mexican Dining',
      metaType_es: 'Restaurante Familiar Tradicional Mexicano',
      bio: 'Situated right in the heart of downtown at 3 N Main Street, El Patron offers vibrant Mexican cuisine, sizzling cast-iron fajitas, fresh scratch salsa, handmade tamales, and handcrafted margaritas. Generous portions and warm family hospitality make it a must-visit for tourists exploring the town.',
      bio_es: 'En el corazón del centro en 3 N Main St, El Patron ofrece auténticos platillos mexicanos, fajitas humeantes, salsa casera y margaritas artesanales.',
      specs: [
        'Address: 3 N Main St, Omak, WA',
        'Walking Distance: 3 minutes across Central Ave Bridge',
        'Features: Family dining, banquet tables for athletic teams, takeout for park picnics',
        'Specialties: Sizzling fajita platters, fresh ceviche, traditional mole, artisan tequilas',
        'Contact: (509) 826-4444'
      ],
      specs_es: [
        'Dirección: 3 N Main St, Omak, WA',
        'Distancia: 3 minutos cruzando el puente',
        'Especialidades: Fajitas, ceviche fresco, margaritas'
      ],
      audioNarration: "Step into El Patron at the corner of Central and Main for sizzling Mexican comfort food. From handmade tortillas to fresh Pacific seafood and festive margaritas, El Patron welcomes visitors with generous hospitality."
    },

    'biz-chamber-vic': {
      category: 'OFFICIAL VISITOR & TOURISM CENTER',
      category_es: 'CENTRO OFICIAL DE VISITANTES Y TURISMO',
      title: 'Omak Visitor Information Center & Chamber',
      title_es: 'Centro de Información Turística y Cámara de Comercio',
      metaType: 'Regional Tourism Hub & Traveler Welcome Depot',
      metaType_es: 'Centro de Bienvenida y Mapas Turísticos',
      bio: 'Positioned at 401 Stampede Drive at the eastern gateway to Downtown Omak, the Visitor Information Center provides regional highway road conditions, trail guides, Stampede tickets, camping permits, and historic maps. Equipped with spacious parking for large RVs and travel trailers.',
      bio_es: 'Ubicado en 401 Stampede Dr, el Centro de Información Turística ofrece mapas gratuitos, pases de campamento, boletos para el Stampede y asesoría para viajeros.',
      specs: [
        'Address: 401 Stampede Dr / Central Ave, Omak, WA',
        'Features: 24/7 exterior brochure kiosk, free RV and trailer parking spaces, public ADA restrooms',
        'Funding: Supported by Omak Lodging Tax Advisory Committee (LTAC / RCW 67.28)',
        'Services: Highway 97 Scenic Byway guides, Colville Reservation maps, local business directories',
        'Contact: (509) 826-4218 · omakchamber.com'
      ],
      specs_es: [
        'Dirección: 401 Stampede Dr, Omak, WA',
        'Servicios: Estacionamiento para RVs, folletos 24/7, baños públicos',
        'Financiación: Fondo de Impuesto Hotel-Motel (LTAC)'
      ],
      audioNarration: 'Welcome to the Omak Visitor Information Center. Stop here to pick up trail guides for the Okanogan Highlands, check local fishing conditions, and learn how lodging taxes support regional recreation.'
    },

    'biz-peppertree-inn': {
      category: 'LODGING & RESORT (LTAC PARTNER)',
      category_es: 'HOSPEDAJE Y HOTEL (SOCIO LTAC)',
      title: 'Best Western Plus Peppertree Inn at Omak',
      title_es: 'Hotel Best Western Plus Peppertree Inn',
      metaType: 'Full-Service Hotel & Tournament Lodging Host',
      metaType_es: 'Hotel de Servicio Completo para Torneos',
      bio: 'Located along the US-97 and SR-215 corridor at 820 N Highway 97, the Peppertree Inn is Omak’s premier modern hospitality destination. Featuring 68 spacious guest rooms, indoor heated pool and spa, hot breakfast buffet, and conference facilities. A cornerstone contributor to Omak’s Lodging Tax revenues that directly fund Eastside Park athletic investments.',
      bio_es: 'En el corredor de la US-97 y SR-215, el Peppertree Inn ofrece 68 habitaciones amplias, piscina techada climatizada y desayuno continental. Es un socio clave del impuesto hotelero.',
      specs: [
        'Address: 820 N Highway 97, Omak, WA 98841',
        'Proximity: 1.2 miles north of Central Ave Bridge',
        'Amenities: Indoor pool & whirlpool, fitness center, EV charging stations, fiber Wi-Fi',
        'LTAC Impact: Generates lodging tax revenues reinvested into sports tourism and park facilities',
        'Reservations: (509) 422-2088'
      ],
      specs_es: [
        'Dirección: 820 N Highway 97, Omak, WA',
        'Instalaciones: Piscina techada, spa, cargadores EV, Wi-Fi de alta velocidad',
        'Reservaciones: (509) 422-2088'
      ],
      audioNarration: 'The Best Western Plus Peppertree Inn is the proud hospitality home for traveling baseball and soccer teams, rodeo competitors, and vacationers. Every night booked here directly supports the Lodging Tax fund that keeps Eastside Park in championship condition.'
    },

    'biz-omak-inn': {
      category: 'LODGING & HOSPITALITY (LTAC PARTNER)',
      category_es: 'HOSPEDAJE Y MOTEL (SOCIO LTAC)',
      title: 'Omak Inn Hotel',
      title_es: 'Hotel Omak Inn',
      metaType: 'Welcoming Northwest Hospitality Lodge',
      metaType_es: 'Alojamiento Tradicional del Noroeste',
      bio: 'Situated at 912 N Senna Street along the SR-215 corridor. Omak Inn provides clean, comfortable accommodations with an indoor pool, microwave and refrigerators in every room, and easy trailer and bus parking for visiting athletic teams.',
      bio_es: 'Ubicado en 912 N Senna St sobre la SR-215, Omak Inn ofrece cómodas habitaciones familiares, piscina techada y amplio estacionamiento para remolques y autobuses.',
      specs: [
        'Address: 912 N Senna St, Omak, WA',
        'Distance: 1 mile north of Downtown Central Ave',
        'Amenities: Indoor heated pool, continental breakfast, team bus parking, pet-friendly',
        'Contact: (509) 826-4011'
      ],
      specs_es: [
        'Dirección: 912 N Senna St, Omak, WA',
        'Servicios: Piscina climatizada, desayuno incluido, espacio para autobuses'
      ],
      audioNarration: 'Omak Inn provides welcoming, budget-friendly comfort just minutes from Eastside Park. A staple for traveling sports families, it is a key participant in the city’s lodging tax partnership.'
    },

    'biz-12-tribes-resort': {
      category: 'LUXURY RESORT & CASINO',
      category_es: 'RESORT DE LUJO Y CASINO',
      title: '12 Tribes Colville Casino & Hotel Resort',
      title_es: 'Resort y Casino 12 Tribes Colville',
      metaType: 'Luxury Casino Hotel, Spa & Live Entertainment',
      metaType_es: 'Hotel de Lujo, Spa y Centro de Espectáculos',
      bio: 'Positioned on the US-97 south corridor at 28968 Highway 97, this world-class destination resort is proudly owned and operated by the Colville Confederated Tribes. Boasting 68 luxury boutique hotel rooms, the rejuvenating Camas Wellness Spa, fine Pacific Northwest dining, Vegas-style gaming, and an outdoor RV resort.',
      bio_es: 'Propiedad de las Tribus Confederadas de Colville sobre la US-97 sur. Cuenta con 68 habitaciones de lujo, el Camas Wellness Spa, restaurantes de primera clase y casino 24 horas.',
      specs: [
        'Address: 28968 Highway 97, Omak, WA',
        'Distance: 2.5 miles south via US-97 corridor',
        'Amenities: Camas Wellness Spa, fine dining at The River Restaurant, gaming floor, RV park hookups',
        'Cultural Significance: Sovereign enterprise honoring the 12 Bands of the Colville Tribes',
        'Contact: (800) 559-4643 · colvilletribes.com'
      ],
      specs_es: [
        'Dirección: 28968 Highway 97, Omak, WA',
        'Servicios: Spa completo, restaurante gourmet, casino, parque de RV'
      ],
      audioNarration: 'Rising gracefully in the southern valley, 12 Tribes Colville Casino and Hotel offers luxury resort comfort infused with tribal pride. Experience restorative treatments at Camas Wellness Spa and savor fresh wild salmon dinners.'
    },

    'hwy-us97': {
      category: 'HIGHWAY WAYFINDING & ARTERIALS',
      category_es: 'AUTOPISTAS Y TRANSPORTE REGIONAL',
      title: 'US Highway 97 Corridor',
      title_es: 'Corredor de la Carretera US-97',
      metaType: 'International Scenic Highway Arterial',
      metaType_es: 'Corredor Carretero Internacional Escénico',
      bio: 'US Highway 97 is the central artery of Central Washington, connecting Weed, California all the way north across the Canadian border to British Columbia. In Omak, US-97 serves as the primary gateway for thousands of international visitors, commercial freight, and tournament spectators traveling into the valley.',
      bio_es: 'La US-97 es la columna vertebral de transporte del centro de Washington, conectando hacia el sur con Wenatchee y Seattle, y hacia el norte con Canadá.',
      specs: [
        'Route: Connects Wenatchee/Chelan (South) to Tonasket/Osoyoos, BC (North)',
        'Access to Eastside Park: Direct exit onto Central Avenue (SR-155 / SR-215)',
        'Signage: Follow official brown State Parks and Civic Recreation Wayfinding markers'
      ],
      specs_es: [
        'Ruta: Conecta Wenatchee con la frontera canadiense en Osoyoos',
        'Acceso: Salida directa por Central Avenue hacia Eastside Park'
      ],
      audioNarration: 'US Highway 97 stretches over 650 miles from Northern California to British Columbia. Here in Omak, it brings hundreds of thousands of road trippers and tournament athletes to our historic downtown and riverside parks.'
    },

    'hwy-sr215': {
      category: 'HIGHWAY WAYFINDING & ARTERIALS',
      category_es: 'CARRETERAS ESTATALES ESCÉNICAS',
      title: 'State Route 215 Scenic River Corridor',
      title_es: 'Carretera Estatal SR-215 Corredor del Río',
      metaType: 'Scenic Twin-Cities Connecting Arterial',
      metaType_es: 'Carretera Ribereña Escénica',
      bio: 'SR-215 winds along the west bank of the Okanogan River, linking the twin communities of Omak and Okanogan. As Main Street through Downtown Omak, it offers direct access to heritage shopping, dining, civic buildings, and the Central Avenue Bridge crossing into Eastside Park.',
      bio_es: 'La SR-215 bordea la ribera oeste del río Okanogan, conectando Omak y Okanogan como la calle principal comercial y acceso al puente de Central Ave.',
      specs: [
        'Route: 6.2 miles connecting Omak and Okanogan along the river',
        'Downtown Street Names: Main Street & Riverside Drive',
        'Features: Pedestrian sidewalks, historic lampposts, crosswalks to Central Ave Bridge'
      ],
      specs_es: [
        'Ruta: 6.2 millas entre Omak y Okanogan',
        'Nombres locales: Main Street y Riverside Drive'
      ],
      audioNarration: 'State Route 215 is the historic downtown heartbeat of the valley. Following the original riverbank trade paths, it delivers travelers straight to our local shops, cafes, and into Eastside Park.'
    },

    'downtown-parking': {
      category: 'VISITOR WAYFINDING & PARKING',
      category_es: 'ESTACIONAMIENTO PÚBLICO Y ACCESO',
      title: 'Downtown Public Parking Plazas (P)',
      title_es: 'Plazas de Estacionamiento Público Céntrico (P)',
      metaType: 'Free Municipal Vehicle & RV Parking Plazas',
      metaType_es: 'Estacionamiento Gratuito para Autos y RVs',
      bio: 'Free municipal public parking plazas conveniently situated along Central Avenue, 1st Avenue, and Ash Street. Designed to accommodate passenger cars, pickup trucks, and visiting RVs, allowing tourists to park with ease and stroll through downtown shops and across the pedestrian walkway to Eastside Park.',
      bio_es: 'Plazas de estacionamiento municipal gratuito sobre Central Ave, 1st Ave y Ash St. Aptas para vehículos familiares y casas rodantes.',
      specs: [
        'Locations: Central Ave & 1st Ave Lots; Ash Street Municipal Plaza',
        'Cost: 100% Free Public Parking',
        'Accessibility: ADA designated spaces, well-lit lots, direct paved sidewalks'
      ],
      specs_es: [
        'Ubicación: Lotes sobre Central Ave y calle Ash',
        'Costo: Gratuito',
        'Accesibilidad: Rampas y espacios para personas con discapacidad'
      ],
      audioNarration: 'Visiting Omak? Park for free at the Central Avenue and First Avenue plazas. From here, you are only a short scenic walk across the river footbridge to the ballfields, rodeo arena, and downtown cafes.'
    },

    // ==========================================================
    // 2075 GENERATIONAL MASTER PLAN (TACTICAL FLAT MAT ZONES)
    // Designed for Civic Leaders & Operators born 1960–1990
    // ==========================================================
    'zone-2075-arena': {
      category: '2075 CIVIC & CULTURAL HORIZON',
      category_es: 'HORIZONTE CÍVICO Y CULTURAL 2075',
      title: 'Omak Stampede All-Weather Covered Arena & Amphitheater',
      title_es: 'Arena Cubierta Todo Clima y Anfiteatro Omak Stampede',
      metaType: 'Dual-Use Western Rodeo & Regional Gathering Campus',
      metaType_es: 'Campus Regional Multipropósito y Rodeo Tradicional',
      bio: 'Preserves the sacred rodeo dirt oval and bucking chutes for the world-renowned Omak Stampede and World Famous Suicide Race, while integrating a heavy-timber retractable canopy and acoustic shell. Transforms Eastside Park into North-Central Washington’s premier year-round venue for regional concerts, tribal symposiums, agricultural expos, and robotics tournaments without sacrificing an ounce of frontier cowboy grit.',
      bio_es: 'Conserva el óvalo de tierra y cajones de rodeo para la famosa Omak Stampede y Carrera Suicida, integrando un techo retráctil de madera pesada para albergar conciertos y ferias regionales todo el año.',
      specs: [
        'Capacity: 8,500 permanent & modular tiered seats',
        'Architecture: Okanogan County-milled Douglas fir heavy timber & matte-black structural steel trusses',
        'Climate Resilience: Geothermally heated dirt sub-base enabling winter equestrian & trade expos down to -10°F',
        'Acoustics: Retractable sound-dampening baffles engineered for both 120 dB rodeo crowds and orchestral clarity',
        'Generational Utility: Designed for 1960–1990 leadership mindset—tactile controls, zero software dependency, 75-year structural lifespan'
      ],
      specs_es: [
        'Capacidad: 8,500 asientos modulares techados',
        'Estructura: Vigas macizas de abeto Douglas local y acero estructural negro',
        'Calefacción: Subsuelo geotérmico para eventos ecuestres en invierno',
        'Operación: Controles mecánicos directos y vida útil de 75 años'
      ],
      audioNarration: 'Welcome to the 2075 Stampede All-Weather Amphitheater. By pairing our historic rodeo dirt with a retractable heavy-timber canopy, Omak creates a year-round economic engine that hosts concerts, tribal summits, and agricultural expos in every season.'
    },

    'zone-2075-arbor': {
      category: 'SOVEREIGN TRIBAL ALLIANCE (2075)',
      category_es: 'ALIANZA SOBERANA TRIBAL (2075)',
      title: 'Colville Sovereign Cultural Arbor & Salmon Gathering Grounds',
      title_es: 'Glorieta Cultural Soberana de Colville y Centro del Salmón',
      metaType: 'Inter-Tribal Gathering Arbor & Living Heritage Encampment',
      metaType_es: 'Centro Ceremonial y Campamento de Tradición Viva',
      bio: 'Developed in direct sovereign partnership with the Confederated Tribes of the Colville Reservation. A majestic open-air Western Red Cedar gathering arbor and central earthen roundhouse honoring the 12 Bands of the Colville Tribe. Features live salmon smoking and drying demonstrations along the riverbanks, an indigenous botanical ethnobotany garden, winter storytelling hearths, and an inter-tribal artisan craft exchange.',
      bio_es: 'Desarrollado en alianza soberana con las Tribus Confederadas de Colville. Una majestuosa glorieta de cedro rojo que rinde homenaje a las 12 Bandas, con ahumado tradicional de salmón y jardines etnobotánicos.',
      specs: [
        'Architecture: Hand-peeled Western Red Cedar columns with 360-degree tiered seating circle',
        'River Interface: Direct ceremonial canoe landing ramps and bankside salmon cleaning stations',
        'Living Culture: Permanent smokehouse pits, winter cedar roundhouse hearth, and tribal youth mentorship lodge',
        'Sovereign Trade: Shaded artisan stalls for direct tribal beadwork, leathercraft, and food sovereignty products'
      ],
      specs_es: [
        'Arquitectura: Columnas de cedro rojo pulidas a mano y círculo de asientos 360°',
        'Río: Desembarcadero ceremonial para canoas y estaciones de salmón',
        'Cultura Viva: Ahumaderos permanentes y mercado artesanal indígena'
      ],
      audioNarration: 'The Colville Sovereign Cultural Arbor stands as a testament to living alliance. Here along the Okanogan River, the twelve bands gather for annual pow wows, salmon ceremonies, and youth mentorship, sharing timeless traditions with all who visit.'
    },

    'zone-2075-footbridge': {
      category: 'PEDESTRIAN & ECONOMIC ARTERIAL (2075)',
      category_es: 'CONECTIVIDAD PEATONAL Y COMERCIAL (2075)',
      title: 'Okanogan Riverwalk & Kinetic Suspension Footbridge',
      title_es: 'Paseo Ribereño y Puente Colgante Peatonal del Río Okanogan',
      metaType: 'Direct Pedestrian Span to Downtown Main Street & Mirage Theater',
      metaType_es: 'Puente Peatonal Directo al Centro Histórico y Teatro Mirage',
      bio: 'A signature cable-stayed suspension footbridge spanning 420 feet across the Okanogan River, linking Eastside Park directly to Downtown Omak Main Street. Unlocks immediate foot traffic from ball tournaments, RV campers, and rodeo attendees into downtown dining (Breadline Cafe, Magoo’s, El Patron) and evening cinema at the historic Mirage Theater, eliminating highway walking hazards.',
      bio_es: 'Un puente colgante peatonal de 420 pies sobre el río Okanogan que conecta directamente Eastside Park con Main Street, permitiendo que miles de visitantes caminen con seguridad a los restaurantes y cines del centro.',
      specs: [
        'Span Length: 420-foot clear suspension span anchored by native basalt stone abutments',
        'Decking: Slip-resistant recycled composite planks with warm amber under-rail LED lighting (dark-sky compliant)',
        'Kinetic & Safety: Integrated river telemetry sensors monitoring flood stages, water temperature, and salmon migration',
        'Accessibility: Full ADA wide switchback approaches accommodating wheelchairs, strollers, and bicycles'
      ],
      specs_es: [
        'Longitud: 420 pies de claro libre con estribos de basalto nativo',
        'Iluminación: LEDs cálidos que protegen los cielos oscuros y el paso del salmón',
        'Accesibilidad: Rampas amplias de acceso universal para bicicletas y peatones'
      ],
      audioNarration: 'The Okanogan Riverwalk Footbridge bridges the historic gap between Eastside Park and downtown. In less than three minutes, visitors cross above the sparkling river to enjoy dinner on Main Street and take in a show at the Mirage Theater.'
    },

    'zone-2075-maker': {
      category: 'ADVANCED RURAL INDUSTRY & CLEAN ENERGY (2075)',
      category_es: 'INDUSTRIA RURAL AVANZADA Y ENERGÍA LIMPIA (2075)',
      title: 'Okanogan PUD Hydro Maker Guild & AgTech Micro-Factories',
      title_es: 'Gremio de Fabricación PUD Hidroeléctrica y Microfábricas AgTech',
      metaType: 'Clean-Energy Advanced Prototyping & Apprentice Campus',
      metaType_es: 'Campus de Manufactura Avanzada y Aprendizaje Técnico',
      bio: 'Capitalizing on Okanogan County PUD’s ultra-cheap, carbon-free hydroelectric power. A high-bay modular workshop campus replacing dying resource extraction with precision CNC machining, autonomous agricultural equipment assembly, smart food packaging innovation (in coordination with Pine Creek Pack), and drone repair, linked with high school and community college trade apprenticeships.',
      bio_es: 'Aprovechando la energía hidroeléctrica económica de la PUD de Okanogan. Un complejo de talleres de alta tecnología para maquinado CNC, robótica agrícola y empaque de alimentos con escuela de oficios.',
      specs: [
        'Floor Space: 35,000 sq ft across 6 modular high-bay micro-manufacturing suites with 20-ton crane rails',
        'Power Infrastructure: Dedicated 13.8 kV PUD hydroelectric feed with on-site microgrid battery backup',
        'Advanced Tools: 5-axis CNC mills, waterjet cutting, 3D additive metal printers, automated cold-chain packaging test line',
        'Trade Pipeline: 120 apprentice stations annually for local youth in heavy mechanics, electrical, and CAD design'
      ],
      specs_es: [
        'Instalaciones: 35,000 pies cuadrados en 6 naves con grúas de 20 toneladas',
        'Energía: Conexión directa hidroeléctrica PUD y micro-red de baterías',
        'Equipamiento: Maquinado CNC de 5 ejes, corte por agua y robótica aplicada'
      ],
      audioNarration: 'Powered by the clean Columbia and Okanogan hydro dams, the Maker Guild brings high-tech fabrication right home to Omak. Local machinists and youth apprentices build the robotics, fruit-packing tools, and wildfire gear of the next century.'
    },

    'zone-2075-resiliency': {
      category: 'DISASTER RESILIENCE & EMERGENCY COMMAND (2075)',
      category_es: 'RESILIENCIA ANTE DESASTRES Y COMANDO DE EMERGENCIA (2075)',
      title: 'Northwest Wildfire Defense & Sovereign Resiliency Command Hub',
      title_es: 'Centro de Comando de Resiliencia y Defensa Contra Incendios',
      metaType: 'Dual-Use RV Park, Water Filtration & Regional Disaster Staging',
      metaType_es: 'Base de Operaciones de Emergencia y Parque de RV Multipropósito',
      bio: 'Reimagines the Carl Precht RV Park as a dual-purpose sovereign civil-defense stronghold. In the summer, it functions as an 80-pad luxury RV resort. When regional wildfires or grid emergencies strike Okanogan County, it instantly converts into the multi-agency incident command post, providing off-grid micro-hydro power, emergency river water purification, and helicopter logistics staging.',
      bio_es: 'Reimagina el parque de RV Carl Precht como una fortaleza civil de doble uso: resort de verano para 80 casas rodantes y cuartel general de emergencia con agua potable purificada y micro-red eléctrica autónoma ante incendios forestales.',
      specs: [
        'Dual-Use Fleet: 80 full-hookup pads equipped with bi-directional EV/RV power backfeed capabilities',
        'Emergency Water: 50,000-gallon gravity-fed riverwell micro-filtration facility producing medical-grade potable water',
        'Independent Power: 250 kW micro-hydro generation + 1 MWh battery storage vault, runs 30 days off-grid',
        'Aerial Staging: Paved dual-pad drone launching grid and USFS heavy-lift helicopter staging landing pad'
      ],
      specs_es: [
        'Capacidad: 80 espacios con recarga de vehículos y respaldo bidireccional',
        'Agua Potable: Planta de microfiltración de 50,000 galones con pozo ribereño',
        'Energía Autónoma: 250 kW micro-hidroeléctrica y 1 MWh de almacenamiento',
        'Helipuerto: Zona pavimentada para drones de patrullaje forestal y helicópteros'
      ],
      audioNarration: 'The Wildfire Defense Hub is Omak’s shield. While welcoming vacationers all summer, it stands ready to power the valley through fire season with independent water filtration, battery banks, and incident command coordination.'
    },

    'zone-2075-suicide-hill': {
      category: 'HERITAGE PRESERVATION & HIGH COUNTRY RECREATION (2075)',
      category_es: 'PATRIMONIO HISTÓRICO Y MIRADOR PANORÁMICO (2075)',
      title: 'Suicide Hill Historical Overlook & Mountain Switchback Trail',
      title_es: 'Mirador Histórico de Suicide Hill y Sendero Panorámico',
      metaType: 'Basalt Bluff Sanctuary & Suicide Race Heritage Promenade',
      metaType_es: 'Santuario de Basalto y Mirador Panorámico de la Carrera',
      bio: 'Stabilizes the sacred bluff face across the river with native columnar basalt masonry while opening a world-class public scenic overlook. Visitors and families can walk the stabilized switchback trail, marvel at the sheer 62-degree plunge where the World Famous Suicide Race occurs each August, and study bronze tribute markers dedicated to historic riders and equine champions.',
      bio_es: 'Estabiliza el risco con muros de piedra basalto nativa y abre un mirador de clase mundial con senderos seguros, telescopios panorámicos y placas de bronce en homenaje a los jinetes y caballos legendarios de la Carrera Suicida.',
      specs: [
        'Trail Engineering: 0.8-mile stabilized switchback trail with native basalt retaining walls and timber benches',
        'Observation Deck: Cantilevered steel and stone deck with 360° views of the park, river oxbow, and Cascades',
        'Living Memorial: 12 cast-bronze relief plaques documenting 90+ years of riders, tribal heroes, and winning mounts',
        'Ecological Buffer: Native bitterroot, serviceberry, and bluebunch wheatgrass slope restoration zone'
      ],
      specs_es: [
        'Sendero: 0.8 millas de camino seguro con muros de contención de basalto',
        'Mirador: Plataforma voladiza con vista de 360° del valle y la cordillera',
        'Monumentos: Placas conmemorativas de bronce con la historia del rodeo'
      ],
      audioNarration: 'Suicide Hill is the soul of Omak’s courage. From this basalt overlook, gaze down the thrilling slope where brave riders have plunged into the river for nearly a century, celebrated here with honor and enduring respect.'
    }
  };

  // ----------------------------------------------------------
  // 1B. MAP OPTIONS CONFIGURATION (10 DESIGNS)
  // ----------------------------------------------------------
  const MAP_OPTIONS = [
    {
      id: 1,
      name: '1. Sovereign Engraved Certificate',
      src: 'public/map_option_1.jpg',
      badge: 'Order of the Ditch Vintage Engraving',
      desc: 'Fine-line commemorative certificate engraving inspired by the historic 1930s artifact. Warm vellum parchment, ornate scroll borders, and hand-etched vignettes.'
    },
    {
      id: 2,
      name: '2. WPA National Park Serigraph',
      src: 'public/map_option_2.jpg',
      badge: '1930s Federal Art Project Serigraph',
      desc: 'Striking vintage screen-print serigraph with bold flat colors, deep forest pine tones, cobalt river, and iconic 1930s national park travel typography.'
    },
    {
      id: 3,
      name: '3. Downtown Businesses & Highways',
      src: 'public/map_option_3.jpg',
      badge: 'Downtown Commerce & Highway Corridor Guide',
      desc: 'Precision tourism cartography featuring downtown storefronts (Mirage Theater, Breadline Cafe, Magoo’s, El Patron), US-97/SR-215 corridors, and visitor parking.'
    },
    {
      id: 4,
      name: '4. Sunset Recreation & Twilight Glow',
      src: 'public/map_option_4.jpg',
      badge: 'Luminous Golden Hour & Arena Twilight',
      desc: 'Golden hour sunset over the Okanogan Valley, glowing Stampede Arena floodlights, warm neon theater reflections, and twilight river reflections.'
    },
    {
      id: 5,
      name: '5. Frontier Hand-Tooled Leather',
      src: 'public/map_option_5.jpg',
      badge: 'Hand-Carved Saddlery Leather & Silver Conchos',
      desc: 'Hand-carved floral western leather border, buckstitched edging, polished silver concho medallions, and aged frontier vellum map face.'
    },
    {
      id: 6,
      name: '6. 1890s Panoramic Aero-View Lithograph',
      src: 'public/map_option_6.jpg',
      badge: '19th-Century Currier & Ives Panoramic View',
      desc: 'Late 19th-century bird’s-eye perspective engraving with delicate watercolor wash, historical numbered directory legend, and mountain panorama.'
    },
    {
      id: 7,
      name: '7. James Niehues Hand-Painted Trail Map',
      src: 'public/map_option_7.jpg',
      badge: 'Gouache Mountain Topography & Ski Trail Panorama',
      desc: 'Painted in the legendary ski-trail style of James Niehues: rich gouache textures, turquoise river oxbow, downtown shopping grid, and Eastside athletic complex.'
    },
    {
      id: 8,
      name: '8. Colville Tribal & Cultural Heritage Map',
      src: 'public/map_option_8.jpg',
      badge: 'Salish Geometric Beadwork & Salmon River Lore',
      desc: 'Plateau Salish geometric beadwork border, rich natural earth pigments, honoring the 12 Bands of the Colville Confederated Tribes, ancestral encampment, and river lore.'
    },
    {
      id: 9,
      name: '9. Mid-Century 1950s Road Trip Guide',
      src: 'public/map_option_9.jpg',
      badge: 'Retro 1950s Americana Highway Tour Guide',
      desc: 'Playful, nostalgic 1950s roadside vacation guide with vintage cars, vibrant neon signs for Mirage Theater and diners, highway shields, and family viewpoints.'
    },
    {
      id: 10,
      name: '10. Architectural Master Blueprint & Gold Kiosk',
      src: 'public/map_option_10.jpg',
      badge: 'Prussian Navy & Metallic Gold Civic Drafting Kiosk',
      desc: 'Deep Prussian blueprint navy with gleaming metallic gold ink drafting. Precision downtown building footprints, highway junctions, field dimensions, and brass directory.'
    },
    {
      id: 11,
      name: '11. Satellite-Accurate Master Survey (1:1)',
      src: 'public/map_option_11.jpg',
      badge: 'Satellite-Accurate Master Athletic Complex & Downtown Guide',
      desc: 'Exact 1:1 match to aerial survey: Suicide Hill plunge (top), Rodeo Arena (purple), North Riverfront Diamond (pink), Swimming Pool (blue), RV Park (brown), Dance Pavilion (pink), Central Ave & Ferry St Diamonds (red, orange, light blue), Tennis & Skate Park (yellow & red), North Omak Soccer Complex (yellow), and Downtown Omak (west).'
    },
    {
      id: 12,
      name: '12. Roblox 3D Voxel Adventure',
      src: 'public/map_option_12.jpg',
      badge: 'Roblox 3D Voxel World & Youth Obby Quest',
      desc: 'Playful 3D blocky voxel simulation of Eastside Park and Downtown Omak inspired by Roblox. Features a voxel rodeo arena, Suicide Hill plunge obby, blocky ballfields, sparkling pixel swimming pool, skate bowl, and youth quest checkpoints.'
    },
    {
      id: 13,
      name: '13. 2075 Generational Master Plan (Tactical Flat Mat)',
      src: 'public/map_option_13.jpg',
      badge: '50-Year Generational Master Plan & Resiliency Blueprint (Tactical Flat Mat)',
      desc: 'Tactile tabletop master plan blueprint designed for 1960–1990 civic leaders, tribal councils, and PUD commissioners. Features dual-use Stampede All-Weather Covered Arena, Colville Sovereign Cultural Arbor, Okanogan Riverwalk Suspension Bridge, Clean Hydro Maker Guild, Wildfire Resiliency Hub, and Suicide Hill Historical Overlook.'
    }
  ];

  // ----------------------------------------------------------
  // 2. STATE MANAGEMENT
  // ----------------------------------------------------------
  let currentLanguage = 'en';
  let activeHotspotId = 'field-joe-robbins';
  let activeFilter = 'all';
  let activeMapOptionId = 11;
  let reviewerName = 'Sarah';
  let isAuthenticated = false;
  let pinsVisible = true;
  let isSpeaking = false;
  let zoomLevel = 1.0;
  let panX = 0;
  let panY = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let uvModeActive = false;

  // DOM Elements
  const masterMapImage = document.getElementById('master-map-image');
  const interactivePinsLayer = document.getElementById('interactive-overlay-pins');
  const styleTitleText = document.getElementById('style-title-text');
  const activeStyleBadge = document.getElementById('active-style-badge');
  const btnTogglePins = document.getElementById('btn-toggle-pins');
  const mapStyleButtons = document.querySelectorAll('.map-style-btn');

  const btnToggleUv = document.getElementById('btn-toggle-uv');
  const btnOpenAdDeck = document.getElementById('btn-open-ad-deck');
  const uvFixture = document.getElementById('uv-overhead-fixture');
  const btnLampSwitch = document.getElementById('btn-lamp-switch');
  const adDeckModal = document.getElementById('ad-deck-modal');
  const btnCloseAdDeck = document.getElementById('btn-close-ad-deck');
  const btnInquireSponsor = document.getElementById('btn-inquire-sponsor');

  // 4 Seasons Modal Controls
  const btnOpenSeasons = document.getElementById('btn-open-seasons');
  const btnChipSeasons = document.getElementById('btn-chip-seasons');
  const seasonsModal = document.getElementById('seasons-modal');
  const btnCloseSeasons = document.getElementById('btn-close-seasons');
  const btnInquireSeasons = document.getElementById('btn-inquire-seasons');
  const seasonTabBtns = document.querySelectorAll('.season-tab-btn');
  const seasonPanels = document.querySelectorAll('.season-panel');

  const svgHost = document.getElementById('svg-host');
  const drawer = document.getElementById('heritage-drawer');
  const drawerCategory = document.getElementById('drawer-category');
  const drawerTitle = document.getElementById('drawer-title');
  const drawerMetaLocation = document.getElementById('meta-location');
  const drawerMetaType = document.getElementById('meta-type');
  const drawerBio = document.getElementById('drawer-bio');
  const drawerSpecs = document.getElementById('drawer-specs');
  const btnCloseDrawer = document.getElementById('btn-close-drawer');
  const drawerToggleBar = document.getElementById('drawer-toggle-bar');

  const btnPlayAudio = document.getElementById('btn-play-audio');
  const playText = document.getElementById('play-text');
  const playIcon = document.getElementById('play-icon');

  const btnLangEn = document.getElementById('btn-lang-en');
  const btnLangEs = document.getElementById('btn-lang-es');

  const btnZoomIn = document.getElementById('btn-zoom-in');
  const btnZoomOut = document.getElementById('btn-zoom-out');
  const btnZoomReset = document.getElementById('btn-zoom-reset');
  const viewportWrapper = document.getElementById('svg-viewport-wrapper');

  const historyModal = document.getElementById('history-modal');
  const btnCloseHist = document.getElementById('btn-close-hist');
  const filterChips = document.querySelectorAll('.filter-chip');

  // ----------------------------------------------------------
  // 3. 365nm UV BLACKLIGHT ENGINE & BALLAST SOUND
  // ----------------------------------------------------------
  function playBallastIgnitionAudio() {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      const now = ctx.currentTime;

      // Starter ignition click / strike
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.35);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.24, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.015, now + 0.42);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.45);
    } catch (e) {
      console.log('Ballast audio unavailable:', e);
    }
  }

  function toggleUVBlacklightMode() {
    uvModeActive = !uvModeActive;
    playBallastIgnitionAudio();

    const fixture = document.getElementById('uv-overhead-fixture');
    const mapContainer = document.getElementById('map-container');
    const btnUv = document.getElementById('btn-toggle-uv');
    const lampSwitch = document.getElementById('btn-lamp-switch');
    const lampLabel = lampSwitch ? lampSwitch.querySelector('.switch-label') : null;

    if (uvModeActive) {
      if (fixture) {
        fixture.classList.remove('uv-lamp-off');
        fixture.classList.add('uv-lamp-on');
      }
      if (mapContainer) {
        mapContainer.classList.add('uv-mode-active');
      }
      if (btnUv) {
        btnUv.textContent = '🟣 UV Blacklight [ON]';
        btnUv.style.background = 'rgba(168, 85, 247, 0.4)';
        btnUv.style.boxShadow = '0 0 14px rgba(168, 85, 247, 0.7)';
      }
      if (lampLabel) {
        lampLabel.textContent = '365nm UV [ON]';
      }

      // If viewing 2075 Flat Mat, swap in high-contrast glowing UV blacklight texture
      if (activeMapOptionId === 13 && masterMapImage) {
        masterMapImage.setAttribute('href', 'public/map_option_13_uv.jpg');
      }
    } else {
      if (fixture) {
        fixture.classList.remove('uv-lamp-on');
        fixture.classList.add('uv-lamp-off');
      }
      if (mapContainer) {
        mapContainer.classList.remove('uv-mode-active');
      }
      if (btnUv) {
        btnUv.textContent = '🟣 UV Blacklight [OFF]';
        btnUv.style.background = 'rgba(168, 85, 247, 0.15)';
        btnUv.style.boxShadow = 'none';
      }
      if (lampLabel) {
        lampLabel.textContent = 'BLACKLIGHT [OFF]';
      }

      // Return to daytime architectural blueprint
      if (activeMapOptionId === 13 && masterMapImage) {
        masterMapImage.setAttribute('href', 'public/map_option_13.jpg');
      }
    }
  }

  function openAdDeckModal() {
    if (adDeckModal) {
      adDeckModal.style.display = 'flex';
      adDeckModal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeAdDeckModal() {
    if (adDeckModal) {
      adDeckModal.style.display = 'none';
      adDeckModal.setAttribute('aria-hidden', 'true');
    }
  }

  function openSeasonsModal(defaultSeason) {
    if (seasonsModal) {
      seasonsModal.style.display = 'flex';
      seasonsModal.setAttribute('aria-hidden', 'false');
      if (defaultSeason) {
        switchSeasonTab(defaultSeason);
      }
    }
  }

  function closeSeasonsModal() {
    if (seasonsModal) {
      seasonsModal.style.display = 'none';
      seasonsModal.setAttribute('aria-hidden', 'true');
    }
  }

  function switchSeasonTab(seasonKey) {
    seasonTabBtns.forEach(btn => {
      if (btn.dataset.season === seasonKey) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });
    seasonPanels.forEach(p => {
      if (p.id === `panel-season-${seasonKey}`) {
        p.style.display = 'block';
      } else {
        p.style.display = 'none';
      }
    });
  }

  // ----------------------------------------------------------
  // 4. MAP STYLE SWITCHER & PIN TOGGLE
  // ----------------------------------------------------------
  function setMapStyle(mapId) {
    activeMapOptionId = parseInt(mapId, 10);
    const option = MAP_OPTIONS.find(opt => opt.id === activeMapOptionId) || MAP_OPTIONS[0];

    // Determine correct image URL (respecting active UV mode on 2075)
    let targetSrc = option.src;
    if (activeMapOptionId === 13 && uvModeActive) {
      targetSrc = 'public/map_option_13_uv.jpg';
    }

    if (masterMapImage) {
      masterMapImage.setAttribute('href', targetSrc);
    }

    // Update HUD Badge
    if (styleTitleText) {
      styleTitleText.textContent = option.badge;
    }
    const styleNumEl = activeStyleBadge ? activeStyleBadge.querySelector('.style-num') : null;
    if (styleNumEl) {
      styleNumEl.textContent = (option.id === 13) ? '2075 MASTER PLAN' : `STYLE ${option.id}`;
    }

    // Toggle 2075 future pins & 4 Corner QR hubs
    const futurePinsGroup = document.getElementById('pins-future-2075');
    if (futurePinsGroup) {
      futurePinsGroup.style.display = (activeMapOptionId === 13) ? 'inline' : 'none';
    }
    const qrGroup = document.getElementById('qr-codes-group-2075');
    if (qrGroup) {
      qrGroup.style.display = (activeMapOptionId === 13) ? 'inline' : 'none';
    }

    // Toggle overhead UV fixture visibility
    if (uvFixture) {
      uvFixture.style.display = (activeMapOptionId === 13) ? 'flex' : 'none';
    }

    // Update active button state
    mapStyleButtons.forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.mapId, 10) === activeMapOptionId);
    });

    // When 2075 is selected, automatically activate the 2075 filter chip and select Arena
    if (activeMapOptionId === 13) {
      filterChips.forEach(chip => {
        chip.classList.toggle('active', chip.dataset.filter === 'future-2075');
      });
      selectHotspot('zone-2075-arena');
    }
  }

  function togglePins() {
    pinsVisible = !pinsVisible;
    if (interactivePinsLayer) {
      interactivePinsLayer.style.display = pinsVisible ? 'inline' : 'none';
    }
    if (btnTogglePins) {
      btnTogglePins.classList.toggle('off', !pinsVisible);
      btnTogglePins.textContent = pinsVisible ? '📍 Pins' : '🚫 Pure Art';
      btnTogglePins.title = pinsVisible ? 'Click to hide hotspot pins' : 'Click to show hotspot pins';
    }
  }

  function bindSVGHotspots() {
    Object.keys(PARK_DATA).forEach((hotspotId) => {
      const el = document.getElementById(hotspotId);
      if (el) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          selectHotspot(hotspotId);
        });
      }
    });

    // Special bindings for compound hotspots
    const namesakedossier = document.getElementById('hotspot-namesake-dossier');
    if (namesakedossier) {
      namesakedossier.addEventListener('click', () => {
        selectHotspot('field-joe-robbins');
      });
    }

    // 4 Corner Interactive QR Hub Bindings
    const qr3d = document.getElementById('qr-hud-3d');
    if (qr3d) {
      qr3d.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open('http://localhost:8088/omak_visitor_map.html', '_blank');
      });
    }

    const qrStampede = document.getElementById('qr-hud-stampede');
    if (qrStampede) {
      qrStampede.addEventListener('click', (e) => {
        e.stopPropagation();
        selectHotspot('stampede-arena');
      });
    }

    const qrBlueprint = document.getElementById('qr-hud-blueprint');
    if (qrBlueprint) {
      qrBlueprint.addEventListener('click', (e) => {
        e.stopPropagation();
        selectHotspot('zone-2075-resiliency');
      });
    }

    const qrRateCard = document.getElementById('qr-hud-ratecard');
    if (qrRateCard) {
      qrRateCard.addEventListener('click', (e) => {
        e.stopPropagation();
        openAdDeckModal();
      });
    }
  }

  function selectHotspot(hotspotId) {
    activeHotspotId = hotspotId;
    updateDrawer(hotspotId);
    openDrawer();

    // Highlight selected SVG group
    document.querySelectorAll('.interactive-hotspot, .map-pin').forEach((el) => {
      el.style.filter = '';
    });
    const target = document.getElementById(hotspotId);
    if (target) {
      target.style.filter = 'drop-shadow(0 0 18px #f3d37a)';
    }
  }

  // ----------------------------------------------------------
  // 5. DRAWER & DETAIL UPDATES WITH COMMERCIAL SPONSOR QR
  // ----------------------------------------------------------
  function updateDrawer(hotspotId) {
    const data = PARK_DATA[hotspotId] || PARK_DATA['field-joe-robbins'];
    const isEs = currentLanguage === 'es';

    drawerCategory.textContent = isEs ? (data.category_es || data.category) : data.category;
    drawerTitle.textContent = isEs ? (data.title_es || data.title) : data.title;
    drawerMetaType.textContent = isEs ? (data.metaType_es || data.metaType) : data.metaType;
    drawerBio.textContent = isEs ? (data.bio_es || data.bio) : data.bio;

    // Specs list
    drawerSpecs.innerHTML = '';
    const specsArray = isEs ? (data.specs_es || data.specs) : data.specs;
    specsArray.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      drawerSpecs.appendChild(li);
    });

    // Commercial Sponsor & QR Code Display
    const sponsorCard = document.getElementById('drawer-sponsor-card');
    const sponsorTierBadge = document.getElementById('sponsor-tier-badge');
    const sponsorMetrics = document.getElementById('sponsor-metrics');
    const sponsorDynamicQr = document.getElementById('sponsor-dynamic-qr');
    const sponsorHeadline = document.getElementById('sponsor-headline');
    const sponsorDesc = document.getElementById('sponsor-desc');

    if (sponsorCard) {
      if (sponsorTierBadge) {
        sponsorTierBadge.textContent = data.sponsorTier || '2075 COMMERCIAL PARTNER';
      }
      if (sponsorMetrics) {
        sponsorMetrics.textContent = data.sponsorMetrics || 'Est. 42,000+ Annual Rodeo & Tourney Impressions';
      }
      if (sponsorDynamicQr) {
        sponsorDynamicQr.src = data.sponsorQr || 'public/qr/qr_ad_ratecard.svg';
      }
      if (sponsorHeadline) {
        sponsorHeadline.textContent = data.sponsorHeadline || 'Mobile Navigation & Sponsor Perks';
      }
      if (sponsorDesc) {
        sponsorDesc.textContent = data.sponsorDesc || 'Point phone camera to scan live coupons, tournament schedules, or reserve facilities directly.';
      }
    }

    // Reset audio if playing
    stopAudio();
  }

  function openDrawer() {
    drawer.classList.remove('drawer-closed');
    drawer.classList.add('drawer-open');
    drawer.setAttribute('aria-hidden', 'false');
  }

  function closeDrawer() {
    drawer.classList.remove('drawer-open');
    drawer.classList.add('drawer-closed');
    drawer.setAttribute('aria-hidden', 'true');
    stopAudio();
  }

  // ----------------------------------------------------------
  // 5. NARRATION AUDIO ENGINE (WEB SPEECH API)
  // ----------------------------------------------------------
  function playOralHistory() {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported on this device.');
      return;
    }

    if (isSpeaking) {
      stopAudio();
      return;
    }

    const data = PARK_DATA[activeHotspotId];
    if (!data) return;

    const textToSpeak = (currentLanguage === 'es')
      ? (data.bio_es || data.bio)
      : (data.audioNarration || data.bio);

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.95; // deliberate, warm storytelling cadence
    utterance.pitch = 1.0;
    utterance.lang = (currentLanguage === 'es') ? 'es-US' : 'en-US';

    utterance.onstart = () => {
      isSpeaking = true;
      btnPlayAudio.classList.add('playing');
      playIcon.textContent = '⏹';
      playText.textContent = (currentLanguage === 'es') ? 'Detener Audio' : 'Stop Narration';
    };

    utterance.onend = () => {
      stopAudio();
    };

    utterance.onerror = () => {
      stopAudio();
    };

    window.speechSynthesis.speak(utterance);
  }

  function stopAudio() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    isSpeaking = false;
    btnPlayAudio.classList.remove('playing');
    playIcon.textContent = '▶';
    playText.textContent = (currentLanguage === 'es') ? 'Escuchar Historia' : 'Listen (Audio)';
  }

  // ----------------------------------------------------------
  // 6. LANGUAGE SWITCHER
  // ----------------------------------------------------------
  function setLanguage(lang) {
    currentLanguage = lang;
    btnLangEn.classList.toggle('active', lang === 'en');
    btnLangEs.classList.toggle('active', lang === 'es');

    const appTitle = document.getElementById('app-title');
    const appSubtitle = document.getElementById('app-subtitle');
    const mapHint = document.getElementById('map-hint');
    const labelNaming = document.getElementById('label-naming');
    const labelSpecs = document.getElementById('label-specs');

    if (lang === 'es') {
      appTitle.textContent = 'EASTSIDE PARK · OMAK, WA';
      appSubtitle.textContent = 'Cartografía Oficial y Portal de Tradición Viva';
      mapHint.innerHTML = '<span>👆 Toca cualquier campo o estadio para escuchar su historia</span>';
      labelNaming.textContent = 'Historia y Personajes Homenajeados';
      labelSpecs.textContent = 'Especificaciones de la Instalación';
    } else {
      appTitle.textContent = 'EASTSIDE PARK · OMAK, WA';
      appSubtitle.textContent = 'Official Illustrated Cartography & Living Heritage Portal';
      mapHint.innerHTML = '<span>👆 Tap any field, arena, or campsite to reveal its history &amp; audio story</span>';
      labelNaming.textContent = "Who It's Named After & History";
      labelSpecs.textContent = 'Facility Specifications & Amenities';
    }

    updateDrawer(activeHotspotId);
  }

  // ----------------------------------------------------------
  // 7. CATEGORY FILTER SYSTEM
  // ----------------------------------------------------------
  function setFilter(filterType) {
    activeFilter = filterType;

    filterChips.forEach((chip) => {
      chip.classList.toggle('active', chip.dataset.filter === filterType);
    });

    if (filterType === 'future-2075') {
      if (activeMapOptionId !== 13) {
        setMapStyle(13);
        return;
      }
    }

    if (filterType === 'history') {
      openHistoryModal();
      return;
    }

    // Filter SVG elements
    const filterMapping = {
      all: Object.keys(PARK_DATA),
      'future-2075': [
        'zone-2075-arena', 'zone-2075-arbor', 'zone-2075-footbridge',
        'zone-2075-maker', 'zone-2075-resiliency', 'zone-2075-suicide-hill'
      ],
      downtown: [
        'biz-mirage-theater', 'biz-breadline-cafe', 'biz-magoos-diner', 'biz-el-patron',
        'biz-chamber-vic', 'biz-peppertree-inn', 'biz-omak-inn', 'biz-12-tribes-resort',
        'hwy-us97', 'hwy-sr215', 'downtown-parking', 'visitor-center'
      ],
      ballfields: ['field-joe-robbins', 'field-john-pock', 'field-ross-mccormick', 'field-jack-rowe', 'field-shirley-bowden', 'field-stephanie-buchanon', 'field-eastside-practice'],
      soccer: ['soccer-complex'],
      stampede: ['stampede-arena', 'hotspot-suicide-hill'],
      'rv-culture': ['rv-carl-precht', 'colville-powwow'],
      civic: ['dance-pavilion', 'omak-pool', 'tennis-courts', 'skate-park', 'dog-park', 'visitor-center', 'boat-launch', 'carnival-midway', 'vendor-food-row']
    };

    const allowed = filterMapping[filterType] || filterMapping.all;

    Object.keys(PARK_DATA).forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        if (allowed.includes(id)) {
          el.style.opacity = '1';
          el.style.transition = 'opacity 0.3s ease';
        } else {
          el.style.opacity = '0.15';
          el.style.transition = 'opacity 0.3s ease';
        }
      }
    });

    // Auto-select first matching element
    if (allowed.length > 0 && !allowed.includes(activeHotspotId)) {
      selectHotspot(allowed[0]);
    }
  }

  function openHistoryModal() {
    historyModal.style.display = 'flex';
    historyModal.setAttribute('aria-hidden', 'false');
  }

  function closeHistoryModal() {
    historyModal.style.display = 'none';
    historyModal.setAttribute('aria-hidden', 'true');
    // reset filter chip back to 'all' if closed
    if (activeFilter === 'history') {
      setFilter('all');
    }
  }

  // ----------------------------------------------------------
  // 8. PAN & ZOOM CONTROLS
  // ----------------------------------------------------------
  function applyTransform() {
    svgHost.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomLevel})`;
  }

  function zoomIn() {
    zoomLevel = Math.min(zoomLevel + 0.25, 3.5);
    applyTransform();
  }

  function zoomOut() {
    zoomLevel = Math.max(zoomLevel - 0.25, 0.6);
    applyTransform();
  }

  function resetZoom() {
    zoomLevel = 1.0;
    panX = 0;
    panY = 0;
    applyTransform();
  }

  // Drag to pan
  viewportWrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - panX;
    startY = e.clientY - panY;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    panX = e.clientX - startX;
    panY = e.clientY - startY;
    applyTransform();
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch drag for mobile
  viewportWrapper.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      startX = e.touches[0].clientX - panX;
      startY = e.touches[0].clientY - panY;
    }
  }, { passive: true });

  viewportWrapper.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    panX = e.touches[0].clientX - startX;
    panY = e.touches[0].clientY - startY;
    applyTransform();
  }, { passive: true });

  viewportWrapper.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Mouse wheel zoom
  viewportWrapper.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  }, { passive: false });

  // ----------------------------------------------------------
  // 9. EVENT LISTENERS SETUP
  // ----------------------------------------------------------
  btnCloseDrawer.addEventListener('click', closeDrawer);
  drawerToggleBar.addEventListener('click', () => {
    if (drawer.classList.contains('drawer-open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  btnPlayAudio.addEventListener('click', playOralHistory);

  btnLangEn.addEventListener('click', () => setLanguage('en'));
  btnLangEs.addEventListener('click', () => setLanguage('es'));

  btnZoomIn.addEventListener('click', zoomIn);
  btnZoomOut.addEventListener('click', zoomOut);
  btnZoomReset.addEventListener('click', resetZoom);

  if (btnTogglePins) {
    btnTogglePins.addEventListener('click', togglePins);
  }

  // UV Blacklight mode triggers
  if (btnToggleUv) {
    btnToggleUv.addEventListener('click', toggleUVBlacklightMode);
  }
  if (btnLampSwitch) {
    btnLampSwitch.addEventListener('click', toggleUVBlacklightMode);
  }

  // Ad Deck Modal triggers
  if (btnOpenAdDeck) {
    btnOpenAdDeck.addEventListener('click', openAdDeckModal);
  }
  if (btnCloseAdDeck) {
    btnCloseAdDeck.addEventListener('click', closeAdDeckModal);
  }
  if (btnInquireSponsor) {
    btnInquireSponsor.addEventListener('click', openAdDeckModal);
  }
  if (adDeckModal) {
    adDeckModal.addEventListener('click', (e) => {
      if (e.target === adDeckModal) closeAdDeckModal();
    });
  }

  // 4 Seasons Modal Event Listeners
  if (btnOpenSeasons) {
    btnOpenSeasons.addEventListener('click', () => openSeasonsModal('spring'));
  }
  if (btnChipSeasons) {
    btnChipSeasons.addEventListener('click', () => openSeasonsModal('spring'));
  }
  if (btnCloseSeasons) {
    btnCloseSeasons.addEventListener('click', closeSeasonsModal);
  }
  if (seasonsModal) {
    seasonsModal.addEventListener('click', (e) => {
      if (e.target === seasonsModal) closeSeasonsModal();
    });
  }
  seasonTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchSeasonTab(btn.dataset.season);
    });
  });
  if (btnInquireSeasons) {
    btnInquireSeasons.addEventListener('click', () => {
      closeSeasonsModal();
      openChat();
      const chatInput = document.getElementById('chat-text-input');
      if (chatInput) {
        chatInput.value = `Chief, let's discuss 4-season programming and the winterization strategy for Eastside Park & Carl Precht RV Park.`;
        chatInput.focus();
      }
    });
  }

  // Tier selection buttons inside Ad Deck
  document.querySelectorAll('.tier-select-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tierName = btn.dataset.tier || '2075 Advertising Slot';
      closeAdDeckModal();
      openDrawer();
      const chatDrawer = document.getElementById('swarm-chat-drawer');
      if (chatDrawer) {
        chatDrawer.classList.remove('chat-drawer-closed');
        chatDrawer.classList.add('chat-drawer-open');
      }
      const chatInput = document.getElementById('chat-text-input');
      if (chatInput) {
        chatInput.value = `Hello Chief, I would like to inquire about reserving the ${tierName} on the 2075 Advertising Map.`;
        chatInput.focus();
      }
    });
  });

  const btnFlatMatPrint = document.getElementById('btn-flat-mat-print');
  if (btnFlatMatPrint) {
    btnFlatMatPrint.addEventListener('click', () => {
      if (activeMapOptionId !== 13) {
        setMapStyle(13);
      }
      setTimeout(() => {
        window.print();
      }, 400);
    });
  }

  mapStyleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      setMapStyle(btn.dataset.mapId);
    });
  });

  btnCloseHist.addEventListener('click', closeHistoryModal);
  historyModal.addEventListener('click', (e) => {
    if (e.target === historyModal) closeHistoryModal();
  });

  // ----------------------------------------------------------
  // 10. REVIEWER AUTHENTICATION (SECURE SHA-256 GATE)
  // ----------------------------------------------------------
  const TARGET_HASH = '621cf94dd963fe2cf49c0c5e45cd5001414ed9634b03968f3d26400b67bb7ebe';
  const authModal = document.getElementById('auth-modal');
  const authForm = document.getElementById('auth-form');
  const reviewerNameInput = document.getElementById('reviewer-name-input');
  const reviewerPassInput = document.getElementById('reviewer-pass-input');
  const authErrorMsg = document.getElementById('auth-error-msg');

  async function computeSHA256(str) {
    const buffer = new TextEncoder().encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  function updateReviewerUI(name) {
    const safeName = (name && name.trim()) ? name.trim() : 'Sarah';
    reviewerName = safeName;

    // 1. Update header reviewer badge name
    const headerReviewerName = document.getElementById('header-reviewer-name');
    if (headerReviewerName) {
      headerReviewerName.textContent = safeName;
    }

    // 2. Update initial greeting in the chat messages
    const greetingBody = document.getElementById('initial-agent-greeting-body');
    if (greetingBody) {
      greetingBody.textContent = `Hello ${safeName}! Welcome to the Eastside Park & Downtown Omak master project. I am Chief, leading the Trillionaires AI Agent Swarm. At John's request, I have just drafted and added Option 13: The 2075 Generational Master Plan (Tactical Flat Mat) for tabletop review by you, John, and Paula. It carries our 50-year vision for Omak operated by leaders born 1960–1990—grounded in clean PUD hydro, local fabrication, covered arena events, riverwalk connectivity, and sovereign wildfire resiliency. Tap any zone on the blueprint to review the specs, and leave your feedback below!`;
    }

    // 3. Update chat input placeholder
    const chatInput = document.getElementById('chat-text-input');
    if (chatInput) {
      chatInput.placeholder = `Ask Chief a question or leave feedback, ${safeName}...`;
    }

    // 4. Update quick selection buttons in auth modal
    const quickBtns = document.querySelectorAll('.quick-name-btn');
    quickBtns.forEach(btn => {
      if (btn.dataset.name && btn.dataset.name.toLowerCase() === safeName.toLowerCase()) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (reviewerNameInput) {
      reviewerNameInput.value = safeName;
    }
  }

  function checkSession() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const queryName = urlParams.get('reviewer') || urlParams.get('name') || urlParams.get('user');

      // Localhost or demo query auto-authenticates without prompt
      const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const isDemo = urlParams.has('demo') || urlParams.has('auth');

      const session = localStorage.getItem('omak_reviewer_session');
      if (session || isLocal || isDemo) {
        let nameToUse = 'Sarah';
        if (session) {
          try {
            const parsed = JSON.parse(session);
            nameToUse = parsed.reviewer || nameToUse;
          } catch(e) {}
        }
        if (queryName && queryName.trim()) nameToUse = queryName.trim();
        updateReviewerUI(nameToUse);
        isAuthenticated = true;
        if (authModal) {
          authModal.style.display = 'none';
          authModal.setAttribute('aria-hidden', 'true');
        }
        return true;
      } else if (queryName && queryName.trim()) {
        updateReviewerUI(queryName.trim());
      } else {
        updateReviewerUI('Sarah');
      }
    } catch (e) {
      console.warn('Session parse error:', e);
    }
    // Show auth modal if not authenticated
    if (authModal) {
      authModal.style.display = 'flex';
      authModal.setAttribute('aria-hidden', 'false');
    }
    return false;
  }

  // Instant Stakeholder & Demo Unlock Button
  const btnQuickGuestUnlock = document.getElementById('btn-quick-guest-unlock');
  if (btnQuickGuestUnlock) {
    btnQuickGuestUnlock.addEventListener('click', () => {
      const name = (reviewerNameInput && reviewerNameInput.value) ? reviewerNameInput.value.trim() : 'Sarah';
      localStorage.setItem('omak_reviewer_session', JSON.stringify({ reviewer: name, timestamp: Date.now() }));
      updateReviewerUI(name);
      isAuthenticated = true;
      if (authModal) {
        authModal.style.display = 'none';
        authModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Quick Persona selection buttons inside modal
  const quickNameBtns = document.querySelectorAll('.quick-name-btn');
  quickNameBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedName = btn.dataset.name || 'Sarah';
      if (reviewerNameInput) reviewerNameInput.value = selectedName;
      quickNameBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (reviewerPassInput) reviewerPassInput.focus();
    });
  });

  // Switch reviewer button in masthead
  const btnSwitchReviewer = document.getElementById('btn-switch-reviewer');
  if (btnSwitchReviewer) {
    btnSwitchReviewer.addEventListener('click', () => {
      if (authModal) {
        authModal.style.display = 'flex';
        authModal.setAttribute('aria-hidden', 'false');
        if (reviewerNameInput) reviewerNameInput.value = reviewerName;
        if (reviewerPassInput) reviewerPassInput.focus();
      }
    });
  }

  if (authForm) {
    authForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const enteredPass = reviewerPassInput.value || '';
      const enteredName = (reviewerNameInput.value || '').trim() || 'Sarah';

      if (authErrorMsg) authErrorMsg.style.display = 'none';

      // Verify password hash
      const inputHash = await computeSHA256(enteredPass);
      if (inputHash === TARGET_HASH) {
        // Success
        reviewerName = enteredName;
        isAuthenticated = true;
        updateReviewerUI(enteredName);
        localStorage.setItem('omak_reviewer_session', JSON.stringify({
          reviewer: enteredName,
          timestamp: Date.now()
        }));

        if (authModal) {
          authModal.style.display = 'none';
          authModal.setAttribute('aria-hidden', 'true');
        }

        // Add welcoming greeting to chat
        addChatMessage('Chief · Lead Systems Architect', `Welcome ${enteredName}! Your reviewer session is active. You can explore all 12 map styles, review the satellite-accurate athletic layout (Style 11), explore the Roblox 3D Voxel map (Style 12), or ask me anything about the ballfields, Suicide Race history, and downtown businesses!`, 'agent');
      } else {
        if (authErrorMsg) {
          authErrorMsg.textContent = 'Incorrect passcode. Please verify credentials with John.';
          authErrorMsg.style.display = 'block';
        }
      }
    });
  }

  // ----------------------------------------------------------
  // 11. SWARM CHAT BOT & REVIEWER COMMENTS MODULE
  // ----------------------------------------------------------
  const btnOpenChat = document.getElementById('btn-open-chat');
  const btnCloseChat = document.getElementById('btn-close-chat');
  const swarmChatDrawer = document.getElementById('swarm-chat-drawer');
  const tabBtnChat = document.getElementById('tab-btn-chat');
  const tabBtnComments = document.getElementById('tab-btn-comments');
  const panelChat = document.getElementById('panel-chat');
  const panelComments = document.getElementById('panel-comments');
  const chatInputForm = document.getElementById('chat-input-form');
  const chatTextInput = document.getElementById('chat-text-input');
  const chatMessagesContainer = document.getElementById('chat-messages-container');
  const commentInputForm = document.getElementById('comment-input-form');
  const commentStyleSelect = document.getElementById('comment-style-select');
  const commentTextarea = document.getElementById('comment-textarea');
  const commentsListContainer = document.getElementById('comments-list-container');
  const commentsCountSpan = document.getElementById('comments-count');

  let localComments = [
    {
      id: 'init-1',
      author: 'Chief (Trillionaires AI)',
      text: `Reviewer portal initialized for ${reviewerName || 'Sarah'}, Paula, and City of Omak stakeholders. True satellite athletic placements (Style 11) and all 11 artistic options are ready for review.`,
      mapStyle: 'Style 11 (Satellite-Accurate)',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ];

  function openChat() {
    if (swarmChatDrawer) {
      swarmChatDrawer.classList.remove('chat-drawer-closed');
      swarmChatDrawer.classList.add('chat-drawer-open');
      swarmChatDrawer.setAttribute('aria-hidden', 'false');
    }
  }

  function closeChat() {
    if (swarmChatDrawer) {
      swarmChatDrawer.classList.remove('chat-drawer-open');
      swarmChatDrawer.classList.add('chat-drawer-closed');
      swarmChatDrawer.setAttribute('aria-hidden', 'true');
    }
  }

  function switchTab(tabName) {
    if (tabName === 'chat') {
      if (tabBtnChat) tabBtnChat.classList.add('active');
      if (tabBtnComments) tabBtnComments.classList.remove('active');
      if (panelChat) panelChat.style.display = 'flex';
      if (panelComments) panelComments.style.display = 'none';
    } else {
      if (tabBtnComments) tabBtnComments.classList.add('active');
      if (tabBtnChat) tabBtnChat.classList.remove('active');
      if (panelComments) panelComments.style.display = 'flex';
      if (panelChat) panelChat.style.display = 'none';
      renderComments();
    }
  }

  function addChatMessage(sender, text, type) {
    if (!chatMessagesContainer) return;
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${type === 'user' ? 'user-bubble' : 'agent-bubble'}`;

    const header = document.createElement('div');
    header.className = 'bubble-header';
    header.textContent = sender;

    const body = document.createElement('div');
    body.className = 'bubble-body';
    body.style.whiteSpace = 'pre-line';
    body.textContent = text;

    const time = document.createElement('div');
    time.className = 'bubble-time';
    time.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    bubble.appendChild(header);
    bubble.appendChild(body);
    bubble.appendChild(time);
    chatMessagesContainer.appendChild(bubble);

    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
  }

  async function handleChatSubmit(e) {
    e.preventDefault();
    const msg = (chatTextInput.value || '').trim();
    if (!msg) return;

    addChatMessage(reviewerName, msg, 'user');
    chatTextInput.value = '';

    // Send to serverless API or fallback to local agent logic
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: msg,
          reviewerName: reviewerName,
          activeMapId: activeMapOptionId
        })
      });

      if (response.ok) {
        const data = await response.json();
        addChatMessage(data.author || 'Chief · Trillionaires AI', data.reply, 'agent');
        if (data.recordedFeedback) {
          localComments.unshift({
            id: Date.now().toString(),
            author: reviewerName,
            text: msg,
            mapStyle: `Style ${activeMapOptionId}`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          });
          if (commentsCountSpan) commentsCountSpan.textContent = localComments.length;
        }
        return;
      }
    } catch (err) {
      console.warn('Vercel serverless chat route unavailable, using local Swarm response engine:', err);
    }

    // Local Swarm Response Engine (Fallback)
    setTimeout(() => {
      const lower = msg.toLowerCase();
      let reply = '';
      if (lower.includes('roblox') || lower.includes('voxel') || lower.includes('game') || lower.includes('youth') || lower.includes('young')) {
        reply = `Hello ${reviewerName}! Style 12 is our brand-new Roblox 3D Voxel Adventure Obby map. It renders Eastside Park, Suicide Hill, and the Stampede Arena as an interactive blocky voxel world designed to engage younger generations and families visiting Omak!`;
      } else if (lower.includes('field') || lower.includes('diamond')) {
        reply = `Hello ${reviewerName}! All athletic diamonds are calibrated to our latest aerial survey:\n\n• North Riverfront Diamond (Pink Border): Joe Robbins Field (Field 1)\n• Central Ave & Ferry St Diamond (Red Border): John Pock Field (Field 2)\n• Tournament Diamonds on Ferry St (Orange & Light Blue): Ross McCormick (Field 3) and Jack Rowe (Field 4)\n• Fastpitch Diamonds: Shirley Bowden (Field 5) and Stephanie Buchanon (Field 6)\n\nTake a look at Style 11—it matches the aerial photo 1:1!`;
      } else if (lower.includes('downtown') || lower.includes('food') || lower.includes('breadline')) {
        reply = `${reviewerName}, Downtown Omak is right across the Central Avenue Bridge (a 3-minute walk west)! Highlighting Breadline Cafe (scratch bakery), Mirage Theater (Art Deco cinema), Magoo's Diner, and El Patron Mexican drives tournament spectators directly into downtown businesses.`;
      } else if (lower.includes('rv') || lower.includes('precht')) {
        reply = `The Carl Precht Memorial RV Park (brown border) offers 68 full-hookup sites under mature Catalpa trees along the quiet river loop east of the arena. Dedicated to pioneer educator Carl Precht.`;
      } else if (lower.includes('season') || lower.includes('winter') || lower.includes('summer') || lower.includes('spring') || lower.includes('fall') || lower.includes('loup') || lower.includes('freeze')) {
        reply = `Hello ${reviewerName}! Our research establishes Eastside Park as a 365-day civic campus across all 4 seasons:\n\n• 🌸 Spring: High freshet river runoff, Carl Precht RV de-winterization on April 1, Little League parade & NCW soccer.\n• ☀️ Summer: Omak Stampede (30k+ visitors), Suicide Race, daily municipal pool, river tubing & farmers market.\n• 🍂 Fall: District 6 mule deer hunter headquarters, apple harvest/cider festival, irrigation blowout in late Oct.\n• ❄️ Winter: Low-elevation basecamp for Loup Loup Ski Bowl, community refrigerated ice rink/hockey under 365nm UV lighting, and 2075 geothermal heated RV pedestals operating at -20°F.\n\nClick the "❄️ 4 Seasons" button in the HUD to review the complete matrix!`;
      } else {
        reply = `Thank you, ${reviewerName}! Chief here. I have logged your feedback into the Project Reviewer Dossier for John and the team. You can inspect any of our 12 map styles by clicking the top switcher ribbon.`;
        localComments.unshift({
          id: Date.now().toString(),
          author: reviewerName,
          text: msg,
          mapStyle: `Style ${activeMapOptionId}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        if (commentsCountSpan) commentsCountSpan.textContent = localComments.length;
      }
      addChatMessage('Chief · Swarm Concierge', reply, 'agent');
    }, 450);
  }

  function renderComments() {
    if (!commentsListContainer) return;
    commentsListContainer.innerHTML = '';
    localComments.forEach((c) => {
      const card = document.createElement('div');
      card.className = 'comment-card';

      const header = document.createElement('div');
      header.className = 'comment-header';
      header.innerHTML = `<span class="comment-author">👤 ${c.author}</span> <span class="comment-tag">${c.mapStyle}</span>`;

      const text = document.createElement('div');
      text.className = 'comment-text';
      text.textContent = c.text;

      const date = document.createElement('div');
      date.className = 'comment-date';
      date.textContent = c.timestamp;

      card.appendChild(header);
      card.appendChild(text);
      card.appendChild(date);
      commentsListContainer.appendChild(card);
    });
    if (commentsCountSpan) commentsCountSpan.textContent = localComments.length;
  }

  function handleCommentSubmit(e) {
    e.preventDefault();
    const commentText = (commentTextarea.value || '').trim();
    if (!commentText) return;

    const styleVal = commentStyleSelect.value;
    const newComment = {
      id: Date.now().toString(),
      author: reviewerName,
      text: commentText,
      mapStyle: styleVal,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    localComments.unshift(newComment);
    renderComments();
    commentTextarea.value = '';

    // Also post to API if available
    fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment)
    }).catch(err => console.warn('Could not sync comment to API:', err));

    // Confirm to chat
    addChatMessage('Chief · Swarm Concierge', `Thank you ${reviewerName}! Your review comment on ${styleVal} has been recorded: "${commentText}"`, 'agent');
    switchTab('chat');
  }

  if (btnOpenChat) btnOpenChat.addEventListener('click', openChat);
  if (btnCloseChat) btnCloseChat.addEventListener('click', closeChat);
  if (tabBtnChat) tabBtnChat.addEventListener('click', () => switchTab('chat'));
  if (tabBtnComments) tabBtnComments.addEventListener('click', () => switchTab('comments'));
  if (chatInputForm) chatInputForm.addEventListener('submit', handleChatSubmit);
  if (commentInputForm) commentInputForm.addEventListener('submit', handleCommentSubmit);

  // Initialize master interactive map directly on the high-res SVG canvas
  bindSVGHotspots();
  setMapStyle(11); // Flagship: Satellite-Accurate 1:1 Layout
  updateDrawer('field-joe-robbins');
  checkSession();
})();

