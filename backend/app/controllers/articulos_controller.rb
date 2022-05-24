# frozen_string_literal: true

class ArticulosController < ApplicationController
  def index
    articulos = Articulo.all
    render json: articulos
  end

  def show
    render json: articulo
  end

  def create
    articulo = Articulo.new(articulo_params)
    if articulo.valid?
      articulo.save
      render json: articulo
    end
  end

  def destroy
    Articulo.find(params[:id]).destroy
    head :no_content
  end

  def update
    render json: articulo if articulo.update(articulo_params)
  end

  private

  def articulo
    @articulo ||= Articulo.find(params[:id])
  end

  def articulo_params
    params.require(:articulo).permit(:titulo, :resumen, :cuerpo, :temas_id)
  end
end
