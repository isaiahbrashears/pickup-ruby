class CalculatorController < ApplicationController
  include CalculatorHelper

  def index
    @mhaBahWoJson = mha_bah_hash('app/assets/textfiles/bahwo20.txt').to_json
    @mhaBahWJson = mha_bah_hash('app/assets/textfiles/bahw20.txt').to_json
    @zipcodeMhaJson = zip_mha_hash("app/assets/textfiles/sorted_zipmha20.txt").to_json
    @railsProps = {mhaBahWoJson: @mhaBahWoJson, mhaBahWJson: @mhaBahWJson, zipcodeMha: @zipcodeMhaJson}
  end

  def bah

    if bah_array_without_dependents == nil || bah_array_with_dependents == nil
      redirect_to action: 'index'
    else
      @bahWithoutDependents = bah_without_dependents
      @bahWithDependents = bah_with_dependents
    end

  end

  private

  def bah_array_without_dependents
    find_bah_by_zip(
      "app/assets/textfiles/bahwo20.txt",
      "app/assets/textfiles/sorted_zipmha20.txt",
       params[:zipcode]
    )
  end

  def bah_array_with_dependents
    find_bah_by_zip(
      "app/assets/textfiles/bahw20.txt",
      "app/assets/textfiles/sorted_zipmha20.txt",
       params[:zipcode]
    )
  end

  def bah_without_dependents
    calculate_bah(
      bah_array_without_dependents,
      params[:rank].to_i
    )
  end

  def bah_with_dependents
    calculate_bah(
      bah_array_with_dependents,
      params[:rank].to_i
    )
  end
end
