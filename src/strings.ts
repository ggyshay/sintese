export const strings = {
    title: 'Síntese Musical',
    soundPhysics: {
        title: 'Física do som',
        paragraphs: [
            'Para entender como a síntese funciona é muito importante entender como o som funciona. O som primeiro sai do emissor, como caixas, violões ou bocas das pessoas, viaja pelo ar em ondas sonoras até chegar em um receptor, como a sua orelha ou um microfone.',
            'Enquanto viaja no ar, o som se comporta como uma onda, mas o que isso quer dizer? Bem existem diversas ondas diferentes: As mecânicas (como o som, as ondas do mar e terremotos) e as eletromagnéticas (como a luz e as ondas de rádio). As ondas mecânicas precisam de um meio físico para se propagar (diferente das eletromagnéticas que se propagam até no espaço).',
            'O som se propaga aumentando e diminuindo a pressão no ar, mas como é difícil de se visualizar esse fenômeno podemos fazer uma analogia com uma corda vibrando.',
            'Desse modelo podemos tirar algumas ideias que se aplicam a todos os tipos de onda. Se a gente observar um ponto dessa corda vamos ver que ele sobe e desce, assim como a pressão em um ponto parado do ar(dentro da sua orelha, por exemplo). O percurso que ela faz até voltar ao mesmo lugar (por exemplo da maior pressão, diminuindo até a menor e voltando à maior pressão) é chamado de uma <strong>oscilação, ou período de oscilação.</strong>',
            '<strong>O período</strong> é quanto tempo a onda demora para completar uma oscilação, e é medido em segundos.',
            '<strong>A frequência</strong> é o inverso do período, ou seja, quanto maior o período menor a frequência e vice-versa. A frequência é medida em hertz.',
            '<strong>A forma de onda</strong> é a forma de um período e está profundamente ligada com como percebemos o som (seu timbre).'
        ],
    },
    spectrum: {
        title: 'Espectro',
        paragraphs: [
            'Talvez o conceito mais importante para entender a síntese (e a ciência da música) seja o conceito de espectro. O som mais \'puro\' que existe é o <strong>seno</strong>',
            'Um tal de Fourrier [link] disse que todos os outros sons são combinações de senos de diferentes frequencias '
        ]
    },
    synthesis: {
        title: 'Síntese',
        paragraphs: [
            '"Síntese sonora é a técnica de gerar sons do zero, usando hardware ou softwares"'
        ]
    },
    additive: {
        title: 'Síntese Aditiva',
        paragraphs: [
            'Este método de síntese consiste em escolher a dedo os harmônicos que vão compor o som final.'
        ]
    },
    subtractive: {
        title: 'Síntese Subtrativa',
        paragraphs: [
            `Esta é a síntese mais comum, usada em quase todos os sintetizadores.
Nela você escolhe uma onda que vai ter todo o conteudo harmonico, então voce escolhe, por meio de um filtro, quais harmonicos voce não quer e os remove, dai o nome subtrativa.
Os filtros costumam ser passa-baixas ( corta frequencias mais altas do que uma frequência escolhida e deixa o resto passar), passa altas (corta as mais baixas do que uma certa frequência e deixa o resto passar) ou passa-banda (deixa uma região passar e tudo que esta fora dela não.`
        ]
    },
    fm: {
        title: 'Síntese FM',
        paragraphs: [
            'A sintese FM, de inicio, parece mais complexa do que as outras, mas pode te trazer resultados sonoros muito interessantes.',
            'Nela temos pelo menos dois osciladores (podem ser a forma de onda que voce quiser: senos, quadradas, serras … ), e da maneira mais simples, apenas um deles é conectado na saída. A frequência desse oscilador, ao invez de ser fixa como nos outros casos é controlada pela saída do outro oscilador',
            'Os sintetizadores que usam essa tecnica tem geralmente mais de dois osciladores e assim o usuario pode escolher como eles estão conectados, chamado de algoritimo.',

        ]
    },
    others: {
        title: 'Outras Sínteses',
        paragraphs: [
            'As sinteses fm, subtrativa e aditiva são as principais. Porém exitem muitas outras ideias e maneiras de criar o som. ',
            '<strong>Modelagem fisica (Physical modelling)</strong> é a sintese que tenta modelar geralmente um instrumento de impacto como um tambor. Nela voce escolhe as caracteristicas da baqueta e do objeto recebendo o impacto.',
            '<strong>Karplus-strong</strong> tem um carater mais experimental (o som fica bem diferente e um pouco sem controle) acontece quando se liga a saída de um elemento (pode ser um filtro ou um delay) em sua propria entrada (alguns delays tem o parametro feedback, que deve ser ajustado para algo em torno de 100%) e então mude os parametros como frequência de corte (cutoff), tempo de delay, resonancia entre outros e veja o que acontece!'
        ]
    }

}