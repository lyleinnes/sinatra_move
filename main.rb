     
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :lunch
end

get '/quiet' do
  erb :quiet
end

get '/peak' do
  erb :peak
end

get '/mockup' do
  erb :mockup
end



