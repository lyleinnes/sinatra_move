
require 'sinatra'

if ENV['RACK_ENV'] != 'production'
  require 'sinatra/reloader'
end

get '/' do
  erb :lunch
end

get '/sixpm' do
  erb :sixpm
end

get '/special-event' do
  erb :comedyfest
end

get '/mockup' do
  erb :mockup
end
