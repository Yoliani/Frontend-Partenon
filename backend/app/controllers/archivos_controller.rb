# frozen_string_literal: true

class ArchivosController < ApplicationController
  def index
    archivos = Archivo.all
    render json: archivos
  end

  def show
    render json: archivo
  end

  def create
    archivo = Archivo.new(archivo_params)
    if archivo.valid?
      archivo.save
      render json: archivo
    end
  end

  def destroy
    Archivo.find(params[:id]).destroy
    head :no_content
  end

  def update
    render json: archivo if archivo.update(articulo_params)
  end

  private

  def archivo
    @archivo ||= Archivo.find(params[:id])
  end

  def archivo_params
    params.require(:archivo).permit(:url, :tipo_archivo, :articulos_id)
  end
end
