import { IsNotEmpty, MaxLength } from "class-validator"
import { Produto } from "src/produto/entities/Produto.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: "tb_categorias"})
export class Categoria{

@PrimaryGeneratedColumn()
id: number

@IsNotEmpty()
@MaxLength(150)
@Column({length: 150, nullable:false})
plataforma: string


@OneToMany(() => Produto, (Produto) => Produto.id)
produto: Produto[]

}