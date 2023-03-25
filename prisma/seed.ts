import prisma from "../src/db.js";


async function main() {
    await prisma.disciplinaMatricula.deleteMany();
    await prisma.disciplina.deleteMany();
    await prisma.cursoDisciplina.deleteMany();
    await prisma.curso.deleteMany();
    await prisma.faculdade.deleteMany();
    await prisma.aluno.deleteMany();
    await prisma.professor.deleteMany();
    // Criar uma faculdade
    // Criar uma faculdade e salvar seu ID
    async function criarFaculdade(nomeFaculdade, cnpjFaculdade) {
        const faculdade = await prisma.faculdade.create({
            data: {
                nome: nomeFaculdade,
                cnpj: cnpjFaculdade
            }
        });
        return faculdade.id;
    }

    // Criar um curso usando o ID da faculdade e salvar o ID do curso
    async function criarCurso(nomeCurso, faculdadeId) {
        const curso = await prisma.curso.create({
            data: {
                nome: nomeCurso,
                faculdadeId: faculdadeId
            }
        });
        return curso.id;
    }

    // Criar dois professores e salvar seus IDs em um array
    async function criarProfessores() {
        const professor1 = await prisma.professor.create({
            data: {
                nome: 'Professor 1',
                formacao: 'Formação 1'
            }
        });

        const professor2 = await prisma.professor.create({
            data: {
                nome: 'Professor 2',
                formacao: 'Formação 2'
            }
        });

        return [professor1.id, professor2.id];
    }

    // Criar duas disciplinas e salvar seus IDs em um array
    async function criarDisciplinas(professoresIds) {
        const disciplina1 = await prisma.disciplina.create({
            data: {
                nome: 'Disciplina 1',
                professorId: professoresIds[0]
            }
        });

        const disciplina2 = await prisma.disciplina.create({
            data: {
                nome: 'Disciplina 2',
                professorId: professoresIds[1]
            }
        });

        return [disciplina1.id, disciplina2.id];
    }

    // Vincular as disciplinas ao curso usando seus IDs e salvar os IDs das relações
    async function vincularDisciplinasCurso(disciplinasIds, cursoId) {
        const cursoDisciplina1 = await prisma.cursoDisciplina.create({
            data: {
                cursoId: cursoId,
                disciplinaId: disciplinasIds[0]
            }
        });

        const cursoDisciplina2 = await prisma.cursoDisciplina.create({
            data: {
                cursoId: cursoId,
                disciplinaId: disciplinasIds[1]
            }
        });
       
        return [cursoDisciplina1.id, cursoDisciplina2.id];
    }

    // Criar três alunos e salvar seus IDs em um array
    async function criarAlunos() {
        const aluno1 = await prisma.aluno.create({
            data: {
                nome: 'Aluno 1',
                cpf: '93647192839'
            }
        });

        const aluno2 = await prisma.aluno.create({
            data: {
                nome: 'Aluno 2',
                cpf: '026371526389'
            }
        });

        const aluno3 = await prisma.aluno.create({
            data: {
                nome: 'Aluno 3',
                cpf: '19258374773'
            }
        });

        return [aluno1.id, aluno2.id, aluno3.id];
    }

    // Vincular os alunos às disciplinas usando os IDs da tabela cursoDisciplina e aluno, conforme o enunciado
    async function vincularAlunosDisciplina(cursoDisciplinasIds, alunosIds) {
        await prisma.disciplinaMatricula.create({
            data: {
                cursoDisciplinaId: cursoDisciplinasIds[0],
                alunoId: alunosIds[0],
            },
        });

        await prisma.disciplinaMatricula.create({
            data: {
                cursoDisciplinaId:  cursoDisciplinasIds[0],
                alunoId: alunosIds[1],
            },
        });

        await prisma.disciplinaMatricula.create({
            data: {
                cursoDisciplinaId:  cursoDisciplinasIds[1],
                alunoId: alunosIds[2],
            },
        });
    }

    const faculdadeId = await criarFaculdade("Universidade ABC", "99.111.222/333-44");
    const cursoId = await criarCurso("Ciência da Computação", faculdadeId);
    const professoresIds = await criarProfessores();
    const disciplinasIds = await criarDisciplinas(professoresIds);
    const cursoDisciplinasIds = await vincularDisciplinasCurso(disciplinasIds, cursoId);
    const alunosIds = await criarAlunos();
    await vincularAlunosDisciplina(cursoDisciplinasIds, alunosIds);
}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });