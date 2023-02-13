import Head from 'next/head';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {

  const tree = ['12 <= 0.50', '28 <= 0.50', '37 <= 0.50', '38 <= 0.50', '25 <= 0.50', '68 <= 0.50', '27 <= 0.50', '10 <= 0.50', '6 <= 0.50', '18 <= 0.50', '55 <= 0.50', '3 <= 0.50', '52 <= 0.50', '69 <= 0.50', '16 <= 0.50', '74 <= 0.50', '1 <= 0.50', '34 <= 0.50', '29 <= 0.50', '53 <= 0.50', '22 <= 0.50', '45 <= 0.50', '71 <= 0.50', '48 <= 0.50', '50 <= 0.50', '9 <= 0.50', '0 <= 0.50', '77 <= 0.50', '14 <= 0.50', 'class: Rodrigo Bonifácio de Almeida', '14 >  0.50', 'class: Li Weigang', '77 >  0.50', '60 <= 0.50', 'class: Edna Dias Canedo', '60 >  0.50', 'class: Leticia Lopes Leite', '0 >  0.50', 'class: Alba Cristina Magalhaes Alves de Melo', '9 >  0.50', '41 <= 0.50', 'class: Camilo Chang Dórea', '41 >  0.50', 'class: Ricardo L. de Queiroz', '50 >  0.50', '7 <= 0.50', 'class: Fernando Albuquerque', '7 >  0.50', 'class: Joao Jose Costa Gondim', '48 >  0.50', 'class: Jan Mendonca Correa', '71 >  0.50', 'class: Dibio Leandro Borges', '45 >  0.50', 'class: Eduardo Adilo Pelinson Alchieri', '22 >  0.50', 'class: Flavio Barros Vidal', '53 >  0.50', 'class: Flavio Leonardo Cavalcanti Moura', '29 >  0.50', 'class: Marcus Vinicius Lamar', '34 >  0.50', 'class: Guilherme N. Ramos', '1 >  0.50', 'class: Marcos Fagundes Caetano', '74 >  0.50', 'class: Germana Menezes da Nobrega', '16 >  0.50', 'class: Bruno Macchiavello', '69 >  0.50', 'class: Thiago Paulo Faleiros', '52 >  0.50', 'class: Roberta Barbosa Oliveira', '3 >  0.50', 'class: Ricardo Pezzuol Jacobi', '55 >  0.50', 'class: Carla Cavalcante Koike', '18 >  0.50', 'class: Jorge C. Lucero', '6 >  0.50', 'class: Carla Denise Castanho', '10 >  0.50', 'class: Marcelo Marotta', '27 >  0.50', 'class: Aleteia Patricia Favacho de Araujo', '68 >  0.50', 'class: Marcelo Ladeira', '25 >  0.50', 'class: Vinicius Ruela Pereira Borges', '38 >  0.50', 'class: Edison Ishikawa', '37 >  0.50', 'class: Marcelo Grandi Mandelli', '28 >  0.50', 'class: Jorge Henrique Cabral Fernandes', '12 >  0.50', 'class: Maria de Fatima R. Brandao']
  
  const atributos = {'0': 'O professor possui interesse em Biologia Computacional', '1': 'O professor possui interesse em Computação Paralela', '2': 'O professor possui interesse em Engenharia de Software', '3': 'O professor possui interesse em Hardware', '4': 'O professor possui interesse em Informática na Educação', '5': 'O professor possui interesse em Inteligência Artificial', '6': 'O professor possui interesse em Jogos de Computador', '7': 'O professor possui interesse em Lógica', '8': 'O professor possui interesse em Métodos Formais', '9': 'O professor possui interesse em Processamento Digital de Sinais e Multimídia', '10': 'O professor possui interesse em Redes de Computadores', '11': 'O professor possui interesse em Sistemas Distribuídos', '12': 'O professor possui interesse em Sistemas de Software', '13': 'O professor se graduou no(a) Fundação Educacional de Fernandópolis', '14': 'O professor se graduou no(a) He Hai University', '15': 'O professor se graduou no(a) Instituto Militar de Engenharia', '16': 'O professor se graduou no(a) Pontifica Universidad Católica del Perú', '17': 'O professor se graduou no(a) Pontifícia Universidade Católica do Rio Grande do Sul', '18': 'O professor se graduou no(a) Universidad Nacional de Córdoba', '19': 'O professor se graduou no(a) Universidade Federal da Paraíba', '20': 'O professor se graduou no(a) Universidade Federal de Goiás', '21': 'O professor se graduou no(a) Universidade Federal de Itajubá', '22': 'O professor se graduou no(a) Universidade Federal de Juiz de Fora', '23': 'O professor se graduou no(a) Universidade Federal de Pernambuco', '24': 'O professor se graduou no(a) Universidade Federal de Santa Catarina', '25': 'O professor se graduou no(a) Universidade Federal de Uberlândia', '26': 'O professor se graduou no(a) Universidade Federal do Ceará', '27': 'O professor se graduou no(a) Universidade Federal do Pará', '28': 'O professor se graduou no(a) Universidade Federal do Rio Grande do Norte', '29': 'O professor se graduou no(a) Universidade Federal do Rio Grande do Sul', '30': 'O professor se graduou no(a) Universidade Salgado de Oliveira Goiás', '31': 'O professor se graduou no(a) Universidade de Brasília', '32': 'O professor se graduou no(a) Universidade de Passo Fundo',
   '33': 'O professor fez mestrado no(a) Instituto Nacional de Pesquisas Espaciais', '34': 'O professor fez mestrado no(a) Instituto de Tecnologia de Tóquio', '35': 'O professor fez mestrado no(a) Nagoya Institute Of Technology', '36': 'O professor fez mestrado no(a) Nanjing University', '37': 'O professor fez mestrado no(a) Pontifícia Universidade Católica do Rio Grande do Sul', '38': 'O professor fez mestrado no(a) Pontifícia Universidade Católica do Rio de Janeiro', '39': 'O professor fez mestrado no(a) Shizuoka University', '40': 'O professor fez mestrado no(a) Universidade Estadual Paulista', '41': 'O professor fez mestrado no(a) Universidade Estadual de Campinas', '42': 'O professor fez mestrado no(a) Universidade Federal da Paraíba', '43': 'O professor fez mestrado no(a) Universidade Federal de Campina Grande', '44': 'O professor fez mestrado no(a) Universidade Federal de Pernambuco', '45': 'O professor fez mestrado no(a) Universidade Federal de Santa Catarina', '46': 'O professor fez mestrado no(a) Universidade Federal de Uberlândia', '47': 'O professor fez mestrado no(a) Universidade Federal do Rio Grande do Sul', '48': 'O professor fez mestrado no(a) Universidade de Brasília', '49': 'O professor fez mestrado no(a) Universidade de São Paulo', '50': 'O professor fez mestrado no(a) University of London', '51': 'O professor fez mestrado no(a) University of Maryland at College Park', '52': 'O professor fez doutorado no(a) Faculdade de Engenharia da Universidade do Porto', '53': 'O professor fez doutorado no(a) Heriot-Watt University', '54': 'O professor fez doutorado no(a) Institut National Polytechnique Grenoble', '55': 'O professor fez doutorado no(a) Institut National Polytechnique de Grenoble', '56': 'O professor fez doutorado no(a) Instituto Tecnológico da Aeronáutica', '57': 'O professor fez doutorado no(a) Instituto de Tecnologia de Tóquio', '58': 'O professor fez doutorado no(a) Nagoya Institute Of Technology', '59': 'O professor fez doutorado no(a) Nagoya Institute of Technology', '60': 'O professor fez doutorado no(a) Pontifícia Universidade Católica do Rio Grande do Sul', '61': 'O professor fez doutorado no(a) Pontifícia Universidade Católica do Rio de Janeiro', '62': 'O professor fez doutorado no(a) Shizuoka University', '63': 'O professor fez doutorado no(a) Universidade Federal de Pernambuco', '64': 'O professor fez doutorado no(a) Universidade Federal de Santa Catarina',
   '65': 'O professor fez doutorado no(a) Universidade Federal do Rio Grande do Sul', '66': 'O professor fez doutorado no(a) Universidade Federal do Rio de Janeiro', '67': 'O professor fez doutorado no(a) Universidade de Brasília', '68': 'O professor fez doutorado no(a) Universidade de Lisboa e Universidade Federal do Rio Grande do Sul', '69': 'O professor fez doutorado no(a) Universidade de São Paulo', '70': 'O professor fez doutorado no(a) Universitat Politecnica de Catalunya', '71': 'O professor fez doutorado no(a) University of Edinburgh', '72': 'O professor fez doutorado no(a) University of Texas at Arlington', '73': 'O professor fez doutorado no(a) Université Catholique de Louvain', '74': 'O professor fez doutorado no(a) Université Montpellier II', '75': 'O professor fez doutorado no(a) Université de Montpellier', '76': 'genero Homem', '77': 'genero Mulher', '78': 'O professor ministra a disciplina ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES', '79': 'O professor ministra a disciplina AUTÔMATOS E COMPUTABILIDADE', '80': 'O professor ministra a disciplina CIRCUITOS LÓGICOS', '81': 'O professor ministra a disciplina COMPILADORES', '82': 'O professor ministra a disciplina COMPUTAÇÃO EXPERIMENTAL', '83': 'O professor ministra a disciplina ENGENHARIA DE SOFTWARE', '84': 'O professor ministra a disciplina ESTRUTURAS DE DADOS', '85': 'O professor ministra a disciplina FORMAÇÃO DOCENTE EM COMPUTAÇÃO', '86': 'O professor ministra a disciplina FUNDAMENTOS DE SISTEMAS INTELIGENTES', '87': 'O professor ministra a disciplina FUNDAMENTOS DE SISTEMAS OPERACIONAIS', '88': 'O professor ministra a disciplina FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO', '89': 'O professor ministra a disciplina INFORMATICA APLICADA A EDUCACAO', '90': 'O professor ministra a disciplina INFORMATICA E SOCIEDADE', '91': 'O professor ministra a disciplina INTRODUCAO A INTELIGENCIA ARTIFICIAL', '92': 'O professor ministra a disciplina INTRODUCAO AO PROCESSAMENTO DE IMAGENS', '93': 'O professor ministra a disciplina INTRODUÇÃO A SISTEMAS OPERACIONAIS', '94': 'O professor ministra a disciplina INTRODUÇÃO AO AMBIENTE UNIVERSITÁRIO NA COMPUTAÇÃO', '95': 'O professor ministra a disciplina INTRODUÇÃO AO DESENVOLVIMENTO DE JOGOS', '96': 'O professor ministra a disciplina INTRODUÇÃO AOS SISTEMAS COMPUTACIONAIS', '97': 'O professor ministra a disciplina INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO', '98': 'O professor ministra a disciplina LABORATÓRIO DE CIRCUITOS LÓGICOS', '99': 'O professor ministra a disciplina LINGUAGENS DE PROGRAMACAO',
    '100': 'O professor ministra a disciplina LÓGICA COMPUTACIONAL 1', '101': 'O professor ministra a disciplina METODOLOGIA CIENTÍFICA', '102': 'O professor ministra a disciplina MÉTODOS DE PESQUISA NA LICENCIATURA EM COMPUTAÇÃO', '103': 'O professor ministra a disciplina MÉTODOS DE PROGRAMAÇÃO', '104': 'O professor ministra a disciplina ORGANIZAÇÃO E ARQUITETURA DE COMPUTADORES', '105': 'O professor ministra a disciplina PROGRAMAÇÃO COMPETITIVA', '106': 'O professor ministra a disciplina PROGRAMAÇÃO CONCORRENTE', '107': 'O professor ministra a disciplina PROJETO E ANÁLISE DE ALGORITMOS', '108': 'O professor ministra a disciplina PROJETO INTERDISCIPLINAR DE LICENCIATURA EM COMPUTAÇÃO', '109': 'O professor ministra a disciplina PRÁTICA EXTENSIONISTA EM COMPUTAÇÃO A', '110': 'O professor ministra a disciplina REDES DE COMPUTADORES', '111': 'O professor ministra a disciplina SEGURANÇA COMPUTACIONAL', '112': 'O professor ministra a disciplina SISTEMAS DE TEMPO REAL', '113': 'O professor ministra a disciplina SISTEMAS DIGITAIS INTEGRADOS', '114': 'O professor ministra a disciplina SISTEMAS OPERACIONAIS', '115': 'O professor ministra a disciplina SOFTWARE BASICO', '116': 'O professor ministra a disciplina SUPERVISÃO DE ESTÁGIO EM LICENCIATURA EM COMPUTAÇÃO 1', '117': 'O professor ministra a disciplina SUPERVISÃO DE PRODUÇÃO DE MATERIAL DIDÁTICO', '118': 'O professor ministra a disciplina SUPERVISÃO DE PRÁTICA PEDAGÓGICA EM COMPUTAÇÃO 1', '119': 'O professor ministra a disciplina SUPERVISÃO DE PRÁTICA PEDAGÓGICA EM COMPUTAÇÃO 2', '120': 'O professor ministra a disciplina SUPRVISÃO DE ESTÁGIO  EM LICENCIATURA EM COMPUTAÇÃO 2', '121': 'O professor ministra a disciplina SUPRVISÃO DE ESTÁGIO  EM LICENCIATURA EM COMPUTAÇÃO 3', '122': 'O professor ministra a disciplina TECNICAS DE PROGRAMAÇÃO 1', '123': 'O professor ministra a disciplina TECNICAS DE PROGRAMAÇÃO 2', '124': 'O professor ministra a disciplina TELEINFORMÁTICA E REDES 1', '125': 'O professor ministra a disciplina TEORIA DA COMPUTACAO', '126': 'O professor ministra a disciplina TEORIA E APLICAÇÃO DE GRAFOS', '127': 'O professor ministra a disciplina TOPICOS AVANCADOS EM COMPUTADORES', '128': 'O professor ministra a disciplina TÓPICOS ESPECIAIS EM PROGRAMAÇÃO COMPETITIVA'}
  
    const [i, setI] = useState(0)

  const [mostraBotoes, setMostraBotoes] = useState(true)

  const [pergunta, setPergunta] = useState('O professor possui interesse em Biologia Computacional')

  const percorreArvoreSim= () => {
    let atributo = tree[i].split(" ")[0]
    for (let j = i + 1; j < tree.length; j++) {
      if (tree[j].includes(atributo)) {
        setI(j + 1)
      }
    }
  }

  const percorreArvoreNao = () => {
    setI(i + 1)
  }

  useEffect(() => {
    let no = tree[i]
    if (no.includes("class")) {
      setMostraBotoes(false)
    } else{
      setPergunta(atributos[tree[i].split(" ")[0]] + "?")
    }
  }, [i]);

  useEffect(() => {
    if(!mostraBotoes){
      setPergunta(tree[i].replace("class: ",""))
    }
  }, [mostraBotoes])

  const [comecarJogo, setComecarJogo] = useState(true)

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Projeto de PAA que consiste em uma réplica do jogo Akinator"
        />
        <title>CIC Guesser</title>
      </Head>
      <div class="container">
        <div class="col-md-6 mx-auto mt-5">
          <div class="card p-3 shadow-sm">
            <div class="card-body">
              <h2 class="card-title">Adivinhe o professor do CIC</h2>
              {comecarJogo ? 
                <form>
                  <div class="row">
                    <p class="fs-4 text-center">Responda às perguntas a seguir para adivinhar o professor do CIC</p>
                  </div>
                  <div class="row">
                    <button onClick={() => setComecarJogo(false)} type="button" class="btn btn-dark btn-lg btn-block">
                      Começar a jogar
                    </button>
                  </div>
                </form>
                : 
                <form>
                  <div class="row">
                    <p class="fs-4 text-center">{pergunta}</p>
                  </div>
                  <div class="row">
                    <div class="d-grid gap-2">
                    {mostraBotoes && <button onClick={percorreArvoreSim} type="button" class="btn btn-dark btn-lg btn-block">
                            Sim
                        </button>}
                    {mostraBotoes && <button onClick={percorreArvoreNao} type="button" class="btn btn-dark btn-lg btn-block">
                        Não
                    </button>}
                    {!mostraBotoes && <button onClick={() => window.location.reload(true)} type="button" class="btn btn-dark btn-lg btn-block">
                        Jogar novamente
                    </button>}
                    </div>
                  </div>
                </form>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
