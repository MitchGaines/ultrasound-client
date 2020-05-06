% load("Fist_and_Relax01_Ultrasound.mat");
unpack = cell2mat(ImgData);
images = squeeze(unpack);

for x = 1:1:1400
    image = images(:,:,x);
    DisplayUltrasoundImage(x, ImgData);
    
    endpoint = "http://localhost:5000/api/supplyImage";
    options = weboptions('MediaType', 'application/json', 'Timeout', 10);
    data = struct('image', image);
    res = erase(webwrite(endpoint, data, options), "JSON Message: ");
    
    pause(0.1);
end
