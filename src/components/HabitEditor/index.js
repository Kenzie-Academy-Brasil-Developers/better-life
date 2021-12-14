import Form from "../Form";
import Input from "../Input";
import Card from "../Card";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "../Select";
import { Container } from "./style";
import Button from "../Button";
import { useState } from "react";
import { useMyHabits } from "../../providers/myHabits";

export const HabitEditor = ({ closeFunction, identity }) => {
  const Difficulty = ["Fácil", "Médio", "Díficil"];
  const Category = ["Saude", "Leitura"];
  const Frequency = ["Diário", "Semanal", "Mensal", "Anual"];
  const [how_much_achieved, setHow_much_achieved] = useState(0);

  const Schema = yup.object().shape({
    title: yup.string().required("name is required"),
    difficulty: yup.string().required("name is required"),
    category: yup.string().required("name is required"),
    frequency: yup.string().required("name is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const { editHabit } = useMyHabits();

  const Sender = (data) => {
    const complete = { ...data, how_much_achieved };
    editHabit(complete);
    console.log(complete);
  };

  const disminuye = () => {
    how_much_achieved > 0 && setHow_much_achieved(how_much_achieved - 1);
  };

  const aumenta = () => {
    setHow_much_achieved(how_much_achieved + 1);
  };

  return (
    <Card
      titulo="Editar Habito"
      action="Salvar"
      closeFunction={closeFunction}
      identity={identity}
    >
      <Container>
        <Form
          id={identity}
          className="card-form"
          onSubmit={handleSubmit(Sender)}
        >
          <Input
            label="Titulo"
            nome="title"
            register={register}
            error={errors.title?.message}
          />
          <Select
            label="Dificuldade"
            nome="difficulty"
            register={register}
            error={errors.difficulty?.message}
            options={Difficulty}
          />
          <Select
            label="Categoria"
            nome="category"
            register={register}
            error={errors.category?.message}
            options={Category}
          />
          <Select
            label="Frequência"
            nome="frequency"
            register={register}
            error={errors.frequency?.message}
            options={Frequency}
          />
          <p>Progresso</p>
          <div className="quantificador">
            <Button className="btnMinus" onClick={() => disminuye()}>
              -
            </Button>
            <p>{how_much_achieved}</p>
            <Button className="btnPlus" onClick={() => aumenta()}>
              +
            </Button>
          </div>
        </Form>
      </Container>
    </Card>
  );
};
