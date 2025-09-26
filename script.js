const schoolsData = [
    // { cod_escola: "30", cod_ue: "2530", nome_escola: "TESTE", inep: "99999999", endereco: "Rua TESTE", cep: "11256000", telefone: "13 99999999", cod_sed: "999999", dir_email: "gerson.santiago@seducbertioga.com.br", assist_email: "aderson.barros@seducbertioga.com.br", coord_email: "lucas.teodoro@seducbertioga.com.br", sec_email: "t1@seducbertioga.com.br" },
    { cod_escola: "01", cod_ue: "2501", nome_escola: "EM SEMENTES DO BEM", 
        inep: "35010459", endereco: "Rua Jorge Mansour Costa, S/N, Bairro Indaiá", cep: "11260015", telefone: "13 33132759", cod_sed: "010459", dir_email: "dir.sementesdobem@seducbertioga.com.br", assist_email: "assist.sementesdobem@seducbertioga.com.br", coord_email: "coord.sementesdobem@seducbertioga.com.br", sec_email: "sec.sementesdobem@seducbertioga.com.br" },
    { cod_escola: "02", cod_ue: "2502", nome_escola: "EM DR. DINO BUENO", 
        inep: "35207020", endereco: "Rua José Rodrigues 15", cep: "11250126", telefone: "13 33171820", cod_sed: "207020", dir_email: "dir.dinobueno@seducbertioga.com.br", assist_email: "assist.dinobueno@seducbertioga.com.br", coord_email: "coord.emdinobueno@seducbertioga.com.br", sec_email: "sec.dinobueno@seducbertioga.com.br" },
    { cod_escola: "03", cod_ue: "2503", nome_escola: "EM DR. JOSÉ ERMÍRIO DE MORAES FILHO", 
        inep: "35201054", endereco: "Rua Victorio Guidolim, S/N, Bairro Indaiá", cep: "11260594", telefone: "13 33131213", cod_sed: "201054", dir_email: "dir.joseermirio@seducbertioga.com.br", assist_email: "assist.joseermirio@seducbertioga.com.br", coord_email: "coord.ermirio@seducbertioga.com.br", sec_email: "sec.ermirio@seducbertioga.com.br" },
    { cod_escola: "04", cod_ue: "2504", nome_escola: "EM GENÉSIO SEBASTIÃO DOS SANTOS", 
        inep: "35580636", endereco: "Rua Aprovada Seissentos E Dois,35", cep: "11259054", telefone: "13 3331 6379", cod_sed: "580636", dir_email: "dir.genesio@seducbertioga.com.br", assist_email: "assist.genesio@seducbertioga.com.br", coord_email: "coord.genesio@seducbertioga.com.br", sec_email: "sec.genesio@seducbertioga.com.br" },
    { cod_escola: "05", cod_ue: "2505", nome_escola: "EM GIUSFREDO SANTINI", 
        inep: "35207032", endereco: "Rua Epiphânio Baptista, 66", cep: "11250560", telefone: "13 33177015", cod_sed: "207032", dir_email: "dir.giusfredo@seducbertioga.com.br", assist_email: "assist.giusfredo@seducbertioga.com.br", coord_email: "coord.giusfredo@seducbertioga.com.br", sec_email: "sec.giusfredo@seducbertioga.com.br" },
    { cod_escola: "06", cod_ue: "2506", nome_escola: "EM GOVERNADOR MÁRIO COVAS JÚNIOR", 
        inep: "35021261", endereco: "Av. São Lourenço, 2160 - Riviera", cep: "11261594", telefone: "13 33166920", cod_sed: "021261", dir_email: "dir.mariocovas@seducbertioga.com.br", assist_email: "assist.mariocovas@seducbertioga.com.br", coord_email: "coord.mariocovas@seducbertioga.com.br", sec_email: "sec.mariocovas@seducbertioga.com.br" },
    { cod_escola: "07", cod_ue: "2507", nome_escola: "EM HILDA STRENGER RIBEIRO", 
        inep: "35207044", endereco: "Av. Anchieta, 8619", cep: "11258428", telefone: "13 33119601", cod_sed: "207044", dir_email: "dir.hildastrenger@seducbertioga.com.br", assist_email: "assist.hildastrenger@seducbertioga.com.br", coord_email: "coord.hildastrenger@seducbertioga.com.br", sec_email: "sec.hildastrenger@seducbertioga.com.br" },
    { cod_escola: "08", cod_ue: "2508", nome_escola: "EM CAMINHOS DO BEM", 
        inep: "35407264", endereco: "Rua Dr. Lincoln Bolivar Neves, 60 - Vista Linda", cep: "11259090", telefone: "13 33119977", cod_sed: "407264", dir_email: "dir.caminhosdobem@seducbertioga.com.br", assist_email: "assist.caminhosdobem@seducbertioga.com.br", coord_email: "coord.caminhosdobem@seducbertioga.com.br", sec_email: "sec.caminhosdobem@seducbertioga.com.br" },
    { cod_escola: "09", cod_ue: "2509", nome_escola: "EM JOSÉ CARLOS BUZINARO", 
        inep: "35653861", endereco: "Rua Aprovada 624 Quadra A - Nº 15 Costa Do Sol", cep: "11267474", telefone: "13 33126356", cod_sed: "653861", dir_email: "dir.buzinaro@seducbertioga.com.br", assist_email: "assist.buzinaro@seducbertioga.com.br", coord_email: "coord.buzinaro@seducbertioga.com.br", sec_email: "sec.buzinaro@seducbertioga.com.br" },
    { cod_escola: "10", cod_ue: "2510", nome_escola: "EM JOSÉ DE OLIVEIRA SANTOS", 
        inep: "35209557", endereco: "Rua Cardeal Emyle Biayenda, 248", cep: "11256070", telefone: "13 33171129", cod_sed: "209557", dir_email: "dir.josedeoliveira@seducbertioga.com.br", assist_email: "assist.josedeoliveira@seducbertioga.com.br", coord_email: "coord.josedeoliveira@seducbertioga.com.br", sec_email: "sec.josedeoliveira@seducbertioga.com.br" },
    { cod_escola: "11", cod_ue: "2511", nome_escola: "EM PROF DELPHINO STOCKLER DE LIMA", 
        inep: "35056285", endereco: "Rua Manoel Da Nobrega, S/N, Centro", cep: "11250288", telefone: "13 33173005", cod_sed: "056285", dir_email: "dir.delphino@seducbertioga.com.br", assist_email: "assist.delphino@seducbertioga.com.br", coord_email: "coord.delphino@seducbertioga.com.br", sec_email: "sec.delphino@seducbertioga.com.br" },
    { cod_escola: "12", cod_ue: "2512", nome_escola: "EM PROF JOSÉ INÁCIO HORA", 
        inep: "35224133", endereco: "Rua Rodrigues Alves, 759", cep: "11250432", telefone: "13 33173977", cod_sed: "224133", dir_email: "dir.inaciohora@seducbertioga.com.br", assist_email: "assist.inaciohora@seducbertioga.com.br", coord_email: "coord.inaciohora@seducbertioga.com.br", sec_email: "sec.inaciohora@seducbertioga.com.br" },
    { cod_escola: "13", cod_ue: "2513", nome_escola: "EM PROFª CRISTINA DOS SANTOS",
         inep: "35023224", endereco: "Rua Pastor Djalma Da Silva Coimbra, S/N", cep: "11256230", telefone: "13 33177348", cod_sed: "023224", dir_email: "dir.cristinadossantos@seducbertioga.com.br", assist_email: "assist.cristinadossantos@seducbertioga.com.br", coord_email: "coord.cristinadossantos@seducbertioga.com.br", sec_email: "sec.cristinadossantos@seducbertioga.com.br" },
    { cod_escola: "14", cod_ue: "2514", nome_escola: "EM PROFª MARIA LÚCIA SOARES MONTEIRO", 
        inep: "35268773", endereco: "Rua Aprovada 612, 30", cep: "11259135", telefone: "13 33117016", cod_sed: "268773", dir_email: "dir.emmarialucia@seducbertioga.com.br", assist_email: "assit.emmarialucia@seducbertioga.com.br", coord_email: "coord.emmarialucia@seducbertioga.com.br", sec_email: "sec.emmarialucia@seducbertioga.com.br" },
    { cod_escola: "15", cod_ue: "2515", nome_escola: "EM PROFª MIRIAM DE ASSIS", 
        inep: "35653858", endereco: "Av. De São Lourenço, 2150 - Riviera De São Lourenço", cep: "11261594", telefone: "13 33167222", cod_sed: "653858", dir_email: "dir.emmiriamdeassis@seducbertioga.com.br", assist_email: "assist.emmiriamdeassis@seducbertioga.com.br", coord_email: "coord.emmiriamdeassis@seducbertioga.com.br", sec_email: "sec.emmiriamdeassis@seducbertioga.com.br" },
    { cod_escola: "16", cod_ue: "2516", nome_escola: "EMEI JARDIM ALBATROZ", 
        inep: "35120959", endereco: "Rua Jair Miranda De Souza, S/N - Albatroz", cep: "11250689", telefone: "13 33175610", cod_sed: "120959", dir_email: "dir.emeialbatroz@seducbertioga.com.br", assist_email: "assist.emeialbatroaz@seducbertioga.com.br", coord_email: "coord.emeijdalbatroz@seducbertioga.com.br", sec_email: "sec.emeialbatroz@seducbertioga.com.br" },
    { cod_escola: "17", cod_ue: "2517", nome_escola: "EMEIF BORACÉIA", 
        inep: "35207056", endereco: "Rua Prof. Geraldo Rodrigues Montemor, 295", cep: "11271165", telefone: "13 33121530", cod_sed: "207056", dir_email: "dir.boraceia@seducbertioga.com.br", assist_email: "assist.boraceia@seducbertioga.com.br", coord_email: "coord.boraceia@seducbertioga.com.br", sec_email: "sec.boraceia@seducbertioga.com.br" },
    { cod_escola: "18", cod_ue: "2518", nome_escola: "EMEIF CAIUBURA", 
        inep: "35427378", endereco: "Rua Um, Nº 520 E 523", cep: "11254200", telefone: "13 33194200", cod_sed: "427378", dir_email: "dir.caiubura@seducbertioga.com.br", assist_email: "assist.caiubura@seducbertioga.com.br", coord_email: "coord.caiubura@seducbertioga.com.br", sec_email: "sec.caiubura@seducbertioga.com.br" },
    { cod_escola: "19", cod_ue: "2519", nome_escola: "EMIG NHEMBO E A PORÃ", 
        inep: "35272322", endereco: "Av. Tupi Guarani,1500, Boraceia", cep: "11626315", telefone: "12 38676662", cod_sed: "272322", dir_email: "dir.nhembo@seducbertioga.com.br", assist_email: "assist.nhembo@seducbertioga.com.br", coord_email: "coord.nhembo@seducbertioga.com.br", sec_email: "sec.nhembo@seducbertioga.com.br" },
    { cod_escola: "20", cod_ue: "2520", nome_escola: "NEIM Boracéia", 
        inep: "35268768", endereco: "Av. Afio Pecoraro Júnior,S/N, Boracéia-Bertioga-Sp", cep: "11271245", telefone: "13 33122265", cod_sed: "268768", dir_email: "dir.neimboraceia1@seducbertioga.com.br", assist_email: "assist.neimboraceia1@seducbertioga.com.br", coord_email: "coord.neimboraceia1@seducbertioga.com.br", sec_email: "sec.neimboraceia1@seducbertioga.com.br" },
    { cod_escola: "21", cod_ue: "2521", nome_escola: "NEIM Elizabeth Regina Aparecida Garcia", 
        inep: "35235180", endereco: "Rua Manoel Gajo, 2650 - Parque Estoril", cep: "11250597", telefone: "13 33171213", cod_sed: "235180", dir_email: "dir.neimelizabeth@seducbertioga.com.br", assist_email: "assist.neimelizabeth@seducbertioga.com.br", coord_email: "coord.neimelizabethregina@seducbertioga.com.br", sec_email: "sec.neimelizabeth@seducbertioga.com.br" },
    { cod_escola: "22", cod_ue: "2522", nome_escola: "NEIM Chácara Vista Linda", 
        inep: "35196236", endereco: "Rua Lincoln Bolivar Neves, 930, Chácara Vista Linda", cep: "11259090", telefone: "13 33116061", cod_sed: "196236", dir_email: "dir.neimchacara@seducbertioga.com.br", assist_email: "assist.neimchacara@seducbertioga.com.br", coord_email: "coord.neimchacara@seducbertioga.com.br", sec_email: "sec.neimchacara@seducbertioga.com.br" },
    { cod_escola: "23", cod_ue: "2523", nome_escola: "NEIM Emancipadora Profª Irene Vaz Pinto Lyra", 
        inep: "35196241", endereco: "Rua Pedro Uzzo 875 - Jardim Raphael", cep: "11258015", telefone: "13 33116041", cod_sed: "196241", dir_email: "dir.neimirenevaz@seducbertioga.com.br", assist_email: "assist.neimirenevaz@seducbertioga.com.br", coord_email: "coord.neimirenevaz@seducbertioga.com.br", sec_email: "sec.neimirenevaz@seducbertioga.com.br" },
    { cod_escola: "24", cod_ue: "2524", nome_escola: "NEIM Guaratuba", 
        inep: "35456020", endereco: "Rua Aprovada 624 Quadra A - Nº 15 Costa Do Sol", cep: "11267474", telefone: "13 33127554", cod_sed: "456020", dir_email: "dir.neimguaratuba@seducbertioga.com.br", assist_email: "assist.neimguaratuba@seducbertioga.com.br", coord_email: "coord.neimguaratuba@seducbertioga.com.br", sec_email: "sec.neimguaratuba@seducbertioga.com.br" },
    { cod_escola: "25", cod_ue: "2525", nome_escola: "NEIM Mangue Seco", 
        inep: "35456032", endereco: "Rua Pastor Ronaldo Rodrigues Da Silva, 133 - Rio Da Praia", cep: "11256190", telefone: "13 33172997", cod_sed: "456032", dir_email: "dir.neimmangueseco@seducbertioga.com.br", assist_email: "assist.neimmangueseco@seducbertioga.com.br", coord_email: "coord.neimmangueseco@seducbertioga.com.br", sec_email: "sec.neimmangueseco@seducbertioga.com.br" },
    { cod_escola: "26", cod_ue: "2526", nome_escola: "NEIM Oswaldo Justo", 
        inep: "35565465", endereco: "Rua Engº E Arq. Eduardo Correia Da Costa Junior, 1.400", cep: "11258359", telefone: "13 33127724", cod_sed: "565465", dir_email: "dir.neimoswaldojusto@seducbertioga.com.br", assist_email: "assist.neimoswaldojusto@seducbertioga.com.br", coord_email: "coord.neimoswaldojusto@seducbertioga.com.br", sec_email: "sec.neimoswaldojusto@seducbertioga.com.br" },
    { cod_escola: "27", cod_ue: "2527", nome_escola: "NEIM Prof Amilton José do Amparo", 
        inep: "35004474", endereco: "Rua Luiz Pereira De Campos, 697 - Centro", cep: "11250117", telefone: "13 33171341", cod_sed: "004474", dir_email: "dir.amilton@seducbertioga.com.br", assist_email: "assist.neimamilton@seducbertioga.com.br", coord_email: "coord.neimamilton@seducbertioga.com.br", sec_email: "sec.amilton@seducbertioga.com.br" },
    { cod_escola: "28", cod_ue: "2528", nome_escola: "NEIM PROFª Zilmar Moura dos Santos", 
        inep: "35281273", endereco: "Rua Cardeal Emyle Biayenda, 248 - Jd. Rio Da Praia", cep: "11256070", telefone: "13 33173093", cod_sed: "281273", dir_email: "dir.neimzilmar@seducbertioga.com.br", assist_email: "assist.neimzilmar@seducbertioga.com.br", coord_email: "coord.neimzilmarmoura@seducbertioga.com.br", sec_email: "sec.neimzilmar@seducbertioga.com.br" },
    { cod_escola: "29", cod_ue: "2529", nome_escola: "NEIM Teodoro Quirino", 
        inep: "35268756", endereco: "Rua Victório Guidolim, S/N° - Jd Indaiá", cep: "11260594", telefone: "13 33133166", cod_sed: "268756", dir_email: "dir.neimteodoroquirino@seducbertioga.com.br", assist_email: "assist.neimteodoroquirino@seducbertioga.com.br", coord_email: "coord.neimteodoroquirino@seducbertioga.com.br", sec_email: "sec.neimteodoroquirino@seducbertioga.com.br" },
    { cod_escola: "31", cod_ue: "2531", nome_escola: "NEIM Boracéia II", 
        inep: "35008817", endereco: "Rua Professor Geraldo Rodrigues Montemor, 647", cep: "11271165", telefone: "13 35001232", cod_sed: "008817", dir_email: "dir.neimboraceia2@seducbertioga.com.br", assist_email: "assist.neimboraceia2@seducbertioga.com.br", coord_email: "coord.neimboraceia2@seducbertioga.com.br", sec_email: "sec.neimboraceia2@seducbertioga.com.br" }
];

