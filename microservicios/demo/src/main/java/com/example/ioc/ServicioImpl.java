package com.example.ioc;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

@Service
//@Qualifier("uno")
@Profile("default")
public class ServicioImpl implements Servicio {

	private Formato frm;
	
//	public ServicioImpl(Formato frm) {
//		this.frm = frm;
//	}
//	
	@Override
	public String saluda() {
		return frm.formatea("Soy una taza");
	}

}
