class WelcomeController < ApplicationController


  def index
  end

  def calculator
    bahFile = "app/assets/textfiles/bahwo20.txt"
    zipMhaFile = "app/assets/textfiles/sorted_zipmha20.txt"
    zip = params[:zipcode]
    rank = rank_hash[params[:rank]]
    bahArray = find_bah_by_zip(bahFile, zipMhaFile, zip)

    @calculatedBah = calculate_bah(bahArray, rank)
    @zip = zip
  end

  private

  def calculate_bah(bahArray, rank )
    bahArray[rank]
  end

    # RETURNS ARRAY OF BAH PRICES
  def find_bah_by_zip(bahFile, zipMhaFile, zip)
    mhaBahHash = mha_bah_hash(bahFile)
    zip_mha_hash = zip_mha_hash(zipMhaFile)

    mhaBahHash[zip_mha_hash[zip]]
  end

  # SEPARATES EACH LINE INTO A KEY OF THE MHA CODE, AND A VALUE OF AN ARRAY OF BAH PRICES
  def mha_bah_hash(filename)
    mhaBahHash = {}
    File.open(filename, "r") do |file_handle|
      file_handle.each_line do |line|
        bahArray = []
        lineAsArray = line.split(',')
        key = lineAsArray[0]
        lineAsArray.shift
        value = lineAsArray

        mhaBahHash[key] = value
      end
    end
    mhaBahHash
  end

  # SEPARATES EACH LINE INTO A KEY OF THE ZIP CODE, AND A VALUE OF THE MHA CODE
  def zip_mha_hash(filename)
    zipMhaHash = {}
    File.open(filename) do |file_handle|
      file_handle.each do |line|
        key, value = line.chomp.split(" ")
        zipMhaHash[key] = value
      end
    end
    zipMhaHash
  end

  def rank_hash
    {
      'E-1'   => 0,
      'E-2'   => 1,
      'E-3'   => 2,
      'E-4'   => 3,
      'E-5'   => 4,
      'E-6'   => 5,
      'E-7'   => 6,
      'E-8'   => 7,
      'E-9'   => 8,
      'W-1'   => 9,
      'W-2'   => 10,
      'W-3'   => 11,
      'W-4'   => 12,
      'W-5'   => 13,
      'O1E'   => 14,
      'O2E'   => 15,
      'O3E'   => 16,
      'O-1'   => 17,
      'O-2'   => 18,
      'O-3'   => 19,
      'O-4'   => 20,
      'O-5'   => 21,
      'O-6'   => 22,
      'O-7+'  => 23
    }
  end

end
