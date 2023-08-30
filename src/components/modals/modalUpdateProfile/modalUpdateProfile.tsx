import { useContext, useState } from "react";
import { StyledModalUpdateProfile } from "./style";
import { UserContext } from "../../../providers/userContext/userContext";
import { useForm } from "react-hook-form";
import { TUserUpdateRequest } from "../../../providers/userContext/@Types";
import { userSchemaUpdate } from "../../../schemas/users.schemas";
import { zodResolver } from "@hookform/resolvers/zod";

export function ModalUpdateProfile() {
  const { setUpdateProfile, profile, updateUser, setDeleteProfile } =
    useContext(UserContext);

  const [showPassword, setShowPassword] = useState(false);

  const [newCurrentImageURL, setNewCurrentImageURL] = useState<
    string | null | undefined
  >(null);

  const [newCurrentImage, setNewCurrentImage] = useState<
    File | null | undefined
  >(null);

  const [changeProfileImageClick, setChangeProfileImageClick] = useState(false);

  const [deleteProfileImageClick, setdeleteProfileImageClick] = useState(false);

  const [advertiser, setAdvertiser] = useState(profile?.is_advertiser!);

  const [currentProfileimage, setCurrentProfileimage] = useState<
    string | null | undefined
  >(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserUpdateRequest>({
    mode: "onBlur",
    defaultValues: {
      name: profile?.name,
      email: profile?.email,
      cpf: profile?.cpf,
      phone: profile?.phone,
      birth_date: profile?.birth_date,
      description: profile?.description,
      avatar: profile?.avatar,
    },
    resolver: zodResolver(userSchemaUpdate),
  });

  const onSubmitFunction = (data: TUserUpdateRequest) => {
    if (data.email === profile?.email) {
      delete data.email;
    }

    let newData = {
      ...data,
      is_advertiser: advertiser,
    };

    if (newCurrentImage && changeProfileImageClick) {
      updateUser(newData, deleteProfileImageClick, newCurrentImage);
    } else {
      updateUser(newData, deleteProfileImageClick);
    }
  };

  function handleDeleteProfile() {
    setDeleteProfile(true);
    setUpdateProfile(false);
  }

  function handleProfileImage(img: string | null | undefined) {
    if (img === currentProfileimage) {
      setCurrentProfileimage(null);
    } else {
      setCurrentProfileimage(img);
    }
  }

  function newProfileImageClick(e: React.ChangeEvent<HTMLInputElement>) {
    const image = e.target.files![0];

    const url = URL.createObjectURL(image);

    setNewCurrentImageURL(url);

    setNewCurrentImage(image);
  }

  return (
    <div className="modal">
      <StyledModalUpdateProfile
        advertiser={advertiser}
        onSubmit={handleSubmit(onSubmitFunction)}
      >
        <div>
          {" "}
          <h2>Editar Perfil</h2>
        </div>

        <span>Informações pessoais </span>

        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Ex: Samuel Leão"
            {...register("name")}
          />
          <p className="error">{errors.name?.message}</p>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Ex: samuel@kenzie.com.br"
            {...register("email")}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <button
          className="showPassword"
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          Senha
        </button>

        {showPassword ? (
          <div>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digitar Senha"
              {...register("password")}
            />
            <p className="error">{errors.password?.message}</p>
          </div>
        ) : null}

        <div>
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            placeholder="000.000.000-00"
            {...register("cpf")}
          />
          <p className="error">{errors.cpf?.message}</p>
        </div>

        <div>
          <label htmlFor="phone">Celular</label>
          <input
            type="text"
            id="phone"
            placeholder="(DDD) 90000-0000"
            {...register("phone")}
          />
          <p className="error">{errors.phone?.message}</p>
        </div>

        <div>
          <label htmlFor="birthDate">Data de Nascimento</label>
          <input
            type="text"
            id="birthDate"
            placeholder="DD/MM/YYYY"
            {...register("birth_date")}
          />
          <p className="error">{errors.birth_date?.message}</p>
        </div>

        <div>
          <label>Tipo de conta</label>

          <div className="accountType">
            <button
              className="noAdvertise"
              type="button"
              onClick={() => setAdvertiser(false)}
            >
              Comprador
            </button>
            <button
              className="advertise"
              type="button"
              onClick={() => setAdvertiser(true)}
            >
              Anunciante
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            placeholder="Digitar descrição"
            {...register("description")}
          />
          <p className="error">{errors.description?.message}</p>
        </div>

        <div className="profileImage">
          <label htmlFor="profileImage">Imagem de Perfil</label>
          <div>
            {profile?.avatar ? (
              <button
                className="delete"
                type="button"
                onClick={() => setdeleteProfileImageClick(true)}
              >
                Excluir imagem
              </button>
            ) : null}
            {deleteProfileImageClick ? (
              <input
                className="coverImage"
                type="url"
                id="profileImage"
                value={"Salve as alterações para excluir sua imagem de perfil"}
                readOnly
              />
            ) : (
              <input
                className="coverImage"
                type="url"
                id="profileImage"
                placeholder="Você ainda não possui uma imagem de perfil"
                value={profile?.avatar!}
                readOnly
                onClick={() => handleProfileImage(profile!.avatar)}
              />
            )}

            <button
              className="save"
              type="button"
              onClick={() =>
                setChangeProfileImageClick(!changeProfileImageClick)
              }
            >
              Alterar Imagem
            </button>
          </div>
        </div>

        {currentProfileimage ? (
          <div className="img">
            <img
              src={currentProfileimage!}
              alt="imagem salva que está sendo vizualizada"
            />
          </div>
        ) : null}

        {changeProfileImageClick ? (
          <>
            <div>
              <label htmlFor="newProfileImage">Nova Imagem de capa</label>
              <input
                onChange={(e) => newProfileImageClick(e)}
                type="file"
                id="newProfileImage"
                placeholder="Adicionar campo para imagem da galeria"
              />
            </div>
            {newCurrentImageURL ? (
              <div className="img">
                <img
                  src={newCurrentImageURL!}
                  alt="imagem salva que está sendo vizualizada"
                />
              </div>
            ) : null}
          </>
        ) : null}

        <div className="buttons">
          <button
            onClick={() => handleDeleteProfile()}
            className="delete"
            type="button"
          >
            Excluir Perfil
          </button>
          <button
            className="cancel"
            type="button"
            onClick={() => setUpdateProfile(false)}
          >
            Cancelar
          </button>
          <button className="save" type="submit">
            Salvar alterações
          </button>
        </div>
      </StyledModalUpdateProfile>
    </div>
  );
}
