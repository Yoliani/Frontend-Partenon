# frozen_string_literal: true

class TemasController < ApplicationController
  def index
    temas = Tema.all
    render json: temas
  end

  def show
    render json: tema
  end

  def create
    tema = Tema.new(tema_params)
    tema.save if tema.valid?
    render json: tema
  end

  def destroy
    Tema.find(params[:id]).destroy
    head :no_content
  end

  def update
    render json: tema if tema.update(tema_params)
  end

  private

  def tema
    @tema ||= Tema.find(params[:id])
  end

  def tema_params
    params.require(:tema).permit(:nombre, :descripcion)
  end
end