document.addEventListener('DOMContentLoaded', () => {
    const schoolSelect = document.getElementById('escolaSelecionada');

    // Populate dropdown
    schoolsData.forEach(school => {
        const option = document.createElement('option');
        option.value = school.inep;
        option.textContent = school.nome_escola;
        schoolSelect.appendChild(option);
    });

    // Add event listener to school selector
    schoolSelect.addEventListener('change', (e) => {
        const selectedIinep = e.target.value;
        const selectedSchool = schoolsData.find(school => school.inep === selectedIinep);

        document.getElementById('nomeUE').value = selectedSchool ? selectedSchool.nome_escola : '';
        document.getElementById('codigoCIE').value = selectedSchool ? selectedSchool.inep : '';
        document.getElementById('enderecoCompleto').value = selectedSchool ? selectedSchool.endereco : '';
        document.getElementById('telefone').value = selectedSchool ? selectedSchool.telefone : '';
        document.getElementById('email').value = selectedSchool ? selectedSchool.dir_email : '';
    });

    // Load draft on page load
    carregarRascunho();

    // Progress Bar
    window.addEventListener('scroll', () => {
        const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollAtual = window.scrollY;
        const progresso = (scrollAtual / scrollTotal) * 100;
        document.getElementById('progressBar').style.width = progresso + '%';
    });

    // Modal Logic
    const modal = document.getElementById('docModal');
    const span = document.getElementsByClassName("close-button")[0];
    span.onclick = () => modal.style.display = "none";
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    document.getElementById('copy-btn').addEventListener('click', () => {
        const output = document.getElementById('doc-output');
        output.select();
        output.setSelectionRange(0, 99999);
        try {
            document.execCommand('copy');
            const btn = document.getElementById('copy-btn');
            btn.textContent = 'Copiado!';
            setTimeout(() => { btn.textContent = 'Copiar Texto'; }, 2000);
        } catch (err) {
            alert('Não foi possível copiar o texto automaticamente.');
        }
    });
});

function salvarRascunho() {
    const form = document.getElementById('pppForm');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    localStorage.setItem('formRascunho', JSON.stringify(data));
    alert('Rascunho salvo com sucesso!');
}

function carregarRascunho() {
    const savedData = localStorage.getItem('formRascunho');
    if (savedData) {
        const data = JSON.parse(savedData);
        const form = document.getElementById('pppForm');
        Object.keys(data).forEach(key => {
            const element = form.elements[key];
            if (element) {
                element.value = data[key];
                // Trigger change event for school selector to populate readonly fields
                if (key === 'escolaSelecionada') {
                    element.dispatchEvent(new Event('change'));
                }
            }
        });
        console.log('Rascunho carregado.');
    }
}

function visualizarFormulario() {
    window.print();
}

function exportarParaGoogleDocs() {
    let output = 'ADENDOS/2025 AO PLANO DE GESTÃO QUADRIENAL E PPP (2022/2025)\n';
    output += '============================================================\n\n';

    const form = document.getElementById('pppForm');
    const sections = form.querySelectorAll('.section');

    sections.forEach(section => {
        const title = section.querySelector('.section-title').innerText;
        output += `--- ${title} ---\n\n`;

        const inputs = section.querySelectorAll('input, textarea, select');
        inputs.forEach(item => {
            let label = '';
            if (item.id) {
                const labelElement = form.querySelector(`label[for='${item.id}']`);
                if (labelElement) {
                    label = labelElement.innerText;
                }
            }

            if (label && item.value) {
                output += `${label}\n`;
                if (item.tagName === 'SELECT') {
                    output += `${item.options[item.selectedIndex].text}\n\n`;
                } else {
                    output += `${item.value}\n\n`;
                }
            }
        });
    });

    document.getElementById('doc-output').value = output;
    document.getElementById('docModal').style.display = 'block';
}

